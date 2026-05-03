"use client";

import { motion } from "motion/react";
import React from "react";

function FloatingPaths({ position, color = "rgba(0, 243, 255, 0.05)" }: { position: number, color?: string }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.1 + i * 0.02,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Infrastructure Signal Routing</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke={color}
                        strokeWidth={path.width}
                        strokeOpacity={0.05 + path.id * 0.01}
                        initial={{ pathLength: 0.2, opacity: 0.1 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.05, 0.15, 0.05],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 25 + Math.random() * 15,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

/**
 * SystemPaths - Ambient infrastructure layer representing data routing.
 * Integrated as a subtle background element for the SYSTEM.LOG OS shell.
 */
export function SystemPaths() {
    return (
        <div className="fixed inset-0 z-[6] pointer-events-none overflow-hidden select-none">
            <div className="absolute inset-0 opacity-40">
                <FloatingPaths position={1} color="rgba(0, 243, 255, 0.15)" />
                <FloatingPaths position={-1} color="rgba(188, 19, 254, 0.1)" />
            </div>
            
            {/* Additional depth layers */}
            <div className="absolute inset-0 opacity-20 blur-[2px]">
              <FloatingPaths position={1.5} color="rgba(5, 217, 232, 0.1)" />
            </div>
        </div>
    );
}
