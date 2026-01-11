import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Container } from "@/components/container";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="min-h-[calc(100dvh-4rem)]">
        <Container className="py-24">{children}</Container>
      </main>
      <SiteFooter />
    </div>
  );
}
