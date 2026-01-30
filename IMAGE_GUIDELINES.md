# Image Standards

## Grid Images (Work & Content sections)

### Specifications
- **Size**: 400x400px (square)
- **Format**: PNG (logos with transparency), WebP (photos)
- **Background**: Transparent or white
- **Padding**: ~15% internal margin for logos (don't let logo touch edges)

### Why Square?
The CSS container uses `aspect-ratio: 1` (square). When source images are also square, they fill consistently and create visual rhythm across the grid.

---

## Process

### Manual (Recommended)
1. Open image in Figma, Canva, or any image editor
2. Create a new 400x400px canvas (white or transparent)
3. Place your logo/image centered with breathing room
4. Export as PNG (logos) or WebP (photos)

### Using Online Tools
- **TinyPNG.com** - Compress without quality loss
- **Squoosh.app** - Resize and convert formats (free, no upload limits)
- **Remove.bg** - Remove backgrounds from photos

### Command Line (ImageMagick)
```bash
# Resize and center on 400x400 canvas
magick input.png -resize 320x320 -gravity center -extent 400x400 output.png

# Convert to WebP
magick input.png -resize 320x320 -gravity center -extent 400x400 output.webp
```

---

## File Organization

```
public/images/
  work/           # Company logos, work-related
    la-kings.png
    opta-stats-perform.png
    ...
  content/        # Social/content logos
    youtube.png
    tiktok.png
    ...
```

---

## Quick Checklist

Before adding a new image:
- [ ] Is it 400x400px?
- [ ] Does the logo have internal padding (not edge-to-edge)?
- [ ] Is it PNG (logos) or WebP (photos)?
- [ ] File size under 100KB?
- [ ] Placed in correct folder (`work/` or `content/`)?
