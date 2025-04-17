
import React from 'react';

const About = () => {
  const skills = [
    'JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 
    'Express', 'MongoDB', 'GraphQL', 'Next.js',
    'TailwindCSS', 'PostgreSQL', 'Docker', 'AWS'
  ];

  return (
    <section id="about" className="section-padding py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">
          <span className="text-portfolio-teal font-mono mr-2">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 text-portfolio-slate">
            <p className="mb-4">
              Hello! My name is John, and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try creating custom Tumblr themes — turns out hacking together CSS to customize blog templates taught me a lot about HTML & CSS!
            </p>
            <p className="mb-4">
              Fast-forward to today, and I've had the privilege of working at a 
              <span className="text-portfolio-teal"> start-up</span>, 
              a <span className="text-portfolio-teal">large corporation</span>, and 
              a <span className="text-portfolio-teal">student-led design studio</span>. 
              My main focus these days is building accessible, inclusive products and digital experiences 
              for a variety of clients.
            </p>
            <p className="mb-8">
              I also recently launched a web app that helps people track their daily habits and improve their productivity.
            </p>
            
            <h3 className="text-foreground font-medium mb-3">Here are a few technologies I've been working with recently:</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="text-portfolio-teal mr-2">▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative group">
            <div className="relative rounded-md overflow-hidden bg-portfolio-teal/20 w-full aspect-square">
              <div className="absolute inset-0 bg-portfolio-teal/20 mix-blend-multiply"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-300 w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-1.5 border-2 border-portfolio-teal rounded-md -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
