import Image from "next/image";
import { aboutData } from "@/data/about";

export default function About() {
  return (
    <section className="space-y-16">
      {/* Meet the Owners */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-slate-900">
            {aboutData.pageTitle}
          </h1>
          <p className="text-base leading-7 text-slate-600">
            {aboutData.pageIntro}
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {aboutData.families.map((family, index) => (
          <article
            key={family.familyName}
            className={`grid gap-8 md:items-start ${
              index % 2 === 0
                ? "md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]"
                : "md:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]"
            }`}
          >
            {index % 2 === 0 && (
              <div className="overflow-hidden rounded-3xl bg-slate-100">
                <Image
                  src={family.imageSrc}
                  alt={family.imageAlt}
                  width={960}
                  height={720}
                  className="h-full w-full object-cover"
                  priority={index === 0}
                />
              </div>
            )}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">
                {family.familyName}
              </h2>
              <div className="space-y-4 text-base leading-7 text-slate-600">
                {family.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </div>
            {index % 2 === 1 && (
              <div className="overflow-hidden rounded-3xl bg-slate-100">
                <Image
                  src={family.imageSrc}
                  alt={family.imageAlt}
                  width={960}
                  height={720}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
