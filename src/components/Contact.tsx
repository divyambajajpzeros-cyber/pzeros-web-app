
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
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
    <section id="contact" className="py-20 bg-tech-darker section-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-tech-muted max-w-2xl mx-auto">
              Ready to transform your business with AI? Get in touch with our team to discover how our solutions can work for you.
            </p>
          </div>

          <div className="bg-tech-gray/20 backdrop-blur-sm rounded-xl p-8 border border-tech-gray/20">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-tech-gray/50 border-tech-gray/30 focus:border-tech-purple"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
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
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project or requirements"
                  className="bg-tech-gray/50 border-tech-gray/30 focus:border-tech-purple min-h-[120px]"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
              </div>
              
              <Button type="submit" className="w-full bg-tech-purple hover:bg-tech-purple/90 text-white btn-glow">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
