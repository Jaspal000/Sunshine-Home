import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
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

  const reviews = [
    {
      name: 'Sarah J.',
      location: 'Manchester',
      rating: 5,
      text: "Finally, a builder who turns up on time! The finish is showroom quality. They transformed our dated living room into a bright, modern space we absolutely love. Highly recommend!",
      service: 'Full Property Renovation',
    },
    {
      name: 'David T.',
      location: 'Stockport',
      rating: 5,
      text: "Incredible kitchen transformation. Tidy, polite, and professional from start to finish. The team kept us informed throughout and the attention to detail was exceptional.",
      service: 'Kitchen Installation',
    },
    {
      name: 'Emma R.',
      location: 'Cheshire',
      rating: 5,
      text: "The painting work was flawless. No mess, no stress, just a perfect finish. They even helped us choose the right colours. Will definitely use again for our next project.",
      service: 'Painting & Decorating',
    },
  ];

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="reveal opacity-0 inline-block text-[#0056b3] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
            Testimonials
          </span>
          <h2 className="reveal opacity-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 animation-delay-100">
            Rated 5 Stars by Locals
          </h2>
          <p className="reveal opacity-0 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-0 animation-delay-200">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their Sunshine experience.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className={`reveal opacity-0 group relative bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-500 animation-delay-${(index + 1) * 100}`}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-2 sm:-top-4 sm:-left-2 w-8 h-8 sm:w-10 sm:h-10 bg-[#FFB703] rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFB703] text-[#FFB703]"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 italic text-sm sm:text-base">
                "{review.text}"
              </p>

              {/* Service Tag */}
              <span className="inline-block bg-[#0056b3]/10 text-[#0056b3] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium mb-3 sm:mb-4">
                {review.service}
              </span>

              {/* Author */}
              <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-200">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0056b3] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base truncate">{review.name}</div>
                  <div className="text-xs sm:text-sm text-gray-500">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="reveal opacity-0 mt-10 sm:mt-16 flex flex-wrap justify-center items-center gap-3 sm:gap-6 lg:gap-8 animation-delay-400">
          <div className="flex items-center gap-2 sm:gap-3 bg-[#F8FAFC] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFB703] text-[#FFB703]"
                />
              ))}
            </div>
            <span className="font-semibold text-gray-900 text-sm sm:text-base whitespace-nowrap">4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-[#F8FAFC] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl">
            <span className="text-xl sm:text-2xl font-bold text-[#0056b3]">500+</span>
            <span className="text-gray-700 text-sm sm:text-base whitespace-nowrap">Happy Customers</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-[#F8FAFC] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl">
            <span className="text-xl sm:text-2xl font-bold text-[#0056b3]">98%</span>
            <span className="text-gray-700 text-sm sm:text-base whitespace-nowrap">Would Recommend</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
