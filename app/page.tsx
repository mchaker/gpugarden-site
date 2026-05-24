import { ArrowUpRight, Coffee, Github, Twitch } from "lucide-react";
import HomePageClient from "../components/HomePageClient";
import {
  getServiceGroups,
  type ServiceGroup,
  type ServiceLink,
} from "../lib/services";

const rules = [
  {
    title: "Compliance with United States laws",
    text: "As this is where gpu.garden lives. You may not create, upload, share, request, or consume content through gpu.garden that violates United States law or other applicable law.",
  },
  {
    title: "Shared resource abuse and circumvention",
    text: "gpu.garden is a shared community resource. Do not abuse the share server, monopolize system capacity, evade rate limits, or attempt to bypass technical or artificial limitations.",
  },
  {
    title: "Harassment and hateful conduct",
    text: "Hate speech, harassment, threats, targeted abuse, or other unlawful or harmful conduct are not permitted anywhere on or outside the service.",
  },
];

const cardClass =
  "rounded-[28px] bg-[linear-gradient(180deg,rgba(24,24,27,0.94),rgba(15,15,18,0.92))] shadow-[0_24px_80px_rgba(0,0,0,0.4)]";

const categoryLabels: Record<string, string> = {
  ai: "AI",
  services: "Services",
  tools: "Tools",
  other: "Other",
};

const footerIcons = {
  Buymeacoffee: Coffee,
  Twitch,
  "Website GitHub": Github,
} as const;

export default async function Home() {
  const serviceGroups = await getServiceGroups();
  const mainServiceGroups = serviceGroups.filter(
    (group) => group.title !== "other",
  );
  const footerServices =
    serviceGroups.find((group) => group.title === "other")?.services ?? [];

  return (
    <HomePageClient>
      <PageContent
        mainServiceGroups={mainServiceGroups}
        footerServices={footerServices}
      />
    </HomePageClient>
  );
}

type PageContentProps = {
  mainServiceGroups: ServiceGroup[];
  footerServices: ServiceLink[];
  onOpenLightbox?: () => void;
};

function PageContent({
  mainServiceGroups,
  footerServices,
  onOpenLightbox,
}: PageContentProps) {
  return (
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
            onClick={onOpenLightbox}
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
            lighter workloads, alongside a few more limited-use systems like DGX
            Sparks.
          </p>
        </aside>
      </section>

      <section
        className={`${cardClass} mt-5 p-6 sm:p-7`}
        aria-labelledby="services-title"
      >
        <h2
          id="services-title"
          className="text-xl font-semibold leading-tight text-zinc-100"
        >
          What lives here
        </h2>

        <div className="mt-5 grid grid-flow-col gap-5 overflow-x-auto pb-2 [grid-auto-columns:minmax(220px,1fr)]">
          {mainServiceGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                {categoryLabels[group.title] ?? group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {group.services.map((service) => (
                  <a
                    className="inline-flex items-center gap-2.5 rounded-full bg-white/5 px-3.5 py-3 text-[0.95rem] font-semibold text-zinc-200 transition hover:-translate-y-px hover:bg-zinc-700/90"
                    key={`${group.title}-${service.name}`}
                    href={service.href}
                    target="_blank"
                    rel="noreferrer"
                    title={service.description}
                  >
                    {service.name}
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className={`${cardClass} mt-5 p-6 sm:p-7`}
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

      <footer className="mt-6 flex flex-col gap-4 px-1 text-sm text-zinc-400 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-wrap items-center gap-3">
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
            const Icon = footerIcons[service.name as keyof typeof footerIcons];

            return (
              <a
                key={`footer-${service.name}`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-zinc-200 transition hover:-translate-y-px hover:bg-zinc-700/90"
                href={service.href}
                target="_blank"
                rel="noreferrer"
                title={service.description ?? service.name}
                aria-label={service.name}
              >
                {Icon ? <Icon size={16} strokeWidth={2} /> : <ArrowUpRight size={16} />}
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
  );
}
