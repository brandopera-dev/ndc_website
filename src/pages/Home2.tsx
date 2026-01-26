import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronRight, Package, Warehouse, Globe, Truck, Ship, Container, Star, Play, BarChart3, Users, Clock, Shield, TrendingUp, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Home2 = () => {
  const services = [
    { 
      icon: Truck, 
      title: "Road Freight", 
      description: "Reliable ground transportation solutions with real-time tracking and flexible scheduling for all your cargo needs.",
      bgColor: "bg-[#1e3a5f]"
    },
    { 
      icon: Ship, 
      title: "Ocean Freight", 
      description: "Cost-effective sea shipping services with global coverage and comprehensive cargo handling expertise.",
      bgColor: "bg-[#2d4a6f]"
    },
    { 
      icon: Package, 
      title: "Warehousing", 
      description: "Secure storage facilities with advanced inventory management and distribution capabilities.",
      bgColor: "bg-[#1e3a5f]"
    },
    { 
      icon: Globe, 
      title: "Air Freight", 
      description: "Express air cargo services for time-sensitive shipments with worldwide network coverage.",
      bgColor: "bg-[#2d4a6f]"
    },
  ];

  const stats = [
    { value: "2,500+", label: "Delivered Packages" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "24/7", label: "Customer Support" },
    { value: "99%", label: "On-Time Delivery" },
  ];

  const features = [
    { icon: Shield, title: "Safe & Secure", description: "Your cargo is protected with comprehensive insurance coverage" },
    { icon: Clock, title: "On-Time Delivery", description: "We guarantee timely delivery with real-time tracking" },
    { icon: TrendingUp, title: "Cost Effective", description: "Competitive pricing without compromising on quality" },
    { icon: Users, title: "Expert Team", description: "Experienced professionals dedicated to your success" },
  ];

  const pricingPlans = [
    { 
      name: "Basic", 
      price: "$299", 
      period: "/month", 
      features: ["Up to 100 shipments", "Basic tracking", "Email support", "Standard delivery"],
      recommended: false
    },
    { 
      name: "Standard", 
      price: "$599", 
      period: "/month", 
      features: ["Up to 500 shipments", "Real-time tracking", "Priority support", "Express delivery", "Insurance included"],
      recommended: true
    },
    { 
      name: "Premium", 
      price: "$999", 
      period: "/month", 
      features: ["Unlimited shipments", "Advanced tracking", "24/7 support", "Same-day delivery", "Full insurance", "Dedicated manager"],
      recommended: false
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#1f1f1f] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/high-angle-view-industry-factory.jpg" 
            alt="Logistics Hub"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1f1f1f]/90 to-[#1f1f1f]/95" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Delivering More Than Just Freight
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
              Experience seamless logistics solutions that transform your supply chain into a competitive advantage with our comprehensive services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button className="bg-[#e11a1a] hover:bg-red-700 text-white px-8 py-6 rounded-full text-base font-semibold inline-flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full text-base font-semibold inline-flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase mb-4">OUR SERVICES</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              What We Can Do For You
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className={`${service.bgColor} rounded-2xl p-8 text-white hover:scale-105 transition-transform duration-300`}>
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-6">{service.description}</p>
                <button className="text-white inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[#1f1f1f] mb-2">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase mb-4">WHY CHOOSE US</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              We Provide Best Features
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#e11a1a]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-[#e11a1a]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg"
                alt="Logistics Operations"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <p className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase mb-4">ABOUT US</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                We Are Trusted Logistics Company Since 1990
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 30 years of experience in the logistics industry, we have built a reputation for reliability, efficiency, and customer satisfaction. Our team of experts is dedicated to providing you with the best service possible.
              </p>
              <div className="space-y-4 mb-8">
                {["Real-time Tracking System", "24/7 Customer Support", "Secure & Insured Delivery", "Global Network Coverage"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#e11a1a]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#e11a1a]" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button className="bg-[#e11a1a] hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase mb-4">PRICING PLANS</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Choose Your Best Plan
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative p-8 rounded-2xl border-2 ${
                  plan.recommended 
                    ? 'border-[#e11a1a] bg-[#e11a1a] text-white shadow-2xl scale-105' 
                    : 'border-gray-200 bg-white hover:border-[#e11a1a]/50 hover:shadow-xl'
                } transition-all duration-300`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#e11a1a] px-6 py-1 rounded-full text-sm font-bold">
                    Recommended
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-4 ${plan.recommended ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${plan.recommended ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.recommended ? 'text-white/80' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 ${plan.recommended ? 'text-white' : 'text-[#e11a1a]'}`} />
                      <span className={plan.recommended ? 'text-white' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full rounded-full py-6 font-semibold ${
                    plan.recommended 
                      ? 'bg-white text-[#e11a1a] hover:bg-gray-100' 
                      : 'bg-[#e11a1a] text-white hover:bg-red-700'
                  }`}
                >
                  Choose Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase mb-4">OUR TEAM</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Meet Our Expert Team
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "John Anderson", role: "CEO & Founder", image: "/images/Social Media Size/NDC--de-KATI101-sm.jpg" },
              { name: "Sarah Mitchell", role: "Operations Manager", image: "/images/Social Media Size/NDC--de-KATI107-sm.jpg" },
              { name: "Michael Chen", role: "Logistics Director", image: "/images/Social Media Size/NDC--de-KATI121-sm.jpg" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1f1f1f] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Contact us today and let's discuss how we can help transform your logistics operations.
          </p>
          <Link to="/contact">
            <Button className="bg-[#e11a1a] hover:bg-red-700 text-white px-10 py-6 rounded-full text-lg font-semibold inline-flex items-center gap-2">
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home2;
