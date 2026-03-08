import type { Metadata } from "next";
import Link from "next/link";
import { BarChart2, FileText, TrendingUp } from "lucide-react";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/ui/ContactForm";
import { pages } from "@/lib/data/pages";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: pages.investors.title,
  description: pages.investors.description,
};

const icons = [TrendingUp, BarChart2, FileText, TrendingUp] as const;

export default function InvestorRelationsPage() {
  return (
    <>
      <section className="bg-dark text-surface">
        <div className="container py-16 sm:py-20">
          <Breadcrumbs
            items={[
              { label: pages.labels.breadcrumbHome, href: "/" },
              { label: pages.investors.title },
            ]}
            className="text-surface/80"
          />
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
            {pages.investors.heroCopy}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-surface/80 sm:text-lg">
            {pages.investors.description}
          </p>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container">
          <SectionHeader
            eyebrow={site.shortName}
            title={pages.investors.headings.highlights}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pages.investors.highlights.map((h, idx) => {
              const Icon = icons[idx] ?? TrendingUp;
              return (
                <Card key={h.label} className="p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-highlight text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                        {h.label}
                      </p>
                      <p className="mt-1 font-mono text-2xl font-semibold text-dark">
                        {h.value}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container">
          <SectionHeader
            eyebrow={site.shortName}
            title={pages.investors.headings.annualReports}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pages.investors.annualReports.map((r) => (
              <Card key={r.year} className="p-7">
                <p className="font-semibold text-dark">{r.title}</p>
                <a
                  href={r.href}
                  className="mt-4 inline-flex rounded-full bg-highlight px-4 py-2 text-sm font-semibold text-primary hover:bg-accent/15 focus-visible:focus-ring"
                >
                  {r.year}
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container">
          <SectionHeader
            eyebrow={site.shortName}
            title={pages.investors.headings.statements}
          />
          <div className="mt-10 overflow-x-auto rounded-3xl border border-black/5 bg-white">
            <table className="min-w-[720px] w-full text-left text-sm">
              <thead className="bg-surface">
                <tr className="text-muted">
                  {pages.investors.statementsTable.headers.map((h) => (
                    <th key={h} className="p-4 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pages.investors.statements.map((s) => (
                  <tr key={s.year} className="border-t border-black/5">
                    <td className="p-4 font-mono font-semibold text-dark">{s.year}</td>
                    {([s.q1, s.q2, s.q3, s.annual] as const).map((href, idx) => (
                      <td key={idx} className="p-4">
                        <a
                          href={href}
                          className="inline-flex items-center gap-2 rounded-full bg-highlight px-3 py-2 font-semibold text-primary hover:bg-accent/15 focus-visible:focus-ring"
                        >
                          <FileText className="h-4 w-4" aria-hidden="true" />
                          {pages.investors.statementsTable.pdfLabel}
                        </a>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow={site.shortName}
              title={pages.investors.headings.governance}
              description={pages.investors.governance.body}
            />
            <Card className="mt-8 p-7">
              <p className="font-semibold text-dark">{pages.investors.governance.heading}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pages.investors.governance.auditCommittee}
              </p>
            </Card>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-7">
              <p className="font-display text-2xl text-dark">{pages.investors.headings.stock}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pages.investors.stock.listing}
              </p>
              <p className="mt-3 font-mono text-lg font-semibold text-primary">
                {pages.investors.stock.ticker}
              </p>
            </Card>
            <Card className="p-7">
              <p className="font-display text-2xl text-dark">{pages.investors.headings.shareholder}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
                {pages.investors.shareholder.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container">
          <Card className="p-10">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="font-display text-3xl text-dark">{pages.investors.headings.press}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {pages.news.description}
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  href={pages.investors.pressCta.href}
                  className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-surface hover:bg-[#083226] focus-visible:focus-ring"
                >
                  {pages.investors.pressCta.label}
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow={site.shortName}
              title={pages.investors.headings.contact}
              description={pages.investors.irContact.email}
            />
          </div>
          <div className="lg:col-span-6">
            <ContactForm
              defaultDepartment={
                pages.contact.departments.find((d) => d === pages.contact.investorDepartment) ||
                pages.contact.departments[0]
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}

