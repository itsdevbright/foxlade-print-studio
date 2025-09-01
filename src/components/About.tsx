import { Button } from "@/components/ui/button";
import foxLogo from "@/assets/fox.png";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Crafting Excellence Since Day One
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Foxlade, we believe that exceptional printing goes beyond just putting ink on paper. It's about understanding your vision, your brand, and your goals to create materials that truly represent who you are.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our team of skilled craftspeople and designers work with state-of-the-art equipment to ensure every project meets our exacting standards. Whether you're a startup looking to make your mark or an established business refreshing your brand, we're here to bring your ideas to life.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">5000+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">4000+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">5</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
            
            <Button variant="hero" size="lg">
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-accent rounded-2xl p-8 shadow-accent">
              <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                <img src={foxLogo} alt="Foxlade Logo" className="w-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;