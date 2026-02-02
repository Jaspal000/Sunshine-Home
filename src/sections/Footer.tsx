import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Footer = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    postcode: '',
    service: '',
    details: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        postcode: '',
        service: '',
        details: '',
      });
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="bg-[#F0F4F8] pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-10 sm:mb-16">
          {/* Left Column - Contact Info */}
          <div>
            <div className="reveal opacity-0 mb-6 sm:mb-8">
              <span className="inline-block text-[#0056b3] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Ready to Revitalize Your Home?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Fill out the form and we'll get back to you within 24 hours to
                discuss your project and arrange a free site visit.
              </p>
            </div>

            {/* Contact Details */}
            <div className="reveal opacity-0 space-y-4 sm:space-y-6 animation-delay-100">
              <a
                href="tel:07399108188"
                className="flex items-center gap-3 sm:gap-4 group"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 bg-white rounded-lg sm:rounded-xl shadow-md flex items-center justify-center group-hover:bg-[#0056b3] transition-colors flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#0056b3] group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm text-gray-500 mb-0.5 sm:mb-1">Call Us</div>
                  <div className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-[#0056b3] transition-colors">
                    07399 108 188
                  </div>
                </div>
              </a>

              <a
                href="mailto:hello@sunshinehomemaintenance.co.uk"
                className="flex items-center gap-3 sm:gap-4 group"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 bg-white rounded-lg sm:rounded-xl shadow-md flex items-center justify-center group-hover:bg-[#0056b3] transition-colors flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#0056b3] group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm text-gray-500 mb-0.5 sm:mb-1">Email Us</div>
                  <div className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 group-hover:text-[#0056b3] transition-colors truncate">
                    hello@sunshinehomemaintenance.co.uk
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-14 sm:h-14 bg-white rounded-lg sm:rounded-xl shadow-md flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#0056b3]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm text-gray-500 mb-0.5 sm:mb-1">Service Area</div>
                  <div className="text-lg sm:text-xl font-semibold text-gray-900">
                    Manchester & Surrounding Areas
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="reveal opacity-0 flex flex-wrap gap-2 sm:gap-4 mt-6 sm:mt-8 animation-delay-200">
              <div className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-sm text-xs sm:text-sm font-medium text-gray-700">
                Fully Insured
              </div>
              <div className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-sm text-xs sm:text-sm font-medium text-gray-700">
                2-Year Guarantee
              </div>
              <div className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-sm text-xs sm:text-sm font-medium text-gray-700">
                Free Quotes
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="reveal opacity-0 animation-delay-200">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-8">
              {isSubmitted ? (
                <div className="text-center py-8 sm:py-12">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    We've received your enquiry and will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Your Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Smith"
                        required
                        className="h-10 sm:h-12 border-gray-200 focus:border-[#0056b3] focus:ring-[#0056b3] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="07XXX XXXXXX"
                        required
                        className="h-10 sm:h-12 border-gray-200 focus:border-[#0056b3] focus:ring-[#0056b3] text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Postcode *
                      </label>
                      <Input
                        type="text"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleInputChange}
                        placeholder="M1 1AA"
                        required
                        className="h-10 sm:h-12 border-gray-200 focus:border-[#0056b3] focus:ring-[#0056b3] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Service Required *
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData({ ...formData, service: value })
                        }
                        required
                      >
                        <SelectTrigger className="h-10 sm:h-12 border-gray-200 focus:border-[#0056b3] focus:ring-[#0056b3] text-sm">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="painting">
                            Painting & Decorating
                          </SelectItem>
                          <SelectItem value="renovation">
                            Full Property Renovation
                          </SelectItem>
                          <SelectItem value="kitchen">
                            Kitchen Installation
                          </SelectItem>
                          <SelectItem value="bathroom">
                            Bathroom Installation
                          </SelectItem>
                          <SelectItem value="flooring">
                            Flooring Specialist
                          </SelectItem>
                          <SelectItem value="maintenance">
                            Maintenance & Repairs
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Project Details
                    </label>
                    <Textarea
                      name="details"
                      value={formData.details}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      rows={3}
                      className="border-gray-200 focus:border-[#0056b3] focus:ring-[#0056b3] resize-none text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2 text-base sm:text-lg py-3 sm:py-4"
                  >
                    Send Enquiry
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy.
                    We'll never share your information with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl">☀️</span>
              <span className="font-bold text-sm sm:text-lg text-gray-900">
                SUNSHINE HOME
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 text-center">
              © 2026 Sunshine Home Maintenance. All Rights Reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
              <a href="#" className="hover:text-[#0056b3] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#0056b3] transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
