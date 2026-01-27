import { Button } from "@/components/ui/button";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#f5f5f5] pt-20 lg:pt-24 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 lg:px-8 py-12 lg:py-20">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
          {/* Left - Text Content */}
          <div className="max-w-xl">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in">
              Shipping Vehicles With The{" "}
              <span className="text-red-600">Best</span>{" "}
              <span className="inline-flex items-center gap-2 mx-1">
                <span className="inline-flex items-center justify-center">
                  <svg width="48" height="32" viewBox="0 0 48 32" fill="none" className="text-red-600">
                    <ellipse cx="12" cy="16" rx="10" ry="14" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <ellipse cx="24" cy="16" rx="10" ry="14" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <ellipse cx="36" cy="16" rx="10" ry="14" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
              </span>
              Advantages In The Industry
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg max-w-md mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="font-semibold text-foreground">Features and Benefits Galore</span>
            </p>
          </div>

          {/* Right - Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative overflow-hidden shadow-2xl">
              <img
                src={heroTruck}
                alt="Transport de véhicules"
                className="w-full h-64 lg:h-80 object-cover grayscale"
              />
            </div>
          </div>
        </div>

        {/* Quote Form */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl max-w-4xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-foreground">Request a Shipping Quote</h3>
            {/* Step indicators */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">1</div>
              <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-sm font-medium">2</div>
              <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-sm font-medium">3</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-foreground">
                Pick Up
              </label>
              <input
                type="text"
                placeholder="Origin Zip Code"
                className="bg-gray-100 border-0 rounded-lg px-4 py-3.5 text-foreground placeholder:text-gray-400 focus:ring-2 focus:ring-red-600/20 focus:outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-foreground">
                Delivery
              </label>
              <input
                type="text"
                placeholder="Destination Zip Code"
                className="bg-gray-100 border-0 rounded-lg px-4 py-3.5 text-foreground placeholder:text-gray-400 focus:ring-2 focus:ring-red-600/20 focus:outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-foreground">
                Pick Up
              </label>
              <input
                type="text"
                placeholder="MM/DD/YYYY"
                className="bg-gray-100 border-0 rounded-lg px-4 py-3.5 text-foreground placeholder:text-gray-400 focus:ring-2 focus:ring-red-600/20 focus:outline-none transition-all"
              />
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-lg h-12 px-8 font-semibold">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
