import { useState } from 'react';
import { Copy, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { generateReply, type ReviewRequest } from '@/lib/api';
import { mapTone, mapLanguage, TONES } from '@/lib/tones';
import { t } from '@/lib/i18n';

interface DemoFormProps {
  showHistory?: boolean;
}

interface HistoryItem {
  id: string;
  request: ReviewRequest;
  reply: string;
  timestamp: Date;
}

export const DemoForm = ({ showHistory = false }: DemoFormProps) => {
  const [formData, setFormData] = useState<ReviewRequest>({
    business: '',
    tone: 'professional',
    review_text: '',
    language: 'en'
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [reply, setReply] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>(() => {
    if (!showHistory) return [];
    try {
      const saved = localStorage.getItem('repscribe-history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setReply('');
    setIsLoading(true);

    // Client-side validation
    if (!formData.business.trim() || !formData.review_text.trim()) {
      setError('Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    if (formData.review_text.length > 1200) {
      setError('Review text must be 1200 characters or less');
      setIsLoading(false);
      return;
    }

    try {
      const sanitizedRequest: ReviewRequest = {
        business: formData.business.trim(),
        tone: mapTone(formData.tone),
        review_text: formData.review_text.trim(),
        language: mapLanguage(formData.language)
      };

      const response = await generateReply(sanitizedRequest);
      setReply(response.reply);

      // Save to history if enabled
      if (showHistory) {
        const historyItem: HistoryItem = {
          id: Date.now().toString(),
          request: sanitizedRequest,
          reply: response.reply,
          timestamp: new Date()
        };

        const newHistory = [historyItem, ...history].slice(0, 10);
        setHistory(newHistory);
        localStorage.setItem('repscribe-history', JSON.stringify(newHistory));
      }
    } catch (err: any) {
      setError(err.message || t('demo.error'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(reply);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = reply;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Business Name */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {t('demo.business')} *
          </label>
          <input
            type="text"
            value={formData.business}
            onChange={(e) => setFormData(prev => ({ ...prev, business: e.target.value }))}
            placeholder={t('demo.businessPlaceholder')}
            className="w-full px-4 py-3 border border-input rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
            required
          />
        </div>

        {/* Tone */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {t('demo.tone')} *
          </label>
          <select
            value={formData.tone}
            onChange={(e) => setFormData(prev => ({ ...prev, tone: e.target.value as any }))}
            className="w-full px-4 py-3 border border-input rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
            required
          >
            {TONES.map(tone => (
              <option key={tone} value={tone}>
                {t(`demo.tones.${tone}`)}
              </option>
            ))}
          </select>
        </div>

        {/* Language */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {t('demo.language')} *
          </label>
          <select
            value={formData.language}
            onChange={(e) => setFormData(prev => ({ ...prev, language: e.target.value as any }))}
            className="w-full px-4 py-3 border border-input rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
            required
          >
            <option value="en">{t('demo.languages.en')}</option>
            <option value="cs">{t('demo.languages.cs')}</option>
          </select>
        </div>

        {/* Review Text */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {t('demo.reviewText')} *
            <span className="text-muted-foreground ml-2">
              ({formData.review_text.length}/1200)
            </span>
          </label>
          <textarea
            value={formData.review_text}
            onChange={(e) => setFormData(prev => ({ ...prev, review_text: e.target.value }))}
            placeholder={t('demo.reviewPlaceholder')}
            rows={5}
            maxLength={1200}
            className="w-full px-4 py-3 border border-input rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              {t('demo.generating')}
            </>
          ) : (
            t('demo.generate')
          )}
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <div className="flex items-center space-x-2 p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Reply Result */}
      {reply && (
        <div className="border border-border rounded-xl p-6 bg-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">
              {t('demo.result')}
            </h3>
            <button
              onClick={handleCopy}
              className="flex items-center space-x-2 px-3 py-1.5 text-sm btn-secondary"
            >
              {copied ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  <span>{t('demo.copied')}</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>{t('demo.copy')}</span>
                </>
              )}
            </button>
          </div>
          <p className="text-foreground whitespace-pre-wrap leading-relaxed">
            {reply}
          </p>
        </div>
      )}

      {/* History (App only) */}
      {showHistory && history.length > 0 && (
        <div className="border border-border rounded-xl p-6 bg-card">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            {t('app.history')}
          </h3>
          <div className="space-y-4">
            {history.map((item) => (
              <div key={item.id} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-medium text-foreground">{item.request.business}</p>
                  <span className="text-xs text-muted-foreground">
                    {item.timestamp.toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                  {item.request.review_text}
                </p>
                <p className="text-sm text-foreground bg-muted/50 p-2 rounded">
                  {item.reply}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Note */}
      <p className="text-center text-sm text-muted-foreground">
        {t('demo.footer')}
      </p>
    </div>
  );
};