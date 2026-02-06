# Maya Reynolds - Therapist Homepage

A production-ready therapist homepage built with **Next.js** and **Tailwind CSS**.

## 🎯 Project Overview

This is a responsive, professionally-designed therapy practice website featuring:

- **Warm, calming color palette** designed for mental health services
- **Evidence-based structure** with all essential sections
- **Mobile-first responsive design** that works on all devices
- **Accessibility-focused** with proper semantic HTML and contrast
- **Clean component architecture** following React best practices

## 🏗️ Project Structure

```
app/
├── components/
│   ├── layout/
│   │   ├── Header.jsx        # Navigation header with sticky positioning
│   │   ├── Hero.jsx           # Main headline and value proposition
│   │   ├── Services.jsx       # Three therapy service offerings
│   │   ├── About.jsx          # Therapist approach and philosophy
│   │   ├── Office.jsx         # Office space showcase with images
│   │   ├── CTA.jsx            # Call-to-action section
│   │   └── Footer.jsx         # Footer with links and contact info
│   └── ServiceCard.jsx        # Reusable service card component
├── globals.css                # Global styles and Tailwind setup
├── layout.jsx                 # Root layout wrapper
└── page.jsx                   # Home page composition

public/
└── images/                    # Placeholder for images

Configuration Files:
├── tailwind.config.js         # Theme customization with therapy colors
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── postcss.config.js          # PostCSS setup for Tailwind
└── package.json               # Dependencies and scripts
```

## 🎨 Design System

### Color Palette

All colors are designed to evoke calm, trust, and healing:

- **Primary** (Warm Tan): `#BF9D81` - Main brand color, warm and welcoming
- **Secondary** (Taupe): `#C4A78F` - Complementary warm tone
- **Accent** (Sage Green): `#7FB19D` - Soft, calming accent color
- **Neutral** (Warm Gray): `#B1ABA6` - Text and backgrounds

### Typography

- **Serif Font** (Garamond/Georgia): Headlines - professional and trustworthy
- **Sans-serif** (System fonts): Body text - clean and readable
- **Font Sizes**: Responsive scaling from mobile to desktop

### Spacing

- Section padding: 6rem (desktop), 3rem (mobile)
- Consistent gap system using Tailwind spacing
- Mobile-first approach ensures proper scaling

## 📱 Responsive Design

- **Mobile**: Single column, optimized touch targets (minimum 48px)
- **Tablet** (md breakpoint, 768px+): Two columns where appropriate
- **Desktop** (lg breakpoint, 1024px+): Full three-column layouts
- **Max-width**: 7xl (80rem) for optimal content reading

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- A code editor (VS Code recommended)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## 📄 Pages & Sections

### Header
- Sticky navigation with responsive menu
- Brand name as primary identifier
- Mobile menu button for small screens

### Hero Section
- Compelling headline: "Anxiety & Trauma Therapist in Santa Monica"
- Value proposition: warm, evidence-based therapy
- Dual CTA buttons: Schedule Consultation, Learn About Services

### Services Section
1. **Anxiety Therapy** - CBT and mindfulness techniques
2. **Trauma-Informed Therapy** - EMDR and body-based approaches
3. **Burnout & Perfectionism** - Healthy boundaries and thriving

Each service has its own card with hover effects for interactivity.

### About Section
- Therapist approach and philosophy
- Evidence-based methodology explanation
- Professional photo placeholder
- Two-column layout for visual balance

### Office Section (Custom)
- Welcome heading with description
- Three office space image placeholders
- Trust-building copy about safety and privacy
- Emphasis on creating a calm healing environment

### CTA Section
- High-contrast gradient background
- Clear call-to-action
- Email link for easy contact

### Footer
- Quick navigation links
- Contact information
- Legal links (Privacy Policy, Terms of Service)
- Professional copyright notice

## 🔧 Customization

### Update Colors
Edit the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: { ... },
  secondary: { ... },
  accent: { ... },
  neutral: { ... }
}
```

### Update Content
Edit component text in the individual section files under `app/components/layout/`.

### Update Contact
Replace email and phone in:
- `Header.jsx` - Header CTA
- `CTA.jsx` - Main call-to-action
- `Footer.jsx` - Contact information

### Add Images
1. Place images in `public/images/`
2. Update placeholder divs in components with actual `<Image>` tags
3. Use Next.js Image component for optimization

## 🧩 Component Breakdown

### Reusable Components

**ServiceCard.jsx**
- Props: `title`, `description`
- Styling: White card with hover effects
- Used in: Services section

### Layout Components

Each section is a standalone component that can be:
- Reordered in `page.jsx`
- Styled independently
- Updated without affecting others

## ⚡ Performance

- **Next.js App Router** for fast navigation
- **Tailwind CSS** for optimized CSS (only used styles included)
- **Semantic HTML** for better SEO
- **Responsive Images** support (add with Next.js Image)
- **Mobile-first** approach ensures lightweight initial load

## ♿ Accessibility

- **Semantic HTML**: `<header>`, `<section>`, `<footer>`, `<nav>`
- **Proper Headings**: Hierarchy from h1 to h4
- **Color Contrast**: WCAG AA compliant text/background ratios
- **Interactive Elements**: Proper hover states and focus indicators
- **Links**: Descriptive text for all navigation links
- **Images**: Placeholder text for decorative graphics

## 🔒 Production Checklist

- [ ] Replace placeholder images with real photos
- [ ] Update contact email and phone number
- [ ] Add real therapist biography in About section
- [ ] Customize office description and images
- [ ] Set up email forwarding or contact form
- [ ] Add SSL certificate
- [ ] Test on real devices (iPhone, Android, tablets)
- [ ] Validate SEO metadata in `layout.jsx`
- [ ] Set up form handling for consultations
- [ ] Test all links work properly
- [ ] Check navigation menu on mobile

## 📞 Contact

Update these placeholders with real contact info:
- Email: `hello@mayareynolds.com`
- Phone: `(123) 456-7890`
- Location: Santa Monica, CA

## 📝 License

Private project. All rights reserved.

---

Built with care for mental health professionals. Questions? Check the component files for detailed comments and structure.
