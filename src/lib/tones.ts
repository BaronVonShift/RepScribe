export type Tone = 'formal' | 'friendly' | 'neutral' | 'professional' | 'warm';

export const TONES: Tone[] = ['formal', 'friendly', 'neutral', 'professional', 'warm'];

export const mapTone = (tone: string): Tone => {
  const normalizedTone = tone.toLowerCase().trim();
  if (TONES.includes(normalizedTone as Tone)) {
    return normalizedTone as Tone;
  }
  return 'professional'; // Default fallback
};

export const mapLanguage = (language: string): 'en' | 'cs' => {
  const normalizedLang = language.toLowerCase().trim();
  if (normalizedLang === 'cs' || normalizedLang === 'czech') {
    return 'cs';
  }
  return 'en'; // Default fallback
};