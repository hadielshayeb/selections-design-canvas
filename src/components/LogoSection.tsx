
import { Card } from "@/components/ui/card";

const LogoSection = () => {
  const logos = [
    { name: "Hero Certified Burgers", alt: "Hero Certified Burgers logo" },
    { name: "Baskin Robins", alt: "Baskin Robins logo" },
    { name: "University of Toronto", alt: "University of Toronto logo" },
    { name: "Ryerson University", alt: "Ryerson University logo" },
    { name: "City of Mississauga", alt: "City of Mississauga logo" },
    { name: "Metrolinx", alt: "Metrolinx logo" },
    { name: "Dufferin Peel Catholic District School Board", alt: "Dufferin Peel Catholic District School Board logo" },
    { name: "Snug Harbour", alt: "Snug Harbour logo" },
    { name: "Mucho Burrito", alt: "Mucho Burrito logo" },
    { name: "City of Brampton", alt: "City of Brampton logo" },
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
              <div className="text-center text-gray-600 font-medium">{logo.name}</div>
              {/* Replace with actual logos when available */}
              {/* <img src={`/logos/${logo.name.toLowerCase().replace(/\s+/g, '-')}.png`} alt={logo.alt} className="max-h-16" /> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
