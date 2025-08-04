import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  {
    title: "Tech Startup Branding",
    category: "Brand Identity",
    description: "Complete rebrand including logo, business cards, and digital assets",
  },
  {
    title: "Restaurant Menu Design", 
    category: "Print Design",
    description: "Elegant menu design with custom illustrations and premium finishes",
  },
  {
    title: "Event Banners",
    category: "Large Format",
    description: "Series of promotional banners for annual tech conference",
  },
  {
    title: "Product Packaging",
    category: "Packaging",
    description: "Sustainable packaging design for artisanal food products",
  },
  {
    title: "Corporate Stationery",
    category: "Business Materials", 
    description: "Professional letterheads and business card suite",
  },
  {
    title: "Retail Signage",
    category: "Signage",
    description: "Eye-catching storefront and interior signage system",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our recent work and see how we've helped businesses across industries make their mark.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="group cursor-pointer overflow-hidden border-0 shadow-sm hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-8 h-8 bg-accent rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium text-accent bg-accent-muted px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;