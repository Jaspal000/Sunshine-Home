import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Our Process', href: '#process' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2 sm:py-3'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-1.5 sm:gap-2 group flex-shrink-0"
          >
            <span className="text-xl sm:text-2xl">☀️</span>
            <span
              className={`font-bold text-sm sm:text-base md:text-xl tracking-tight transition-colors whitespace-nowrap ${
                isScrolled ? 'text-gray-900' : 'text-gray-900'
              }`}
            >
              SUNSHINE HOME MAINTENANCE
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`text-sm font-medium transition-colors hover:text-[#0056b3] whitespace-nowrap ${
                  isScrolled ? 'text-gray-700' : 'text-gray-800'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            
              href="tel:07399108188"
              className={`flex items-center gap-2 text-sm font-medium transition-colors whitespace-nowrap ${
                isScrolled ? 'text-gray-700' : 'text-gray-800'
              } hover:text-[#0056b3]`}
            >
              <Phone className="w-4 h-4" />
              07399 108 188
            </a>
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-[#FFB703] hover:bg-[#E5A502] text-gray-900 font-semibold px-4 xl:px-6 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm whitespace-nowrap"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100/80 transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pb-3 border-t border-gray-100 pt-3 animate-fade-in bg-white/95 backdrop-blur-md rounded-lg mt-2 -mx-3 px-3 shadow-lg">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-gray-700 font-medium py-2.5 px-2 hover:text-[#0056b3] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
                href="tel:07399108188"
                className="flex items-center gap-2 text-gray-700 font-medium py-2.5 px-2 hover:text-[#0056b3] hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                07399 108 188
              </a>
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-[#FFB703] hover:bg-[#E5A502] text-gray-900 font-semibold px-4 py-3 rounded-lg transition-all duration-300 mt-2 w-full"
              >
                Get a Free Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
