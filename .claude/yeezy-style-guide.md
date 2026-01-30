# Yeezy Style Guide

Reference document for maintaining visual consistency across jerryshi.com.

---

## Core Principles

- **Minimalist**: Clean, uncluttered layouts with generous whitespace
- **Monochrome**: Black, white, and grays only - no accent colors
- **Fast**: No heavy assets, no complex animations
- **Typography-focused**: Let type and spacing do the work


1. Layout Structure: The "Fixed-Fluid" HybridThe layout functions as a responsive grid with static-aspect-ratio containers. It avoids the "rigid" feel of traditional e-commerce by utilizing extreme white space.Alignment: Items are centered within their column tracks. The alignment is top-down; because product images vary in height, they sit on a common baseline or are top-aligned within a container of uniform height, ensuring the text labels (e.g., "PK-01") remain perfectly aligned horizontally.Flow: The system feels "locked" to a column count. It does not allow items to overflow or wrap mid-row; it strictly adheres to the $N$ per-row rule until a breakpoint is triggered.2. Responsive Behavior: Stepped FluidityThe transition between screen sizes is not strictly fluid (where items shrink every pixel) but rather stepped with fluid scaling within brackets.The Transition: 5 items (Desktop) → 3 items (Tablet) → 1 or 2 items (Mobile).Resizing Feel: When the browser window resizes, the item containers scale proportionally until they hit a breakpoint. At the breakpoint, the column count "snaps" to the next configuration.Visual Rhythm: By jumping from 5 to 3, the site avoids the "awkward middle ground" where 4 items might look too spaced out or too cramped, maintaining the signature Yeezy minimalist density.3. Image Sizing & Aspect Ratio: Preservation over FitThe "clean" feeling is achieved through consistent container aspect ratios regardless of the product's actual dimensions.Containment: Images are set to contain rather than cover. This means a tall boot (SL-03) and a wide bag (BG-03) are both centered within the same square or slightly vertical rectangular "hit box."Consistency: Every "card" (image + text label) occupies the exact same width and height as its neighbor. This prevents the "masonry" look and ensures that the white space between products remains mathematically uniform.4. Loading Behavior: Intentional RevealThe site utilizes asynchronous staggered entry to prevent "flash of unstyled content" (FOUC).Layout Shift Prevention: The site reserves the vertical space for the entire grid before the images arrive. This is likely done by setting a min-height or an aspect-ratio box on the container.The Reveal: Images do not "pop" in; they appear via a soft fade-in (approx. 200-300ms) once the asset is fully cached. This creates a calm, deliberate user experience rather than a jittery one.5. Interaction Model: The "Invisible" UIThe UI minimizes "noise" (buttons, borders, shadows) to focus on the product.The Hitbox: The entire vertical stack—from the top of the image to the bottom of the text label—acts as a single clickable anchor.Hover State: Based on this aesthetic, hover effects are likely minimal—perhaps a subtle opacity shift or, more likely, a simple cursor change (pointer). The design relies on the user's intuition that a catalog image is inherently interactive.Breadcrumbs/Navigation: Category links at the top (NEW, MENS, WOMENS) are low-contrast until interacted with, keeping the focus on the product grid.6. Mental Model for EngineersThink of the layout as a "Modular Gallery System." Instead of thinking "how do I fit these images," think: "How do I distribute $N$ invisible, identical boxes across the width, and then center an image inside each?"Primary Rule: The container is the constant; the product image is the variable.Secondary Rule: Padding is "global." The gutters between items are usually a percentage of the viewport width ($vw$) to ensure the "breathability" of the site scales with the screen.7. Engineering-Ready SummaryGoal: Build a high-end, minimalist product grid with zero layout shift and fluid-stepped responsiveness.Grid Logic: Use a CSS Grid container with grid-template-columns: repeat(5, 1fr). At tablet breakpoints, switch to repeat(3, 1fr).Item Architecture: Each product item is a flex-column container. Inside, the image wrapper must have a fixed aspect ratio (e.g., aspect-ratio: 1 / 1 or 3 / 4).Image Rendering: Set images to width: 100%, height: 100%, and object-fit: contain. This ensures products of all shapes (long pants vs. wide glasses) are framed consistently without cropping.Typography: Labels are center-aligned, absolute-positioned at the bottom of the item container or placed with a fixed margin-top to ensure all text labels across a row sit on the same line.Loading: Implement an IntersectionObserver or a simple onLoad hook to toggle an opacity-100 class. Use transition: opacity 0.3s ease-in-out.Spacing: Use gap values defined in vw units to ensure the "airiness" of the layout scales proportionally with the monitor size.

---

## Performance Rules

1. **Images**: Use appropriate sizes, `loading="eager"` for above-fold only
2. **Fonts**: System fonts only (no web font loading)
3. **Animations**: CSS only, no JavaScript animations
4. **No external dependencies**: Keep bundle minimal

---

## Don'ts

- No accent colors
- No borders on cards (use spacing instead)
- No shadows (except subtle blur on nav)
- No rounded corners on containers
- No footer
- No decorative elements
