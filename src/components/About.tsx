
import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-tech-lightRed section-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About AetherForge</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-tech-purple to-tech-blue mx-auto"></div>
          </div>
          
          <div className="prose prose-invert max-w-none text-center md:text-left">
            <p className="text-lg mb-6">
              AetherForge Solutions is at the forefront of AI innovation, delivering transformative technologies 
              that redefine what's possible in enterprise systems and computational simulations.
            </p>
            
            <p className="text-lg mb-6">
              Founded by a team of AI specialists, computational scientists, and enterprise architects, 
              we bring decades of combined experience from leading tech companies and research institutions.
            </p>
            
            <p className="text-lg">
              Our mission is to accelerate human progress by removing computational barriers, 
              allowing organizations to focus on innovation rather than implementation. 
              We believe in creating AI that amplifies human creativity and problem-solving abilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
