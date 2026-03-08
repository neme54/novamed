import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { pages } from "@/lib/data/pages";
import type { JobListing } from "@/lib/types/job";

export function JobCard({ job }: { job: JobListing }) {
  return (
    <Card as="article" className="p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="primary">{job.department}</Badge>
        <Badge tone="neutral">{job.type}</Badge>
        <Badge tone="accent">{job.level}</Badge>
      </div>
      <h3 className="mt-4 font-display text-2xl leading-tight text-dark">
        <Link href={`/careers/${job.slug}`} className="rounded-md focus-visible:focus-ring">
          {job.title}
        </Link>
      </h3>
      <div className="mt-3 text-sm text-muted">
        <p>{job.location}</p>
        <p className="mt-1">
          <span className="font-semibold text-dark">{pages.labels.deadline}:</span>{" "}
          <span className="font-mono">{job.deadline}</span>
        </p>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">{job.description}</p>
      <div className="mt-6">
        <Link href={`/careers/${job.slug}`} className="text-sm font-semibold text-primary hover:text-accent focus-visible:focus-ring">
          {pages.labels.applyNow}
        </Link>
      </div>
    </Card>
  );
}

