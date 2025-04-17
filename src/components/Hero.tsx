
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-20 section-padding"
    >
      <div className="max-w-4xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <p className="font-mono text-portfolio-teal mb-6">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-portfolio-navy dark:text-portfolio-lightSlate mb-4">
          John Doe.
        </h1>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-portfolio-slate dark:text-portfolio-slate mb-8">
          I build things for the web.
        </h2>
        <p className="text-lg text-portfolio-slate max-w-xl mb-12">
          I'm a full-stack engineer specializing in building exceptional digital experiences. 
          Currently, I'm focused on creating accessible, user-centered products that solve 
          real problems.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects">
            <Button 
              className={cn(
                "group bg-transparent hover:bg-portfolio-teal/10 border-2 border-portfolio-teal",
                "text-portfolio-teal px-8 py-6 text-base"
              )}
            >
              See my work
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href="#contact">
            <Button 
              variant="secondary"
              className="px-8 py-6 text-base"
            >
              Get in touch
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
