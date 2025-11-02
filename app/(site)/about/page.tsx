import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <section className="space-y-16">
      {/* About Dinks - The Facility */}
      <div className="space-y-8">
        <div className="space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-slate-600">
            About Dinks
          </span>
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Des Moines&apos; Premier Indoor Pickleball Facility
          </h1>
          <p className="text-base leading-7 text-slate-600">
            Dinks Pickleball is Des Moines&apos; largest dedicated pickleball
            facility with 13 professional indoor courts. We&apos;re a
            family-owned, community-driven club that exists to give players a
            reliable indoor home for year-round play, instruction, leagues,
            tournaments, and connection.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-base leading-7">
              Create a welcoming, competitive, and inclusive pickleball
              experience. Whether you are brand new to the sport or chasing the
              next tournament, we provide instruction, community, and space to
              play together.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>The Facility</CardTitle>
            </CardHeader>
            <CardContent className="text-base leading-7">
              13 professional courts with outdoor court surface and permanent
              nets, warm-up area, entertainment & lounge area. Open 6am to
              midnight, 7 days a week at Merle Hay Mall.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What We Offer</CardTitle>
            </CardHeader>
            <CardContent className="text-base leading-7">
              Professional instruction, competitive leagues and tournaments,
              clinics for all skill levels, open play sessions, and a welcoming
              community space for players to connect.
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="text-base leading-7">
            Everything about the club—from daily programming to special
            events—is shaped by the people who show up and make the courts feel
            like home. We opened Dinks so players would always have a place to
            rally with friends, meet new partners, and keep learning.
          </CardContent>
        </Card>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-200"></div>

      {/* Meet the Owners */}
      <div className="space-y-8">
        <div className="space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-slate-600">
            Meet the Owners
          </span>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            The Families Behind Dinks
          </h2>
          <p className="text-base leading-7 text-slate-600">
            Dinks was founded by two local families with a shared passion for
            pickleball and a vision to create Des Moines&apos; premier indoor
            pickleball destination. Meet the Lannings and the Douglasses.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        <article className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] md:items-start">
          <div className="overflow-hidden rounded-3xl bg-slate-100">
            <Image
              src="/Lannings.webp"
              alt="The Lanning family"
              width={960}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              The Lanning Family
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-600">
              <p>
                David and Bailey started playing pickleball about 5 years ago
                after Bailey’s parents, Kirk and Beth Meints introduced them to
                the sport. Like most, once we started playing we quickly became
                addicted. We even took a family cruise with Engage Pickleball
                for a week of pickleball training which introduced us to the
                founders of Engage. David continues to play for Team Engage as a
                sponsored player. Pickleball has had a huge, positive impact on
                our lives making so many life long friends, allowing us to
                travel many states for tournaments and provides an outlet for
                our competitiveness! Our whole family family will be heading to
                Texas in November to support Bailey who will be playing 5.0
                Women’s doubles at Nationals.
              </p>
              <p>
                Dinks represents both a passion for pickleball while at the same
                time an opportunity to respond to the overwhelming need for
                proper indoor facilities for the growing pickleball demographic
                in the greater Des Moines area.
              </p>
              <p>
                Outside of Dinks, David works full time as a Regional Sales
                Manager for a Cyber Security Start Up covering Enterprise
                Accounts across 16 states and enjoys coaching both his girls
                Soccer team.
              </p>
              <p>
                Bailey is a licensed Mental Health Therapist and owns her own
                private practice. She is very involved in our kids activities,
                sits on boards, PTO and coaches the girls Volleyball team.
              </p>
              <p>
                Campbell &amp; Lolo are Dinks VPs of Youth Experience. While
                they are up and coming pickleball stars - they also focus their
                time on soccer, volleyball, tumbling, track &amp; field, tennis,
                and basketball!
              </p>
              <p>
                We could not be more excited to open Dinks and in addition to 13
                dedicated courts - provide training, tournaments, leagues,
                events and most of all a central hub for the Des Moines
                Pickleball community!!
              </p>
              <p>
                We sincerely appreciate your support!
                <br />
                David Lanning Bailey Saal-Lanning
              </p>
            </div>
          </div>
        </article>

        <article className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] md:items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              The Douglass Family
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-600">
              <p>
                Bill and Deb grew up in Mt Vernon but have lived at Lake
                Panorama for the past 23yrs.
              </p>
              <p>
                By day, Bill is a pilot for FedEx. Often times he is based out
                of Indianapolis and where his work merged with pickleball. While
                traveling and on call, Bill quickly got hooked on pickleball
                about 5 yrs ago and made many friends in the pickleball
                community both in Indiana and Iowa. 2 years ago this led to
                founding and operating an indoor pickleball court, “The Hideout”
                in Indianapolis. When Bill’s not flying or playing pickleball,
                he stays busy playing golf, hunting, snowmobiling, playing bags
                and even mentored a local Eagle Scout who built 2 pickleball
                courts for his final project!
              </p>
              <p>
                Deb has worked part time as a College Business Instructor and
                currently manages food/beverage at The Turn Shack at Lake
                Panorama National Golf Course. She stays very busy sitting on
                numerous boards and volunteering in her community. While she is
                still new to pickleball and it hasn’t completely taken all of
                her free time yet, she keeps busy golfing, reading,
                scrapbooking, gardening and hiking.
              </p>
              <p>
                Dylan recently graduated from the University of Iowa w/ an
                Entrepreneurial Management Degree and will begin Flight School
                in AZ this fall.
              </p>
              <p>
                Payton is a Senior at Cornell College majoring in Biochemistry,
                Molecular Biology &amp; Religion. Her future plans include Med
                School or becoming a Physician Assistant or Nurse Practitioner
              </p>
              <p>
                Jordan is currently working and living in Ames. She teaches and
                is a choreographer for a local dance studio and plans to own her
                own studio in the future!
              </p>
              <p>
                We are excited to bring Dinks to life and appreciate the
                incredible support we have received so far.
              </p>
              <p>
                Thank-You and see you on the courts soon!
                <br />- The Douglass Family
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl bg-slate-100">
            <Image
              src="/Douglass family.webp"
              alt="The Douglass family"
              width={960}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
