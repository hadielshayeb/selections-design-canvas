
import { Card } from "@/components/ui/card";

const LogoSection = () => {
  const logos = [
    { 
      name: "Hero Certified Burgers", 
      alt: "Hero Certified Burgers logo", 
      logo: "https://mma.prnewswire.com/media/1714699/HERO_Burger_HERO_Certified_Burgers_and_Technics_Launch_Silent_He.jpg" 
    },
    { 
      name: "Baskin Robbins", 
      alt: "Baskin Robbins logo", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Baskin-Robbins_logo.svg/1200px-Baskin-Robbins_logo.svg.png" 
    },
    { 
      name: "University of Toronto", 
      alt: "University of Toronto logo", 
      logo: "https://www.freelogovectors.net/wp-content/uploads/2019/09/university-of-toronto-logo.png" 
    },
    { 
      name: "Toronto Metropolitan University", 
      alt: "Toronto Metropolitan University Logo", 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIa2llH6EGI6UOATce-cAoUasW7-BbYmnHw&s" 
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
      logo: "https://styles.redditmedia.com/t5_2dmfyk/styles/communityIcon_tytnc3da6lc41.jpeg?format=pjpg&s=33beb80f419acb2e82fc77b9dc8def20222dde79" 
    },
    { 
      name: "Snug Harbour", 
      alt: "Snug Harbour logo", 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2otj3ZQKq-jTIkaIobWqeg2PrrSFyYScMe1OqhKo_9EXbIhcXbwT-Drw8XB1hQZML1es&usqp=CAU" 
    },
    { 
      name: "Mucho Burrito", 
      alt: "Mucho Burrito logo", 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDSZN1oGDVDnQxBiWMf9zUgget7QSwFa3JPw&s" 
    },
    { 
      name: "City of Brampton", 
      alt: "City of Brampton logo", 
      logo: "https://www.katika.com/wp-content/uploads/2019/03/Brampton_colour.png" 
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
