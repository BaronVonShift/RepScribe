import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import { t, getLanguage, setLanguage, type Language } from '@/lib/i18n';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>(getLanguage());
  const location = useLocation();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setCurrentLang(lang);
    // simple hard reload so all strings update (keeps code minimal for MVP)
    window.location.reload();
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md supports-[backdrop-filter]:bg-black/10">
      <div className="container-padding">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center w-10 h-10">
              {/* served from /public */}
              <img src="/logo-rs.png" alt="RepScribe logo" className="h-8 w-auto" />
            </div>
            <span className="text-xl font-bold text-white">{t('logo')}</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/demo"
              className={`text-sm font-medium transition-colors hover:text-emerald-400 relative ${
                isActive('/demo') ? 'text-emerald-400' : 'text-gray-300'
              }`}
            >
              {t('footer.demo')}
              {isActive('/demo') && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-400" />
              )}
            </Link>

            <Link
              to="/#pricing"
              className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors"
            >
              {t('footer.pricing')}
            </Link>

            <Link
              to="/app"
              className={`text-sm font-medium transition-colors hover:text-emerald-400 relative ${
                isActive('/app') ? 'text-emerald-400' : 'text-gray-300'
              }`}
            >
              {t('hero.secondaryCTA')}
              {isActive('/app') && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-400" />
              )}
            </Link>
          </nav>

          {/* Language + mobile menu */}
          <div className="flex items-center space-x-4">
            <button
              className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors"
              onClick={() => handleLanguageChange(currentLang === 'en' ? 'cs' : 'en')}
              aria-label="Switch language"
            >
              <Globe className="h-4 w-4" />
              <span>{currentLang.toUpperCase()}</span>
            </button>

            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10 transition-colors text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-black/40 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/demo"
                className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                  isActive('/demo') ? 'text-emerald-400' : 'text-gray-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('footer.demo')}
              </Link>
              <Link
                to="/#pricing"
                className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('footer.pricing')}
              </Link>
              <Link
                to="/app"
                className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                  isActive('/app') ? 'text-emerald-400' : 'text-gray-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('hero.secondaryCTA')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
