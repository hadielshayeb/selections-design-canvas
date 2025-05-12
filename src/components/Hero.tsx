
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send email to the specified address
    console.log("Sending consultation request to hadi@projectr.dev");
    console.log("Consultation requested with email:", email);
    toast.success("Thank you! We'll contact you soon for a consultation.");
    setEmail("");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-20 text-white">
        <div className="max-w-lg md:max-w-2xl space-y-6 mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight">
            Creating Your <span className="italic">Perfect</span> Space
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Elevate your living, kitchen, and working environments with our expert interior design and 
            selection services tailored to your unique style and needs.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/20 border-white text-white placeholder:text-white/70 focus-visible:ring-white"
            />
            <Button
              type="submit"
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 whitespace-nowrap font-medium"
            >
              Book a Consultation
            </Button>
          </form>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a href="#services" aria-label="Scroll down">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
