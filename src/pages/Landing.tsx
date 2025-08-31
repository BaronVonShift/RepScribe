import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Clock, Shield } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { t } from '@/lib/i18n';

export const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-orange-900">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 relative">
        <div className="container-padding">
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/demo"
                className="btn-hero"
              >
                {t('hero.primaryCTA')}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
              <Link
                to="/app"
                className="btn-secondary-hero"
              >
                {t('hero.secondaryCTA')}
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-emerald-800/60 to-orange-900/80 -z-10"></div>
      </section>

      {/* Gradient Divider */}
      <div className="gradient-divider mx-4 lg:mx-8"></div>

      {/* Trust Banner */}
      <section className="py-8 bg-black/20 backdrop-blur-sm">
        <div className="container-padding">
          <p className="text-center text-sm text-gray-300">
            {t('trust')}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-emerald-900/20 to-orange-900/20">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t('benefits.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group card-hover p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-400/40">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/20 mx-auto mb-4 group-hover:bg-emerald-400/30 transition-colors">
                <Zap className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t('benefits.item1.title')}
              </h3>
              <p className="text-gray-300">
                {t('benefits.item1.description')}
              </p>
            </div>

            <div className="text-center group card-hover p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-orange-500/20 hover:border-orange-400/40">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/20 mx-auto mb-4 group-hover:bg-orange-400/30 transition-colors">
                <Clock className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t('benefits.item2.title')}
              </h3>
              <p className="text-gray-300">
                {t('benefits.item2.description')}
              </p>
            </div>

            <div className="text-center group card-hover p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-400/40">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/20 mx-auto mb-4 group-hover:bg-emerald-400/30 transition-colors">
                <Shield className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t('benefits.item3.title')}
              </h3>
              <p className="text-gray-300">
                {t('benefits.item3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-emerald-900/30 via-gray-900/50 to-orange-900/30 backdrop-blur-sm">
        <div className="container-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to transform your review responses?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join businesses worldwide using RepScribe to save time and improve customer relationships.
            </p>
            <Link
              to="/demo"
              className="btn-hero"
            >
              {t('hero.primaryCTA')}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};