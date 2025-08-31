import { Check } from 'lucide-react';
import { t, getLanguage } from '@/lib/i18n';

type Plan = {
  name: string;
  priceUSD: string;
  priceCZK: string;
  period: string;
  description: string;
  replies: string;
  features: string[];
  popular: boolean;
};

export const Pricing = () => {
  const lang = getLanguage();

  const plans: Plan[] = [
    {
      name: t('pricing.starter.name'),
      priceUSD: t('pricing.starter.priceUSD'),
      priceCZK: t('pricing.starter.priceCZK'),
      period: t('pricing.starter.period'),
      description: t('pricing.starter.description'),
      replies: t('pricing.starter.replies'),
      features: [
        t('pricing.starter.features.0'),
        t('pricing.starter.features.1'),
        t('pricing.starter.features.2'),
      ],
      popular: false,
    },
    {
      name: t('pricing.pro.name'),
      priceUSD: t('pricing.pro.priceUSD'),
      priceCZK: t('pricing.pro.priceCZK'),
      period: t('pricing.pro.period'),
      description: t('pricing.pro.description'),
      replies: t('pricing.pro.replies'),
      features: [
        t('pricing.pro.features.0'),
        t('pricing.pro.features.1'),
        t('pricing.pro.features.2'),
        t('pricing.pro.features.3'),
      ],
      popular: true,
    },
    {
      name: t('pricing.agency.name'),
      priceUSD: t('pricing.agency.priceUSD'),
      priceCZK: t('pricing.agency.priceCZK'),
      period: t('pricing.agency.period'),
      description: t('pricing.agency.description'),
      replies: t('pricing.agency.replies'),
      features: [
        t('pricing.agency.features.0'),
        t('pricing.agency.features.1'),
        t('pricing.agency.features.2'),
        t('pricing.agency.features.3'),
        t('pricing.agency.features.4'),
      ],
      popular: false,
    },
  ];

  // Helper: choose which currency is PRIMARY based on language
  const primary = (plan: Plan) =>
    lang === 'cs'
      ? { amount: plan.priceCZK, period: plan.period }
      : { amount: plan.priceUSD, period: plan.period };

  const secondary = (plan: Plan) =>
    lang === 'cs'
      ? { amount: plan.priceUSD, period: t('pricing.starter.period', 'en') } // show /month in EN for USD
      : { amount: plan.priceCZK, period: t('pricing.starter.period', 'cs') }; // show /měsíc in CS for CZK

  return (
    <section
      id="pricing"
      className="section-padding bg-gradient-to-br from-gray-900 via-emerald-900/10 to-orange-900/10"
    >
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">{t('pricing.title')}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t('pricing.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const p = primary(plan);
            const s = secondary(plan);

            return (
              <div
                key={index}
                className={`relative rounded-2xl border p-8 ${
                  plan.popular
                    ? 'border-emerald-500 bg-gray-800/70 backdrop-blur-sm shadow-lg scale-105 shadow-emerald-500/20'
                    : 'border-gray-600 bg-gray-800/50 backdrop-blur-sm'
                } card-hover`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                      {t('pricing.mostPopular')}
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>

                  {/* Primary price */}
                  <div className="flex items-baseline justify-center mb-1">
                    <span className="text-4xl font-bold text-white">{p.amount}</span>
                    <span className="text-gray-400 ml-1">{p.period}</span>
                  </div>

                  {/* Secondary price */}
                  <div className="text-sm text-gray-400 mb-2">
                    {s.amount} <span className="ml-1">{s.period}</span>
                  </div>

                  <p className="text-sm font-medium text-emerald-400">{plan.replies}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
                    plan.popular ? 'btn-hero' : 'btn-secondary-hero'
                  }`}
                >
                  {t('pricing.cta')}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
