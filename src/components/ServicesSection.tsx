import { 
  Car, 
  ShieldCheck, 
  Truck, 
  Ship, 
  Bike, 
  Globe,
  Package,
  Sparkles 
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Car",
    description: "Standard vehicle shipping",
  },
  {
    icon: Ship,
    title: "Shipping",
    description: "International transport",
  },
  {
    icon: ShieldCheck,
    title: "Enclosed",
    description: "Premium protection",
  },
  {
    icon: Package,
    title: "Import/Export",
    description: "Cross-border shipping",
  },
  {
    icon: Sparkles,
    title: "Enclosed/Exotic",
    description: "Luxury vehicles",
  },
  {
    icon: Truck,
    title: "Van/SUV",
    description: "Large vehicles",
  },
  {
    icon: Bike,
    title: "Motorcycle",
    description: "Two-wheel transport",
  },
  {
    icon: Globe,
    title: "RV/Caravan",
    description: "Recreational vehicles",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-50 text-red-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Vehicle{" "}
            <span className="inline-flex items-center gap-2 mx-1">
              <span className="inline-flex items-center justify-center bg-red-50 rounded-full px-3 py-1">
                <span className="text-xl">🚗</span>
              </span>
            </span>
            {" "}Shipping Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group text-center"
            >
              <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-50 transition-colors">
                <service.icon className="w-7 h-7 text-muted-foreground group-hover:text-red-600 transition-colors" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
