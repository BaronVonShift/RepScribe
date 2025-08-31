# RepScribe - AI-Powered Google Review Response Generator

RepScribe is a production-ready micro-SaaS that generates professional, on-brand responses to Google reviews in multiple languages. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Landing Page**: Professional SaaS landing with hero, benefits, pricing, and FAQ
- **Interactive Demo**: Try the AI review response generator without signup
- **Gated App**: Password-protected dashboard with history and settings
- **Multi-language Support**: English and Czech with easy i18n expansion
- **Responsive Design**: Mobile-first approach with clean, trustworthy design
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Custom Design System
- **Routing**: React Router DOM
- **UI Components**: Radix UI + Custom Components
- **Icons**: Lucide React
- **API Integration**: n8n webhook backend

## 🎨 Design System

RepScribe uses a carefully crafted design system with:
- **Primary Color**: Blue #2563EB (blue-600)
- **Typography**: Inter font family
- **Components**: Custom button variants, semantic color tokens
- **Responsive**: Mobile-first with container utilities
- **Animations**: Smooth transitions and hover effects

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
# Webhook URL for review generation (required for demo/app functionality)
VITE_N8N_WEBHOOK=https://n8n.reingotravel.com/webhook/review-draft

# App password for gated access (optional - if not set, no password required)
VITE_APP_PASSWORD=your-secure-password
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd repscribe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your values
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:8080
   ```

## 📖 Routes

- **`/`** - Landing page with hero, features, pricing, FAQ
- **`/demo`** - Interactive demo (no authentication required)
- **`/app`** - Gated application dashboard
- **`/legal/terms`** - Terms of Service (EN/CS)
- **`/legal/privacy`** - Privacy Policy (EN/CS)

## 🌐 API Integration

RepScribe integrates with an n8n webhook backend:

**Endpoint**: `POST /webhook/review-draft`

**Request Body**:
```json
{
  "business": "Business Name",
  "tone": "professional|formal|friendly|neutral|warm",
  "review_text": "Customer review text...",
  "language": "en|cs"
}
```

**Response**:
```json
{
  "reply": "Generated professional response..."
}
```

## 🌍 Internationalization

RepScribe supports multiple languages through a custom i18n system:

- **Default**: English (EN)
- **Available**: Czech (CS)
- **Expandable**: Easy to add new languages via JSON dictionaries

To add a new language:
1. Add translations to `src/lib/i18n.ts`
2. Update the language selector components
3. Add the language code to type definitions

## 🎨 Customization

### Design System

The design system is defined in:
- `src/index.css` - CSS custom properties and component classes
- `tailwind.config.ts` - Tailwind configuration with custom colors

### Components

All components use the design system tokens:
- **Colors**: Semantic tokens (primary, secondary, muted, etc.)
- **Spacing**: Consistent padding and margins
- **Typography**: Inter font with defined scales
- **Shadows**: Layered shadow system for depth

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Set Environment Variables**
   In Vercel dashboard, add:
   - `VITE_N8N_WEBHOOK`
   - `VITE_APP_PASSWORD` (optional)

### Deploy to Other Platforms

RepScribe is a static SPA and can be deployed to:
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront
- GitHub Pages

## 🔧 Development

### Code Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── Pricing.tsx      # Pricing table
│   ├── FAQ.tsx          # FAQ accordion
│   ├── DemoForm.tsx     # Review generator form
│   └── Notice.tsx       # Alert/notification component
├── pages/               # Route pages
│   ├── Landing.tsx      # Home page
│   ├── Demo.tsx         # Demo page
│   ├── App.tsx          # Gated app
│   ├── Terms.tsx        # Terms of service
│   └── Privacy.tsx      # Privacy policy
├── lib/                 # Utilities and helpers
│   ├── i18n.ts          # Internationalization
│   ├── api.ts           # API client
│   ├── tones.ts         # Tone mappings
│   └── utils.ts         # Common utilities
└── hooks/               # Custom React hooks
```

### Adding Features

RepScribe is designed for easy extension:

1. **New Languages**: Add to `translations` object in `i18n.ts`
2. **New Tones**: Add to `TONES` array in `tones.ts`
3. **New Pages**: Create in `pages/` and add to `App.tsx` routing
4. **New Components**: Create in `components/` using design system tokens

### Future Integration Points

The codebase includes TODO markers for:
- **Google OAuth**: Connect Business accounts
- **Stripe Integration**: Payment processing
- **Analytics**: Usage tracking and insights
- **Bulk Processing**: Multiple review handling
- **Team Features**: Collaboration tools

## 📄 License

This project is part of the RepScribe micro-SaaS platform. All rights reserved.

## 🤝 Support

For support and questions:
- **Email**: support@repscribe.com
- **Documentation**: [Coming Soon]
- **Issues**: Use GitHub issues for bug reports

---

Built with ❤️ for businesses worldwide who want to improve their online reputation efficiently.