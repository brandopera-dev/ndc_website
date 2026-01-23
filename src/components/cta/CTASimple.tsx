import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CTASimpleProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
}

export const CTASimple: React.FC<CTASimpleProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
}) => {
  return (
    <div className="w-full px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div
          className="bg-[#0a1628] rounded-3xl overflow-hidden shadow-2xl relative"
          style={{
            backgroundImage: backgroundImage 
              ? `linear-gradient(rgba(10, 22, 40, 0.85), rgba(10, 22, 40, 0.85)), url(${backgroundImage})`
              : 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="text-center p-12 lg:p-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
            <Link to={buttonLink}>
              <Button className="bg-white text-[#0a1628] hover:bg-gray-100 rounded-full px-10 py-6 text-base font-semibold inline-flex items-center gap-2">
                {buttonText}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASimple;
