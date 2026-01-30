import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a simple document preview SVG
const svgContent = `
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <!-- Padding area (transparent) -->
  <rect width="400" height="400" fill="transparent"/>

  <!-- Document background -->
  <rect x="100" y="40" width="200" height="260" fill="white" stroke="#1A1A1A" stroke-width="2"/>

  <!-- Document fold corner -->
  <polygon points="260,40 300,80 260,80" fill="#f0f0f0" stroke="#1A1A1A" stroke-width="2"/>
  <line x1="260" y1="40" x2="260" y2="80" stroke="#1A1A1A" stroke-width="2"/>
  <line x1="260" y1="80" x2="300" y2="80" stroke="#1A1A1A" stroke-width="2"/>

  <!-- Header line (name) -->
  <rect x="120" y="70" width="120" height="8" fill="#1A1A1A"/>

  <!-- Subheader -->
  <rect x="120" y="90" width="80" height="4" fill="#888"/>

  <!-- Section divider -->
  <line x1="120" y1="115" x2="280" y2="115" stroke="#ddd" stroke-width="1"/>

  <!-- Content lines -->
  <rect x="120" y="130" width="140" height="4" fill="#1A1A1A"/>
  <rect x="120" y="145" width="120" height="3" fill="#888"/>
  <rect x="120" y="155" width="130" height="3" fill="#888"/>

  <rect x="120" y="175" width="140" height="4" fill="#1A1A1A"/>
  <rect x="120" y="190" width="100" height="3" fill="#888"/>
  <rect x="120" y="200" width="120" height="3" fill="#888"/>

  <rect x="120" y="220" width="140" height="4" fill="#1A1A1A"/>
  <rect x="120" y="235" width="110" height="3" fill="#888"/>
  <rect x="120" y="245" width="90" height="3" fill="#888"/>

  <!-- PDF label -->
  <text x="200" y="330" font-family="IBM Plex Mono, monospace" font-size="14" fill="#1A1A1A" text-anchor="middle">pdf</text>
</svg>
`;

async function main() {
  const outputPath = path.join(__dirname, '..', 'public/images/work/resume-preview.png');

  await sharp(Buffer.from(svgContent))
    .png()
    .toFile(outputPath);

  console.log(`Created resume preview: ${outputPath}`);
}

main();
