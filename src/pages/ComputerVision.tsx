
import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Database, Layers, ShoppingBag, OctagonMinus, View, Monitor } from 'lucide-react';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
const ComputerVision = () => {
  return (
    <div className="min-h-screen bg-tech-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative section-pattern">
        <div className="hero-gradient"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Turn Every Pixel <span className="text-gradient">Into Powerful Business Insights</span>
            </h1>
            <p className="text-lg text-tech-muted mb-8 text-center">
              Unleash hidden insights and drive breakthrough results with Computer Vision solutions seamlessly tailored to your business powering sharper decisions, faster operations, and unstoppable growth.
            </p>
            <div className="flex justify-center">
            </div>
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
                    <ShoppingBag  className="h-8 w-8 text-tech-purple"/>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Retail Analytics</h3>
                  <p className="text-tech-muted mb-6">
                    <strong>Struggling to Understand Customers?</strong>
                    <span className="block mt-2"></span>
                    Optimize store layouts, analyze customer behavior patterns, and improve product placement with
                    real-time visual analytics.
                  </p>

                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-tech-purple mr-2">•</span>
                      <span>Customer flow optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tech-purple mr-2">•</span>
                      <span>Heat maps for popular areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tech-purple mr-2">•</span>
                      <span>Product placement effectiveness</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Application 2 */}
              <div
                  className="bg-tech-gray/20 backdrop-blur-sm rounded-xl overflow-hidden border border-tech-gray/20 hover:border-tech-purple/40 transition-all">
                <div className="p-8">
                  <div className="h-14 w-14 bg-tech-purple/20 rounded-lg flex items-center justify-center mb-6">
                    <OctagonMinus className="h-8 w-8 text-tech-purple" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Smart Traffic Management</h3>
                  <p className="text-tech-muted mb-6">
                    <strong>Wasting Time in Endless Traffic?</strong>
                    <span className="block mt-2"></span>
                    Ease congestion, save fuel, and improve commuting with AI-powered traffic monitoring and dynamic signal control.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-tech-purple mr-2">•</span>
                      <span>Real-time traffic flow analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tech-purple mr-2">•</span>
                      <span>Adaptive signal optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tech-purple mr-2">•</span>
                      <span>Reduced congestion and travel times</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Application 3 */}
              <div className="bg-tech-gray/20 backdrop-blur-sm rounded-xl overflow-hidden border border-tech-gray/20 hover:border-tech-purple/40 transition-all">
                <div className="p-8">
                  <div className="h-14 w-14 bg-tech-purple/20 rounded-lg flex items-center justify-center mb-6">
                    <View  className="h-8 w-8 text-tech-purple" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Automated Visual Inspection</h3>
                  <p className="text-tech-muted mb-6">
                    <strong>Missing Defects, Losing Time?</strong>
                    <span className="block mt-2"></span>
                    Detect defects early and accelerate production with AI-driven visual inspection that reduces errors and boosts efficiency.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-tech-purple mr-2">•</span>
                      <span>Automated defect detection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tech-purple mr-2">•</span>
                      <span>Real time quality control</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tech-purple mr-2">•</span>
                      <span>Reduced inspection time</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Key Features/Technology */}
      <section className="py-20 bg-tech-lightRed section-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Technology</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-tech-lightRed/20 backdrop-blur-sm rounded-xl p-6 border border-tech-lightRed/20 hover:border-tech-purple/40 transition-all">
                <Monitor className="h-12 w-12 text-tech-purple mb-6" />
                <h3 className="text-xl font-semibold mb-4">Visual Analytics</h3>
                <p className="text-tech-muted mb-6">
                  View our analytics on your site and extract data as needed for your analysis. Real-time. All the time.
                </p>
              </div>
              
              {/* Service 2 */}
              <div className="bg-tech-lightRed/20 backdrop-blur-sm rounded-xl p-6 border border-tech-lightRed/20 hover:border-tech-purple/40 transition-all">
                <Layers className="h-12 w-12 text-tech-purple mb-6" />
                <h3 className="text-xl font-semibold mb-4">Efficiency Enhancement</h3>
                <p className="text-tech-muted mb-6">
                  Optimise your operations by identifying bottlenecks with our purpose-specific AI models made for you.
                </p>
              </div>
              
              {/* Service 3 */}
              <div className="bg-tech-lightRed/20 backdrop-blur-sm rounded-xl p-6 border border-tech-lightRed/20 hover:border-tech-purple/40 transition-all">
                <Database className="h-12 w-12 text-tech-purple mb-6" />
                <h3 className="text-xl font-semibold mb-4">Custom Dashboard and Apps</h3>
                <p className="text-tech-muted mb-6">
                  Customised according to your needs, secured by us, and owned by you to transform your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-tech-darker section-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-tech-gray/20 backdrop-blur-sm rounded-xl p-8 border border-tech-gray/20">
                <div className="text-3xl font-bold text-tech-purple mb-4">01</div>
                <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
                <p className="text-tech-muted">
                  Effortlessly connect your existing CCTV infrastructure to our state-of-the-art computer vision system for instant data analysis.
                </p>
              </div>
              <div className="bg-tech-gray/20 backdrop-blur-sm rounded-xl p-8 border border-tech-gray/20">
                <div className="text-3xl font-bold text-tech-purple mb-4">02</div>
                <h3 className="text-xl font-semibold mb-4">Custom Dashboard</h3>
                <p className="text-tech-muted">
                  Access personalized visual analytics on our intuitive dashboard, providing valuable insights and recommendations for enhancing your business' efficiency.
                </p>
              </div>
              <div className="bg-tech-gray/20 backdrop-blur-sm rounded-xl p-8 border border-tech-gray/20">
                <div className="text-3xl font-bold text-tech-purple mb-4">03</div>
                <h3 className="text-xl font-semibold mb-4">Data Storage and Security</h3>
                <p className="text-tech-muted">
                  We store your data securely in our servers strictly for a limited period of time and for your case only, while anonymising identifiable information before performing any of our analysis.
                </p>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-tech-muted mb-8">
              Join forward-thinking organizations that have accelerated their digital transformation with our computer vision solutions.
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

export default ComputerVision;
