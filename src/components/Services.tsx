
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesData = [
  {
    title: "Interior Design",
    description: "From concept to completion, we transform spaces with thoughtful design that reflects your lifestyle and preferences.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
        <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
      </svg>
    ),
  },
  {
    title: "Material Selection",
    description: "We help you navigate countless options for finishes, fabrics, and materials to create a cohesive look that meets your needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" />
        <rect width="18" height="12" x="3" y="6" rx="2" />
      </svg>
    ),
  },
  {
    title: "Space Planning",
    description: "Maximize functionality with strategic layouts that enhance flow and make the most of your available space.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v18H3z" />
        <path d="M12 3v18" />
      </svg>
    ),
  },
  {
    title: "Project Management",
    description: "We oversee all aspects of your design project, ensuring seamless execution from planning to installation.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M15 2H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="section bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-title text-center mx-auto mb-16">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ServicesData.map((service, index) => (
            <Card key={index} className="bg-background shadow-md hover:shadow-lg transition-shadow border-0">
              <CardHeader>
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full text-primary mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-playfair">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            We offer personalized design solutions that cater to your individual style preferences and functional needs. 
            From residential to commercial spaces, our experts deliver exceptional results.
          </p>
          <a 
            href="#contact" 
            className="inline-flex font-medium text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
