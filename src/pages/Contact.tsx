import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    context: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formState.name) {
      newErrors.name = 'This field is required';
    }
    if (!formState.email) {
      newErrors.email = 'This field is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formState.company) {
      newErrors.company = 'This field is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate submission
    setErrors({});
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-black/60" />
          </div>
          <h1 className="text-[32px] md:text-[40px] leading-[1.2] tracking-tight mb-4">
            Message sent
          </h1>
          <p className="text-[16px] leading-relaxed text-black/60 mb-8">
            We've received your request and will respond within one business day.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="inline-flex items-center gap-2 text-[15px] text-black/70 hover:text-black transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[48px] md:text-[64px] leading-[1.1] tracking-tight mb-6">
              Let's talk when
              <br />
              it matters.
            </h1>
            <p className="text-[18px] md:text-[20px] leading-relaxed text-black/60">
              We respond within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-[600px] mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[14px] mb-2 text-black/70">
                Full name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-md border ${
                  errors.name ? 'border-red-500' : 'border-black/10'
                } bg-white text-[15px] focus:outline-none focus:ring-2 focus:ring-black/20`}
              />
              {errors.name && (
                <p className="text-[13px] text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-[14px] mb-2 text-black/70">
                Work email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className={`w-full px-4 py-3 rounded-md border ${
                  errors.email ? 'border-red-500' : 'border-black/10'
                } bg-white text-[15px] focus:outline-none focus:ring-2 focus:ring-black/20`}
              />
              {errors.email && (
                <p className="text-[13px] text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="company" className="block text-[14px] mb-2 text-black/70">
                Company name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formState.company}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-md border ${
                  errors.company ? 'border-red-500' : 'border-black/10'
                } bg-white text-[15px] focus:outline-none focus:ring-2 focus:ring-black/20`}
              />
              {errors.company && (
                <p className="text-[13px] text-red-500 mt-1">{errors.company}</p>
              )}
            </div>

            <div>
              <label htmlFor="context" className="block text-[14px] mb-2 text-black/70">
                Brief context (optional)
              </label>
              <textarea
                id="context"
                name="context"
                value={formState.context}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us about your SAP needs..."
                className="w-full px-4 py-3 rounded-md border border-black/10 bg-white text-[15px] focus:outline-none focus:ring-2 focus:ring-black/20 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-md hover:bg-black/90 transition-colors text-[15px]"
            >
              Send request
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16">
        <div className="max-w-[600px] mx-auto px-6">
          <div className="bg-black/[0.02] rounded-lg p-8 border border-black/5">
            <h3 className="text-[18px] mb-4 tracking-tight">What happens next</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[14px] text-black/70">
                <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[11px] text-black/50">1</span>
                </div>
                <span>We review your request and respond within one business day</span>
              </li>
              <li className="flex items-start gap-3 text-[14px] text-black/70">
                <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[11px] text-black/50">2</span>
                </div>
                <span>
                  We schedule a discovery call to understand your requirements
                </span>
              </li>
              <li className="flex items-start gap-3 text-[14px] text-black/70">
                <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[11px] text-black/50">3</span>
                </div>
                <span>
                  We provide a structured approach and timeline for your SAP needs
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-16 border-t border-black/5">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-[20px] mb-3 tracking-tight">Prefer email?</h3>
            <p className="text-[15px] text-black/60 mb-4">
              You can reach us directly at{' '}
              <a
                href="mailto:info@a2techconsult.com"
                className="text-black underline hover:text-black/70 transition-colors"
              >
                info@a2techconsult.com
              </a>
            </p>
            <p className="text-[13px] text-black/40">
              We respond to all inquiries within one business day.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-black/5">
            {/* Hyderabad Office */}
            <div>
              <p className="text-[13px] tracking-wider uppercase text-black/40 mb-6">
                Hyderabad Office
              </p>
              <div className="space-y-5">
                <div>
                  <p className="text-[14px] text-black/50 mb-2">Our Address</p>
                  <p className="text-[15px] text-black/80 leading-relaxed mb-1">
                    ASQUARED TECHNOLOGIES (INDIA) PRIVATE LIMITED
                  </p>
                  <p className="text-[15px] text-black/70 leading-relaxed">
                    Plot No 226, Mythri Nagar, Tirumalagiri, Hyderabad, Telangana - 500049
                  </p>
                </div>
                <div>
                  <p className="text-[14px] text-black/50 mb-2">Email</p>
                  <a 
                    href="mailto:admin@a2techconsult.com"
                    className="text-[15px] text-black/80 hover:text-black transition-colors underline"
                  >
                    admin@a2techconsult.com
                  </a>
                </div>
                <div>
                  <p className="text-[14px] text-black/50 mb-2">CIN</p>
                  <p className="text-[15px] text-black/70">U62091TS2025PTC194597</p>
                </div>
                <div>
                  <p className="text-[14px] text-black/50 mb-2">GST No</p>
                  <p className="text-[15px] text-black/70">36ABCCA3060C1Z9</p>
                </div>
              </div>
            </div>

            {/* USA Office */}
            <div>
              <p className="text-[13px] tracking-wider uppercase text-black/40 mb-6">
                USA
              </p>
              <div className="space-y-5">
                <div>
                  <p className="text-[14px] text-black/50 mb-2">Our Address</p>
                  <p className="text-[15px] text-black/70 leading-relaxed">
                    1631 N Terracina Dr, Dublin CA 94568
                  </p>
                </div>
                <div>
                  <p className="text-[14px] text-black/50 mb-2">Email</p>
                  <div className="space-y-1">
                    <a 
                      href="mailto:hr@a2techconsult.com"
                      className="block text-[15px] text-black/80 hover:text-black transition-colors underline"
                    >
                      hr@a2techconsult.com
                    </a>
                    <a 
                      href="mailto:sales@a2techconsult.com"
                      className="block text-[15px] text-black/80 hover:text-black transition-colors underline"
                    >
                      sales@a2techconsult.com
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] text-black/50 mb-2">Phone</p>
                  <a 
                    href="tel:+14084993596"
                    className="text-[15px] text-black/80 hover:text-black transition-colors"
                  >
                    +1 (408) 499-3596
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
