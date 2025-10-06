import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Brain, Users, Target, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-tech-dark min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative section-pattern">
        <div className="hero-gradient"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pioneering the Future of <span className="text-gradient">AI Solutions</span>
            </h1>
            <p className="text-lg text-tech-muted">
              Founded on a vision to transform enterprise systems and computational challenges through 
              cutting-edge artificial intelligence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-20 bg-tech-darker section-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-tech-muted mb-6">
                At Point Zero Solutions, we accelerate human progress by developing AI that amplifies creativity and problem-solving. By dramatically reducing the time and resources needed for complex enterprise implementations, we enable organizations to focus on what truly matters: innovation, growth, and addressing the world's most pressing challenges.
                </p>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-tech-muted mb-6">
                At Point Zero Solutions, we envision a world where computational barriers no longer limit human innovation. We're creating a future where advanced AI amplifies creativity, transforms businesses, and solves complex problems in minutes rather than months, as we lead the democratisation of access to technology that evolves alongside the organizations we serve.
                </p>
                
              </div>
              
              <div className="bg-tech-gray/20 backdrop-blur-sm rounded-xl p-8 border border-tech-gray/20">
                <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="h-10 w-10 bg-tech-purple/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Brain className="h-5 w-5 text-tech-purple" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Innovation Without Boundaries</h4>
                      <p className="text-tech-muted text-sm">
                        We constantly push the frontiers of what's possible with AI and computational methods.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="h-10 w-10 bg-tech-purple/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Target className="h-5 w-5 text-tech-purple" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Relentless Excellence</h4>
                      <p className="text-tech-muted text-sm">
                        We hold ourselves to the highest standards in everything we create and deliver.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="h-10 w-10 bg-tech-purple/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Users className="h-5 w-5 text-tech-purple" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Human-Centered Technology</h4>
                      <p className="text-tech-muted text-sm">
                        We build AI that enhances human capabilities rather than replacing them.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="h-10 w-10 bg-tech-purple/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Globe className="h-5 w-5 text-tech-purple" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Global Impact</h4>
                      <p className="text-tech-muted text-sm">
                        We strive to create solutions that address meaningful challenges facing humanity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership */}
      <section className="py-20 bg-tech-lightRed section-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-tech-lightRed/20 backdrop-blur-sm rounded-xl p-6 border border-tech-lightRed hover:border-tech-purple/40 transition-all text-center">
                <div className="w-24 h-24 bg-tech-purple/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-tech-purple">RG</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Ritesh G</h3>
                <p className="text-tech-purple mb-4">Chief Executive Officer</p>
                <p className="text-tech-muted text-sm">
                Consultant | ISB (Torchbearer) | KPIT- BMW | Startup | Honda R&D | DRDO<br/>
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-tech-lightRed/20 backdrop-blur-sm rounded-xl p-6 border border-tech-lightRed hover:border-tech-purple/40 transition-all text-center">
                <div className="w-24 h-24 bg-tech-purple/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-tech-purple">JK</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Jitin K</h3>
                <p className="text-tech-purple mb-4">Chief Technology Officer</p>
                <p className="text-tech-muted text-sm">
                  AI strategist | Cloud Architect | IT Consultant | BITS Pilani | Zeta | Harman<br/>
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-tech-lightRed/20 backdrop-blur-sm rounded-xl p-6 border border-tech-lightRed hover:border-tech-purple/40 transition-all text-center">
                <div className="w-24 h-24 bg-tech-purple/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-tech-purple">AJ</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Aniket J</h3>
                <p className="text-tech-purple mb-4">Chief Product Officer</p>
                <p className="text-tech-muted text-sm">
                Foundational Generative AI Dev | AI Researcher | Imperial College London<br/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-tech-darker section-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-tech-purple mb-2">2021</div>
                <p className="text-tech-muted">Founded</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-tech-purple mb-2">9</div>
                <p className="text-tech-muted">Research Outputs</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-tech-purple mb-2">11+</div>
                <p className="text-tech-muted">Enterprise Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
