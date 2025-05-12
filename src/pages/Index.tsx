
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoSection from "@/components/LogoSection";
import Services from "@/components/Services";
import VideoSection from "@/components/VideoSection";
import Portfolio from "@/components/Portfolio";
import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoSection />
      <Services />
      <VideoSection />
      <Portfolio />
      <AboutUs />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
