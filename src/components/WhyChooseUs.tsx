
import React from 'react';
import { Brain, Target, Users, Globe } from 'lucide-react';

const reasons = [
  {
    icon: Brain,
    title: "AI Excellence",
    description: "Cutting-edge artificial intelligence solutions tailored for enterprise needs."
  },
  {
    icon: Target,
    title: "Proven Results",
    description: "Demonstrated success with 1000x performance improvements across industries."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "World-class team of AI researchers, engineers, and industry veterans."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Transforming businesses worldwide with innovative AI solutions."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-tech-lightRed section-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason) => (
              <div key={reason.title} 
                   className="bg-tech-lightRed/20 backdrop-blur-sm rounded-xl p-6 border border-tech-lightRed hover:border-tech-purple/40 transition-all">
                <div className="h-12 w-12 bg-tech-purple/20 rounded-lg flex items-center justify-center mb-4">
                  <reason.icon className="h-6 w-6 text-tech-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-tech-muted">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
