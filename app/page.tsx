import Hero from "@/components/landing/Hero";
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import AboutSection from "@/components/landing/AboutSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen ">
        <Hero />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
