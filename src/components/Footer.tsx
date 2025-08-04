const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">F</span>
              </div>
              <span className="text-2xl font-bold">Foxlade</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Your trusted partner for exceptional printing and creative branding solutions. 
              Bringing your vision to life with precision and artistry.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent cursor-pointer transition-colors">
                <span className="text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent cursor-pointer transition-colors">
                <span className="text-sm">t</span>
              </div>
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent cursor-pointer transition-colors">
                <span className="text-sm">in</span>
              </div>
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
              <li>(555) 123-4567</li>
              <li>hello@foxlade.com</li>
              <li>123 Creative Street<br />Design District, NY 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Foxlade. All rights reserved. Crafted with care for your brand.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;