import { Button } from "@/components/ui/button";
import { Shield, Clock, CheckCircle } from "lucide-react";
import transportTrailer from "@/assets/transport-trailer.jpg";

const SecureTransportSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={transportTrailer}
                alt="Secure vehicle transportation"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block bg-red-50 text-red-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              SECURITY & RELIABILITY
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Secure and Reliable Vehicle Transportation
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg mb-8 leading-relaxed">
              We deliver more than shipments—we deliver trust, precision, and smart technology that moves businesses forward. Your vehicles are in safe hands with our experienced team and modern fleet.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Fully Insured Transport</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive insurance coverage for complete peace of mind</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">On-Time Delivery</h3>
                  <p className="text-sm text-muted-foreground">Reliable scheduling and timely delivery guaranteed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Professional Drivers</h3>
                  <p className="text-sm text-muted-foreground">Experienced and certified drivers handling your vehicle</p>
                </div>
              </div>
            </div>

            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecureTransportSection;
