import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dinks Pickleball | Des Moines Indoor Pickleball",
  description:
    "Des Moines' largest indoor pickleball facility with 13 professional courts. Open daily 6am-12am.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-brand-blue-500 text-white antialiased"
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
