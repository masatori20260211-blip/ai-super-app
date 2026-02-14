"use client";

import { useState, useEffect } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  useEffect(() => {
    // Don't show if already installed as PWA
    if (window.matchMedia("(display-mode: standalone)").matches) return;
    // Don't show if running in Capacitor
    if ((window as unknown as Record<string, unknown>).Capacitor) return;
    // Don't show if dismissed recently
    const dismissed = localStorage.getItem("pwa-install-dismissed");
    if (dismissed && Date.now() - Number(dismissed) < 7 * 24 * 60 * 60 * 1000)
      return;

    // iOS detection
    const ua = navigator.userAgent;
    const isiOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    setIsIOS(isiOS);

    if (isiOS) {
      // On iOS, show guide after 3 seconds
      const timer = setTimeout(() => setShowBanner(true), 3000);
      return () => clearTimeout(timer);
    }

    // Android / Desktop: listen for beforeinstallprompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setTimeout(() => setShowBanner(true), 2000);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  async function handleInstall() {
    if (isIOS) {
      setShowIOSGuide(true);
      return;
    }
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShowBanner(false);
    }
    setDeferredPrompt(null);
  }

  function dismiss() {
    setShowBanner(false);
    setShowIOSGuide(false);
    localStorage.setItem("pwa-install-dismissed", String(Date.now()));
  }

  if (!showBanner) return null;

  // iOS share sheet guide
  if (showIOSGuide) {
    return (
      <div className="fixed inset-0 z-50 bg-black/50 flex items-end justify-center p-4">
        <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl animate-slide-up">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            ホーム画面に追加
          </h3>
          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xs">
                1
              </span>
              <p>
                画面下部の
                <span className="inline-block mx-1">
                  <svg
                    className="w-5 h-5 inline text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                </span>
                共有ボタンをタップ
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xs">
                2
              </span>
              <p>
                「<strong>ホーム画面に追加</strong>」を選択
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xs">
                3
              </span>
              <p>右上の「追加」をタップで完了!</p>
            </div>
          </div>
          <button
            onClick={dismiss}
            className="mt-5 w-full py-2.5 bg-gray-100 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            閉じる
          </button>
        </div>
      </div>
    );
  }

  // Install banner
  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 max-w-lg mx-auto animate-slide-up">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
          <span className="text-2xl">🤖</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-gray-900">
            アプリをインストール
          </p>
          <p className="text-xs text-gray-500 truncate">
            ホーム画面からすぐアクセス
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={dismiss}
            className="px-3 py-1.5 text-xs text-gray-400 hover:text-gray-600"
          >
            後で
          </button>
          <button
            onClick={handleInstall}
            className="px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity"
          >
            追加
          </button>
        </div>
      </div>
    </div>
  );
}
