import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../utils/constants';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Career' },
  { href: '#honours', label: 'Honours' },
  { href: '#publications', label: 'Publications' },
  { href: '#speaking', label: 'Speaking' },
  { href: '#roles', label: 'Roles' },
  { href: '#contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id') || '';
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-ogbu-navy border-b border-ogbu-blue" onKeyDown={handleKeyDown} aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-3 text-ogbu-offWhite font-heading font-bold text-lg sm:text-xl hover:text-ogbu-gold transition-colors focus:outline-none focus:ring-2 focus:ring-ogbu-gold rounded">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-ogbu-offWhite p-0.5 border border-ogbu-gold flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo/logo.png" 
                  alt="Prof. Osita Ogbu logo" 
                  width="38" 
                  height="38" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <span>{profile.displayNameParts.name}</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-2 py-2 border-b text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ogbu-gold ${
                    activeSection === link.href.substring(1)
                      ? 'border-ogbu-gold text-ogbu-gold'
                      : 'border-transparent text-ogbu-offWhite/85 hover:border-ogbu-offWhite/60 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-ogbu-offWhite/80 hover:text-white hover:bg-ogbu-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ogbu-gold"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-ogbu-navy border-b border-ogbu-blue">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 border-l text-base font-medium focus:outline-none focus:ring-2 focus:ring-ogbu-gold ${
                  activeSection === link.href.substring(1)
                    ? 'border-ogbu-gold text-ogbu-gold'
                    : 'border-transparent text-ogbu-offWhite/85 hover:border-ogbu-offWhite/60 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
