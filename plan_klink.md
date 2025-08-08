# WindSurf: K-Links Corporate Website Development (React Framework)

You are  **WindSurf** , an autonomous full-stack web development assistant. Your mission is to develop a **production-ready K-Links corporate website** using the **existing React/Vite/TypeScript framework** with ShadCN/ui and Tailwind CSS.

---

## 🏢 **Company Profile & Context**

**K-Links** is a trusted provider of high-quality electrical components and accessories, powering innovation across industries in Pakistan and beyond.

### Core Business Information:

* **Industry** : Electrical components & accessories for switchgear, automation, and industrial applications
* **Target Clients** : Electrical switchgear manufacturers, contractors, OEMs, and industrial clients
* **Value Proposition** : "Quality you can trust" - emphasis on reliability, timely delivery, and expert support
* **Location** : 8/26, Ghalib Street No.20, Barkat Ali Road, Chowk Bull Road Near Ansa Tower, Lahore, Pakistan
* **Contact** : 0333-6737921, 0301-4238234, 042-37640047, 042-37640048
* **Email:** sales@k-links.com.pk
* **Website**: www.k-links.com.pk

### Key Certifications & Standards:

UL Certified, EU CE, RoHS, SGS, TUV, ATEX, IECEx, PESO, IS standards, IEC standards

---

## 📋 **Product Catalog Approach**

**K-Links** offers a comprehensive range of **21+ product categories** including:

* PVC Cable Ducts, Panel Fans & Louvers, Control Relays
* Digital Panel Meters, Switches, Indication Lights, Push Buttons
* Temperature Controllers, Power Supplies, Copper Lugs, Cable Glands
* Terminal Blocks, Power Factor Correction equipment, CTs, and more

 **Website Approach** : Implement a **downloadable catalog system** where customers can:

* View product category highlights on the website
* Download the complete **PDF catalog** for detailed specifications
* Request quotes directly through contact forms

---

## 🚀 **Development Plan - Working with Existing Framework**

### Phase 1: Framework Integration & Setup

#### **Work with Existing Structure:**

```
/src/
├── App.tsx                    # Main app component
├── main.tsx                   # Entry point  
├── index.css                  # Global styles
├── components/                # Reusable UI components
├── pages/                     # Page components
│   ├── Home.tsx              # Homepage
│   ├── About.tsx             # About Us page
│   ├── Products.tsx          # Products overview
│   ├── Services.tsx          # Services page
│   ├── Resources.tsx         # Resources/Blog
│   └── Contact.tsx           # Contact page
├── contexts/                  # React contexts
├── hooks/                     # Custom hooks
├── services/                  # API/External services
├── stores/                    # State management
├── utils/                     # Utility functions
├── lib/                       # Third-party integrations
├── data/                      # Static data/constants
└── assets/                    # Images, icons, etc.
/public/
└── docs/                      # PDF catalogs and documents
```

#### **Leverage Existing Setup:**

* ✅ **React 18 + TypeScript** - Use existing configuration
* ✅ **Vite** - Work with existing build system
* ✅ **ShadCN/ui + Tailwind CSS** - Use existing component library
* ✅ **Bun** - Use existing package manager
* ✅ **Docker** - Use existing containerization setup
* ✅ **ESLint + Prettier** - Follow existing code standards

### Phase 2: Brand Implementation (Tailwind Config)

Update `tailwind.config.js` with  **K-Links brand colors** :

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#0055A4',  // K-Links Blue
          600: '#004494',
          700: '#003384',
        },
        secondary: {
          500: '#666666',  // Secondary Gray
          600: '#555555',
        },
        accent: {
          500: '#FF6600',  // Accent Orange
          600: '#E55A00',
        }
      },
      fontFamily: {
        'proxima': ['Proxima Nova', 'Arial', 'sans-serif'],
      }
    }
  }
}
```

### Phase 3: Component Development (ShadCN/ui Integration)

#### **Create Page Components in `/src/pages/`:**

**🏠 Home.tsx Requirements:**

```tsx
// Use existing ShadCN/ui components: Button, Card, Badge
- Hero Section with primary CTA buttons
- Value propositions cards (Quality, Delivery, Support) 
- Product categories grid with hover effects
- Certifications showcase with badges
- Client testimonials carousel
- Contact CTA section
```

**ℹ️ About.tsx Requirements:**

```tsx
// Use: Card, Separator, Badge components
- Company mission and vision
- Quality commitment section
- Certifications grid with descriptions
- Timeline component for company history
- Team profiles (if applicable)
```

**🛍️ Products.tsx Requirements:**

```tsx
// Use: Button, Card, Dialog, Input components  
- Product categories overview grid
- Prominent "Download Catalog" CTA with Dialog
- Lead capture form for downloads
- Applications and industries served
- Quality standards showcase
- Technical support contact section
```

**🔧 Services.tsx Requirements:**

```tsx
// Use: Card, Tabs, Accordion components
- Service offerings breakdown
- Process flow diagrams  
- Support contact forms
- Quality assurance information
```

**📞 Contact.tsx Requirements:**

```tsx
// Use: Form, Input, Textarea, Button, Select components
- Contact information cards
- Interactive contact form with file upload
- Google Maps integration
- Office locations with Pakistani context
- WhatsApp integration button
```

#### **Create Custom Components in `/src/components/`:**

```
/src/components/
├── Layout/
│   ├── Header.tsx            # Navigation with ShadCN/ui
│   ├── Footer.tsx            # Footer with links
│   └── Layout.tsx            # Main layout wrapper
├── UI/                       # Custom UI components  
│   ├── HeroSection.tsx      # Hero banner component
│   ├── ProductCard.tsx      # Product category cards
│   ├── CertificationBadge.tsx # Certification displays
│   ├── ContactForm.tsx      # Lead capture forms
│   └── CatalogDownload.tsx  # PDF download component
├── Forms/
│   ├── QuoteRequest.tsx     # Quote request form
│   └── ContactForm.tsx      # Contact form
└── Sections/                # Page sections
    ├── FeaturedProducts.tsx
    ├── Testimonials.tsx  
    └── CallToAction.tsx
```

### Phase 4: Routing & Navigation (React Router)

#### **Install and Configure Routing:**

```bash
bun add react-router-dom
```

**Update App.tsx:**

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
```

### Phase 5: State Management & Services

#### **Create Context for Global State (`/src/contexts/`):**

```tsx
// AppContext.tsx - Global app state
// ContactContext.tsx - Contact form state
// ProductContext.tsx - Product catalog state
```

#### **Create Custom Hooks (`/src/hooks/`):**

```tsx
// useContactForm.ts - Contact form handling
// useCatalogDownload.ts - PDF download tracking
// useQuoteRequest.ts - Quote request functionality
```

#### **Create Services (`/src/services/`):**

```tsx
// emailService.ts - Contact form submission
// analyticsService.ts - Download tracking
// catalogService.ts - PDF management
```

### Phase 6: Data Management

#### **Create Static Data (`/src/data/`):**

```tsx
// products.ts - Product categories and descriptions
// certifications.ts - Certification information  
// company.ts - Company information and contacts
// testimonials.ts - Customer testimonials
```

**Example `/src/data/products.ts`:**

```tsx
export const productCategories = [
  {
    id: 'cable-ducts',
    title: 'PVC Cable Ducts',
    description: 'Wire management solutions',
    image: '/assets/products/cable-ducts.jpg',
    applications: ['Control panels', 'Switchboards']
  },
  // ... 20+ more categories
];
```

### Phase 7: Styling & Theming (Tailwind + ShadCN/ui)

#### **Global Styles (`/src/index.css`):**

```css
@import url('https://fonts.googleapis.com/css2?family=Proxima+Nova:wght@400;600;700&display=swap');

:root {
  --color-primary: #0055A4;
  --color-secondary: #666666; 
  --color-accent: #FF6600;
}

/* Use existing ShadCN/ui CSS variables */
/* Extend with K-Links specific styles */
```

#### **Component Styling Strategy:**

* **Primary** : Use ShadCN/ui components with custom Tailwind classes
* **Customization** : Override ShadCN/ui themes with K-Links brand colors
* **Responsive** : Mobile-first approach with Tailwind breakpoints
* **Animation** : Use Tailwind CSS animations for micro-interactions

### Phase 8: File Upload & PDF Management

#### **Catalog Download System:**

```tsx
// /src/components/CatalogDownload.tsx
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Lead capture form before PDF download
// Track downloads with analytics
// Multiple catalog formats (complete, category-specific)
```

#### **File Structure for PDFs:**

```
/public/docs/
├── K-Links-Complete-Catalog.pdf
├── categories/
│   ├── Cable-Ducts-Datasheet.pdf
│   ├── Control-Relays-Datasheet.pdf
│   └── [category-specific-pdfs]
└── company/
    ├── Company-Profile.pdf
    └── Certifications.pdf
```

### Phase 9: SEO & Performance Optimization

#### **SEO Implementation:**

```tsx
// Use react-helmet-async for meta tags
// Add structured data for business information
// Implement Pakistani business schema markup
// Optimize for electrical components keywords
```

#### **Performance:**

* **Code Splitting** : Use React.lazy for route-based splitting
* **Image Optimization** : WebP format with fallbacks
* **Bundle Optimization** : Use Vite's built-in optimizations
* **Lazy Loading** : Implement for images and non-critical components

### Phase 10: Form Handling & Integrations

#### **Contact Forms with React Hook Form:**

```bash
bun add react-hook-form @hookform/resolvers zod
```

```tsx
// Forms with validation using Zod schemas
// File upload functionality for technical inquiries
// Email integration (EmailJS or custom backend)
// Lead tracking and analytics
```

#### **Third-party Integrations:**

* **Google Maps** : For office location
* **WhatsApp** : For instant communication
* **Google Analytics** : For tracking and insights
* **EmailJS** : For contact form submissions

---

## 🎯 **Implementation Strategy**

### **Phase-by-Phase Development:**

1. **Phase 1** : Setup routing, basic page structure, layout components
2. **Phase2** : Implement Home and About pages with ShadCN/ui components
3. **Phase 3** : Build Products page with catalog download functionality
4. **Phase 4** : Create Services and Contact pages with forms
5. **Phase 5** : Add Resources section, SEO optimization, performance tuning
6. **Phase 6** : Testing, accessibility audit, final optimizations

### **Key Development Principles:**

* **Component Reusability** : Maximize ShadCN/ui component usage
* **Type Safety** : Full TypeScript implementation
* **Performance** : Code splitting and lazy loading
* **Accessibility** : WCAG 2.1 AA compliance using ShadCN/ui accessible components
* **Mobile-First** : Responsive design with Tailwind breakpoints
* **SEO Ready** : Proper meta tags, structured data, semantic HTML

---

## ✅ **Success Criteria & Deliverables**

### **Technical Requirements:**

* ✅  **Framework** : React 18 + TypeScript + Vite (existing setup)
* ✅  **UI Library** : ShadCN/ui + Tailwind CSS (existing setup)
* ✅  **Package Manager** : Bun (existing setup)
* ✅  **Code Quality** : ESLint + Prettier (existing setup)
* ✅  **Container** : Docker ready (existing setup)

### **Business Requirements:**

* ✅ **B2B Professional Design** reflecting quality and trust
* ✅ **Pakistani Market Context** with local business information
* ✅ **Catalog Download System** with lead capture
* ✅ **Multi-channel Contact** (phone, email, WhatsApp, forms)
* ✅ **Mobile Optimization** for Pakistani market preferences
* ✅ **SEO Optimization** for electrical components keywords

### **Performance Targets:**

* **Lighthouse Score** : 95+ across all metrics
* **Bundle Size** : <500KB initial load
* **First Contentful Paint** : <1.5 seconds
* **Time to Interactive** : <3 seconds

---

## 🚀 **Development Commands**

```bash
# Development
bun run dev

# Build for production  
bun run build

# Preview production build
bun run preview

# Type checking
bun run type-check

# Linting
bun run lint

# Docker development
docker-compose up -d
```

---

## 📝 **Implementation Checklist**

### **Immediate Tasks:**

* [ ] Update routing structure in App.tsx
* [ ] Create page components in /src/pages/
* [ ] Build reusable UI components using ShadCN/ui
* [ ] Implement brand colors in Tailwind config
* [ ] Setup static data files in /src/data/
* [ ] Create contact forms with validation
* [ ] Add PDF catalog download functionality
* [ ] Implement responsive navigation
* [ ] Setup Google Maps integration
* [ ] Add WhatsApp contact integration

### **Advanced Features:**

* [ ] Lead tracking and analytics
* [ ] Email integration for forms
* [ ] SEO optimization with react-helmet-async
* [ ] Performance optimization and code splitting
* [ ] Accessibility audit and improvements
* [ ] Cross-browser testing
* [ ] Production deployment configuration

---

**Begin development immediately** using the existing React framework. Focus on creating a professional B2B website that leverages your existing ShadCN/ui components while representing K-Links as a trusted electrical components provider in the Pakistani market.

**All development should integrate seamlessly with your existing codebase structure and maintain the same code quality standards established by your current ESLint/Prettier configuration.**
