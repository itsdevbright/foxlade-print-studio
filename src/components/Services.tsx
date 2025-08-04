import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Business Cards & Stationery",
    description: "Professional business cards, letterheads, and corporate stationery that make lasting impressions.",
    features: ["Premium cardstock", "Foil stamping", "Embossed finishes", "Custom designs"]
  },
  {
    title: "Large Format Printing",
    description: "Eye-catching banners, posters, and displays for events, retail, and outdoor advertising.",
    features: ["Weather-resistant materials", "Up to 10ft wide", "Vibrant colors", "Fast turnaround"]
  },
  {
    title: "Packaging & Labels",
    description: "Custom packaging solutions and product labels that showcase your brand beautifully.",
    features: ["Food-safe materials", "Custom shapes", "Waterproof options", "Brand-focused design"]
  },
  {
    title: "Brand Identity Design",
    description: "Complete branding packages including logo design, brand guidelines, and marketing materials.",
    features: ["Logo design", "Brand guidelines", "Marketing collateral", "Digital assets"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to completion, we offer comprehensive printing and branding solutions tailored to your unique needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;