import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    location: "New York → Los Angeles",
    rating: 5,
    text: "Excellent service! My vehicle was delivered in perfect condition and on time. The team is very professional and responsive.",
  },
  {
    name: "Sarah Johnson",
    location: "Miami → Seattle",
    rating: 5,
    text: "I had my classic car transported. Enclosed transport, excellent communication throughout the journey. Highly recommend!",
  },
  {
    name: "Michael Brown",
    location: "Chicago → Houston",
    rating: 5,
    text: "Very competitive pricing and top-notch service quality. Real-time tracking allowed me to follow my vehicle every step of the way.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#1f1f1f]/10 text-red-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Our Customer Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-red-600 text-red-600"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1f1f1f]/10 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
