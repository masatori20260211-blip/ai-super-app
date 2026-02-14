/** Detect the current runtime platform */
export type Platform = "web" | "ios" | "android";

export function getPlatform(): Platform {
  if (typeof window === "undefined") return "web";

  const w = window as unknown as Record<string, unknown>;
  const cap = w.Capacitor as Record<string, unknown> | undefined;
  if (cap?.isNativePlatform) {
    const platform = cap.getPlatform as (() => string) | undefined;
    if (platform) {
      const p = platform();
      if (p === "ios") return "ios";
      if (p === "android") return "android";
    }
  }
  return "web";
}

/** Returns true when running inside a native Capacitor shell */
export function isNativeApp(): boolean {
  return getPlatform() !== "web";
}
