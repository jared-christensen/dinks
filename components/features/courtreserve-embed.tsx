import * as React from "react";

export function CourtReserveEmbed({ preview = false }: { preview?: boolean }) {
  return (
    <div className="courtreserve-embed">
      {preview ? (
        <div className="h-48 bg-gray-100 flex items-center justify-center">
          CourtReserve preview (lazy-load)
        </div>
      ) : (
        <div className="h-[80vh] bg-gray-50">
          Full CourtReserve embed iframe goes here
        </div>
      )}
    </div>
  );
}
