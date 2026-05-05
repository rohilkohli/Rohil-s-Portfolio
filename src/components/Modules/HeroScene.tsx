import { lazy, Suspense, useEffect, useRef, useState } from 'react';

const HeroScene3DCanvas = lazy(async () => {
  const module = await import('./HeroScene3DCanvas');
  return { default: module.HeroScene3DCanvas };
});

export function HeroScene() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [isCanvasReady, setIsCanvasReady] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsInView(true);
        observer.disconnect();
      },
      { rootMargin: '200px 0px', threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[70vh] w-full overflow-hidden">
      <img
        src="/images/hero-placeholder.avif"
        alt="Hero preview"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          isCanvasReady ? 'opacity-0' : 'opacity-100'
        }`}
        loading="eager"
        decoding="async"
      />

      {isInView ? (
        <Suspense fallback={null}>
          <div
            className={`absolute inset-0 transition-opacity duration-700 ${
              isCanvasReady ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <HeroScene3DCanvas onReady={() => setIsCanvasReady(true)} />
          </div>
        </Suspense>
      ) : null}
    </section>
  );
}
