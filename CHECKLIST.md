# Pixel-Perfect Checklist - IT Experience Page Styling

Goal: match the provided screenshot styling for header, footer, cards, and background.

1) Header & Navigation
   - [x] Increase height and padding to `py-6`.
   - [x] Increase site title font size to `text-3xl` and weight to `font-extrabold`.
   - [x] Make nav buttons larger with increased padding and slightly larger font.
   - [x] Add stronger nav shadow for separation from content.

2) Footer
   - [x] Increase padding to `py-12` and set base font-size to 1rem for readability.
   - [x] Highlight social icons on hover with brand color.

3) Cards & Experience
   - [x] Implement a reusable `glass-card` style for translucent cards.
   - [x] Increase card shadow strength and hover lift for depth.
   - [x] Add a left accent gradient in `experience-card` with width 3px.
   - [x] Adjust card padding for better layout; `p-8` on experience cards.
   - [x] Align role dates to the right with a min width to prevent wrapping.
   - [x] Strengthen pill badges and adjust color gradient.

4) Background & Visuals
   - [x] Add radial highlight and multi-stop linear gradient to `body` background.
   - [x] Add subtle scrollbar colors for theme matching.

5) Tailwind Integration
   - [x] Add `tailwindcss`, `postcss`, `autoprefixer` as devDependencies.
   - [x] Add `tailwind.config.cjs` and `postcss.config.cjs` and use `@tailwind` directives in `index.css`.

6) Next Steps
   - [ ] Replace any remaining custom CSS layout utilities with real Tailwind class usage (optional; we removed many already).
   - [ ] Perform responsive cross-checks for mobile & tablet; adjust breakpoints for text/spacing.
   - [ ] Optionally adjust exact colors or fonts to match screenshot strictly (if you provide exact hex or font family).

Done: Header/footer sizing and visual tweaks implemented; Tailwind and a pixel-perfect checklist present.
