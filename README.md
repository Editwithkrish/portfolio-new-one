# Krishna Jha - Portfolio

A brutalist-themed portfolio showcasing Krishna Jha's work as a Full-Stack Developer, Startup Operator, and Creative Technologist.

## Features

### 🎯 Dual Portfolio System
- **Tech Portfolio Button**: Displays software engineering experience, technical roles, and projects
- **Media Portfolio Button**: Showcases video editing work, creative collaborations, and past client projects
- Interactive toggle in hero section with smooth scroll navigation

### 📋 Sections

#### Hero Section
- Split button interface for portfolio navigation
- Animated 3D sphere background
- Responsive design with framer-motion animations

#### Profile About
- Personal information and education
- Core disciplines and skills
- Bio highlighting unique positioning at intersection of tech, media, and growth

#### Tech Portfolio View
Includes:
- **Current Roles**: BuildShot COO, Social Media Lead positions
- **Technical Experience**: SDE Intern, Freelance Web Developer
- **Campus & Community Roles**: GeeksforGeeks, Innovation Council
- **Focus Section**: Current priorities and products built (Finscan, Codemaxxers, BuildShot)
- **Achievements**: Hackathon placements (VIT, COEP)
- **Works**: Project gallery
- **Tech Marquee**: Technology stack showcase

#### Media Portfolio View
Includes:
- **Media Experience**: Ad Sharks Media, Rooter.gg, GrowitBuddy
- **Past Works**: Client portfolio (Cinemastic, Prakhar Ke Pravachan, etc.)
- **Creative Toolkit**: Adobe suite, DaVinci Resolve, etc.
- **Focus Section**: Same as tech portfolio
- **Tech Marquee**: Technology stack

### 🎨 Design System
- Brutalist aesthetic with clean typography
- Monospace fonts for labels and technical text
- Sans-serif fonts for headings and body
- Minimalist color palette with white/black/grey tones
- Blue accent color (#2563eb) for tech elements
- Green accent color (#10b981) for media elements
- Smooth animations and transitions using framer-motion

### 📦 Logo Placeholders
All company/client entries include placeholder blocks for logos that can be replaced manually:
- BuildShot
- Cloud Computing Club
- Innovation & Entrepreneurship Club
- Alexa Hire
- Ad Sharks Media
- Rooter.gg
- GrowitBuddy
- GeeksforGeeks
- Innovation Council
- Cinemastic
- Prakhar Ke Pravachan

## Tech Stack

- **Framework**: Next.js 16.0.3
- **React**: 19.2.0
- **Animations**: Framer Motion 12.23.24
- **3D Graphics**: Three.js 0.181.2, React Three Fiber
- **Styling**: TailwindCSS 4.1.9
- **Smooth Scrolling**: Lenis 1.3.15
- **TypeScript**: 5.x

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Development

Open [http://localhost:3000](http://localhost:3000) in your browser.

The homepage features:
1. Hero section with portfolio toggle buttons
2. Profile about section (always visible)
3. Conditional rendering based on selected portfolio type
4. Default view showing general content when no selection is made

## Customization

### Adding Logos

Replace the logo placeholders in the following components:
- `components/tech-experience.tsx` - Line ~30-35 in ExperienceCard component
- `components/media-experience.tsx` - Line ~30-35 in MediaExperienceCard component and ~90-95 in past works grid

### Updating Content

Edit the data arrays at the top of each component:
- `components/tech-experience.tsx` - currentRoles, technicalExperience, campusRoles
- `components/media-experience.tsx` - mediaExperience, pastWorks
- `components/focus-section.tsx` - focusAreas, achievements, products
- `components/profile-about.tsx` - Personal info and bio text

### Modifying Colors

The portfolio uses these primary accent colors:
- Tech: `#2563eb` (blue)
- Media: `#10b981` (green)
- Background: `#050505` (near black)
- Border: `white/10` to `white/30` (semi-transparent white)

## Project Structure

```
├── app/
│   ├── page.tsx              # Main page with portfolio logic
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── hero.tsx              # Hero with portfolio toggle
│   ├── profile-about.tsx     # About section
│   ├── tech-experience.tsx   # Technical roles and experience
│   ├── media-experience.tsx  # Creative work and past projects
│   ├── focus-section.tsx     # Current focus and achievements
│   ├── about.tsx             # Philosophy section
│   ├── works.tsx             # Project gallery
│   ├── tech-marquee.tsx      # Tech stack showcase
│   └── ... (other components)
└── public/
    └── ... (images and assets)
```

## Contact & Links

- **Name**: Krishna Jha
- **Role**: Co-Founder & COO at BuildShot
- **Location**: Pune, Maharashtra, India
- **Education**: B.Tech Computer Science, MIT ADT University

---

Built with ❤️ using Next.js and the brutalist design philosophy
