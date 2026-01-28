import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="border-t border-black/5 mt-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white font-medium text-xs">A²</span>
              </div>
              <span className="text-[14px] tracking-tight text-black/90">
                ASquared Technologies
              </span>
            </Link>
            <p className="text-[14px] leading-relaxed text-black/50 max-w-xs">
              SAP consulting for enterprise leaders who value precision.
            </p>
          </div>

          <div>
            <h4 className="text-[13px] tracking-wider uppercase text-black/40 mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/services"
                  className="text-[14px] text-black/60 hover:text-black transition-colors"
                >
                  ERP & Core Systems
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[14px] text-black/60 hover:text-black transition-colors"
                >
                  Revenue Systems
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[14px] text-black/60 hover:text-black transition-colors"
                >
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-capabilities"
                  className="text-[14px] text-black/60 hover:text-black transition-colors"
                >
                  AI Capabilities
                </Link>
              </li>
              <li>
                <Link
                  to="/staff-augmentation"
                  className="text-[14px] text-black/60 hover:text-black transition-colors"
                >
                  Staff Augmentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] tracking-wider uppercase text-black/40 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/why-us"
                  className="text-[14px] text-black/60 hover:text-black transition-colors"
                >
                  Why Us
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-[14px] text-black/60 hover:text-black transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/insights"
                  className="text-[14px] text-black/60 hover:text-black transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[14px] text-black/60 hover:text-black transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] tracking-wider uppercase text-black/40 mb-4">
              Connect
            </h4>
            <p className="text-[14px] text-black/60 mb-4">
              info@a2integrators.com
            </p>
            <div className="space-y-2">
              <p className="text-[13px] tracking-wider uppercase text-black/40">
                Locations
              </p>
              <p className="text-[14px] text-black/50">
                San Francisco
              </p>
              <p className="text-[14px] text-black/50">
                Hyderabad
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-black/40">
            © {new Date().getFullYear()} ASquared Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link 
              to="/privacy-policy" 
              className="text-[13px] text-black/40 hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-and-conditions" 
              className="text-[13px] text-black/40 hover:text-black transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link 
              to="/confidentiality" 
              className="text-[13px] text-black/40 hover:text-black transition-colors"
            >
              Confidentiality
            </Link>
            <p className="text-[13px] text-black/30">
              A2Integrators.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}