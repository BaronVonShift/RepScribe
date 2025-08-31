import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DemoForm } from '@/components/DemoForm';
import { t } from '@/lib/i18n';

export const Demo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="section-padding pt-24">
        <div className="container-padding">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('demo.title')}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t('demo.subtitle')}
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <DemoForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};