import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-5xl p-4 sm:p-6">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
