import * as React from "react";

export function HeroCTA({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <section aria-label="Hero">
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-3xl font-bold">
          {title ?? "Join Dinks Pickleball"}
        </h1>
        <div className="mt-4">{children}</div>
      </div>
    </section>
  );
}
