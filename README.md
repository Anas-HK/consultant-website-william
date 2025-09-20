# ConsultPro - Modern Consultant Website

A sleek, modern consultant website built with Next.js, TypeScript, and Tailwind CSS. Inspired by leading consulting firms like Talsom and Bain & Company.

## Features

- 🌓 **Dark/Light Theme Toggle** - Switch between light and dark modes
- 🎨 **Dual Color Schemes** - Choose between Talsom (green/yellow) or Bain (red) inspired themes
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Performance Optimized** - Fast loading with Next.js optimization
- 🎯 **Modern UI/UX** - Clean design with smooth animations
- ♿ **Accessible** - Built with accessibility in mind

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd consultant-site-2
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                # Next.js app directory
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── components/        # React components
│   ├── Navigation.tsx # Header navigation
│   ├── Hero.tsx       # Hero section
│   ├── ServicesGrid.tsx
│   ├── OurApproach.tsx
│   ├── Insights.tsx
│   ├── About.tsx
│   ├── CallToAction.tsx
│   └── Footer.tsx
├── contexts/          # React contexts
│   └── ThemeContext.tsx
├── styles/           # Global styles
│   └── globals.css
└── public/           # Static assets
```

## Customization

### Colors

The color schemes can be customized in `tailwind.config.js`:

```javascript
// Talsom-inspired colors
'primary-green': '#006B3C',
'accent-yellow': '#FFD700',

// Bain-inspired colors
'primary-red': '#CC0000',
'accent-gray': '#4A4A4A',
```

### Content

All text content is directly in the component files. To update:
- Company name: Update "ConsultPro" throughout components
- Services: Edit `ServicesGrid.tsx`
- Case studies: Edit `Insights.tsx`
- Contact info: Edit `Footer.tsx` and `CallToAction.tsx`

### Images

Replace placeholder images with actual images:
- Update image URLs in components
- Add images to `public/` directory
- Update `next.config.js` if using external image domains

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy with default settings

### Other Platforms

Build for production:
```bash
npm run build
# or
yarn build
```

Start production server:
```bash
npm start
# or
yarn start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **React Icons** - Icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Support

For questions or support, contact: hello@consultpro.com
