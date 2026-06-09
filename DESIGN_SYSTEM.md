# MicroSysLogic Design System Reference

This document serves as the central source of truth for the UI/UX design theme established for the MicroSysLogic website. This ensures consistency across all current and future pages.

## 1. Color Palette

We are using a highly simplified, premium SaaS aesthetic focusing on high contrast and a single, unified accent color.

*   **Primary Accent Red:** `#E2313F`
    *   *Usage:* Hover effects, icons, button borders, active links, red text highlights in the hero, and primary call-to-actions. This replaces all previous variations of red.
*   **Deep Premium Navy (Dark Backgrounds):** `#0f172a`
    *   *Usage:* Hero section background, Footer background, and the slanted background for alternating sections (like About Us).
*   **Standard Navy (Dark Headings):** `#1a2744`
    *   *Usage:* Heading text (`h1`, `h2`, `h3`, `h4`) on light/white backgrounds. Button text for outline buttons on light backgrounds.
*   **Pure White (Light Backgrounds):** `#ffffff`
    *   *Usage:* Main page background, section containers surrounding the dark slanted sections, client sections, and floating stat cards.
*   **Dark Grey (Paragraph Text on Light):** `#4b5563`
    *   *Usage:* Standard paragraph/body text on white/light backgrounds.
*   **Light Slate (Paragraph Text on Dark):** `#e2e8f0` or `#cbd5e1`
    *   *Usage:* Paragraph/body text sitting on top of the Deep Premium Navy backgrounds to ensure high readability without the harshness of pure white.

## 2. Typography & Contrast Rules

*   **On White Backgrounds (`#ffffff`):**
    *   Headings: `#1a2744`
    *   Paragraphs: `#4b5563`
*   **On Deep Navy Backgrounds (`#0f172a`):**
    *   Headings: `#ffffff`
    *   Paragraphs: `#e2e8f0` or `#cbd5e1`
    *   Icons/Accents: `#ffffff` or `#E2313F`

## 3. UI Components

### Slanted Sections (e.g., About Us)
To create dynamic flow, alternating sections use a slanted dark navy overlay cutting across a pure white container.
*   **Container Background:** `#ffffff` (e.g., `.section-bg`)
*   **Overlay Background:** `#0f172a` (e.g., `.section-bg:before`)
*   **Transform:** `transform: skewY(-3deg);`

### Floating Cards (e.g., Stats)
Cards sitting on white backgrounds should have a clean, floating physical appearance.
*   **Background:** `#ffffff`
*   **Border Top:** `3px solid #E2313F`
*   **Default Shadow:** `box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);`
*   **Hover State:** `transform: translateY(-8px); box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.12);`

### Buttons
*   **Primary (Solid):** Uses `#E2313F` for background.
*   **Secondary (Outline):** Transparent background, `border: 2px solid #E2313F`, with text color matching the appropriate contrast rule for its background (`#ffffff` on dark, `#1a2744` on light). Hover state fills with `#E2313F`.
