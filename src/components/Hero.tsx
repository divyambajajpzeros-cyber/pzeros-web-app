
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = ({ scrollToServices }: { scrollToServices: () => void }) => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden section-pattern pt-16">
      <div className="hero-gradient"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight  animate-fade-in [animation-delay:200ms]">
              Shaping the Future of Business<br />
            <span className="text-gradient">With AI Innovation</span>
          </h1>
          <p className="text-lg md:text-xl text-tech-muted mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
              Empowering enterprises and accelerating simulations with next-gen AI solutions designed for tomorrow’s challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:600ms]">
           <Link to="/contact"><Button variant="outline" className="border-tech-purple bg-tech-purple hover:bg-tech-darker hover:text-tech-purple/90 text-white btn-glow px-8 py-6 text-lg">
              Get Started
            </Button></Link>
            <Button
                variant="outline"
                className="border-tech-purple text-tech-purple hover:bg-tech-purple/90 hover:text-white/90 px-8 py-6 text-lg"
                onClick={scrollToServices}
            >
              Explore Solutions
            </Button>

          </div>
        </div>
      </div>

      <div onClick={scrollToServices} className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
      </div>
    </section>
  );
};

export default Hero;
