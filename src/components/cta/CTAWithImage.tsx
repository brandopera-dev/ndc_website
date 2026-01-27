import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CTAWithImageProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imagePosition?: 'left' | 'right';
  variant?: 'default' | 'dark';
}

export const CTAWithImage: React.FC<CTAWithImageProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imagePosition = 'left',
  variant = 'default',
}) => {
  const bgColor = variant === 'dark' ? 'bg-[#1f1f1f]' : 'bg-[#1f1f1f]';
  const textColor = 'text-white';

  return (
    <div className="w-full px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div
          className={`${bgColor} rounded-3xl overflow-hidden shadow-2xl relative`}
          style={{
            backgroundImage: 'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.05) 0%, transparent 50%)',
          }}
        >
          <div className={`grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12 ${imagePosition === 'right' ? 'lg:grid-flow-dense' : ''}`}>
            {/* Image */}
            <div className={imagePosition === 'right' ? 'lg:col-start-2' : ''}>
              <div className="overflow-hidden">
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className={imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}>
              <h2 className={`text-3xl lg:text-4xl font-bold ${textColor} mb-4 leading-tight`}>
                {title}
              </h2>
              <p className={`${textColor}/80 text-lg mb-8 leading-relaxed`}>
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

export default CTAWithImage;
