# Consultant Website

A modern, responsive consultant website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

Before running this project, make sure you have the following installed on your system:

- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js) or **yarn**

You can check if you have Node.js installed by running:
```bash
node --version
npm --version
```

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd "C:\Projects\Consultant Site 2"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   
   This will install all the required packages listed in `package.json`, including:
   - Next.js 14.0.3
   - React 18.2.0
   - TypeScript 5.3.2
   - Tailwind CSS 3.3.5
   - Framer Motion 10.16.4
   - React Icons 4.12.0

### Running the Development Server

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

The development server will automatically reload when you make changes to your code.

## 📁 Project Structure

```
consultant-website/
├── app/                    # Next.js 13+ App Router
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── About.tsx          # About section
│   ├── Footer.tsx         # Footer component
│   ├── Navigation.tsx     # Navigation bar
│   ├── ServicesGrid.tsx   # Services section
│   └── ...
├── contexts/              # React contexts
│   └── ThemeContext.tsx   # Theme management
├── styles/                # CSS files
│   └── globals.css        # Global styles
├── package.json           # Project dependencies
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## 🛠️ Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode on [http://localhost:3000](http://localhost:3000).
The page will reload when you make changes.

### `npm run build`
Builds the app for production to the `.next` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm start`
Runs the built app in production mode.
You must run `npm run build` first.

### `npm run lint`
Runs the linter to check for code quality issues.

## 🎨 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Theme Support**: Multiple color schemes including "Talsom" theme
- **Dark Mode**: Built-in dark mode support
- **Performance**: Optimized with Next.js 14 and TypeScript
- **Animations**: Smooth animations powered by Framer Motion
- **SEO Ready**: Built with Next.js best practices for SEO

## 🔧 Technologies Used

- **Frontend Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Next.js built-in bundler

## 🚨 Troubleshooting

### Common Issues

1. **Port already in use**: If port 3000 is already in use, Next.js will automatically use the next available port (3001, 3002, etc.)

2. **Dependencies not installed**: If you see import errors, make sure you've run `npm install`

3. **Node.js version**: Ensure you're using Node.js version 18 or higher

4. **Clear cache**: If you encounter build issues, try:
   ```bash
   rm -rf .next
   npm run dev
   ```

### Getting Help

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review the [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- For project-specific issues, check the browser console for error messages

## 📝 Development Notes

- The project uses Next.js 13+ App Router (not Pages Router)
- Tailwind CSS is configured for the project's design system
- The theme system supports multiple color schemes
- All components are built with TypeScript for type safety
- Framer Motion provides smooth animations throughout the site

---

**Happy coding!** 🎉