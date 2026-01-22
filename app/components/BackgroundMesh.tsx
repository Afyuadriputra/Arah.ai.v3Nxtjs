export function BackgroundMesh() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="mesh-layer mesh-layer-a" />
      <div className="mesh-layer mesh-layer-b" />
      <div className="mesh-vignette" />
    </div>
  );
}
