import * as React from "react";

export function SponsorCard({
  name,
  url,
  logo,
  blurb,
}: {
  name: string;
  url?: string;
  logo?: string;
  blurb?: string;
}) {
  return (
    <article className="sponsor-card">
      {logo ? (
        <img src={logo} alt={`${name} logo`} className="h-16 object-contain" />
      ) : (
        <div className="h-16" />
      )}
      <h3 className="mt-2 font-semibold">{name}</h3>
      {blurb ? <p className="mt-1 text-sm">{blurb}</p> : null}
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-slate-700 underline"
        >
          Visit
        </a>
      ) : null}
    </article>
  );
}
