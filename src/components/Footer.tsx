import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { t, getLanguage, setLanguage, type Language } from '@/lib/i18n';
import { useState } from 'react';

export const Footer = () => {
  const [currentLang, setCurrentLang] = useState<Language>(getLanguage());

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setCurrentLang(lang);
    window.location.reload();
  };

  return (
    <footer className="border-t border-gray-700 bg-gray-900">
      <div className="container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-20 h-20">
                <img src="/src/assets/LogoRS.png" alt="RepScribe Logo" className="w-13 h-13 object-contain" />
              </div>
              <span className="text-xl font-bold text-white">{t('logo')}</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">{t('footer.product')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/demo" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.demo')}
                </Link>
              </li>
              <li>
                <Link to="/#pricing" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.pricing')}
                </Link>
              </li>
              <li>
                <Link to="/app" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('hero.secondaryCTA')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/legal/terms" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">{t('footer.support')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@repscribe.com" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.contact')}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                  {t('footer.docs')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} RepScribe. All rights reserved.
          </p>
          
          {/* Language Switcher */}
          <button
            className="flex items-center space-x-1 text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors"
            onClick={() => handleLanguageChange(currentLang === 'en' ? 'cs' : 'en')}
          >
            <Globe className="h-4 w-4" />
            <span>{currentLang === 'en' ? 'English' : 'Čeština'}</span>
          </button>
        </div>
      </div>
    </footer>
  );
};