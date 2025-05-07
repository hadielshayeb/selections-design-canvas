
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
              <a href="#" className="hover:text-white/80 transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-white/80 transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="hover:text-white/80 transition-colors" aria-label="Pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                  <path d="M21 8v8a5 5 0 0 1 -5 5H8a5 5 0 0 1 -5 -5V8a5 5 0 0 1 5 -5h8a5 5 0 0 1 5 5z"></path>
                  <line x1="8" y1="21" x2="8" y2="13.5"></line>
                  <path d="M10.5 13.5c2.5 0 4.5 -2 4.5 -4.5c0 -3 -4 -3 -4 0"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-white/80 transition-colors" aria-label="Houzz">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <path d="M13 12H9"></path>
                  <path d="M13 8H9"></path>
                  <path d="M13 16H9"></path>
                </svg>
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
              <p>123 Design Street</p>
              <p>Design City, ST 12345</p>
              <p>Phone: (555) 123-4567</p>
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
