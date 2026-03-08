"use client";

import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:focus-ring disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-dark hover:bg-[#b4881c]",
  secondary: "bg-primary text-surface hover:bg-[#083226]",
  outline:
    "border border-surface/40 bg-white/0 text-surface hover:bg-white/10",
  ghost: "bg-transparent text-primary hover:bg-highlight",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-6 text-base",
};

type SharedProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
};

export type ButtonProps =
  | (SharedProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
  | (SharedProps &
      Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
        href: string;
        external?: boolean;
      });

export function Button(props: ButtonProps) {
  if (isLinkButton(props)) {
    const {
      href,
      external,
      variant = "primary",
      size = "md",
      className,
      leftIcon,
      rightIcon,
      children,
      ...rest
    } = props;

    const classes = cn(base, variants[variant], sizes[size], className);
    const content = (
      <>
        {leftIcon ? <span className="shrink-0">{leftIcon}</span> : null}
        <span>{children}</span>
        {rightIcon ? <span className="shrink-0">{rightIcon}</span> : null}
      </>
    );

    if (external) {
      return (
        <a className={classes} href={href} rel="noreferrer" target="_blank" {...rest}>
          {content}
        </a>
      );
    }

    return (
      <Link className={classes} href={href} {...rest}>
        {content}
      </Link>
    );
  }

  const {
    variant = "primary",
    size = "md",
    className,
    leftIcon,
    rightIcon,
    children,
    ...buttonProps
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);
  return (
    <button className={classes} type="button" {...buttonProps}>
      {leftIcon ? <span className="shrink-0">{leftIcon}</span> : null}
      <span>{children}</span>
      {rightIcon ? <span className="shrink-0">{rightIcon}</span> : null}
    </button>
  );
}

function isLinkButton(
  props: ButtonProps,
): props is Extract<ButtonProps, { href: string }> {
  return typeof (props as { href?: unknown }).href === "string";
}

