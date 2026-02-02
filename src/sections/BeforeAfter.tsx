import { useState, useEffect, useRef } from 'react';
import { MoveHorizontal } from 'lucide-react';

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <section
      id="transformations"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="reveal opacity-0 inline-block text-[#0056b3] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
            Transformations
          </span>
          <h2 className="reveal opacity-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 animation-delay-100">
            See The Difference
          </h2>
          <p className="reveal opacity-0 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-0 animation-delay-200">
            Drag the slider to see the incredible transformations we deliver.
            From tired and dated to bright and modern.
          </p>
        </div>

        {/* Before/After Comparison */}
        <div
          className="reveal opacity-0 relative max-w-4xl mx-auto animation-delay-300"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          <div
            ref={containerRef}
            className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none touch-none"
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
              <img
                src="/images/after-room.jpg"
                alt="After renovation - bright modern room"
                className="w-full h-full object-cover"
                loading="lazy"
                draggable={false}
              />
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-[#0056b3] text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md sm:rounded-lg font-semibold shadow-lg text-xs sm:text-base">
                AFTER
              </div>
            </div>

            {/* Before Image (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="/images/before-room.jpg"
                alt="Before renovation - dated room"
                className="w-full h-full object-cover"
                loading="lazy"
                draggable={false}
              />
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-gray-700 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md sm:rounded-lg font-semibold shadow-lg text-xs sm:text-base">
                BEFORE
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 sm:w-1 bg-white cursor-ew-resize shadow-lg"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform">
                <MoveHorizontal className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
              </div>
            </div>
          </div>

          {/* Caption */}
          <p className="text-center text-gray-600 mt-4 sm:mt-6 italic text-sm sm:text-base">
            "From tired and dated to bright and modern."
          </p>
        </div>

        {/* Stats */}
        <div className="reveal opacity-0 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-8 sm:mt-12 animation-delay-400">
          {[
            { value: '500+', label: 'Homes Transformed' },
            { value: '98%', label: 'Customer Satisfaction' },
            { value: '15+', label: 'Years Experience' },
            { value: '2yr', label: 'Workmanship Guarantee' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 sm:p-6 bg-[#F8FAFC] rounded-lg sm:rounded-xl"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0056b3] mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
