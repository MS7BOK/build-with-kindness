import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const Projects = () => {
  const featuredProjects = [
    {
      title: "Habit Tracker App",
      description: "A feature-rich habit tracking application that helps users build better habits through daily tracking, statistics, and achievement rewards. Built with React, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com",
      external: "https://example.com",
      reverse: false,
    },
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform with user authentication, product catalog, shopping cart, and payment processing. Built with Next.js, TypeScript, and Stripe integration.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80",
      tags: ["Next.js", "TypeScript", "Stripe", "TailwindCSS"],
      github: "https://github.com",
      external: "https://example.com",
      reverse: true,
    },
  ];

  const otherProjects = [
    {
      title: "Portfolio Website",
      description: "A sleek, responsive developer portfolio built with React and TailwindCSS to showcase projects and skills.",
      tags: ["React", "TailwindCSS", "Framer Motion"],
      github: "https://github.com",
      external: "https://example.com",
    },
    {
      title: "Weather App",
      description: "A weather application that displays current conditions and forecasts based on location.",
      tags: ["JavaScript", "OpenWeather API", "CSS"],
      github: "https://github.com",
      external: "https://example.com",
    },
    {
      title: "Task Management API",
      description: "RESTful API for a task management application with user authentication and task CRUD operations.",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com",
    },
    {
      title: "Blog Platform",
      description: "A full-featured blog platform with markdown support, comments, and user accounts.",
      tags: ["React", "Node.js", "PostgreSQL", "GraphQL"],
      github: "https://github.com",
      external: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="section-padding py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">
          <span className="text-portfolio-teal font-mono mr-2">02.</span> Some Things I've Built
        </h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`relative grid md:grid-cols-12 gap-4 md:gap-10 items-center ${
                project.reverse ? 'md:text-right' : 'md:text-left'
              }`}
            >
              {/* Project Image */}
              <div 
                className={`md:col-span-7 relative rounded-lg overflow-hidden h-full ${
                  project.reverse ? 'md:order-last' : ''
                }`}
              >
                <a 
                  href={project.external} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="absolute inset-0 bg-portfolio-navy/70 hover:bg-transparent transition-all duration-300 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </a>
              </div>

              {/* Project Content */}
              <div className={`md:col-span-5 z-10 ${project.reverse ? 'md:text-right md:pl-0 md:pr-4' : 'md:pr-0 md:pl-4'}`}>
                <p className="font-mono text-portfolio-teal mb-1">Featured Project</p>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{project.title}</h3>
                
                <div className="bg-portfolio-lightNavy/90 dark:bg-portfolio-lightNavy p-6 rounded-lg shadow-lg mb-4">
                  <p className="text-portfolio-slate">{project.description}</p>
                </div>
                
                <ul className={`flex flex-wrap gap-3 mb-8 text-xs font-mono text-portfolio-slate ${
                  project.reverse ? 'md:justify-end' : 'md:justify-start'
                }`}>
                  {project.tags.map((tag, tagIndex) => (
                    <li key={tagIndex}>{tag}</li>
                  ))}
                </ul>
                
                <div className={`flex gap-4 ${project.reverse ? 'md:justify-end' : ''}`}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                    <Github className="w-5 h-5 text-foreground hover:text-portfolio-teal transition-colors" />
                  </a>
                  {project.external && (
                    <a href={project.external} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <ExternalLink className="w-5 h-5 text-foreground hover:text-portfolio-teal transition-colors" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-xl font-semibold text-center mb-8 text-foreground">
          Other Noteworthy Projects
        </h3>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-portfolio-lightNavy/10 dark:bg-portfolio-lightNavy border-portfolio-teal/10 hover:translate-y-[-5px] transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-6">
                  <Folder className="w-10 h-10 text-portfolio-teal" />
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                        <Github className="w-5 h-5 text-portfolio-slate hover:text-portfolio-teal transition-colors" />
                      </a>
                    )}
                    {project.external && (
                      <a href={project.external} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                        <ExternalLink className="w-5 h-5 text-portfolio-slate hover:text-portfolio-teal transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-portfolio-slate mb-6">{project.description}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-portfolio-slate">
                  {project.tags.map((tag, tagIndex) => (
                    <li key={tagIndex}>{tag}</li>
                  ))}
                </ul>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline" 
              className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10"
            >
              View More Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
