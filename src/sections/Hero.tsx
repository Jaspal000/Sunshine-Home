import { useEffect, useRef } from 'react';
import { Shield, Users, Award, ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-living-room.jpg"
          alt="Beautifully renovated sunlit living room"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient Overlay - Stronger on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.98] via-white/[0.90] to-white/50 sm:from-white/95 sm:via-white/80 sm:to-white/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="reveal opacity-0 mb-4 sm:mb-6">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#0056b3]/10 text-[#0056b3] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
              <Award className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">Premium Renovation Specialists</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="reveal opacity-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-[1.1] sm:leading-tight mb-4 sm:mb-6 animation-delay-100">
            BRING THE
            <span className="block text-[#FFB703]">SUNSHINE BACK</span>
            <span className="block">TO YOUR HOME.</span>
          </h1>

          {/* Sub-headline */}
          <p className="reveal opacity-0 text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed animation-delay-200">
            Premier Painting, Decorating & Renovation Specialists. We don't just
            fix homes; we <span className="font-semibold text-[#0056b3]">revitalize them</span>{' '}
            with meticulous attention to detail.
          </p>

          {/* CTA Buttons */}
          <div className="reveal opacity-0 flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 animation-delay-300">
            <button
              onClick={scrollToContact}
              className="btn-primary flex items-center justify-center gap-2 text-base sm:text-lg group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4"
            >
              Book a Free Site Visit
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#transformations"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#transformations')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 border-2 border-gray-200 hover:border-[#0056b3] text-base sm:text-lg w-full sm:w-auto"
            >
              View Our Work
            </a>
          </div>

          {/* Trust Badges */}
          <div className="reveal opacity-0 flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 animation-delay-400">
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#0056b3]/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#0056b3]" />
              </div>
              <span className="font-medium whitespace-nowrap">Fully Insured</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#0056b3]/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-[#0056b3]" />
              </div>
              <span className="font-medium whitespace-nowrap">Vetted Experts</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#0056b3]/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#0056b3]" />
              </div>
              <span className="font-medium whitespace-nowrap">2-Year Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};

export default Hero;
