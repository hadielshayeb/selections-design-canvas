
import { Facebook, Instagram, Linkedin, Pinterest } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-playfair text-xl mb-4">Selections</h3>
            <p className="mb-4 max-w-xs">
              Creating beautiful, functional spaces that inspire and delight. Your vision, our expertise.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/selectionsdesign/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/selectionsdesign/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/selections-interiors-and-design/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://ca.pinterest.com/selectionsdesign/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors" aria-label="Pinterest">
                <Pinterest size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white/80 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white/80 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white/80 transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-white/80 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white/80 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white/80 transition-colors">Interior Design</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors">Material Selection</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors">Space Planning</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors">Project Management</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors">Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg mb-4">Get In Touch</h4>
            <address className="not-italic space-y-2">
              <p>19-5200 Dixie Rd.</p>
              <p>Mississauga, Ontario L4W 1E4</p>
              <p>Phone: (905) 629-0001</p>
              <p>Email: info@selectionsdesign.com</p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center md:text-left md:flex md:justify-between md:items-center">
          <p>© {currentYear} Selections Interior & Design. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-sm mr-4 hover:text-white/80 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-white/80 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
