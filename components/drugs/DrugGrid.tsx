import type { Drug } from "@/lib/types/drug";
import { DrugCard } from "./DrugCard";

export function DrugGrid({ drugs }: { drugs: Drug[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {drugs.map((d) => (
        <DrugCard key={d.slug} drug={d} />
      ))}
    </div>
  );
}
