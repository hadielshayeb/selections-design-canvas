
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    _cc: "khaled@selectionsdesign.com" // Adding CC for Khaled
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/myzwovvd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast({
          title: "Success!",
          description: "Thank you for your message! We'll be in touch soon.",
        });
        setFormData({ 
          name: "", 
          email: "", 
          phone: "", 
          message: "", 
          _cc: "khaled@selectionsdesign.com" 
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-title text-center mx-auto mb-16">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-playfair font-medium mb-3">Contact Information</h3>
                <p className="text-foreground/80">
                  We'd love to hear from you. Reach out to us for consultations, 
                  questions, or to schedule a meeting.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Email</h4>
                <a href="mailto:info@selectionsdesign.com" className="text-primary hover:text-primary/80">
                  info@selectionsdesign.com
                </a>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Phone</h4>
                <a href="tel:+15551234567" className="text-primary hover:text-primary/80">
                  +1 (905)-629-0001
                </a>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Office</h4>
                <address className="not-italic">
                  19-5200 Dixie Rd. <br />
                  Mississauga, Ontario <br />
                  L4W 1E4
                </address>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Hours</h4>
                <p>Monday - Friday: 9am - 7pm</p>
                <p>Weekend: By appointment</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="shadow-md border-0">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-medium">Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-medium">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="font-medium">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="font-medium">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
