import Link from "next/link";

export interface SponsorChipProps {
  name: string;
  href?: string;
}

export function SponsorChip({ name, href }: SponsorChipProps) {
  return (
    <Link
      href={href ?? "#"}
      className="inline-flex items-center justify-center rounded-md bg-white/60 px-2 py-2.5 text-center text-[11px] font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur transition hover:shadow-md hover:ring-slate-300"
    >
      {name}
    </Link>
  );
}
