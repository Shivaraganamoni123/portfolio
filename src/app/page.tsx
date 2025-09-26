import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { PortfolioShowcaseSection } from '@/components/portfolio-showcase-section';
import { ConnectSection } from '@/components/connect-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <PortfolioShowcaseSection />
        <ConnectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
