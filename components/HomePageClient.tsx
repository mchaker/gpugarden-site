"use client";

import { ArrowUpRight, Coffee, Github, Leaf, Twitch } from "lucide-react";
import { useState } from "react";
import type { ServiceGroup, ServiceLink } from "../lib/services";

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

const cardClass =
  "bg-transparent shadow-none sm:rounded-[28px] sm:bg-[linear-gradient(180deg,rgba(24,24,27,0.94),rgba(15,15,18,0.92))] sm:shadow-[0_24px_80px_rgba(0,0,0,0.4)]";

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

  return (
    <>
      <main className="mx-auto w-full max-w-[1120px] px-0 py-10 pb-14 sm:px-5">
        <section className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.85fr)] lg:items-stretch">
          <div
            className={`${cardClass} flex h-full flex-col px-5 py-6 sm:rounded-[32px] sm:p-8 md:p-12`}
          >
            <div>
              <div>
                <h1 className="max-w-[10ch] text-[clamp(2.5rem,6.2vw,4.8rem)] font-extrabold leading-[0.95] tracking-[-0.05em] text-zinc-100 max-lg:max-w-none">
                  <span className="relative inline-block">
                    W
                    <button
                      type="button"
                      className="absolute left-[-0.31em] top-[0.10em] z-10 flex h-[0.44em] w-[0.44em] cursor-pointer items-center justify-center text-zinc-100 transition hover:text-zinc-400"
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
              </div>
              <p className="mt-[22px] max-w-[42rem] text-[1.05rem] leading-7 text-zinc-400">
                A beautiful little corner of the web for AI enthusiasts, powered
                by the fartcore datacenter.
              </p>
            </div>

            <div className="mt-[30px] lg:mt-auto">
              <div className="flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2.5 rounded-full bg-yellow-400 px-[18px] py-[14px] font-semibold text-zinc-950 transition hover:-translate-y-px hover:bg-yellow-300"
                  href="https://discord.com/servers/dong-fang-project-ai-930499730843250783"
                  target="_blank"
                  rel="noreferrer"
                >
                  Join TouhouAI to get access
                  <ArrowUpRight size={16} />
                </a>
                <a
                  className="inline-flex items-center gap-2.5 rounded-full bg-zinc-800/80 px-[18px] py-[14px] font-semibold text-zinc-100 transition hover:-translate-y-px hover:bg-zinc-700/90"
                  href="https://swarmui.gpu.garden/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open SwarmUI
                  <ArrowUpRight size={16} />
                </a>
              </div>
              <p className="mt-2 pl-1 text-xs text-zinc-500">
                Look for a user with the{" "}
                <span className="text-zinc-400">fartcore</span> role.
              </p>
            </div>
          </div>

          <aside
            className={`${cardClass} h-full px-5 py-6 sm:p-7`}
            aria-label="Datacenter summary"
          >
            <h2 className="text-xl font-semibold leading-tight text-zinc-100">
              Fartcore datacenter hardware:
            </h2>

            <button
              type="button"
              className="mt-[18px] block w-full overflow-hidden rounded-[18px] text-left"
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
            <p className="mt-2 text-sm text-zinc-500">
              psst... you can click the photo for a bigger look ✨
            </p>

            <ul className="mt-[18px] space-y-1">
              <li className="flex items-baseline justify-between gap-4 py-2.5 text-zinc-100 max-sm:flex-col max-sm:items-start max-sm:gap-0.5">
                <strong className="font-semibold">1x RTX 8000</strong>
                <span className="whitespace-nowrap text-zinc-400 max-sm:whitespace-normal">
                  LLMs
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-4 py-2.5 text-zinc-100 max-sm:flex-col max-sm:items-start max-sm:gap-0.5">
                <strong className="font-semibold">1x RTX 3090 Ti</strong>
                <span className="whitespace-nowrap text-zinc-400 max-sm:whitespace-normal">
                  Image generation
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-4 py-2.5 text-zinc-100 max-sm:flex-col max-sm:items-start max-sm:gap-0.5">
                <strong className="font-semibold">1x RTX 4070 Ti Super</strong>
                <span className="whitespace-nowrap text-zinc-400 max-sm:whitespace-normal">
                  Image generation
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-4 py-2.5 text-zinc-100 max-sm:flex-col max-sm:items-start max-sm:gap-0.5">
                <strong className="font-semibold">4x RTX A4000</strong>
                <span className="whitespace-nowrap text-zinc-400 max-sm:whitespace-normal">
                  Training
                </span>
              </li>
            </ul>

            <p className="mt-2.5 leading-7 text-zinc-400">
              CPUs handle services like Outline, Fartgram, Copyparty, and other
              lighter workloads, alongside a few more limited-use systems like
              DGX Sparks.
            </p>
          </aside>
        </section>

        <section
          className={`${cardClass} mt-5 px-5 py-6 sm:p-7`}
          aria-labelledby="services-title"
        >
          <h2
            id="services-title"
            className="text-xl font-semibold leading-tight text-zinc-100"
          >
            What lives here
          </h2>

          <div className="mt-5 grid gap-5 overflow-x-auto pb-2 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)_minmax(220px,0.7fr)]">
            {mainServiceGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  {categoryLabels[group.title] ?? group.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  {group.services.map((service) => {
                    let iconSrc = serviceIcons[service.name];
                    if (service.name === "SwarmUI" && hoveredService === "SwarmUI") {
                      iconSrc = "/icons/swarmiku.ico";
                    }

                    return (
                      <a
                        className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2.5 text-[0.95rem] font-semibold text-zinc-200 transition hover:-translate-y-px hover:bg-zinc-700/90 sm:gap-2.5 sm:px-3.5 sm:py-3"
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
                            className="h-4 w-4 rounded-[4px] object-contain"
                            src={iconSrc}
                            alt=""
                            aria-hidden="true"
                          />
                        ) : null}
                        {service.name}
                        <ArrowUpRight size={14} />
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className={`${cardClass} mt-5 px-5 py-6 sm:p-7`}
          aria-labelledby="rules-title"
        >
          <h2
            id="rules-title"
            className="text-xl font-semibold leading-tight text-zinc-100"
          >
            Usage rules
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {rules.map((rule) => (
              <div key={rule.title} className="rounded-2xl bg-white/4 p-4">
                <h3 className="text-sm font-semibold text-zinc-100">
                  {rule.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {rule.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-6 flex flex-col gap-4 px-5 text-sm text-zinc-400 sm:px-1 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-wrap items-center gap-3 max-sm:justify-between">
            <p className="inline-flex items-center gap-2.5 font-semibold text-zinc-100">
              <img
                className="block rounded-md"
                src="/favicon.png"
                alt="gpu.garden favicon"
                width="24"
                height="24"
              />
              <span>gpu.garden</span>
            </p>
            {footerServices.map((service) => {
              const Icon =
                footerIcons[service.name as keyof typeof footerIcons] ??
                ArrowUpRight;

              return (
                <a
                  key={`footer-${service.name}`}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-zinc-200 transition hover:-translate-y-px hover:bg-zinc-700/90"
                  href={service.href}
                  target="_blank"
                  rel="noreferrer"
                  title={service.description ?? service.name}
                  aria-label={service.name}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
          <div className="flex flex-col gap-2 lg:items-end">
            <span>
              gpu.garden is a{" "}
              <a
                className="text-yellow-400 transition hover:text-yellow-300"
                href="https://fartcore.ai/"
                target="_blank"
                rel="noreferrer"
              >
                fartcore
              </a>{" "}
              service
            </span>
            <span>© 2024-2026</span>
          </div>
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
