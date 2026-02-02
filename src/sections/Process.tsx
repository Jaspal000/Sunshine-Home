import { useEffect, useRef } from 'react';
import { Shield, Wind, Ruler, CheckCircle } from 'lucide-react';

const Process = () => {
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

  const steps = [
    {
      icon: Shield,
      title: 'Protection First',
      description:
        'We cover every floor and piece of furniture before we start. Your belongings are treated with the utmost care and respect.',
      color: 'bg-blue-500',
    },
    {
      icon: Wind,
      title: 'Dust-Free Promise',
      description:
        'Industrial extraction systems keep your air clean throughout the project. No mess, no stress.',
      color: 'bg-teal-500',
    },
    {
      icon: Ruler,
      title: 'Precision Finish',
      description:
        "We don't rush. We measure twice and cut once, ensuring every detail meets our exacting standards.",
      color: 'bg-indigo-500',
    },
    {
      icon: CheckCircle,
      title: 'The Handover',
      description:
        "We don't leave until you are 100% smiling. Your satisfaction is our ultimate goal.",
      color: 'bg-green-500',
    },
  ];

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="reveal opacity-0 inline-block text-[#0056b3] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
            Our Process
          </span>
          <h2 className="reveal opacity-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 animation-delay-100">
            The Sunshine Standard: How We Work
          </h2>
          <p className="reveal opacity-0 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-0 animation-delay-200">
            We treat your home as a guest, not a construction site. Our meticulous
            process ensures a seamless experience from start to finish.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`reveal opacity-0 group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#0056b3]/20 animation-delay-${(index + 1) * 100}`}
            >
              {/* Step Number */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 bg-[#FFB703] rounded-full flex items-center justify-center text-gray-900 font-bold text-sm sm:text-lg shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${step.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <step.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#0056b3] transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal opacity-0 text-center mt-8 sm:mt-12 animation-delay-500">
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
            Experience the Sunshine difference for yourself.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-[#0056b3] hover:bg-[#004494] text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
