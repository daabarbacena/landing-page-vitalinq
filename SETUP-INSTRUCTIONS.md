# VitalinQ - Setup Instructions & Updates

## ✅ Latest Updates Completed

### 1. FloatingHeader Component Integration
- ✅ Installed all required dependencies:
  - `lucide-react` - Icon library
  - `@radix-ui/react-dialog` - Sheet/Modal primitives
  - `@radix-ui/react-slot` - Composition utilities
  - `@radix-ui/react-label` - Accessible labels
  - `class-variance-authority` - Variant management
  - `clsx` & `tailwind-merge` - Class merging utilities

- ✅ Created necessary UI components:
  - `/src/components/ui/floating-header.tsx` - Main header component
  - `/src/components/ui/sheet.tsx` - Mobile menu sheet
  - `/src/components/ui/button.tsx` - Button component
  - `/src/lib/utils.ts` - Utility functions

- ✅ Integrated FloatingHeader into BaseLayout
- ✅ Demo page available at `/floating-header-demo`

### 2. Icon Additions

**Security & Compliance Section** (4 cards):
- 📋 Documentação orientada
- ✅ Conformidade regulatória
- 📍 Rastreabilidade e transparência
- 🔒 Privacidade e cuidado com dados

**Contact Section** (3 cards):
- 💬 WhatsApp
- 📞 Telefone
- 📧 E-mail

### 3. Tech Carousel Animation
- ✅ Carousel animation is active and running
- Smooth infinite scroll with 60s duration
- Pauses on hover for better UX
- Responsive breakpoints for mobile

### 4. Steps Timeline Enhancement
- ✅ Added continuous animated line connecting all 5 steps
- Line draws from top to bottom with 2s animation
- Gradient purple color matching brand
- Responsive positioning (left on mobile, center on desktop)

### 5. Image Conversions
- ✅ All therapeutic area images in AVIF format:
  - `doencas-raras.avif`
  - `endocrinologia.avif`
  - `esclerose.avif`
  - `imunobiologicos.avif`
  - `oncologia.avif`
  - `medico-receitando.avif`

## Project Structure

This is an **Astro project** with the following integrations:
- ✅ Astro
- ✅ Tailwind CSS (via @tailwindcss/vite)
- ✅ React (via @astrojs/react)
- ✅ TypeScript

## Installation Complete

All required dependencies have been installed:
- `@astrojs/react` - React integration for Astro
- `react` - React library
- `react-dom` - React DOM renderer
- `framer-motion` - Animation library

## Component Location

The NavHeader component has been created in:
```
/src/components/ui/nav-header.tsx
/src/components/ui/nav-header-demo.tsx
```

### Why /components/ui?

The `/components/ui` folder follows the **shadcn/ui** convention:
- Separates UI primitives from page components
- Makes it easy to identify reusable components
- Standard location for shadcn-style components
- Improves code organization and maintainability

## Configuration

### astro.config.mjs
```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true
    }
  }
});
```

## Usage

### Option 1: Import in an Astro Page

```astro
---
import { HomeDemo } from "../components/ui/nav-header-demo";
---

<HomeDemo client:load />
```

### Option 2: Direct Component Import

```astro
---
import NavHeader from "../components/ui/nav-header";
---

<header class="sticky top-0 z-50 flex justify-center items-center py-4">
  <NavHeader client:load />
</header>
```

### Important: Client Directives

Since this is a React component with interactivity, you MUST use a client directive:
- `client:load` - Load immediately on page load
- `client:visible` - Load when component is visible
- `client:idle` - Load when browser is idle

## Component Features

- **Sticky positioning** - Fixed at top of viewport
- **Hover animations** - Smooth cursor that follows mouse
- **Responsive design** - Adapts to mobile and desktop
- **Framer Motion animations** - Smooth transitions
- **Mix-blend-difference** - Creates inverted text effect

## Customization

Edit `/src/components/ui/nav-header.tsx` to:
- Change navigation items
- Adjust colors and styling
- Modify animation timing
- Add click handlers or routing

## Example Integration in Layout

```astro
---
import { HomeDemo } from "../components/ui/nav-header-demo";
---

<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>VitalinQ</title>
  </head>
  <body>
    <HomeDemo client:load />
    <slot />
  </body>
</html>
```

## Next Steps

1. **View the demo page**: Navigate to `/nav-demo` to see the component in action
2. **Integrate into your site**: The component is already available in BaseLayout
3. **Customize navigation items**: Edit `nav-header.tsx` to change labels
4. **Adjust styling**: Modify Tailwind classes in the component
5. **Add functionality**: Add click handlers or routing to navigation items

## Example: Customizing Navigation Items

Edit `/src/components/ui/nav-header.tsx`:

```tsx
// Change these lines to customize your navigation
<Tab setPosition={setPosition}>Início</Tab>
<Tab setPosition={setPosition}>Como Funciona</Tab>
<Tab setPosition={setPosition}>Quem Somos</Tab>
<Tab setPosition={setPosition}>Áreas</Tab>
<Tab setPosition={setPosition}>Contato</Tab>
```

## Example: Adding Click Handlers

```tsx
const Tab = ({ children, setPosition, href }: { 
  children: React.ReactNode; 
  setPosition: any;
  href?: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  
  const handleClick = () => {
    if (href) window.location.href = href;
  };
  
  return (
    <li
      ref={ref}
      onClick={handleClick}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};
```

## Troubleshooting

### Component not showing?
- Make sure you added the `client:load` directive
- Check that React integration is properly configured in `astro.config.mjs`

### Animations not working?
- Verify `framer-motion` is installed: `npm list framer-motion`
- Check browser console for errors

### TypeScript errors?
- Run `npm run astro sync` to update type definitions
- Ensure `tsconfig.json` extends `astro/tsconfigs/strict`

## Demo Page

Visit the demo page at `/nav-demo` to see the component in action with:
- Live hover animations
- Scroll behavior demonstration
- Usage examples
- Customization guide
