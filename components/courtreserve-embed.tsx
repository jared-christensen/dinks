"use client";

type CourtReserveEmbedProps = {
  src: string;
  title?: string;
  height?: number | string;
  className?: string;
};

export function CourtReserveEmbed({
  src,
  title = "CourtReserve Scheduler",
  height = "100vh",
  className,
}: CourtReserveEmbedProps) {
  const iframeHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <iframe
      title={title}
      src={src}
      loading="lazy"
      allowFullScreen
      className={className}
      style={{
        border: "none",
        width: "100%",
        height: iframeHeight,
        backgroundColor: "transparent",
      }}
    />
  );
}
