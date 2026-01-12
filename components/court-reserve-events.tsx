"use client";

import { useEffect } from "react";

const ALLOWED_ORIGIN = "https://widgets.courtreserve.com";

interface CourtReserveMessageData {
  action: "setHeight" | "redirectAfterLogin" | "scrollBottom" | "scrollTop";
  embedCodeId?: string;
  height?: number;
  urlToRedirect?: string;
  scrollHeight?: number;
}

interface CourtReserveWidgetProps {
  embedCodeId: string;
  title?: string;
}

function isValidCourtReserveUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return (
      parsed.protocol === "https:" &&
      (parsed.hostname === "courtreserve.com" ||
        parsed.hostname.endsWith(".courtreserve.com"))
    );
  } catch {
    return false;
  }
}

export function CourtReserveWidget({
  embedCodeId,
  title = "CourtReserve Widget",
}: CourtReserveWidgetProps) {
  useEffect(() => {
    const handleMessage = (e: MessageEvent<CourtReserveMessageData>) => {
      // Validate origin to prevent malicious messages
      if (e.origin !== ALLOWED_ORIGIN) {
        return;
      }

      const data = e.data;
      if (!data || typeof data.action !== "string") {
        return;
      }

      switch (data.action) {
        case "setHeight": {
          const id = data.embedCodeId;
          if (id != null && id !== "" && typeof data.height === "number") {
            const elements = document.getElementsByClassName("form-iframe-" + id);
            for (let i = 0; i < elements.length; i++) {
              const element = elements[i];
              if (element instanceof HTMLElement) {
                element.style.height = data.height + "px";
              }
            }
          }
          break;
        }
        case "redirectAfterLogin": {
          const url = data.urlToRedirect;
          if (url && isValidCourtReserveUrl(url)) {
            setTimeout(() => {
              window.location.href = url;
            }, 100);
          }
          break;
        }
        case "scrollBottom": {
          if (typeof data.scrollHeight === "number") {
            window.scrollTo(0, data.scrollHeight);
          }
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
    <iframe
      className={`form-iframe-${embedCodeId}`}
      src={`https://widgets.courtreserve.com/Online/Public/EmbedCode/10812/${embedCodeId}`}
      style={{ margin: 0, width: "100%", border: "none", overflow: "hidden" }}
      scrolling="no"
      title={title}
    />
  );
}
