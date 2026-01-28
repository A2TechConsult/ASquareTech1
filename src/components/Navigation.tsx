import { Link, useLocation } from 'react-router';
import { useState, useEffect } from 'react';

export function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/insights', label: 'Insights' },
    { path: '/why-us', label: 'Why Us' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-black/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
              <span className="text-white font-medium text-sm">A²</span>
            </div>
            <span className="text-[15px] tracking-tight text-black/90">
              ASquared Technologies
            </span>
          </Link>

          <div className="flex items-center gap-8">
            {links.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[15px] tracking-tight transition-colors ${
                  location.pathname === link.path
                    ? 'text-black'
                    : 'text-black/60 hover:text-black'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}