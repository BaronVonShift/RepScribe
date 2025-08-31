import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { t } from '@/lib/i18n';

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = Array.from({ length: 6 }, (_, i) => ({
    question: t(`faq.items.${i}.question`),
    answer: t(`faq.items.${i}.answer`)
  }));

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-emerald-900/5 to-orange-900/5">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('faq.title')}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-600 rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm hover:border-emerald-500/30 transition-colors"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                  onClick={() => toggleItem(index)}
                >
                  <span className="font-medium text-white pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};