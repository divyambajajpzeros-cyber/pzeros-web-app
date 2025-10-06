import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Activity, Zap, Building2, BarChart3, Earth, Car } from 'lucide-react';

const Simulation = () => {
  return (
    <div className="bg-tech-dark min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative section-pattern">
        <div className="hero-gradient"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              <span className="text-gradient">1000x</span> Faster Simulations
            </h1>
            <p className="text-lg text-tech-muted mb-8 text-center">
              Born from cutting-edge Indo-UK research, Point Zero Solutions is bringing AI-accelerated technology that turns weeks of simulation into minutes.
            </p>
          </div>
        </div>
      </section>
      
      {/* Applications */}
      <section className="py-20 bg-tech-darker section-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Applications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Application 1 */}
              <div className="bg-tech-gray/20 backdrop-blur-sm rounded-xl overflow-hidden border border-tech-gray/20 hover:border-tech-blue/40 transition-all">
                <div className="p-8">
                  <div className="h-14 w-14 bg-tech-blue/20 rounded-lg flex items-center justify-center mb-6">
                    <Building2 className="h-8 w-8 text-tech-blue" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Urban Airflow Planning</h3>
                  <p className="text-tech-muted mb-6">
                    Optimise building placements, green infrastructure, and ventilation corridors to create healthier and climate-resilient urban environments.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-tech-blue mr-2">•</span>
                      <span>Analyze wind patterns and air quality</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tech-blue mr-2">•</span>
                      <span>Mitigate urban heat island effects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tech-blue mr-2">•</span>
                      <span>Improve pedestrian comfort</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Application 2 */}
              <div className="bg-tech-gray/20 backdrop-blur-sm rounded-xl overflow-hidden border border-tech-gray/20 hover:border-tech-blue/40 transition-all">
                <div className="p-8">
                  <div className="h-14 w-14 bg-tech-blue/20 rounded-lg flex items-center justify-center mb-6">
                    <Activity className="h-8 w-8 text-tech-blue" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Pollution Mapping</h3>
                  <p className="text-tech-muted mb-6">
                    Model the dispersion of pollutants for public health policy, enabling environmental management and responsive planning.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-tech-blue mr-2">•</span>
                      <span>Pollution forecasting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tech-blue mr-2">•</span>
                      <span>Response optimisation to high pollution events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tech-blue mr-2">•</span>
                      <span>Environmental impact assessment</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Application 3 */}
              <div className="bg-tech-gray/20 backdrop-blur-sm rounded-xl overflow-hidden border border-tech-gray/20 hover:border-tech-blue/40 transition-all">
                <div className="p-8">
                  <div className="h-14 w-14 bg-tech-blue/20 rounded-lg flex items-center justify-center mb-6">
                    <Car className="h-8 w-8 text-tech-blue" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Automotive Design</h3>
                  <p className="text-tech-muted mb-6">
                    Rapidly iterate through thousands of your designs with instant aerodynamic feedback, reducing development time and improving efficiency.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-tech-blue mr-2">•</span>
                      <span>Topological optimisation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tech-blue mr-2">•</span>
                      <span>Thermal management solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tech-blue mr-2">•</span>
                      <span>Design analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Application 4 */}
              <div className="bg-tech-gray/20 backdrop-blur-sm rounded-xl overflow-hidden border border-tech-gray/20 hover:border-tech-blue/40 transition-all">
                <div className="p-8">
                  <div className="h-14 w-14 bg-tech-blue/20 rounded-lg flex items-center justify-center mb-6">
                    <Earth className="h-8 w-8 text-tech-blue" />

                  </div>
                  <h3 className="text-2xl font-bold mb-4">Climate modelling</h3>
                  <p className="text-tech-muted mb-6">
                    Deliver rapid, actionable insights on wildfires, floods, and other extreme events and empower next-generation climate resilience.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-tech-blue mr-2">•</span>
                      <span>Responsive pathway simulations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tech-blue mr-2">•</span>
                      <span>Analysis of wildfire spread</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tech-blue mr-2">•</span>
                      <span>Damage impact assessments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology Overview */}
      <section className="py-20 bg-tech-lightRed section-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Technology</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Tech Feature 1 */}
              <div className="bg-tech-lightRed/20 backdrop-blur-sm rounded-xl p-6 border border-tech-lightRed hover:border-tech-blue/40 transition-all">
                <div className="h-12 w-12 bg-tech-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-tech-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Physics-aware Generative AI</h3>
                <p className="text-tech-muted">
                  Actionable research solutions that are trained to be physics-aware by embedding the governing equations of simulations at the heart of Generative AI.
                </p>
              </div>
              
              {/* Tech Feature 2 */}
              <div className="bg-tech-lightRed/20 backdrop-blur-sm rounded-xl p-6 border border-tech-lightRed/20 hover:border-tech-blue/40 transition-all">
                <div className="h-12 w-12 bg-tech-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-tech-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Multiscale Analysis</h3>
                <p className="text-tech-muted">
                  Seamlessly transition between different scales of simulations, with the help of a research solution that is scale agnostic and is capable of simulating large and small-scale dynamics.

                </p>
              </div>
              
              {/* Tech Feature 3 */}
              <div className="bg-tech-lightRed/20 backdrop-blur-sm rounded-xl p-6 border border-tech-lightRed/20 hover:border-tech-blue/40 transition-all">
                <div className="h-12 w-12 bg-tech-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-tech-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Adaptive Resolution</h3>
                <p className="text-tech-muted">
                  Adapt to geometries that are complex with the help of groundbreaking distorted grid methods that are rooted at the core of research solutions.
                </p>
              </div>
            </div>
            
            {/* Performance Metrics */}
            {/* <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Performance Comparison</h3>
              
              <div className="bg-tech-lightRed/20 backdrop-blur-sm rounded-xl p-8 border border-tech-lightRed/20">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-tech-blue mb-2">1000x</div>
                    <p className="text-tech-muted">Speed Improvement</p>
                  </div>

                  <div className="text-center">
                    <div className="text-5xl font-bold text-tech-blue mb-2">99.8%</div>
                    <p className="text-tech-muted">Accuracy Rate</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-5xl font-bold text-tech-blue mb-2">90%</div>
                    <p className="text-tech-muted">Energy Reduction</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-tech-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-tech-blue/20 via-transparent to-transparent opacity-40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Experience the Next Generation of Simulations</h2>
            <p className="text-lg text-tech-muted mb-8">
              Join leading organizations in climate modelling, automotive design, and urban planning that
              have transformed their capabilities with our simulation technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact"> <Button variant="outline" className="border-tech-purple bg-tech-purple hover:bg-tech-darker hover:text-tech-purple/90 text-white btn-glow px-8 py-6 text-lg">
                Schedule a Demo
              </Button></Link><Link to="/contact">
              <Button variant="outline" className="border-tech-purple text-tech-purple hover:bg-tech-purple/90 hover:text-white/90 px-8 py-6 text-lg">
                Talk to an Expert
              </Button></Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Simulation;
