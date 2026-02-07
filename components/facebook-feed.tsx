import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FACILITY } from "@/constants/facility";

const FACEBOOK_PAGE_URL = encodeURIComponent(FACILITY.social.facebook);

export function FacebookFeed() {
  return (
    <section>
      <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-[1fr_500px]">
        {/* Left column — CTA */}
        <div className="flex flex-col justify-center gap-6 p-8 lg:p-10">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white">
              Follow Dinks Pickleball
            </h3>
            <p className="text-base leading-relaxed text-white/70">
              Follow us on Facebook for event announcements, tournament
              results, community photos, and facility updates.
            </p>
          </div>
          <Link
            href={FACILITY.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-2 rounded-lg bg-brand-yellow-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-brand-yellow-400"
          >
            Visit on Facebook
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Right column — Facebook embed */}
        <div className="overflow-hidden p-8 lg:p-0 leading-[0]">
          <div className="inline-block  overflow-hidden rounded-lg border border-white/10 shadow-lg shadow-black/20 lg:rounded-none lg:border-0 lg:shadow-none">
            <iframe
              src={`https://www.facebook.com/plugins/page.php?href=${FACEBOOK_PAGE_URL}&tabs=timeline&width=500&height=400&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&hide_cta=true`}
              width="500"
              height="400"
         
              scrolling="no"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Dinks Pickleball Facebook feed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
