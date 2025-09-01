import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import foxLogo from '@/assets/fox.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={foxLogo} alt="Foxlade Logo" className="h-7" />
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Your trusted partner for exceptional printing and creative branding solutions. 
              Bringing your vision to life with precision and artistry.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/foxlade_ltd/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent cursor-pointer transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://x.com/foxlade_press/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent cursor-pointer transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/foxladelimited/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent cursor-pointer transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Business Cards</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Large Format</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Packaging</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Brand Design</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="tel:+2348110677711" className="hover:text-accent transition-colors">+(234) 811-067-7711</a></li>
              <li><a href="mailto:askfoxladelimited@gmail.com" className="hover:text-accent transition-colors">askfoxladelimited@gmail.com</a></li>
              <li><a href="https://www.google.com/maps/search/?api=1&query=70+Omeife+Bus+Stop+Obiagu+Road+Enugu+North,+NG+400102" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">70 Omeife Bus Stop Obiagu Road<br />Enugu North, NG 400102</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 Foxlade. All rights reserved. Crafted with care by <a href="https://github.com/itsdevbright" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">itdevbright</a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;