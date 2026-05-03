"use client";

import React, { useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
  life: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

/**
 * NeuralBackground - Refactored to match exact flow-field trailing logic.
 * Integrated as the primary global system intelligence layer for SYSTEM.LOG.
 */
export const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // --- CONFIGURATION (SYSTEM.LOG THEME) ---
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };

    const PARTICLE_COUNT = Math.min(1000, window.innerWidth < 768 ? 500 : 1000);
    const TRAIL_OPACITY = 0.12; 
    const COLOR = '#00f3ff';
    const SPEED = 0.85;

    class SystemParticle implements Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      age: number;
      life: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.age = 0;
        this.life = Math.random() * 150 + 100;
      }

      update() {
        // 1. Flow Field Math (Deterministic routing as requested)
        const angle = (Math.cos(this.x * 0.005) + Math.sin(this.y * 0.005)) * Math.PI;
        
        // 2. Add force from flow field
        this.vx += Math.cos(angle) * 0.2 * SPEED;
        this.vy += Math.sin(angle) * 0.2 * SPEED;

        // 3. Mouse Intelligence Protocol
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          // Strong repulsion zone
          const force = (100 - distance) / 100;
          this.vx -= dx * force * 0.15;
          this.vy -= dy * force * 0.15;
        } else if (distance < 250) {
          // Subtle attraction zone (Enterprise signal routing)
          const force = (250 - distance) / 150;
          this.vx += dx * force * 0.025;
          this.vy += dy * force * 0.025;
        }

        // 4. Apply Velocity & Friction
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.94; // System friction
        this.vy *= 0.94;

        // 5. Lifecycle Management
        this.age++;
        if (this.age > this.life) {
          this.reset();
        }

        // 6. Perimeter Wrap
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.age = 0;
        this.life = Math.random() * 150 + 100;
      }

      draw(context: CanvasRenderingContext2D) {
        // Adaptive opacity based on lifecycle stage
        const alpha = 1 - Math.abs((this.age / this.life) - 0.5) * 2;
        context.fillStyle = COLOR;
        context.globalAlpha = alpha * 0.6; // Scale down for subtlety
        context.fillRect(this.x, this.y, 1.2, 1.2);
      }
    }

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new SystemParticle());
      }
    };

    const animate = () => {
      // Trail Persistence Layer
      ctx.globalAlpha = 1.0;
      ctx.fillStyle = `rgba(5, 5, 5, ${TRAIL_OPACITY})`; 
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[5] pointer-events-none select-none bg-[#050505]"
    />
  );
};
