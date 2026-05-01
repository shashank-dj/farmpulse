# 🌿 FarmPulse — Operations Dashboard

A smart farm management dashboard built with **React**, **Vite**, and **Tailwind CSS**. Fully responsive with mobile bottom-nav, desktop sidebar, and multi-page routing.

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18 | UI framework |
| React Router | 6 | Client-side routing |
| Vite | 5 | Build tool / dev server |
| Tailwind CSS | 3 | Utility-first styling |

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/dashboard` | Dashboard | KPI metrics, health overview, feeding schedule |
| `/livestock` | Livestock | All animal groups with health status |
| `/stock` | Stock | Inventory levels and alerts |
| `/account` | Account | User profile and settings |

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm 9+

### Install & Run

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/farmpulse.git
cd farmpulse

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

### Preview production build

```bash
npm run preview
```

---

## Deploy to Netlify

### Option A — Netlify UI (recommended)

1. Push this repo to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
3. Select your repository
4. Netlify auto-detects `netlify.toml` — no extra configuration needed
5. Click **Deploy site**

### Option B — Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --build --prod
```

The `netlify.toml` and `public/_redirects` files handle SPA routing automatically — all routes redirect to `index.html`.

---

## Project Structure

```
farmpulse/
├── public/
│   ├── favicon.svg
│   └── _redirects          # Netlify SPA routing
├── src/
│   ├── components/
│   │   ├── Layout.jsx      # Sidebar + topbar + bottom nav
│   │   └── UI.jsx          # Shared components (Card, Tag, MetricCard…)
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Livestock.jsx
│   │   ├── Stock.jsx
│   │   └── Account.jsx
│   ├── App.jsx             # Route definitions
│   ├── main.jsx            # React entry point
│   └── index.css           # Tailwind imports
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml
└── package.json
```

## License

MIT
