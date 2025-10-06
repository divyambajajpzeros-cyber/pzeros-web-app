
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Database, Activity } from 'lucide-react';

const ServicesOverview = () => {
  return (
    <section id="services" className="py-20 bg-tech-darker">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Solutions</h2>
          <p className="text-tech-text max-w-2xl mx-auto">
            Discover how our technologies are transforming the enterprise landscape 
            with unprecedented efficiency and insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* ERP Solutions Card */}
          <div className="bg-white p-8 border border-[#ccc] hover:border-tech-purple transition-all">
            <div className="h-14 w-14 bg-tech-gray rounded-lg flex items-center justify-center mb-6">
              <Database className="h-8 w-8 text-tech-purple" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">ERP Solutions</h3>
            <p className="text-tech-text mb-6">
              Transform your business operations with our comprehensive enterprise solutions that streamline processes and drive efficiency.
            </p>
            <ul className="mb-8 space-y-2">
              <li className="flex items-start">
                <span className="text-tech-purple mr-2">•</span>
                <span>Intelligent data integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-tech-purple mr-2">•</span>
                <span>Automated workflow configuration</span>
              </li>
              <li className="flex items-start">
                <span className="text-tech-purple mr-2">•</span>
                <span>Operational insights</span>
              </li>
            </ul>
            <Button className="bg-tech-gray text-tech-text hover:bg-tech-purple hover:text-white transition-all duration-300">
              <Link to="/erp-solutions">Learn More</Link>
            </Button>
          </div>

          {/* Simulation Acceleration Card */}
          <div className="bg-white p-8 border border-[#ccc] hover:border-tech-purple transition-all">
            <div className="h-14 w-14 bg-tech-gray rounded-lg flex items-center justify-center mb-6">
              <Activity className="h-8 w-8 text-tech-purple" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Simulation Acceleration</h3>
            <p className="text-tech-text mb-6">
              Transform complex simulations with our 1000x acceleration technology for unprecedented speed and accuracy.
            </p>
            <ul className="mb-8 space-y-2">
              <li className="flex items-start">
                <span className="text-tech-purple mr-2">•</span>
                <span>Urban airflow optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-tech-purple mr-2">•</span>
                <span>Pollution mapping and forecasting</span>
              </li>
              <li className="flex items-start">
                <span className="text-tech-purple mr-2">•</span>
                <span>Climate modelling</span>
              </li>
            </ul>
            <Button className="bg-tech-gray text-tech-text hover:bg-tech-purple hover:text-white transition-all duration-300">
              <Link to="/simulation">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
