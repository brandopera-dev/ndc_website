import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CTAWithBackgroundProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
  contentPosition?: 'left' | 'right' | 'center';
}

export const CTAWithBackground: React.FC<CTAWithBackgroundProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
  contentPosition = 'left',
}) => {
  const getContentAlignment = () => {
    switch (contentPosition) {
      case 'center':
        return 'text-center items-center';
      case 'right':
        return 'text-right items-end';
      default:
        return 'text-left items-start';
    }
  };

  return (
    <div className="w-full px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div
          className="rounded-3xl overflow-hidden shadow-2xl relative min-h-[400px] flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 22, 40, 0.75), rgba(10, 22, 40, 0.75)), url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className={`w-full p-12 lg:p-16 flex flex-col ${getContentAlignment()}`}>
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {title}
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                {description}
              </p>
              <Link to={buttonLink}>
                <Button className="bg-white text-[#0a1628] hover:bg-gray-100 rounded-full px-8 py-6 text-base font-semibold inline-flex items-center gap-2">
                  {buttonText}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAWithBackground;
