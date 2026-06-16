"use client";

import { ArrowUpRight, Coffee, Github, Leaf, Twitch } from "lucide-react";
import { useState } from "react";
import type { ServiceGroup } from "../lib/services";

const rules = [
  {
    title: "Compliance with United States laws",
    text: "As this is where gpu.garden lives. You may not create, upload, share, request, or consume content through gpu.garden that violates United States law or other applicable law.",
  },
  {
    title: "Shared resource abuse and circumvention",
    text: "gpu.garden is a shared community resource. Do not abuse the share server, monopolize system resources, or attempt to bypass technical or artificial limitations.",
  },
  {
    title: "Harassment and hateful conduct",
    text: "Hate speech, harassment, threats, targeted abuse, or other unlawful or harmful conduct are not permitted anywhere on or outside the service.",
  },
];

const hardware = [
  { name: "1x RTX 8000", role: "LLMs", count: 1 },
  { name: "1x RTX 3090 Ti", role: "Image generation", count: 1 },
  { name: "1x RTX 4070 Ti Super", role: "Image generation", count: 1 },
  { name: "4x RTX A4000", role: "Training", count: 4 },
];
const gpuCount = hardware.reduce((total, item) => total + item.count, 0);

// Crisp, translucent "console" surface so the particle field reads behind it.
const glassCard =
  "rounded-[20px] border border-white/[0.09] bg-[rgba(17,17,20,0.58)] shadow-[0_1px_0_rgba(255,255,255,0.05)_inset,0_18px_50px_rgba(0,0,0,0.45)] [backdrop-filter:blur(18px)_saturate(1.05)] [-webkit-backdrop-filter:blur(18px)_saturate(1.05)]";

const tagClass =
  "inline-block rounded-[7px] border border-[var(--border-subtle)] px-[9px] py-[3px] font-mono text-[11px] tracking-[0.05em] text-[var(--text-muted)]";

const categoryLabels: Record<string, string> = {
  ai: "AI",
  services: "Services",
  tools: "Tools",
  other: "Other",
};

const serviceIcons: Record<string, string> = {
  SwarmUI: "/icons/swarmui.ico",
  MooshieUI: "/icons/mooshieui.png",
  "ComfyUI (CPU)": "/icons/comfyui.png",
  "Open WebUI": "/icons/oui.svg",
  SillyTavern: "/icons/novel.ico",
  JupyterHub: "/icons/jupyterhub.svg",
  Farterrogator: "/icons/tagger.webp",
  Outline: "/icons/docs.svg",
  Fartgram: "/icons/fartgram.ico",
  Hedgedoc: "/icons/rentry.svg",
};

const footerIcons = {
  Buymeacoffee: Coffee,
  Twitch,
  "Website GitHub": Github,
} as const;

type HomePageClientProps = {
  serviceGroups: ServiceGroup[];
};

export default function HomePageClient({ serviceGroups }: HomePageClientProps) {
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const mainServiceGroups = serviceGroups.filter(
    (group) => group.title !== "other",
  );
  const footerServices =
    serviceGroups.find((group) => group.title === "other")?.services ?? [];
  const serviceCount = mainServiceGroups.reduce(
    (total, group) => total + group.services.length,
    0,
  );

  const getServiceIcon = (name: string) => {
    if (name === "SwarmUI" && hoveredService === "SwarmUI") {
      return "/icons/swarmiku.ico";
    }
    return serviceIcons[name as keyof typeof serviceIcons];
  };

  return (
    <>
      <main className="relative z-[1] mx-auto w-full max-w-[1120px] px-4 pb-[60px] pt-[22px] sm:px-6">
        {/* Top status bar */}
        <div className="mb-5 flex items-center justify-between gap-4 rounded-[14px] border border-[var(--border-subtle)] bg-[rgba(20,20,23,0.55)] px-4 py-3 [backdrop-filter:blur(18px)_saturate(1.05)] [-webkit-backdrop-filter:blur(18px)_saturate(1.05)]">
          <span className="inline-flex items-center gap-2.5 font-bold text-zinc-100">
            <img
              src="/favicon.png"
              alt=""
              aria-hidden="true"
              className="h-[26px] w-[26px] rounded-[7px]"
            />
            gpu.garden
          </span>
          <span className="inline-flex items-center gap-3 text-xs text-[var(--text-muted)] sm:gap-[18px]">
            <span className="font-mono">{gpuCount} GPUs · 1 datacenter</span>
            <a
              className="font-mono text-[var(--text-link)] no-underline transition hover:text-[var(--yellow-300)]"
              href="https://status.gpu.garden/"
              target="_blank"
              rel="noreferrer"
            >
              Status ↗
            </a>
          </span>
        </div>

        <section className="grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.92fr)] lg:items-stretch">
          {/* Hero sits directly over the particle field (no card), with a soft scrim for legibility */}
          <div className="relative flex flex-col p-5 sm:p-[26px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-y-[10px] -left-[20px] -right-[30px] -z-10 [background:radial-gradient(120%_90%_at_8%_45%,rgba(8,8,10,0.82),rgba(8,8,10,0.4)_45%,transparent_72%)]"
            />
            <span className={tagClass}>// playground.gpu.garden</span>
            <h1 className="mt-4 max-w-[13ch] text-[clamp(2.4rem,4.8vw,4.2rem)] font-extrabold leading-[0.96] tracking-[-0.05em] text-zinc-100 max-lg:max-w-none">
              <span className="relative inline-block">
                W
                <button
                  type="button"
                  className="absolute left-[-0.30em] top-[0.08em] z-10 flex h-[0.46em] w-[0.46em] cursor-pointer items-center justify-center text-[var(--red-500)] transition hover:text-[var(--red-400)]"
                  onClick={() =>
                    setLightboxImage({
                      src: "/gpu-gardener.webp",
                      alt: "GPU gardener",
                    })
                  }
                  aria-label="Open larger view of the GPU gardener"
                >
                  <Leaf
                    className="h-full w-full rotate-[160deg]"
                    strokeWidth={2.2}
                  />
                </button>
              </span>
              ho would&apos;ve known AI playgrounds could be free?
            </h1>
            <p className="mt-[18px] max-w-[46ch] text-[1.05rem] leading-[1.6] text-[var(--text-body)]">
              A beautiful little corner of the web for AI enthusiasts, powered by
              the fartcore datacenter.
            </p>

            <div className="mt-auto pt-7">
              <div className="flex flex-wrap gap-2.5">
                <a
                  className="inline-flex items-center gap-[9px] rounded-[12px] border border-transparent bg-[var(--yellow-400)] px-5 py-3.5 text-[0.98rem] font-semibold text-[var(--text-on-accent)] shadow-[0_1px_0_rgba(255,255,255,0.35)_inset] transition hover:-translate-y-px hover:bg-[var(--yellow-300)] hover:text-[var(--text-on-accent)] hover:shadow-[0_6px_18px_rgba(250,204,21,0.3)]"
                  href="https://discord.com/servers/dong-fang-project-ai-930499730843250783"
                  target="_blank"
                  rel="noreferrer"
                >
                  Join TouhouAI to get access
                  <ArrowUpRight size={16} />
                </a>
                <a
                  className="inline-flex items-center gap-[9px] rounded-[12px] border border-transparent bg-[var(--red-600)] px-5 py-3.5 text-[0.98rem] font-semibold text-white transition hover:-translate-y-px hover:bg-[var(--red-500)] hover:text-white hover:shadow-[0_6px_18px_rgba(236,44,43,0.32)]"
                  href="https://swarmui.gpu.garden/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open SwarmUI
                </a>
              </div>
              <p className="mt-4 font-mono text-xs text-[var(--text-muted)]">
                $ access — look for a user with the{" "}
                <b className="font-medium text-[var(--yellow-400)]">fartcore</b>{" "}
                role
              </p>
            </div>
          </div>

          <aside
            className={`${glassCard} p-5 sm:p-[26px]`}
            aria-label="Datacenter summary"
          >
            <h2 className="text-[1.05rem] font-semibold leading-tight text-zinc-100">
              Fartcore datacenter hardware:
            </h2>

            <button
              type="button"
              className="mt-4 block w-full overflow-hidden rounded-[12px] border border-[var(--border-subtle)] text-left"
              onClick={() =>
                setLightboxImage({
                  src: "/fartcore_datacenter_1.webp",
                  alt: "Fartcore datacenter",
                })
              }
              aria-label="Open larger view of the fartcore datacenter"
            >
              <img
                className="aspect-[16/9] w-full cursor-zoom-in object-cover object-center"
                src="/fartcore_datacenter_1.webp"
                alt="Fartcore datacenter"
              />
            </button>
            <p className="mt-2 text-xs text-[var(--text-muted)]">
              psst... you can click the photo for a bigger look ✨
            </p>

            <div className="mt-3.5">
              {hardware.map((item, index) => (
                <div
                  key={item.name}
                  className={`flex items-baseline justify-between gap-4 py-[11px] ${
                    index === 0 ? "" : "border-t border-white/[0.06]"
                  }`}
                >
                  <strong className="text-[0.95rem] font-semibold text-zinc-100">
                    {item.name}
                  </strong>
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    {item.role}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-3 text-[0.85rem] leading-[1.6] text-[var(--text-body)]">
              CPUs handle services like Outline, Fartgram, Copyparty, and other
              lighter workloads, alongside a few more limited-use systems like
              DGX Sparks.
            </p>
          </aside>
        </section>

        <section
          className={`${glassCard} mt-5 p-5 sm:p-[26px]`}
          aria-labelledby="services-title"
        >
          <div className="flex items-center justify-between">
            <h2
              id="services-title"
              className="text-[1.15rem] font-bold tracking-[-0.01em] text-zinc-100"
            >
              What lives here
            </h2>
            <span className={tagClass}>{serviceCount} services</span>
          </div>

          <div className="mt-5 grid gap-x-[26px] gap-y-[18px] [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
            {mainServiceGroups.map((group) => (
              <div key={group.title}>
                <div className="border-b border-white/[0.07] pb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  {categoryLabels[group.title] ?? group.title}
                </div>
                {group.services.map((service) => {
                  const iconSrc = getServiceIcon(service.name);

                  return (
                    <a
                      className="-mx-2 flex items-center gap-[11px] rounded-[9px] px-2 py-[9px] text-zinc-200 no-underline transition hover:bg-white/5"
                      key={`${group.title}-${service.name}`}
                      href={service.href}
                      target="_blank"
                      rel="noreferrer"
                      title={service.description}
                      onMouseEnter={() => setHoveredService(service.name)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      {iconSrc ? (
                        <img
                          className="h-[18px] w-[18px] rounded-[4px] object-contain"
                          src={iconSrc}
                          alt=""
                          aria-hidden="true"
                        />
                      ) : (
                        <span className="h-[18px] w-[18px]" aria-hidden="true" />
                      )}
                      <span className="flex-1 text-[0.95rem] font-medium">
                        {service.name}
                      </span>
                      <ArrowUpRight
                        className="h-3.5 w-3.5 text-[var(--text-muted)]"
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </div>
            ))}
          </div>
        </section>

        <section
          className={`${glassCard} mt-5 p-5 sm:p-[26px]`}
          aria-labelledby="rules-title"
        >
          <div className="flex items-center justify-between">
            <h2
              id="rules-title"
              className="text-[1.15rem] font-bold tracking-[-0.01em] text-zinc-100"
            >
              Usage rules
            </h2>
            <span className={tagClass}>{rules.length} rules</span>
          </div>

          <div className="mt-[18px] grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
            {rules.map((rule, index) => (
              <div
                key={rule.title}
                className="rounded-[12px] border border-white/[0.07] bg-white/[0.03] p-4"
              >
                <div className="font-mono text-[11px] text-[var(--red-400)]">
                  RULE_0{index + 1}
                </div>
                <h3 className="mt-1.5 text-[0.92rem] font-semibold text-zinc-100">
                  {rule.title}
                </h3>
                <p className="mt-[7px] text-[0.85rem] leading-[1.55] text-[var(--text-body)]">
                  {rule.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 px-1 font-mono text-xs text-[var(--text-muted)]">
          <span>
            gpu.garden · a{" "}
            <a
              className="text-[var(--text-link)] transition hover:text-[var(--yellow-300)]"
              href="https://fartcore.ai/"
              target="_blank"
              rel="noreferrer"
            >
              fartcore
            </a>{" "}
            service
          </span>
          {footerServices.length > 0 ? (
            <span className="flex items-center gap-2">
              {footerServices.map((service) => {
                const Icon =
                  footerIcons[service.name as keyof typeof footerIcons] ??
                  ArrowUpRight;

                return (
                  <a
                    key={`footer-${service.name}`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-[9px] border border-[var(--border-subtle)] bg-white/5 text-zinc-200 transition hover:-translate-y-px hover:bg-white/10"
                    href={service.href}
                    target="_blank"
                    rel="noreferrer"
                    title={service.description ?? service.name}
                    aria-label={service.name}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </span>
          ) : null}
          <span>
            Designed by Ashtaka &amp;{" "}
            <a
              className="text-[var(--text-link)] transition hover:text-[var(--yellow-300)]"
              href="https://mooshieblob.com"
              target="_blank"
              rel="noreferrer"
            >
              Mooshieblob
            </a>{" "}
            · © 2024-2026
          </span>
        </footer>
      </main>

      <div
        className={`fixed inset-0 z-50 grid place-items-center p-6 transition-all duration-200 ${
          lightboxImage
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        aria-hidden={!lightboxImage}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
          aria-label="Close image lightbox"
        />
        <div
          className={`relative z-10 inline-flex max-w-[min(94vw,1120px)] justify-center transition duration-200 ${
            lightboxImage
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-3 scale-[0.985] opacity-0"
          }`}
        >
          {lightboxImage ? (
            <img
              className="pointer-events-auto block max-h-[88vh] max-w-full rounded-[22px] object-contain shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
              src={lightboxImage.src}
              alt={lightboxImage.alt}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
