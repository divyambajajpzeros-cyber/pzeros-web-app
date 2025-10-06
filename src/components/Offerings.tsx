
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Database, Activity, Search } from 'lucide-react';

const offerings = [
  {
    title: "Computer Vision",
    description: "Advanced visual analytics and recognition systems for enterprise applications.",
    icon: Search,
    link: "/computer-vision",
    color: "bg-tech-gray/20",
  },
  {
    title: "ERP Solutions",
    description: "AI-powered enterprise resource planning systems for operational excellence.",
    icon: Database,
    link: "/erp-solutions",
    color: "bg-tech-gray/20",
  },
  {
    title: "Simulation Acceleration",
    description: "High-performance computational simulations with 1000x speed improvement.",
    icon: Activity,
    link: "/simulation",
    color: "bg-tech-gray/20",
  }
];

const Offerings = () => {
  return (
      <section id="offerings" className="py-20 bg-tech-darker">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
            <p className="text-tech-muted max-w-2xl mx-auto">
              Discover our comprehensive suite of AI-powered solutions designed to transform your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-8xl mx-auto">
            {offerings.map((offering) => (
                <div key={offering.title}
                     className="bg-tech-gray/20 p-8 border border-tech-gray/20 hover:border-tech-purple transition-all rounded-xl">
                  <div className={`h-14 w-14 bg-tech-purple/20 rounded-lg flex items-center justify-center mb-6`}>
                    <offering.icon className="h-8 w-8 text-tech-purple" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{offering.title}</h3>
                  <p className="text-tech-text mb-6">
                    {offering.description}
                  </p><Link to={offering.link}>
                  <Button variant="outline" className="border-tech-purple bg-tech-purple hover:bg-tech-darker hover:text-tech-purple/90 text-white btn-glow duration-300 ">
                    Learn More
                  </Button></Link>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Offerings;
