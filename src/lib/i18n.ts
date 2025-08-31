export interface Translations {
  [key: string]: string | Translations;
}

export const translations = {
  en: {
    // Header
    logo: "RepScribe",
    language: "Language",

    // Landing page
    hero: {
      title: "Reply to every Google review in seconds.",
      subtitle: "Paste a review and get a polished, on-brand reply in 30 seconds.",
      primaryCTA: "Try the demo",
      secondaryCTA: "Go to app"
    },

    benefits: {
      title: "Why RepScribe?",
      item1: {
        title: "Native-quality tone and grammar",
        description: "AI-crafted responses that sound natural and professional"
      },
      item2: {
        title: "Saves hours—responses without typing",
        description: "Generate perfect replies instantly, no more writer's block"
      },
      item3: {
        title: "Safe by design—review before publishing",
        description: "Always get a draft to review before going live"
      }
    },

    pricing: {
      title: "Simple, transparent pricing",
      subtitle: "Choose the plan that fits your business needs",
      starter: {
        name: "Starter",
        priceUSD: "$27",
        priceCZK: "565 Kč",
        period: "/month",
        description: "Perfect for small businesses",
        replies: "25 replies/month",
        features: ["AI-powered responses", "Multiple languages", "Email support"]
      },
      pro: {
        name: "Pro",
        priceUSD: "$77",
        priceCZK: "1,611 Kč",
        period: "/month",
        description: "For growing businesses",
        replies: "150 replies/month",
        features: ["Everything in Starter", "Priority support", "Custom tone settings", "Response analytics"]
      },
      agency: {
        name: "Agency",
        priceUSD: "$247",
        priceCZK: "5,169 Kč",
        period: "/month",
        description: "For agencies and enterprises",
        replies: "Unlimited replies",
        features: ["Everything in Pro", "Multi-location support", "White-label option", "API access", "Dedicated support"]
      },
      cta: "Get started",
      mostPopular: "Most Popular"
    },

    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Do I need to connect my Google account?",
          answer: "No Google connection needed for the demo. For the full app, we'll add optional Google integration to streamline your workflow."
        },
        {
          question: "What languages are supported?",
          answer: "Currently English and Czech, with more languages coming soon based on user demand."
        },
        {
          question: "Can I customize the tone of responses?",
          answer: "Yes! Choose from formal, friendly, neutral, professional, or warm tones to match your brand voice."
        },
        {
          question: "Is there a free trial?",
          answer: "Try our demo with no signup required. Paid plans include a 7-day money-back guarantee."
        },
        {
          question: "How accurate are the AI responses?",
          answer: "Our AI generates high-quality drafts, but we always recommend reviewing before publishing to ensure they match your brand perfectly."
        },
        {
          question: "Can I cancel anytime?",
          answer: "Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees."
        }
      ]
    },

    trust: "No Google connection needed for the demo. Drafts only.",

    // Demo page
    demo: {
      title: "Try RepScribe Demo",
      subtitle: "See how RepScribe generates professional review responses",
      business: "Business name",
      businessPlaceholder: "Praha Dental Clinic",
      tone: "Tone",
      tones: {
        formal: "Formal",
        friendly: "Friendly",
        neutral: "Neutral",
        professional: "Professional",
        warm: "Warm"
      },
      reviewText: "Review text",
      reviewPlaceholder: "Paste the customer review here...",
      language: "Language",
      languages: {
        en: "English (EN)",
        cs: "Čeština (CS)"
      },
      generate: "Generate reply",
      generating: "Generating...",
      result: "Suggested reply",
      copy: "Copy",
      copied: "Copied!",
      error: "Service unavailable. Please try again.",
      footer: "AI-generated drafts. Please review before publishing."
    },

    // App page
    app: {
      title: "RepScribe App",
      password: "Access password",
      passwordPlaceholder: "Enter password",
      login: "Access app",
      invalidPassword: "Invalid password",
      history: "Recent replies",
      noHistory: "No recent replies",
      connectGoogle: "Connect Google account (coming soon)",
      settings: "Settings",
      logout: "Logout"
    },

    // Legal
    legal: {
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      lastUpdated: "Last updated"
    },

    // Footer
    footer: {
      description: "Professional Google review responses in seconds.",
      product: "Product",
      demo: "Demo",
      pricing: "Pricing",
      legal: "Legal",
      terms: "Terms",
      privacy: "Privacy",
      support: "Support",
      contact: "Contact",
      docs: "Documentation"
    }
  },

  cs: {
    // Header
    logo: "RepScribe",
    language: "Jazyk",

    // Landing page
    hero: {
      title: "Odpovězte na každou Google recenzi během vteřin.",
      subtitle: "Vložte recenzi a získejte profesionální odpověď během 30 vteřin.",
      primaryCTA: "Vyzkoušet demo",
      secondaryCTA: "Přejít do aplikace"
    },

    benefits: {
      title: "Proč RepScribe?",
      item1: {
        title: "Přirozený tón a gramatika",
        description: "AI odpovědi, které zní přirozeně a profesionálně"
      },
      item2: {
        title: "Ušetří hodiny—odpovědi bez psaní",
        description: "Generujte dokonalé odpovědi okamžitě, konec s prázdnou stránkou"
      },
      item3: {
        title: "Bezpečné návrhy—zkontrolujte před publikováním",
        description: "Vždy získáte návrh ke kontrole před zveřejněním"
      }
    },

    pricing: {
      title: "Jednoduché, transparentní ceny",
      subtitle: "Vyberte si plán, který vyhovuje vašemu podnikání",
      starter: {
        name: "Začátečník",
        priceUSD: "$27",
        priceCZK: "565 Kč",
        period: "/měsíc",
        description: "Ideální pro malé podniky",
        replies: "25 odpovědí/měsíc",
        features: ["AI odpovědi", "Více jazyků", "Email podpora"]
      },
      pro: {
        name: "Pro",
        priceUSD: "$77",
        priceCZK: "1 611 Kč",
        period: "/měsíc",
        description: "Pro rostoucí podniky",
        replies: "150 odpovědí/měsíc",
        features: ["Vše ze Začátečník", "Prioritní podpora", "Vlastní nastavení tónu", "Analytika odpovědí"]
      },
      agency: {
        name: "Agentura",
        priceUSD: "$247",
        priceCZK: "5 169 Kč",
        period: "/měsíc",
        description: "Pro agentury a podniky",
        replies: "Neomezené odpovědi",
        features: ["Vše z Pro", "Podpora více lokalit", "White-label možnost", "API přístup", "Vyhrazená podpora"]
      },
      cta: "Začít",
      mostPopular: "Nejpopulárnější"
    },

    faq: {
      title: "Často kladené otázky",
      items: [
        {
          question: "Musím připojit můj Google účet?",
          answer: "Pro demo není potřeba Google připojení. Pro plnou aplikaci přidáme volitelnou Google integraci pro zjednodušení práce."
        },
        {
          question: "Které jazyky jsou podporované?",
          answer: "Aktuálně angličtina a čeština, další jazyky brzy podle poptávky uživatelů."
        },
        {
          question: "Mohu přizpůsobit tón odpovědí?",
          answer: "Ano! Vyberte si z formálního, přátelského, neutrálního, profesionálního nebo vřelého tónu podle vaší značky."
        },
        {
          question: "Je k dispozici zkušební období?",
          answer: "Vyzkoušejte naše demo bez registrace. Placené plány zahrnují 7denní záruku vrácení peněz."
        },
        {
          question: "Jak přesné jsou AI odpovědi?",
          answer: "Naše AI generuje kvalitní návrhy, ale vždy doporučujeme kontrolu před publikováním pro soulad s vaší značkou."
        },
        {
          question: "Mohu kdykoli zrušit?",
          answer: "Ano, předplatné můžete kdykoli zrušit. Žádné dlouhodobé smlouvy ani poplatky za zrušení."
        }
      ]
    },

    trust: "Pro demo není potřeba Google připojení. Pouze návrhy.",

    // Demo page
    demo: {
      title: "Vyzkoušet RepScribe Demo",
      subtitle: "Podívejte se, jak RepScribe generuje profesionální odpovědi na recenze",
      business: "Název podniku",
      businessPlaceholder: "Praha Dental Clinic",
      tone: "Tón",
      tones: {
        formal: "Formální",
        friendly: "Přátelský",
        neutral: "Neutrální",
        professional: "Profesionální",
        warm: "Vřelý"
      },
      reviewText: "Text recenze",
      reviewPlaceholder: "Vložte zde recenzi zákazníka...",
      language: "Jazyk",
      languages: {
        en: "Angličtina (EN)",
        cs: "Čeština (CS)"
      },
      generate: "Generovat odpověď",
      generating: "Generuji...",
      result: "Navržená odpověď",
      copy: "Kopírovat",
      copied: "Zkopírováno!",
      error: "Služba nedostupná. Zkuste to prosím znovu.",
      footer: "AI generované návrhy. Prosím zkontrolujte před publikováním."
    },

    // App page
    app: {
      title: "RepScribe Aplikace",
      password: "Přístupové heslo",
      passwordPlaceholder: "Zadejte heslo",
      login: "Přístup do aplikace",
      invalidPassword: "Neplatné heslo",
      history: "Nedávné odpovědi",
      noHistory: "Žádné nedávné odpovědi",
      connectGoogle: "Připojit Google účet (již brzy)",
      settings: "Nastavení",
      logout: "Odhlásit"
    },

    // Legal
    legal: {
      terms: "Obchodní podmínky",
      privacy: "Zásady ochrany osobních údajů",
      lastUpdated: "Naposledy aktualizováno"
    },

    // Footer
    footer: {
      description: "Profesionální odpovědi na Google recenze během vteřin.",
      product: "Produkt",
      demo: "Demo",
      pricing: "Ceny",
      legal: "Právní",
      terms: "Podmínky",
      privacy: "Soukromí",
      support: "Podpora",
      contact: "Kontakt",
      docs: "Dokumentace"
    }
  }
} as const;

export type Language = 'en' | 'cs';

let currentLanguage: Language = 'en';

export const setLanguage = (lang: Language) => {
  currentLanguage = lang;
  if (typeof window !== 'undefined') {
    localStorage.setItem('repscribe-language', lang);
  }
};

export const getLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('repscribe-language') as Language;
    if (saved && ['en', 'cs'].includes(saved)) {
      currentLanguage = saved;
      return saved;
    }
  }
  return currentLanguage;
};

export const t = (key: string, lang?: Language): string => {
  const language = lang || getLanguage();
  const keys = key.split('.');
  let value: any = translations[language];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as any)[k];
    } else {
      // Fallback to English if key not found
      value = translations.en;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = (value as any)[fallbackKey];
        } else {
          return key; // Return key if not found in English either
        }
      }
      break;
    }
  }

  return typeof value === 'string' ? value : key;
};

// Initialize language on module load (browser)
if (typeof window !== 'undefined') {
  currentLanguage = getLanguage();
}
