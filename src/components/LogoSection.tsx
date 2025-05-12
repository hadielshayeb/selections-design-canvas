
import { Card } from "@/components/ui/card";

const LogoSection = () => {
  const logos = [
    { 
      name: "Hero Certified Burgers", 
      alt: "Hero Certified Burgers logo", 
      logo: "https://upload.wikimedia.org/wikipedia/en/5/5b/Hero_Certified_Burgers_logo.jpg" 
    },
    { 
      name: "Baskin Robbins", 
      alt: "Baskin Robbins logo", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Baskin-Robbins_logo.svg/1200px-Baskin-Robbins_logo.svg.png" 
    },
    { 
      name: "University of Toronto", 
      alt: "University of Toronto logo", 
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/University_of_Toronto_seal.svg/1200px-University_of_Toronto_seal.svg.png" 
    },
    { 
      name: "Toronto Metropolitan University", 
      alt: "Toronto Metropolitan University logo", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Toronto_Metropolitan_University_logo.svg/1200px-Toronto_Metropolitan_University_logo.svg.png" 
    },
    { 
      name: "City of Mississauga", 
      alt: "City of Mississauga logo", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Mississauga.svg/1200px-Flag_of_Mississauga.svg.png" 
    },
    { 
      name: "Metrolinx", 
      alt: "Metrolinx logo", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Metrolinx_logo.svg/1200px-Metrolinx_logo.svg.png" 
    },
    { 
      name: "Dufferin Peel Catholic District School Board", 
      alt: "Dufferin Peel Catholic District School Board logo", 
      logo: "https://www3.dpcdsb.org/media/5517/dpcdsb-logo-horizontal-blue.jpg" 
    },
    { 
      name: "Snug Harbour", 
      alt: "Snug Harbour logo", 
      logo: "https://snugharbourrestaurant.com/wp-content/uploads/2018/02/cropped-cropped-logo-1.jpg" 
    },
    { 
      name: "Mucho Burrito", 
      alt: "Mucho Burrito logo", 
      logo: "https://upload.wikimedia.org/wikipedia/en/f/ff/Mucho_Burrito_logo.png" 
    },
    { 
      name: "City of Brampton", 
      alt: "City of Brampton logo", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Brampton_Logo.svg/1200px-Brampton_Logo.svg.png" 
    },
  ];

  return (
    <section className="section bg-secondary/50 py-16">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="mb-12 max-w-3xl mx-auto">
          <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-6">
            Proud Canadian business of exceptional quality and service for over 30 years
          </h3>
          <p className="text-lg font-medium text-primary">Trusted by top Canadian brands</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
          {logos.map((logo, index) => (
            <Card key={index} className="flex items-center justify-center h-24 p-4 shadow-sm border border-gray-100">
              <img 
                src={logo.logo} 
                alt={logo.alt} 
                className="max-h-16 max-w-full filter grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
