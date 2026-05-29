# She Can Foundation - Interactive NGO Redesign

A modern, premium, and fully responsive website redesign for **She Can Foundation**, built as a portfolio-worthy, startup-level social impact platform. This website is engineered to be emotionally engaging, highly interactive, and visually stunning using high-contrast black, white, and glowing orange branding.

## 🚀 Live Site Preview
- **Local Dev Server:** `http://localhost:5174/` (or `http://localhost:5173/`)

---

## ✨ Premium Features

1. **Introductory Loading Screen (`Loader.jsx`)**
   - An elegant 1.8-second viewport loader featuring a pulsing logo glow and staggered key-word typing animations (*"Empowering"*, *"Education"*, *"Opportunities"*).

2. **Live Campaign Progress (`CampaignProgress.jsx`)**
   - Dynamic, scroll-triggered goals showing current fund/equipment status (e.g. 75% for Digital Education, 84% for Scholarships) with glowing orange load transitions.

3. **Social Impact Calculator (`ImpactCalculator.jsx`)**
   - A real-time calculator card with interactive sliders for *Donations*, *Volunteering Hours*, and *Students Mentored*. Computes total lives reached, support metrics, and career guidance paths using mathematical models.

4. **Emotive Stories & Diary Modal (`CommunityStories.jsx`)**
   - Emotive narrative cards showing beneficiary transformations in a clear **Before She Can** vs. **After She Can** split layout. Expands into a full glassmorphic journal overlay when clicking "Read Full Diary".

5. **Skill-based Volunteer Matcher (`VolunteerMatcher.jsx`)**
   - Toggles interest tags (Web Dev, Teaching, Public Speaking, Social Work) to match volunteers to active NGO positions, showing commitments and tasks, and pre-filling the registration form dynamically.

6. **Tactile Micro-interactions**
   - **Cursor Glow:** An orange radial light that follows the cursor on desktop devices using smooth spring physics.
   - **Floating Canvas Particles:** Faint orange/white ambient dust drifting across the background using HTML5 canvas rendering at 60fps.
   - **Magnetic Buttons:** Physical attraction mechanics pulling CTA buttons toward the cursor for a premium UI feel.

7. **EmailJS & Rich Toasts Integration**
   - Configured form utilizing `@emailjs/browser` to send volunteer and contact messages directly to the NGO email. Powered by `react-hot-toast` for loading, success, and error alerts. Features a development mock-simulation if API keys are not supplied.

---

## 🛠️ Technology Stack
- **Framework:** [React](https://react.dev/) + [Vite](https://vite.dev/) (Client build compiles under 600ms)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first config with `@theme` variables)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (Smooth parallax, sliders, layout spring transitions)
- **Icons:** [Lucide React](https://lucide.dev/) (Modern vector icons)
- **Notifications:** [React Hot Toast](https://react-hot-toast.com/) (Toast popups)

---

## 📂 Folder Structure
```
src/
├── config/
│   └── emailjs.js           # EmailJS template and service credentials
├── assets/                  # Brand logos and static graphics
├── components/
│   ├── Loader.jsx           # Introductory loading screen
│   ├── Navbar.jsx           # Collapsible glassmorphic sticky header
│   ├── Hero.jsx             # Headline banner with magnetic action buttons
│   ├── About.jsx            # Mission, Vision, and Commitment cards
│   ├── Impact.jsx           # Animated counter statistics
│   ├── CampaignProgress.jsx # Campaign loader bars
│   ├── ImpactCalculator.jsx # Sliders + real-time metrics calculator
│   ├── Programs.jsx         # Strategic core initiatives
│   ├── CommunityStories.jsx # Before/After stories and overlay diaries
│   ├── Testimonials.jsx     # Sliding carousel reviews
│   ├── Gallery.jsx          # Media grid with lightbox zoom navigation
│   ├── VolunteerMatcher.jsx # Interest-role matching panel
│   ├── JoinUs.jsx           # EmailJS volunteer form with toast notifications
│   ├── Footer.jsx           # CSR links, newsletter signup, socials
│   └── common/
│       ├── CursorGlow.jsx   # Cursor glow overlay
│       ├── FloatingParticles.jsx # Background canvas particle system
│       ├── Magnetic.jsx     # Tactile hover button wrapper
│       ├── ScrollProgressBar.jsx # Top scroll reading indicator
│       └── ScrollToTop.jsx  # Floating return-to-top button
├── App.css                  # Cleared overrides
├── App.jsx                  # Main layout assembler
├── index.css                # Outfit font, scrollbars, and Tailwind v4 imports
└── main.jsx                 # StrictMode react-dom mounter
```

---

## 💻 Getting Started

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Configure EmailJS (Optional)
To send actual emails from the volunteer form:
1. Register on [EmailJS](https://www.emailjs.com/).
2. Create an Email Service and Template, and copy your keys.
3. Open `src/config/emailjs.js` and input your keys:
   ```javascript
   export const EMAILJS_CONFIG = {
     SERVICE_ID: 'YOUR_SERVICE_ID',
     TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
     PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
   };
   ```
*Note: If these placeholders are left untouched, the website will run in a mock/simulation mode with warning logs to guide you.*

### 3. Local Development
Start the local server:
```bash
npm run dev
```

### 4. Production Build
Compile and bundle files for production:
```bash
npm run build
```
This outputs optimized static HTML/CSS/JS bundles in the `dist/` directory.

---

## 🌐 Deploy to Netlify

### Drag & Drop (Easiest)
1. Generate the build folder: `npm run build`
2. Go to your [Netlify Dashboard](https://app.netlify.com/).
3. Drag the **`dist`** folder directly into the deploy upload box on the Netlify **Sites** page.

### CLI Deploy
1. Install CLI: `npm install -g netlify-cli`
2. Authenticate: `netlify login`
3. Launch: `netlify deploy --dir=dist --prod`
