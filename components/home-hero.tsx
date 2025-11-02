import Image from "next/image";

export function HomeHero() {
  return (
    <div className="relative left-1/2 right-1/2 -mt-24 w-screen min-h-svh -translate-x-1/2 overflow-hidden bg-[url('/home-page-hero.jpg')] bg-cover bg-center bg-no-repeat">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
      />
      <div className="relative z-10 mx-auto flex min-h-svh items-center justify-center px-6">
        <div className="max-w-5xl text-center">
          <div className="mx-auto mb-8 flex justify-center">
            <Image
              src="/dinks-logo-circle.png"
              alt="Dinks Pickleball"
              width={200}
              height={200}
              className="drop-shadow-[0_6px_16px_rgba(0,0,0,0.6)]"
            />
          </div>
          <h1 className="font-black uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(2.5rem,8vw,5rem)] text-white drop-shadow-[0_6px_16px_rgba(0,0,0,0.6)]">
            Des Moines&apos; largest pickleball facility
          </h1>
          <p className="mt-4 text-[clamp(1rem,2.2vw,1.5rem)] leading-7 text-slate-100 drop-shadow-[0_3px_8px_rgba(0,0,0,0.55)]">
            13 professional indoor courts. Open daily 6 am–midnight.
          </p>
        </div>
      </div>
    </div>
  );
}
