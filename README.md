<div align="center">
  <img src="public/logo.png" alt="North Bengal Realty Logo" width="120" style="border-radius: 12px; margin-bottom: 16px;" />
  <h1>North Bengal Realty</h1>
  <p><strong>Clear-Title Land & Property Across North Bengal & Sikkim</strong></p>
  <p>
    <a href="https://northbengalrealty.in/"><strong>northbengalrealty.in</strong></a>
  </p>
</div>

---

## 🌲 Overview

**North Bengal Realty** is a modern, high-performance, modular web application built with **Angular (Standalone Components)** and **Tailwind CSS**. It serves as the primary real estate portal for verified residential, commercial, agricultural, and tea-estate properties across 7 major districts in North Bengal and Sikkim.

---

## 🚀 Key Features

- **⚡ Standalone Component Architecture**: Modular, tree-shakeable Angular architecture with lazy-loaded routing.
- **🎨 Custom Design System**: Tailwind CSS v3 integrated with custom SCSS design tokens, responsive typography (`Outfit` & `Plus Jakarta Sans`), and animated seal-motif styling.
- **🏷️ Property Listings Gallery & Carousel**:
  - CSS scroll-snap horizontal carousel for newly verified listings.
  - 3-column responsive gallery with interactive hover zoom and direct WhatsApp / Facebook social share links.
  - Dynamic type badges (Residential, Commercial, Land).
- **📄 Dedicated Property Detail Pages (`/property/:id`)**: Rich property view with breadcrumb navigation, specs, amenities list, image hero, and WhatsApp enquiry triggers.
- **💬 Reactive WhatsApp Direct Contact Form**: Field-validated contact form with automatic formatted WhatsApp message redirect (`onSubmit`).
- **🔍 Automated SEO Management**: Centralized `SeoService` dynamically managing page titles, meta descriptions, Open Graph tags, canonical URLs, and regional keywords (*Siliguri, Bagdogra, Matigara, Jalpaiguri, Falakata, Alipurduar, Coochbehar, Darjeeling, Kalimpong, Gangtok*).
- **🔌 FastAPI & PostgreSQL Ready**: Strongly typed `Property` models and `PropertyService` structured for seamless drop-in integration with a future Python FastAPI backend.
- **📱 Fully Responsive & Mobile-First**: Sticky mobile bottom action bar for quick calling and WhatsApp messaging on smartphones.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Angular (Standalone Components, Signals, View Transitions) |
| **Styling** | Tailwind CSS v3 + Custom SCSS |
| **Icons** | Global SVG Sprite Sheet (zero runtime HTTP requests) |
| **State & Data Layer** | Angular Services with RxJS Observables |
| **Form Handling** | Angular Reactive Forms (`FormGroup`, `FormControl`, Validators) |
| **Fonts** | Google Fonts (`Outfit` for headings, `Plus Jakarta Sans` for body) |
| **Deployment** | Cloudflare Pages |

---

## 📁 Project Structure

```text
northbengalrealty/
├── public/
│   ├── favicon.ico
│   └── logo.png
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── models/
│   │   │   │   └── property.model.ts      # TypeScript interfaces for FastAPI/PostgreSQL
│   │   │   └── services/
│   │   │       ├── property.service.ts    # Data service (mock & REST API ready)
│   │   │       └── seo.service.ts         # Meta tags & Open Graph manager
│   │   ├── features/
│   │   │   ├── home/
│   │   │   │   └── home.component.ts      # Main landing page assembler
│   │   │   └── property-detail/
│   │   │       ├── property-detail.component.ts
│   │   │       └── property-detail.component.html
│   │   ├── shared/
│   │   │   ├── header/                    # Sticky navigation header
│   │   │   ├── hero/                      # Hero section & trust badges
│   │   │   ├── regions/                   # 7 coverage district cards
│   │   │   ├── carousel/                  # Scroll-snap recent listings
│   │   │   ├── gallery/                   # Filterable/shareable property grid
│   │   │   ├── services-section/          # 6 core real estate legal services
│   │   │   ├── why-us/                    # Trust metrics & differentiators
│   │   │   ├── contact/                   # Reactive form & direct contact links
│   │   │   ├── footer/                    # Footer with contact & quick links
│   │   │   └── mobile-bottom-bar/         # Mobile fixed call/WA bar
│   │   ├── app.config.ts                  # Providers (Router, HttpClient, Zone.js)
│   │   ├── app.routes.ts                  # Application route definitions
│   │   └── app.ts                         # Root application component
│   ├── assets/
│   │   └── images/                        # High-resolution property & branding assets
│   ├── index.html                         # Root HTML with SVG sprite & metadata
│   ├── main.ts                            # Bootstrap entrypoint
│   └── styles.scss                        # Tailwind directives & design tokens
├── angular.json                           # Angular CLI configuration
├── tailwind.config.js                     # Tailwind theme extensions
├── postcss.config.js                      # PostCSS plugins (Tailwind, Autoprefixer)
├── tsconfig.json                          # TypeScript configuration
└── package.json                           # Project dependencies and scripts
```

---

## 💻 Getting Started

### Prerequisites
- **Node.js**: `v20.x` or `v22.x`
- **npm**: `v10.x` or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/barungh/northbengalrealty.git
   cd northbengalrealty
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   Open your browser at `http://localhost:4200/`.

---

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

The compiled bundle will be generated in the `dist/nbr-app` directory.

---

## ☁️ Deployment (Cloudflare Pages)

This project is deployed to Cloudflare Pages connected to the custom domain [`northbengalrealty.in`](https://northbengalrealty.in/).

**Recommended Cloudflare Build Settings:**
- **Framework preset**: `Angular`
- **Build command**: `npm run build`
- **Build output directory**: `dist/nbr-app`
- **Root directory**: `/`
- **Node.js version**: `20.x` or `22.x`

---

## 📞 Contact Information

- **Headquarters**: Sevoke Road, Siliguri, West Bengal, India
- **Phone / Call**: `+91 86170 47355` / `+91 62970 63622`
- **WhatsApp**: `+91 98325 06170` / `+91 62970 63622`
- **Website**: [northbengalrealty.in](https://northbengalrealty.in/)

---

## 📄 License

Copyright © 2026 North Bengal Realty. All rights reserved.
