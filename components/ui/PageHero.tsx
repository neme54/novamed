import Image from "next/image";

import { DEFAULT_BLUR_DATA_URL } from "@/lib/images/blur";
import { cn } from "@/lib/utils/cn";

export function PageHero({
  title,
  description,
  image,
  children,
  className,
}: {
  title: string;
  description?: string;
  image: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-primary text-surface",
        className,
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={DEFAULT_BLUR_DATA_URL}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/82 to-primary/92" />
        <div className="absolute inset-0 grain" />
      </div>
      <div className="relative container py-16 sm:py-20">
        {children}
        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-surface/85 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}

