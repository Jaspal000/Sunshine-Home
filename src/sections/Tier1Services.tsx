import { useEffect, useRef } from 'react';
import { Paintbrush, Home, ArrowRight } from 'lucide-react';

const Tier1Services = () => {
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
      icon: Paintbrush,
      title: 'High-End Painting & Decorating',
      description:
        'The Flawless Finish. Dust-free sanding, spray technology, and premium paints for a showroom look that transforms your space.',
      image: '/images/painting-service.jpg',
      features: ['Dust-free sanding', 'Spray technology', 'Premium paints', 'Perfect edges'],
    },
    {
      icon: Home,
      title: 'Full Property Renovation',
      description:
        'Complete Transformation. From stripping back to brick to the final polish. We manage the stress so you don\'t have to.',
      image: '/images/renovation-service.jpg',
      features: ['Project management', 'Full strip-out', 'Quality materials', 'Final polish'],
    },
  ];

  return (
    <section
      id="transformations"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="reveal opacity-0 inline-block text-[#0056b3] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
            Our Flagship Services
          </span>
          <h2 className="reveal opacity-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 animation-delay-100">
            Premium Solutions for Your Home
          </h2>
          <p className="reveal opacity-0 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-0 animation-delay-200">
            Our most popular services, delivered with the Sunshine Standard of excellence.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`reveal opacity-0 group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 animation-delay-${(index + 1) * 100}`}
            >
              {/* Image */}
              <div className="relative h-52 sm:h-64 lg:h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center">
                  <service.icon className="w-5 h-5 sm:w-7 sm:h-7 text-[#0056b3]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#0056b3] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-[#0056b3] font-semibold hover:text-[#004494] transition-colors group/link"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tier1Services;
