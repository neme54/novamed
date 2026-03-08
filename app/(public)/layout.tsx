import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui/PageTransition";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { site } from "@/lib/data/site";

export default function PublicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <WhatsAppButton />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[9999] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-dark"
      >
        {site.accessibility.skipToContent}
      </a>
      <Navbar />
      <PageTransition>
        <main id="content" className="min-h-[70vh]">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
