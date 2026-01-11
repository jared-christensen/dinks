import Image from "next/image";
import { aboutData } from "@/data/about";

export default function About() {
  return (
    <section className="space-y-16">
      {/* Meet the Owners */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">
            {aboutData.pageTitle}
          </h1>
          <p className="text-base leading-7 text-white/80">
            {aboutData.pageIntro}
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {aboutData.families.map((family, index) => (
          <article
            key={family.familyName}
            className="overflow-hidden rounded-2xl border-8 border-white/10 bg-white"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={family.imageSrc}
                alt={family.imageAlt}
                width={960}
                height={720}
                className="h-full w-full object-cover"
                priority={index === 0}
              />
            </div>
            <div className="p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-brand-blue-500">
                {family.familyName}
              </h2>
              <div className="space-y-4 text-base leading-7 text-brand-blue-500/80">
                {family.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
