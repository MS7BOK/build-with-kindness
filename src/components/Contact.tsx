
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section id="contact" className="section-padding py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="section-title justify-center">
          <span className="text-portfolio-teal font-mono mr-2">03.</span> Get In Touch
        </h2>
        
        <p className="text-portfolio-slate mb-12 text-lg">
          I'm currently looking for new opportunities! Whether you have a question or just want to say hi, 
          I'll do my best to get back to you!
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-portfolio-lightSlate mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                required
                className="bg-portfolio-lightNavy/10 dark:bg-portfolio-lightNavy/30 border-portfolio-slate/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-portfolio-lightSlate mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
                className="bg-portfolio-lightNavy/10 dark:bg-portfolio-lightNavy/30 border-portfolio-slate/20"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-portfolio-lightSlate mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your message"
              rows={6}
              required
              className="bg-portfolio-lightNavy/10 dark:bg-portfolio-lightNavy/30 border-portfolio-slate/20"
            />
          </div>
          
          <div className="flex justify-center pt-6">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-portfolio-teal text-portfolio-navy hover:bg-portfolio-teal/80 font-medium px-10 py-6"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
