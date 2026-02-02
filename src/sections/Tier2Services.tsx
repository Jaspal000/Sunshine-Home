import { useEffect, useRef } from 'react';
import { Bath, Grid3X3, Wrench, ArrowRight } from 'lucide-react';

const Tier2Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Bath,
      title: 'Kitchens & Bathrooms',
      description: 'Complete installation and renovation services for the heart of your home.',
      features: ['Full Installation', 'Professional Tiling', 'Wet Rooms', 'Plumbing Works'],
      image: '/images/kitchen-service.jpg',
    },
    {
      icon: Grid3X3,
      title: 'Flooring Specialist',
      description: 'Expert flooring solutions that combine style, durability, and practicality.',
      features: ['LVT Herringbone', 'Laminate', 'Carpet Fitting', 'Commercial Safety Flooring'],
      image: '/images/flooring-service.jpg',
    },
    {
      icon: Wrench,
      title: 'Maintenance & Repairs',
      description: 'Reliable maintenance services to keep your property in perfect condition.',
      features: ['Electrical Fault Finding', 'Plumbing Leaks', 'Deep Cleaning', 'General Repairs'],
      image: '/images/maintenance-service.jpg',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="reveal opacity-0 inline-block text-[#0056b3] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
            Additional Services
          </span>
          <h2 className="reveal opacity-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 animation-delay-100">
            Complete Property Care
          </h2>
          <p className="reveal opacity-0 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-0 animation-delay-200">
            Your one-stop-shop for all property maintenance needs. Professional
            services delivered with the same Sunshine Standard.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`reveal opacity-0 group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 animation-delay-${(index + 1) * 100}`}
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Icon */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0056b3]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-[#0056b3] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700"
                    >
                      <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#FFB703] rounded-full flex-shrink-0" />
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-sm text-[#0056b3] font-semibold hover:text-[#004494] transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="reveal opacity-0 text-center mt-8 sm:mt-12 p-5 sm:p-8 bg-white rounded-xl sm:rounded-2xl shadow-md border border-gray-100 animation-delay-400">
          <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
            <span className="font-semibold">Need something else?</span> We offer a wide
            range of additional services. Contact us to discuss your specific requirements.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-sm text-[#0056b3] font-semibold hover:text-[#004494] transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tier2Services;
