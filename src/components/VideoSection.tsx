
import { Card, CardContent } from "@/components/ui/card";

const VideoSection = () => {
  return (
    <section id="video" className="section">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-title text-center mx-auto mb-16">Our Renovation Projects</h2>
        
        <Card className="overflow-hidden border-0 shadow-lg mx-auto max-w-4xl">
          <CardContent className="p-0">
            <div className="aspect-w-16 aspect-h-9 relative">
              <iframe
                src="https://www.youtube.com/embed/_P7IjAQvUHc"
                title="Selections Design Home Renovation Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VideoSection;
