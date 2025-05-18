
import { Card } from "@/components/ui/card";

const LogoSection = () => {
  const logos = [
    { 
      name: "Hero Certified Burgers", 
      alt: "Hero Certified Burgers logo", 
      logo: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/restaurant/cover/b63a7d43-9a09-4242-bc69-a868384c8f3b.png" 
    },
    { 
      name: "Baskin Robbins", 
      alt: "Baskin Robbins logo", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Baskin-Robbins_logo.svg/1200px-Baskin-Robbins_logo.svg.png" 
    },
    { 
      name: "University of Toronto", 
      alt: "University of Toronto logo", 
      logo: "https://static.wikia.nocookie.net/logopedia/images/a/aa/University_of_Toronto.png/revision/latest/scale-to-width-down/300?cb=20100916042554" 
    },
    { 
      name: "Toronto Metropolitan University", 
      alt: "Toronto Metropolitan University Logo", 
      logo: "https://www.torontomu.ca/content/dam/brand/global/images/brand-toolkit/brand-toolkit-1.jpg" 
    },
    { 
      name: "City of Mississauga", 
      alt: "City of Mississauga logo", 
      logo: "https://mbot.com/wp-content/uploads/2020/03/City-of-Mississauga.jpg" 
    },
    { 
      name: "Metrolinx", 
      alt: "Metrolinx logo", 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_EC5k0qJtccX1xqF5gsfEZm9J0nDst4BlGg&s" 
    },
    { 
      name: "Dufferin Peel Catholic District School Board", 
      alt: "Dufferin Peel Catholic District School Board logo", 
      logo: "https://www.ocsta.on.ca/ocsta/wp-content/uploads/2019/02/logos_005-Dufferin-Peel-Catholic-District-School-Board.jpg" 
    },
    { 
      name: "Snug Harbour", 
      alt: "Snug Harbour logo", 
      logo: "https://media.glassdoor.com/sqll/1183738/snug-harbour-seafood-bar-and-grill-squarelogo-1536043588734.png" 
    },
    { 
      name: "Mucho Burrito", 
      alt: "Mucho Burrito logo", 
      logo: "https://assets.simon.com/tenantlogos/29736.png" 
    },
    { 
      name: "City of Brampton", 
      alt: "City of Brampton logo", 
      logo: "https://bloximages.chicago2.vip.townnews.com/bramptonguardian.com/content/tncms/assets/v3/editorial/6/14/6145bafb-4020-51fe-92b2-e08a4ed6d7a3/65172e5fae1d4.image.jpg?resize=1200%2C900" 
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
