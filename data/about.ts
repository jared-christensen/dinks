// About page content and data

export interface FamilyBio {
  familyName: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
}

export interface AboutData {
  pageTitle: string;
  pageIntro: string;
  families: FamilyBio[];
}

export const aboutData: AboutData = {
  pageTitle: "The Families Behind Dinks",
  pageIntro:
    "Dinks was founded by two local families with a shared passion for pickleball and a vision to create Des Moines' premier indoor pickleball destination. Meet the Lannings and the Douglasses.",
  families: [
    {
      familyName: "The Lanning Family",
      imageSrc: "/lannings-family.webp",
      imageAlt: "The Lanning family",
      paragraphs: [
        "David and Bailey started playing pickleball about 5 years ago after Bailey's parents, Kirk and Beth Meints introduced them to the sport. Like most, once we started playing we quickly became addicted. We even took a family cruise with Engage Pickleball for a week of pickleball training which introduced us to the founders of Engage. David continues to play for Team Engage as a sponsored player. Pickleball has had a huge, positive impact on our lives making so many lifelong friends, allowing us to travel many states for tournaments and provides an outlet for our competitiveness! Our whole family will be heading to Texas in November to support Bailey who will be playing 5.0 Women's doubles at Nationals.",
        "Dinks represents both a passion for pickleball while at the same time an opportunity to respond to the overwhelming need for proper indoor facilities for the growing pickleball demographic in the greater Des Moines area.",
        "Outside of Dinks, David works full-time as a regional sales manager for a cybersecurity startup covering enterprise accounts across 16 states and enjoys coaching his girls' soccer team.",
        "Bailey is a licensed mental health therapist and owns her own private practice. She is very involved in our kids' activities, sits on boards, PTO and coaches the girls' volleyball team.",
        "Campbell & Lolo are Dinks VPs of Youth Experience. While they are up-and-coming pickleball stars - they also focus their time on soccer, volleyball, tumbling, track and field, tennis, and basketball!",
        "We could not be more excited to open Dinks and in addition to 13 dedicated courts - provide training, tournaments, leagues, events and most of all a central hub for the Des Moines pickleball community!",
        "We sincerely appreciate your support!\n— David Lanning and Bailey Saal-Lanning",
      ],
    },
    {
      familyName: "The Douglass Family",
      imageSrc: "/douglass-family.webp",
      imageAlt: "The Douglass family",
      paragraphs: [
        "Bill and Deb grew up in Mount Vernon but have lived at Lake Panorama for the past 23 years.",
        "By day, Bill is a pilot for FedEx. He's often based out of Indianapolis, where his work merged with pickleball. While traveling and on call, Bill quickly got hooked on pickleball about 5 years ago and made many friends in the pickleball community both in Indiana and Iowa. Two years ago this led to founding and operating an indoor pickleball court, \"The Hideout\" in Indianapolis. When Bill's not flying or playing pickleball, he stays busy playing golf, hunting, snowmobiling, playing bags and even mentored a local Eagle Scout who built 2 pickleball courts for his final project!",
        "Deb has worked part-time as a college business instructor and currently manages food/beverage at The Turn Shack at Lake Panorama National Golf Course. She stays very busy sitting on numerous boards and volunteering in her community. While she is still new to pickleball and it hasn't completely taken all of her free time yet, she keeps busy golfing, reading, scrapbooking, gardening and hiking.",
        "Dylan recently graduated from the University of Iowa with an entrepreneurial management degree and will begin flight school in Arizona this fall.",
        "Payton is a senior at Cornell College majoring in biochemistry, molecular biology and religion. Her future plans include medical school or becoming a physician assistant or nurse practitioner.",
        "Jordan is currently working and living in Ames. She teaches and is a choreographer for a local dance studio and plans to own her own studio in the future!",
        "We are excited to bring Dinks to life and appreciate the incredible support we have received so far.",
        "Thank you and see you on the courts soon!\n- The Douglass Family",
      ],
    },
  ],
};
