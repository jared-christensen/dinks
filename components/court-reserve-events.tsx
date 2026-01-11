"use client";

import { useEffect } from "react";

interface CourtReserveWidgetProps {
  embedCodeId: string;
  title?: string;
}

export function CourtReserveWidget({ embedCodeId, title = "CourtReserve Widget" }: CourtReserveWidgetProps) {
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      switch (e.data.action) {
        case "setHeight": {
          const id = e.data.embedCodeId;
          if (id != null && id !== "") {
            const elements = document.getElementsByClassName("form-iframe-" + id);
            for (let i = 0; i < elements.length; i++) {
              (elements[i] as HTMLElement).style.height = e.data.height + "px";
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
          if (e.data.scrollHeight) {
            window.scrollTo(0, e.data.scrollHeight);
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
