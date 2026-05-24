"use client";

import { cloneElement, useState } from "react";
import type { MouseEventHandler, ReactElement } from "react";

type HomePageClientProps = {
  children: ReactElement<{
    onOpenLightbox?: MouseEventHandler<HTMLButtonElement>;
  }>;
};

export default function HomePageClient({ children }: HomePageClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      {cloneElement(children, {
        onOpenLightbox: () => setLightboxOpen(true),
      })}

      <div
        className={`fixed inset-0 z-50 grid place-items-center p-6 transition-all duration-200 ${
          lightboxOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        aria-hidden={!lightboxOpen}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
          aria-label="Close datacenter image"
        />
        <div
          className={`relative z-10 inline-flex max-w-[min(94vw,1120px)] justify-center transition duration-200 ${
            lightboxOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-3 scale-[0.985] opacity-0"
          }`}
        >
          <img
            className="pointer-events-auto block max-h-[88vh] max-w-full rounded-[22px] object-contain shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
            src="/fartcore_datacenter_1.webp"
            alt="Fartcore datacenter"
          />
        </div>
      </div>
    </>
  );
}
