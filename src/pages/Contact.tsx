
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
  serviceType: string;
};

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const { toast } = useToast();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // In a real implementation, you would send this data to your server
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll be in touch shortly.",
    });
    reset();
  };

  return (
    <div className="bg-tech-dark min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative section-pattern">
        <div className="hero-gradient"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-tech-muted">
              Have questions about our AI solutions? Ready to transform your enterprise or simulation capabilities?
              Our team is here to help.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="py-20 bg-tech-darker section-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-tech-purple/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5 text-tech-purple" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Email</h4>
                      <p className="text-tech-muted">
                        <a href="mailto:connect@pzeros.com" className="hover:text-tech-purple transition-colors">
                          connect@pzeros.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-tech-purple/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-tech-purple" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Office Location</h4>
                      <p className="text-tech-muted">
                        Sco 226, Sector 37C<br></br> Chandigarh 160036<br></br> India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-tech-purple/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 text-tech-purple" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Phone</h4>
                      <p className="text-tech-muted">
                        <a href="tel:+919667533714" className="hover:text-tech-purple transition-colors">
                          +919667533714
                        </a>
                      </p>
                    </div>
                  </div>

                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-tech-gray/20 backdrop-blur-sm rounded-xl p-8 border border-tech-gray/20">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Full Name*</label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="bg-tech-gray/50 border-tech-gray/30 focus:border-tech-purple"
                          {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email Address*</label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="bg-tech-gray/50 border-tech-gray/30 focus:border-tech-purple"
                          {...register("email", { 
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address"
                            }
                          })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium">Company</label>
                        <Input
                          id="company"
                          placeholder="Your company"
                          className="bg-tech-gray/50 border-tech-gray/30 focus:border-tech-purple"
                          {...register("company")}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="serviceType" className="text-sm font-medium">Service Interest</label>
                        <select
                            id="serviceType"
                            className="w-full bg-tech-gray/50 border-tech-gray/30 focus:border-tech-purple rounded-md p-2 text-foreground"
                            {...register("serviceType")}
                        >
                          <option value="">Select a service</option>
                          <option value="computervision">Computer Vision</option>
                          <option value="erp">AI-Optimized ERP Solutions</option>
                          <option value="simulation">Simulation Acceleration</option>
                          <option value="custom">Custom AI Solutions</option>
                          <option value="other">Other Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message*</label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project or requirements"
                        className="bg-tech-gray/50 border-tech-gray/30 focus:border-tech-purple min-h-[150px]"
                        {...register("message", { required: "Message is required" })}
                      />
                      {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                    </div>
                    
                    <Button variant="outline" type="submit" className="w-full border-tech-purple bg-tech-purple hover:bg-tech-darker hover:text-tech-purple/90 text-white btn-glow">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map or Office Image Section (Placeholder) */}
      <section className="py-20 bg-tech-dark section-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-tech-gray/20 backdrop-blur-sm rounded-xl p-8 border border-tech-gray/20 relative overflow-hidden h-[400px] flex items-center justify-center">
              <div className="text-tech-muted text-center">
                <p className="text-lg font-semibold mb-2">Interactive Map Placeholder</p>
                <p>In a real implementation, a Google Maps embed or custom map would be displayed here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
