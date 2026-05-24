"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const services = [
  { name: "SwarmUI", href: "https://swarmui.gpu.garden/" },
  { name: "MooshieUI", href: "https://mooshieui.gpu.garden/" },
  { name: "Open WebUI", href: "https://oui.gpu.garden/" },
  { name: "SillyTavern", href: "https://novel.gpu.garden/" },
  { name: "Outline Docs", href: "https://docs.gpu.garden/" },
  { name: "JupyterHub", href: "https://jupyterhub.gpu.garden/" },
  { name: "Copyparty", href: "https://copy.gpu.garden/" },
  { name: "Grafana", href: "https://stats.gpu.garden/" },
];

const cardClass =
  "rounded-[28px] bg-[linear-gradient(180deg,rgba(24,24,27,0.94),rgba(15,15,18,0.92))] shadow-[0_24px_80px_rgba(0,0,0,0.4)]";

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <main className="mx-auto w-full max-w-[1120px] px-5 py-10 pb-14">
        <section className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.85fr)] lg:items-stretch">
          <div
            className={`${cardClass} flex h-full flex-col rounded-[32px] p-6 sm:p-8 md:p-12`}
          >
            <div>
              <h1 className="max-w-[10ch] text-[clamp(2.5rem,6.2vw,4.8rem)] font-extrabold leading-[0.95] tracking-[-0.05em] text-zinc-100 max-lg:max-w-none">
                Who would&apos;ve known AI playgrounds could be free?
              </h1>
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
                  href="https://status.gpu.garden/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View status
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
            className={`${cardClass} h-full p-6 sm:p-7`}
            aria-label="Datacenter summary"
          >
            <h2 className="text-xl font-semibold leading-tight text-zinc-100">
              Fartcore datacenter hardware:
            </h2>

            <button
              type="button"
              className="mt-[18px] block w-full overflow-hidden rounded-[18px] text-left"
              onClick={() => setLightboxOpen(true)}
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
          className={`${cardClass} mt-5 p-6 sm:p-7`}
          aria-labelledby="services-title"
        >
          <p className="mb-3.5 text-xs font-bold uppercase tracking-[0.14em] text-yellow-400">
            Services
          </p>
          <h2
            id="services-title"
            className="text-xl font-semibold leading-tight text-zinc-100"
          >
            What lives here
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {services.map((service) => (
              <a
                className="inline-flex items-center gap-2.5 rounded-full bg-white/5 px-3.5 py-3 text-[0.95rem] font-semibold text-zinc-200 transition hover:-translate-y-px hover:bg-zinc-700/90"
                key={service.name}
                href={service.href}
                target="_blank"
                rel="noreferrer"
              >
                {service.name}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-6 flex flex-col gap-4 px-1 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
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
        </footer>
      </main>

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
