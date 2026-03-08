import Link from "next/link";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils/cn";

const socials = [
  { label: "LinkedIn", href: site.social.linkedin, Icon: Linkedin },
  { label: "Twitter/X", href: site.social.twitter, Icon: Twitter },
  { label: "Facebook", href: site.social.facebook, Icon: Facebook },
  { label: "YouTube", href: site.social.youtube, Icon: Youtube },
];

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("bg-primary text-surface", className)}>
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-display text-2xl text-surface">{site.shortName}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-surface/80">
              {site.tagline} — {site.hq}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-white/10 focus-visible:focus-ring"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {site.footer.columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold tracking-wide text-surface">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-surface/80">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="rounded-md hover:text-accent focus-visible:focus-ring"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-surface/75">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>{site.footer.legal}</p>
            <p className="font-mono">
              {site.rcNumber} | {site.nafdacCompanyReg}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

