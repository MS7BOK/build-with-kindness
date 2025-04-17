
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-16',
        isScrolled
          ? 'bg-white/90 dark:bg-portfolio-navy/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-semibold text-portfolio-navy dark:text-white">
          <span className="text-portfolio-teal">{'<'}</span>
          Dev
          <span className="text-portfolio-teal">{'/>'}</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link, i) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="nav-link font-mono text-sm"
                >
                  <span className="text-portfolio-teal mr-1">{`0${i + 1}.`}</span> {link.name}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              variant="outline"
              className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10"
            >
              Resume
            </Button>
          </a>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-portfolio-navy dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white dark:bg-portfolio-lightNavy z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden',
          isMenuOpen
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-full pointer-events-none'
        )}
      >
        <ul className="flex flex-col items-center space-y-8">
          {navLinks.map((link, i) => (
            <li key={link.name}>
              <button
                onClick={() => scrollToSection(link.href)}
                className="text-portfolio-navy dark:text-portfolio-lightSlate text-xl font-medium hover:text-portfolio-teal transition-colors"
              >
                <span className="text-portfolio-teal mr-2 font-mono">{`0${i + 1}.`}</span>
                {link.name}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block"
            >
              <Button
                variant="outline"
                className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10"
              >
                Resume
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
