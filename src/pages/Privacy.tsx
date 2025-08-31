import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { t, getLanguage, setLanguage, type Language } from '@/lib/i18n';
import { Globe } from 'lucide-react';

export const Privacy = () => {
  const [currentLang, setCurrentLang] = useState<Language>(getLanguage());

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setCurrentLang(lang);
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="section-padding pt-24">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  {t('legal.privacy')}
                </h1>
                <p className="text-muted-foreground">
                  {t('legal.lastUpdated')}: {new Date().toLocaleDateString()}
                </p>
              </div>
              
              <button
                className="flex items-center space-x-2 btn-secondary"
                onClick={() => handleLanguageChange(currentLang === 'en' ? 'cs' : 'en')}
              >
                <Globe className="h-4 w-4" />
                <span>{currentLang === 'en' ? 'Čeština' : 'English'}</span>
              </button>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <div className="prose prose-zinc dark:prose-invert max-w-none">
                {currentLang === 'en' ? (
                  <div className="space-y-6">
                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
                      <p className="text-muted-foreground">
                        We collect information you provide directly to us, such as business names, review text, and generated responses for the purpose of providing our AI-powered service.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
                      <p className="text-muted-foreground">
                        Your information is used solely to generate AI responses to reviews. We do not share, sell, or use your data for any other purposes without your explicit consent.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">3. Data Storage and Security</h2>
                      <p className="text-muted-foreground">
                        We implement appropriate security measures to protect your personal information. Review data is processed in real-time and not permanently stored on our servers.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">4. Third-Party Services</h2>
                      <p className="text-muted-foreground">
                        We may use third-party AI services to generate responses. These services are bound by strict data processing agreements and do not retain your data.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">5. Your Rights</h2>
                      <p className="text-muted-foreground">
                        You have the right to access, update, or delete your personal information. Contact us at privacy@repscribe.com to exercise these rights.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">6. Contact Us</h2>
                      <p className="text-muted-foreground">
                        If you have questions about this Privacy Policy, please contact us at privacy@repscribe.com
                      </p>
                    </section>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">1. Informace, které shromažďujeme</h2>
                      <p className="text-muted-foreground">
                        Shromažďujeme informace, které nám přímo poskytnete, jako jsou názvy podniků, texty recenzí a generované odpovědi za účelem poskytování naší AI služby.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">2. Jak používáme vaše informace</h2>
                      <p className="text-muted-foreground">
                        Vaše informace používáme výhradně pro generování AI odpovědí na recenze. Nesdílíme, neprodáváme ani nepoužíváme vaše data k jiným účelům bez vašeho výslovného souhlasu.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">3. Úložiště dat a bezpečnost</h2>
                      <p className="text-muted-foreground">
                        Implementujeme vhodná bezpečnostní opatření k ochraně vašich osobních údajů. Data recenzí se zpracovávají v reálném čase a nejsou trvale uložena na našich serverech.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">4. Služby třetích stran</h2>
                      <p className="text-muted-foreground">
                        Můžeme používat AI služby třetích stran pro generování odpovědí. Tyto služby jsou vázány přísnými smlouvami o zpracování dat a vaše data si nezachovávají.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">5. Vaše práva</h2>
                      <p className="text-muted-foreground">
                        Máte právo na přístup, aktualizaci nebo smazání svých osobních údajů. Kontaktujte nás na privacy@repscribe.com pro uplatnění těchto práv.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">6. Kontaktujte nás</h2>
                      <p className="text-muted-foreground">
                        Pokud máte otázky týkající se těchto Zásad ochrany osobních údajů, kontaktujte nás na privacy@repscribe.com
                      </p>
                    </section>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};