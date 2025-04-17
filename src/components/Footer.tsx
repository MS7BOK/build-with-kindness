
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, url: 'mailto:hello@example.com' },
  ];

  return (
    <footer className="bg-white dark:bg-portfolio-navy border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-slate hover:text-portfolio-teal transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-portfolio-slate text-sm font-mono">
            <p>Designed & Built by John Doe</p>
            <p className="mt-1">© {new Date().getFullYear()} - All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
