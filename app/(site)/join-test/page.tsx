"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function JoinTest() {
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      switch (e.data.action) {
        case "setHeight": {
          const embedCodeId = e.data.embedCodeId;
          if (embedCodeId != null && embedCodeId !== "") {
            const elements = document.getElementsByClassName(
              "form-iframe-" + embedCodeId,
            );
            for (let i = 0; i < elements.length; i++) {
              (elements[i] as HTMLElement).style.height = e.data.height + "px";
            }
          } else {
            const iframe = document.getElementById("form-iframe");
            if (iframe) {
              iframe.style.height = e.data.height + "px";
            }
          }
          break;
        }
        case "redirectAfterLogin": {
          const url = e.data.urlToRedirect;
          setTimeout(() => {
            window.location.href = url;
          }, 100);
          break;
        }
        case "scrollBottom": {
          if (e.data.scrollHeight) window.scrollTo(0, e.data.scrollHeight);
          break;
        }
        case "scrollTop": {
          window.scrollTo(0, 0);
          break;
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-white">Join Dinks</h1>
        <p className="max-w-2xl text-balance text-base leading-7 text-white/80">
          Becoming a member takes just a few minutes through CourtReserve, the
          platform we use for memberships and court reservations.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white">
        <iframe
          id="form-iframe"
          className="form-iframe-80214"
          src="https://widgets.courtreserve.com/Online/Public/EmbedCode/10812/80214"
          style={{
            margin: 0,
            width: "100%",
            border: "none",
            overflow: "hidden",
          }}
          scrolling="no"
        />
      </div>

      {/* After You Join */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <h2 className="font-semibold text-white">After you join</h2>
        <p className="mt-2 max-w-prose text-sm leading-6 text-white/70">
          You&apos;ll receive a welcome email with door access instructions.
          Your phone is your key via the VizPin Smart app (
          <Link
            href="https://apps.apple.com/us/app/vizpin-smart/id946474106"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-yellow-500 underline underline-offset-2 hover:text-brand-yellow-400"
          >
            iOS
          </Link>
          {" / "}
          <Link
            href="https://play.google.com/store/apps/details?id=com.eckey.vizpin.dm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-yellow-500 underline underline-offset-2 hover:text-brand-yellow-400"
          >
            Android
          </Link>
          ).
        </p>
        <p className="mt-4 max-w-prose text-sm leading-6 text-white/70">
          Reserve courts through{" "}
          <Link
            href="/schedule"
            className="text-brand-yellow-500 underline underline-offset-2 hover:text-brand-yellow-400"
          >
            CourtReserve
          </Link>{" "}
          (
          <Link
            href="https://apps.apple.com/us/app/courtreserve/id1392556575"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-yellow-500 underline underline-offset-2 hover:text-brand-yellow-400"
          >
            iOS
          </Link>
          {" / "}
          <Link
            href="https://play.google.com/store/apps/details?id=com.courtreserve"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-yellow-500 underline underline-offset-2 hover:text-brand-yellow-400"
          >
            Android
          </Link>
          ).
        </p>
        <p className="mt-4 max-w-prose text-sm leading-6 text-white/70">
          Bringing friends? Add guests to your reservation for $10 per person at
          checkout.
        </p>
        <p className="mt-4 max-w-prose text-sm text-white/70">
          See our{" "}
          <Link
            href="/apps"
            className="text-brand-yellow-500 underline underline-offset-2 hover:text-brand-yellow-400"
          >
            Apps page
          </Link>{" "}
          for info on all the apps and platforms we use.
        </p>
      </div>
    </section>
  );
}
