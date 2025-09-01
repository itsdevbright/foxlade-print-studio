import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss your printing and branding needs. Get in touch today for a free consultation and quote.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-0 shadow-soft">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-accent-foreground font-bold">📞</span>
              </div>
              <CardTitle className="text-primary">Call Us</CardTitle>
              <CardDescription>Speak directly with our team</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold text-primary mb-2">+(234) 811-067-7711</p>
              <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM WAT</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-soft">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-accent-foreground font-bold">✉️</span>
              </div>
              <CardTitle className="text-primary">Email Us</CardTitle>
              <CardDescription>Send us your project details</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold text-primary mb-2">askfoxladelimited@gmail.com</p>
              <p className="text-sm text-muted-foreground">Response within 24 hours</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-soft">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-accent-foreground font-bold">📍</span>
              </div>
              <CardTitle className="text-primary">Visit Us</CardTitle>
              <CardDescription>See our workshop in action</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold text-primary mb-2">70 Omeife Bus Stop Obiagu Road</p>
              <p className="text-sm text-muted-foreground">Enugu North, NG 400102</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button variant="cta" size="lg" className="text-lg px-8 py-4">
            Get Your Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;