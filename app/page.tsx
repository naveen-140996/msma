import AboutUs from "@/components/landing/AboutUs";
import EnquiryForm from "@/components/landing/EnquiryForm";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import HeroBanner from "@/components/landing/HeroBanner";
import ServicesSlider from "@/components/landing/ServicesSlider";
import WhyChooseUs from "@/components/landing/WhyChooseUs";

export default function Home() {
  return (
   <>
      {/* Fixed Header - stays on top when scrolling */}
      <Header />

      {/* Main Content - starts below header */}
      <main className="pt-16"> {/* pt-16 = height of header (h-16) */}
        
        {/* Hero Banner - Full screen slider */}
        <HeroBanner />

        {/* About Us Section */}
        <AboutUs />

        {/* Services Slider */}
        <ServicesSlider />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Enquiry/Contact Form */}
        <EnquiryForm />

      </main>

      {/* Footer at the bottom */}
      <Footer />
    </>
  );
}
