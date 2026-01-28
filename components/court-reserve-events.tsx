"use client";

import { useEffect, useRef } from "react";

interface CourtReserveMessageData {
  action: string;
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
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      // Only process messages that look like CourtReserve data
      const data = e.data as CourtReserveMessageData;
      if (!data || typeof data.action !== "string") {
        return;
      }

      switch (data.action) {
        case "setHeight": {
          const id = data.embedCodeId;
          const height = data.height;

          if (typeof height === "number") {
            if (id != null && id !== "") {
              // Target by class (multiple widgets support)
              const elements = document.getElementsByClassName("form-iframe-" + id);
              for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                if (element instanceof HTMLElement) {
                  element.style.height = height + "px";
                }
              }
            } else {
              // Fallback to id selector
              const element = document.getElementById("form-iframe");
              if (element) {
                element.style.height = height + "px";
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
      ref={iframeRef}
      id="form-iframe"
      className={`form-iframe-${embedCodeId}`}
      src={`https://widgets.courtreserve.com/Online/Public/EmbedCode/10812/${embedCodeId}`}
      style={{
        margin: 0,
        width: "100%",
        border: "none",
        overflow: "hidden",
        minHeight: "600px",
      }}
      scrolling="no"
      title={title}
    />
  );
}
