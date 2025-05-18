
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="section-title">About Selections</h2>
            <p className="text-lg mb-6">
              Selections Interiors & Design is a full service design and woodworking agency, 
              proudly servicing the GTA and Muskoka regions for over 30 years. 
              We bring state of the art inspiration from top designers to meet trends in modern and 
              traditional interior design and decor to your door. 
            </p>
            <p className="text-lg mb-6">
              Our approach combines creativity, technical expertise, and meticulous attention to detail. 
              We believe that great design should not only be beautiful but also enhance how you live 
              and interact with your space.
            </p>
            <p className="text-lg mb-8">
              Whether you're renovating a kitchen, single room, building a new home, or redesigning a commercial space, 
              our team will guide you through every step of the process, ensuring a seamless and enjoyable experience.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Learn More About Our Process
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-square relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2076&auto=format&fit=crop" 
                alt="Interior designer working" 
                className="w-full h-full object-cover rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
