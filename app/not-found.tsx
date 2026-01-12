import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-6 text-center">
      <h1 className="text-6xl font-black text-brand-yellow-500">404</h1>
      <h2 className="text-3xl font-bold text-white">Page not found</h2>
      <p className="max-w-md text-white/70">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
        have been moved or deleted.
      </p>
      <Button asChild>
        <Link href="/">Return home</Link>
      </Button>
    </div>
  );
}
