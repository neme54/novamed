"use client";

import { cn } from "@/lib/utils/cn";

const steps = [1, 2, 3, 4];

export function StepIndicator({
  currentStep,
  labels,
}: {
  currentStep: number;
  labels: readonly string[];
}) {
  return (
    <nav aria-label="Booking progress" className="w-full">
      <ol className="flex items-center justify-between gap-2">
        {steps.map((step, i) => {
          const isActive = step === currentStep;
          const isComplete = step < currentStep;
          const label = labels[i];
          return (
            <li
              key={step}
              className={cn(
                "flex flex-1 flex-col items-center gap-2",
                i < steps.length - 1 && "relative",
              )}
            >
              {i < steps.length - 1 && (
                <span
                  className="absolute left-1/2 top-5 h-0.5 w-full -translate-y-1/2 bg-surface-dark"
                  aria-hidden
                >
                  <span
                    className="block h-full bg-accent transition-all duration-300"
                    style={{ width: currentStep > step ? "100%" : "0%" }}
                  />
                </span>
              )}
              <span
                className={cn(
                  "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors",
                  isActive && "bg-accent text-dark ring-2 ring-accent ring-offset-2",
                  isComplete && "bg-accent text-dark",
                  !isActive && !isComplete && "bg-surface-dark text-muted",
                )}
              >
                {isComplete ? "✓" : step}
              </span>
              <span
                className={cn(
                  "text-center text-xs font-medium sm:text-sm",
                  isActive ? "text-dark" : "text-muted",
                )}
              >
                {label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
