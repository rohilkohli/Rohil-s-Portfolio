import { useState } from 'react';
import Spline from '@splinetool/react-spline';

type HeroScene3DCanvasProps = {
  onReady?: () => void;
};

export function HeroScene3DCanvas({ onReady }: HeroScene3DCanvasProps) {
  const [hasSignaledReady, setHasSignaledReady] = useState(false);

  const handleLoad = () => {
    if (hasSignaledReady) return;
    setHasSignaledReady(true);
    onReady?.();
  };

  return (
    <Spline
      scene="https://prod.spline.design/REPLACE_WITH_YOUR_SCENE/scene.splinecode"
      onLoad={handleLoad}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
