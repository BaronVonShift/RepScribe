import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { t, getLanguage, setLanguage, type Language } from '@/lib/i18n';
import { Globe } from 'lucide-react';

export const Terms = () => {
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
                  {t('legal.terms')}
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
                      <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
                      <p className="text-muted-foreground">
                        By accessing and using RepScribe ("the Service"), you accept and agree to be bound by the terms and provision of this agreement.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">2. Service Description</h2>
                      <p className="text-muted-foreground">
                        RepScribe is an AI-powered service that generates draft responses to Google reviews. All generated content is provided as suggestions and should be reviewed before publication.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">3. User Responsibilities</h2>
                      <p className="text-muted-foreground">
                        Users are responsible for reviewing all AI-generated content before publication. RepScribe is not liable for any content published without proper review.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">4. Pricing and Billing</h2>
                      <p className="text-muted-foreground">
                        Subscription fees are billed monthly or annually as selected. All fees are non-refundable except as required by law.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">5. Limitation of Liability</h2>
                      <p className="text-muted-foreground">
                        RepScribe shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">6. Contact Information</h2>
                      <p className="text-muted-foreground">
                        For questions about these Terms of Service, please contact us at legal@repscribe.com
                      </p>
                    </section>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">1. Přijetí podmínek</h2>
                      <p className="text-muted-foreground">
                        Přístupem a používáním RepScribe ("Služba") přijímáte a souhlasíte s podmínkami této smlouvy.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">2. Popis služby</h2>
                      <p className="text-muted-foreground">
                        RepScribe je AI služba, která generuje návrhy odpovědí na Google recenze. Veškerý generovaný obsah je poskytován jako návrh a měl by být zkontrolován před publikováním.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">3. Odpovědnosti uživatele</h2>
                      <p className="text-muted-foreground">
                        Uživatelé jsou odpovědní za kontrolu veškerého AI generovaného obsahu před publikováním. RepScribe nenese odpovědnost za obsah publikovaný bez řádné kontroly.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">4. Ceny a fakturace</h2>
                      <p className="text-muted-foreground">
                        Předplatné je účtováno měsíčně nebo ročně podle výběru. Všechny poplatky jsou nevratné, kromě případů vyžadovaných zákonem.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">5. Omezení odpovědnosti</h2>
                      <p className="text-muted-foreground">
                        RepScribe nenese odpovědnost za žádné nepřímé, náhodné, zvláštní, následné nebo sankční škody vyplývající z používání služby.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-foreground mb-3">6. Kontaktní informace</h2>
                      <p className="text-muted-foreground">
                        Pro otázky týkající se těchto Obchodních podmínek nás prosím kontaktujte na legal@repscribe.com
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