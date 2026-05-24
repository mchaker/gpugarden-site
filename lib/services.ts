import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { parse } from "smol-toml";

export type ServiceLink = {
  category: string;
  name: string;
  href: string;
  description?: string;
};

export type ServiceGroup = {
  title: string;
  services: ServiceLink[];
};

type ServicesToml = {
  services?: unknown;
};

function isServiceLink(value: unknown): value is ServiceLink {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate.category === "string" &&
    typeof candidate.name === "string" &&
    typeof candidate.href === "string" &&
    (candidate.description === undefined ||
      typeof candidate.description === "string")
  );
}

export async function getServiceGroups(): Promise<ServiceGroup[]> {
  const filePath = join(process.cwd(), "app", "services.toml");
  const source = await readFile(filePath, "utf8");
  const parsed = parse(source) as ServicesToml;

  if (!Array.isArray(parsed.services)) {
    return [];
  }

  const grouped = new Map<string, ServiceLink[]>();

  for (const entry of parsed.services) {
    if (!isServiceLink(entry)) {
      continue;
    }

    const group = grouped.get(entry.category);
    if (group) {
      group.push(entry);
    } else {
      grouped.set(entry.category, [entry]);
    }
  }

  return Array.from(grouped.entries()).map(([title, services]) => ({
    title,
    services,
  }));
}
