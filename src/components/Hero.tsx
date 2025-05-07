
import { Button } from "@/components/ui/button";

const Hero = () => {
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
            Elevate your living and working environments with our expert interior design and 
            selection services tailored to your unique style and needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Explore Our Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20"
            >
              Book a Consultation
            </Button>
          </div>
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
