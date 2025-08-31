import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DemoForm } from '@/components/DemoForm';
import { Notice } from '@/components/Notice';
import { t } from '@/lib/i18n';
import { LogOut, Settings } from 'lucide-react';

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const appPassword = import.meta.env.VITE_APP_PASSWORD;

  useEffect(() => {
    // Check if user is already authenticated
    const isAuth = sessionStorage.getItem('repscribe-authenticated');
    if (isAuth === 'true' && appPassword) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [appPassword]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!appPassword) {
      setIsAuthenticated(true);
      return;
    }

    if (password === appPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('repscribe-authenticated', 'true');
    } else {
      setError(t('app.invalidPassword'));
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    sessionStorage.removeItem('repscribe-authenticated');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="section-padding pt-24">
          <div className="container-padding">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-4">
                  {t('app.title')}
                </h1>
                <p className="text-muted-foreground">
                  Enter your access password to continue
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('app.password')}
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={t('app.passwordPlaceholder')}
                      className="w-full px-4 py-3 border border-input rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                      required
                    />
                  </div>

                  {error && (
                    <Notice
                      type="error"
                      message={error}
                      onDismiss={() => setError('')}
                    />
                  )}

                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    {t('app.login')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="section-padding pt-24">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  {t('app.title')}
                </h1>
                <p className="text-muted-foreground">
                  Generate professional responses to Google reviews
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="btn-secondary">
                  <Settings className="h-4 w-4 mr-2" />
                  {t('app.settings')}
                </button>
                <button
                  onClick={handleLogout}
                  className="btn-secondary"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  {t('app.logout')}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                  <DemoForm showHistory />
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <button
                      disabled
                      className="w-full btn-secondary opacity-50 cursor-not-allowed"
                    >
                      {t('app.connectGoogle')}
                    </button>
                    <p className="text-xs text-muted-foreground">
                      Coming soon: Connect your Google Business account for streamlined workflow
                    </p>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Coming Soon
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Bulk review processing</li>
                    <li>• Custom tone templates</li>
                    <li>• Analytics dashboard</li>
                    <li>• Team collaboration</li>
                    <li>• API access</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};