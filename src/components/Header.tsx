import { Button } from "@/components/ui/button";
import foxladeLogo from "@/assets/foxlade-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={foxladeLogo} alt="Foxlade logo" className="h-7" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-smooth">
              Services
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">
              About
            </a>
            <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-smooth">
              Portfolio
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">
              Contact
            </a>
          </div>
          
          <Button variant="cta" size="sm">
            Get Quote
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;