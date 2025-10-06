
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HeartHandshake, Settings, DatabaseBackup } from 'lucide-react';

const ERPSolutions = () => {
  return (
    <div className="bg-tech-dark min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative section-pattern">
        <div className="hero-gradient"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Unlock Efficiency with <span className="text-gradient">Next-Gen ERP Systems</span>
            </h1>
            <p className="text-lg text-tech-muted mb-8 text-center">
              Streamline operations, boost efficiency, and unlock new growth with tailored enterprise solutions built for real world impact
            </p>
          </div>
        </div>
      </section>

      {/* Key Applications Section */}
      <section className="py-20 bg-tech-darker section-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-8xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Applications</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Application 1 */}
              <div className="bg-tech-gray/20 backdrop-blur-sm rounded-xl overflow-hidden border border-tech-gray/20 hover:border-tech-purple/40 transition-all">
                <div className="p-8">
                  <div className="h-14 w-14 bg-tech-purple/20 rounded-lg flex items-center justify-center mb-6">
                    <DatabaseBackup  className="h-8 w-8 text-tech-purple"/>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Data Migration</h3>
                  <p className="text-tech-muted mb-6">
                    <strong>Messy Migrations Cost You?</strong>
                    <span className="block mt-2"></span>
                    Ensure accurate, complete data transfer into new ERP systems to avoid delays, errors, and costly rework.
                  </p>

                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-tech-purple mr-2">•</span>
                      <span>Data integrity verification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tech-purple mr-2">•</span>
                      <span>Automated migration checks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tech-purple mr-2">•</span>
                      <span>Error and gap detection</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Application 2 */}
              <div
                  className="bg-tech-gray/20 backdrop-blur-sm rounded-xl overflow-hidden border border-tech-gray/20 hover:border-tech-purple/40 transition-all">
                <div className="p-8">
                  <div className="h-14 w-14 bg-tech-purple/20 rounded-lg flex items-center justify-center mb-6">
                    <Settings className="h-8 w-8 text-tech-purple" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Customization Management</h3>
                  <p className="text-tech-muted mb-6">
                    <strong>Customizations Draining Your Budget?</strong>
                    <span className="block mt-2"></span>
                    Control costs and complexity by streamlining ERP customizations and avoiding endless scope changes.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-tech-purple mr-2">•</span>
                      <span>Scope and change management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tech-purple mr-2">•</span>
                      <span>Customization impact analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tech-purple mr-2">•</span>
                      <span>Cost-control workflows</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Application 3 */}
              <div className="bg-tech-gray/20 backdrop-blur-sm rounded-xl overflow-hidden border border-tech-gray/20 hover:border-tech-purple/40 transition-all">
                <div className="p-8">
                  <div className="h-14 w-14 bg-tech-purple/20 rounded-lg flex items-center justify-center mb-6">
                    <HeartHandshake className="h-8 w-8 text-tech-purple" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">User Adoption</h3>
                  <p className="text-tech-muted mb-6">
                    <strong>Teams Resisting New Systems?</strong>
                    <span className="block mt-2"></span>
                    Accelerate ERP rollouts with change management strategies that reduce fear, build confidence, and speed up adoption.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-tech-purple mr-2">•</span>
                      <span>Change management support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tech-purple mr-2">•</span>
                      <span>User training and onboarding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tech-purple mr-2">•</span>
                      <span>Early feedback integration</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* How It Works */}
      <section className="py-20 bg-tech-lightRed section-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-tech-purple/30 transform md:-translate-x-1/2"></div>
              
              {/* Timeline Item 1 */}
              <div className="relative mb-16">
                <div className="flex items-center md:justify-center mb-4">
                  <div className="bg-tech-purple h-8 w-8 rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-semibold">1</span>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-16">
                  <div className="bg-tech-lightRed/20 backdrop-blur-sm rounded-xl p-6 border border-tech-lightRed/20 md:ml-auto">
                    <h3 className="text-xl font-bold mb-2">Assessment & Planning</h3>
                    <p className="text-tech-muted">
                      Comprehensive analysis of your current systems and business processes to create a detailed implementation strategy.
                    </p>
                  </div>
                  <div className="hidden md:block"></div>
                </div>
              </div>
              
              {/* Timeline Item 2 */}
              <div className="relative mb-16">
                <div className="flex items-center md:justify-center mb-4">
                  <div className="bg-tech-purple h-8 w-8 rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-semibold">2</span>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-16">
                  <div className="hidden md:block"></div>
                  <div className="bg-tech-lightRed/20 backdrop-blur-sm rounded-xl p-6 border border-tech-lightRed/20">
                    <h3 className="text-xl font-bold mb-2">Intelligent Configuration</h3>
                    <p className="text-tech-muted">
                      Precision setup and configuration tools to deploy your enterprise solution based on best practices and unique requirements.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Timeline Item 3 */}
              <div className="relative mb-16">
                <div className="flex items-center md:justify-center mb-4">
                  <div className="bg-tech-purple h-8 w-8 rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-semibold">3</span>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-16">
                  <div className="bg-tech-lightRed/20 backdrop-blur-sm rounded-xl p-6 border border-tech-lightRed/20 md:ml-auto">
                    <h3 className="text-xl font-bold mb-2">Data Migration & Integration</h3>
                    <p className="text-tech-muted">
                      Advanced tools to map, transform, and migrate data from legacy systems, ensuring data integrity and completeness.
                    </p>
                  </div>
                  <div className="hidden md:block"></div>
                </div>
              </div>
              
              {/* Timeline Item 4 */}
              <div className="relative">
                <div className="flex items-center md:justify-center mb-4">
                  <div className="bg-tech-purple h-8 w-8 rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-semibold">4</span>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-16">
                  <div className="hidden md:block"></div>
                  <div className="bg-tech-lightRed/20 backdrop-blur-sm rounded-xl p-6 border border-tech-lightRed">
                    <h3 className="text-xl font-bold mb-2">Continuous Optimization</h3>
                    <p className="text-tech-muted">
                      Ongoing support and optimization to ensure your enterprise solution evolves with your business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-tech-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-tech-purple/20 via-transparent to-transparent opacity-40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
            <p className="text-lg text-tech-muted mb-8">
              Join forward-thinking organizations that have accelerated their digital transformation with our enterprise solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"><Button variant="outline" className="border-tech-purple bg-tech-purple hover:bg-tech-darker hover:text-tech-purple/90 text-white btn-glow px-8 py-6 text-lg">
                Schedule a Demo
              </Button></Link><Link to="/contact">
              <Button variant="outline" className="border-tech-purple text-tech-purple hover:bg-tech-purple/90 hover:text-white/90 px-8 py-6 text-lg">
                Contact Sales
              </Button></Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ERPSolutions;
