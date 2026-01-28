import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { X } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/dismissed cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-500"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="bg-white border-t border-black/10 shadow-2xl">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <h3 className="text-[15px] font-medium tracking-tight mb-2">
                    We value your privacy
                  </h3>
                  <p className="text-[14px] leading-relaxed text-black/70 max-w-3xl">
                    We use cookies to enhance your browsing experience, analyze website traffic, 
                    and understand where our visitors are coming from. By clicking "Accept", 
                    you consent to our use of cookies.{' '}
                    <Link 
                      to="/privacy-policy" 
                      className="text-black underline hover:text-black/70 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </div>
                <button
                  onClick={handleDecline}
                  className="md:hidden p-1 text-black/40 hover:text-black transition-colors"
                  aria-label="Dismiss cookie notice"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={handleDecline}
                className="flex-1 md:flex-none px-6 py-2.5 text-[14px] text-black/70 hover:text-black transition-colors"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-2.5 bg-black text-white rounded-md hover:bg-black/90 transition-colors text-[14px]"
              >
                Accept cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
