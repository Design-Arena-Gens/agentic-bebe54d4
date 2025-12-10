# CircuitSavers Electronics Repair Shop

CircuitSavers is a modern, responsive web application for an electronics repair lab. It highlights premium repair services, transparent workflows, customer reviews, booking capabilities, and enterprise support options.

## Stack

- [Next.js 14](https://nextjs.org/) with the App Router
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [framer-motion](https://www.framer.com/motion/) for subtle motion design
- [next-themes](https://github.com/pacocoursey/next-themes) for dark/light mode toggling

## Getting Started

```bash
# install dependencies
npm install

# run development server
npm run dev

# build production bundle
npm run build

# start production server
npm start
```

Open `http://localhost:3000` in your browser to explore the experience.

## Key Features

- Hero section with service stats and motion-driven UI
- Detailed services grid with turnaround times and special programs
- Transparent repair process timeline
- Booking form with server-side request handling
- Testimonials, FAQ, location details, and business CTA
- Theme switcher and polished Tailwind styling

## Deployment

Ready for zero-config deployment on Vercel:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-bebe54d4
```

After deployment, verify with:

```bash
curl https://agentic-bebe54d4.vercel.app
```
