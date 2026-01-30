import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplet, Network, Truck, TrendingUp, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CTASimple } from '@/components/cta';
import { CTAWarehouseExample } from '@/components/cta/CTAExamples';

const services = [
  {
    id: 'fuel-management',
    icon: Droplet,
    title: "Fuel management & infrastructures",
    description: "Conception, déploiement et exploitation d’infrastructures de stockage et de distribution d’hydrocarbures sur site.",
    highlighted: false
  },
  {
    id: 'reseaux-distribution',
    icon: Network,
    title: "Réseaux de distribution",
    description: "Approvisionnement et gestion de stations-service : planification des réassorts, traçabilité et standards de sécurité.",
    highlighted: true
  },
  {
    id: 'transport-transit',
    icon: Truck,
    title: "Transport & transit",
    description: "Transport industriel et transit des intrants et matériaux sur sites avec coordination opérationnelle continue.",
    highlighted: false
  },
];

const stats = [
  { value: '25', label: 'Years in Service' },
  { value: '300+', label: 'Team Experts We Have' },
  { value: '500+', label: 'Successful Delivery' },
  { value: '99%', label: 'On-Time Delivery Rate' },
];

const processSteps = [
  {
    number: '01',
    title: 'In-Depth Consultation',
    description: 'A careful assessment of your logistics needs to ensure tailored solutions that meet your specific requirements.',
  },
  {
    number: '02',
    title: 'Strategic Planning',
    description: 'Designing an optimal plan to ensure efficient delivery of your goods with maximum cost-effectiveness.',
  },
  {
    number: '03',
    title: 'Efficient Execution',
    description: 'Precise coordination of every step in the shipping process with real-time tracking and monitoring.',
  },
  {
    number: '04',
    title: 'On-Time Delivery',
    description: 'Reliable and punctual delivery of your shipments, ensuring customer satisfaction and business continuity.',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#1f1f1f] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/images_ndc/TRANSPORT/TR -1.png"
            alt="Nos Services NDC"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1f1f1f]/90 to-[#1f1f1f]/95" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Services</span>
          </div>
          
          {/* Content */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#1f1f1f]/10 border border-[#e11a1a]/20 text-[#e11a1a] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[#e11a1a] rounded-full animate-pulse"></span>
              OUR SERVICES
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Logistics <span className="text-[#e11a1a] italic">Solutions</span> for Every Need
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
              Comprehensive logistics solutions designed to streamline your supply chain and enhance your business operations. From warehousing to last-mile delivery, we deliver excellence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="/contact">
                <Button className="bg-[#e11a1a] hover:bg-red-700 text-white px-8 py-6 rounded-full text-base font-semibold inline-flex items-center gap-2">
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full text-base font-semibold inline-flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-1/2">
              <span className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-[#e11a1a] rounded-full"></span>
                OUR COMMUNITY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 leading-tight">
                Join a Growing <span className="text-[#e11a1a]">Community</span> of Business<br />
                and Logistics Partners
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                A thriving community of businesses and logistics partners, optimizing supply chains and driving growth. 
                Together, we're building the future of logistics in Africa.
              </p>
              <Button className="mt-8 bg-[#1f1f1f] hover:bg-[#1f1f1f]/90 text-white rounded-full px-8 group">
                Join Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="text-5xl md:text-6xl font-bold text-[#1f1f1f] mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 ndc-section-red">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-[#e11a1a] rounded-full"></span>
              NDC SERVICES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
              Comprehensive <span className="text-[#e11a1a]">NDC</span> Services Tailored to<br />
              Meet Your Unique Needs
            </h2>
            <p className="text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
              Our vision is to be the leading logistics partner, recognized for excellence in supply chain management, 
              innovation, and customer satisfaction. We deliver solutions that drive your business forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              
              return (
                <div
                  key={service.id}
                  className={`group p-8 rounded-2xl transition-all duration-300 hover:shadow-xl ${
                    service.highlighted
                      ? 'bg-[#1f1f1f] text-white' 
                      : 'bg-white border border-gray-200 hover:border-[#e11a1a]/30'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    service.highlighted ? 'bg-white/10' : 'bg-[#1f1f1f]/10'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${service.highlighted ? 'text-white' : 'text-[#e11a1a]'}`} />
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-4 ${service.highlighted ? 'text-white' : 'text-foreground'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm mb-8 leading-relaxed ${service.highlighted ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {service.description}
                  </p>
                  
                  <Link to={`/services/${service.id}`}>
                    <Button 
                      className={`rounded-full group/btn ${
                        service.highlighted
                          ? 'bg-white text-[#1f1f1f] hover:bg-white/90'
                          : 'bg-[#1f1f1f] text-white hover:bg-[#1f1f1f]/90'
                      }`}
                      size="sm"
                    >
                      Découvrir
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-[#e11a1a] rounded-full"></span>
              WORK PROCESS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">
              Our Proven <span className="text-[#e11a1a]">Process</span> for Excellence
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Our process is simple yet effective. Every project is different, but we've seen thousands since our launch. 
                Our experience is your advantage. We combine proven methodologies with innovative solutions.
              </p>
              
              <div className="relative overflow-hidden">
                <img
                  src="/images/vehicles-coal-mine-view.jpg"
                  alt="Work Process"
                  className="w-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f1f]/80 via-[#0a1628]/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                    <p className="text-white font-semibold text-lg">Trusted by 500+ Companies</p>
                    <p className="text-white/80 text-sm mt-1">Delivering excellence across Africa</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-10">
              {processSteps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="text-6xl font-bold text-[#e11a1a]/20 leading-none">{step.number}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <CTAWarehouseExample />

      {/* CTA Section 2 */}
      <CTASimple
        title="Streamline Your Logistics Today!"
        description="Discover a world of effortless and seamless logistics, ready to transform the way you move forward."
        buttonText="Get a Quote"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default Services;
