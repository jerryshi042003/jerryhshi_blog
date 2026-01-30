# Design System

## Typography

### Font Family
```css
font-family: 'IBM Plex Mono', monospace;
```
Sans-serif monospace. Clean, readable, editorial feel — like Courier but modern and legible.

### Hierarchy
| Element | Size | Weight | Spacing |
|---------|------|--------|---------|
| Section Headers | 1.5rem | 600 | 0.08em |
| Grid Item Titles | 0.9rem | 500 | 0.08em |
| Body Text | 1rem | 400 | normal |

### Headers
- Always uppercase (`text-transform: uppercase`)
- Left-aligned with 3px black accent bar
- Black text (#1A1A1A), not gray

---

## Colors

### Palette
```css
--black: #1A1A1A;
--gray-600: #666666;
--gray-400: #999999;
--white: #FFFFFF;
--orange-500: #FF6B35;  /* Accent only */
```

### Image Colors
- **Keep brand colors** - Don't grayscale logos
- Ensure similar visual weight (don't mix faded images with vibrant ones)
- If an image looks too busy, consider a cleaner version of the logo

---

## Grid Principles

### Image Consistency
1. All images: 1:1 square aspect ratio (400x400px source)
2. Logos: Centered with ~15% internal padding
3. Don't mix: tiny icons with large detailed photos

### Visual Weight
All grid items should feel roughly equal in "weight":
- A bold, colorful logo and a thin line-art icon feel unbalanced
- Prefer versions of logos with similar density/saturation

### Spacing
- Grid gap: 1.5rem (mobile), 2rem (tablet), 2.5rem (desktop)
- Section padding: 3rem top, 2rem bottom

---

## Design Principles for Future

### Keep It Simple
- White background, minimal decoration
- Let the images speak
- Avoid borders, shadows unless necessary

### Consistency Over Variety
- Same image sizes
- Same typography
- Same spacing patterns

### When Adding New Content
1. Does the new image match existing visual weight?
2. Is it the same dimensions (400x400)?
3. Does it have appropriate internal padding?

### Color Restraint
- Too many colorful elements compete for attention
- If grid feels busy: consider simpler logo versions
- The structure (sizing, spacing) creates order, not decoration
