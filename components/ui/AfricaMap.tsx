import { pages } from "@/lib/data/pages";

const markers = [
  { country: "Nigeria", cx: 278, cy: 210 },
  { country: "Ghana", cx: 238, cy: 228 },
  { country: "Cameroon", cx: 303, cy: 232 },
  { country: "Senegal", cx: 170, cy: 210 },
  { country: "Kenya", cx: 365, cy: 248 },
  { country: "South Africa", cx: 346, cy: 365 },
];

export function AfricaMap() {
  return (
    <div className="rounded-3xl border border-black/5 bg-white p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-display text-2xl text-dark">
            {pages.about.globalPresence.heading}
          </p>
          <p className="mt-2 text-sm text-muted">
            {pages.about.globalPresence.markets.join(" • ")}
          </p>
        </div>
        <div className="text-xs font-semibold text-muted">
          {pages.about.globalPresence.markets.length} markets
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl bg-surface">
        <svg
          viewBox="0 0 520 440"
          className="h-auto w-full"
          role="img"
          aria-label={pages.about.globalPresence.heading}
        >
          <defs>
            <linearGradient id="africaFill" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="var(--highlight)" />
              <stop offset="1" stopColor="rgba(11, 61, 46, 0.08)" />
            </linearGradient>
          </defs>

          {/* Simplified Africa silhouette */}
          <path
            d="M300 60c-20 10-35 24-48 40-14 18-28 28-45 34-18 6-28 20-31 34-4 18 5 34 18 46 9 8 14 20 13 33-2 22-17 37-16 56 2 30 18 46 35 62 13 12 16 26 11 44-7 24-20 40-19 63 1 21 13 36 28 43 20 9 44 6 63-7 19-13 26-32 30-52 5-27 13-42 32-56 20-15 29-37 26-61-2-16-7-29-16-41-8-10-8-20-2-31 12-20 19-42 9-64-9-20-8-37 2-56 12-23 17-49 6-74-8-18-25-32-36-47-7-10-13-20-10-33 4-16-1-34-16-42-16-9-32-10-44 2Z"
            fill="url(#africaFill)"
            stroke="rgba(17,24,39,0.08)"
            strokeWidth="2"
          />

          {markers.map((m) => (
            <g key={m.country}>
              <circle cx={m.cx} cy={m.cy} r="7" fill="var(--accent)" opacity="0.95" />
              <circle
                cx={m.cx}
                cy={m.cy}
                r="13"
                fill="var(--accent)"
                opacity="0.14"
              />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

