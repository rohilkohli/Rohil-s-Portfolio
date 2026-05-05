export function CanvasLoader() {
  return (
    <div className="relative flex h-full min-h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/70">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_60%)]" />

      <div className="relative flex items-center justify-center">
        <div className="h-24 w-24 animate-[spin_6s_linear_infinite] rounded-xl border border-cyan-300/40 shadow-[0_0_35px_rgba(34,211,238,0.25)]" />
        <div className="absolute h-16 w-16 animate-[spin_4s_linear_infinite_reverse] rounded-lg border border-fuchsia-300/40 shadow-[0_0_25px_rgba(232,121,249,0.25)]" />
        <div className="absolute h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]" />
      </div>

      <p className="absolute bottom-6 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-200/80">
        Initializing 3D Runtime
      </p>
    </div>
  );
}
