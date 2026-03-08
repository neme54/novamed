"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "article" | "section";
};

export function Card({ as = "div", className, ...props }: CardProps) {
  const Comp = as;
  return (
    <Comp
      className={cn(
        "rounded-2xl border border-black/5 bg-white shadow-soft",
        className,
      )}
      {...props}
    />
  );
}

