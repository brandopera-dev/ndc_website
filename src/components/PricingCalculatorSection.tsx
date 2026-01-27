import { Button } from "@/components/ui/button";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

const PricingCalculatorSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#1f1f1f]/10 text-red-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            PRICING
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How much will shipping<br />your car cost?
          </h2>
        </div>

        {/* Calculator Form */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Where are you shipping from?
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Enter zip code"
                  className="w-full bg-muted/50 border-0 rounded-lg pl-11 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-red-600/20 focus:outline-none transition-all"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Where are you shipping to?
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Enter zip code"
                  className="w-full bg-muted/50 border-0 rounded-lg pl-11 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-red-600/20 focus:outline-none transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Vehicle Type
              </label>
              <select className="w-full bg-muted/50 border-0 rounded-lg px-4 py-3 text-foreground focus:ring-2 focus:ring-red-600/20 focus:outline-none transition-all">
                <option>Select vehicle type</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Truck</option>
                <option>Van</option>
                <option>Motorcycle</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Transport Type
              </label>
              <select className="w-full bg-muted/50 border-0 rounded-lg px-4 py-3 text-foreground focus:ring-2 focus:ring-red-600/20 focus:outline-none transition-all">
                <option>Select transport type</option>
                <option>Open Transport</option>
                <option>Enclosed Transport</option>
              </select>
            </div>
          </div>

          <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg h-14 text-lg">
            Get Instant Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Get your free quote in seconds. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculatorSection;
