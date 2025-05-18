
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Kitchen",
    category: "residential",
    image: "https://i.postimg.cc/c4gdJMNr/Screenshot-2025-01-02-142413.jpg",
  },
  {
    id: 2,
    title: "Luxury Office Space",
    category: "commercial",
    image: "https://static.vecteezy.com/system/resources/previews/029/698/748/large_2x/luxury-office-and-working-room-in-executive-office-ai-generated-free-photo.jpg",
  },
  {
    id: 3,
    title: "Contemporary Kitchen Design",
    category: "residential",
    image: "https://i.postimg.cc/LhdvTvn6/20190327-IMG-8086.jpg",
  },
  {
    id: 4,
    title: "Sleek Washroom Suite",
    category: "residential",
    image: "https://i.postimg.cc/7hJm0jPW/20190327-IMG-8150.jpg",
  },
  {
    id: 5,
    title: "Elegant Master Bedroom",
    category: "residential",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1780&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Corporate Headquarters",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="section">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-title text-center mx-auto mb-16">Our Portfolio</h2>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={cn(
                  "text-sm md:text-base", 
                  filter === category.id ? "bg-primary text-white" : ""
                )}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-item group overflow-hidden rounded-md">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-playfair font-medium text-white">{project.title}</h3>
                    <p className="text-white/80 capitalize">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
