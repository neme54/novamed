import {
  Beaker,
  Boxes,
  CheckCircle2,
  Factory,
  FlaskConical,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";

const stepIcons = [
  Boxes,
  FlaskConical,
  Beaker,
  Factory,
  ShieldCheck,
  PackageCheck,
  CheckCircle2,
  Truck,
] as const;

export function Stepper({ steps }: { steps: ReadonlyArray<string> }) {
  return (
    <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, idx) => {
        const Icon = stepIcons[idx] ?? CheckCircle2;
        return (
          <li key={s} className="rounded-2xl border border-black/5 bg-white p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-highlight text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {idx + 1}
                </p>
                <p className="mt-1 font-semibold text-dark">{s}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

