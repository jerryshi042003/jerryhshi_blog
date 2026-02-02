import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SIZE = 400;  // Target canvas size
const PADDING = 0.15;  // 15% padding around image
const INPUT_DIRS = ['public/images/work', 'public/images/content'];

async function processImage(inputPath, outputPath) {
  const innerSize = Math.floor(SIZE * (1 - PADDING * 2));  // 280px

  try {
    // Resize to fit within inner area, preserving aspect ratio
    const resized = await sharp(inputPath)
      .resize(innerSize, innerSize, { fit: 'inside' })
      .toBuffer();

    // Get dimensions of resized image
    const metadata = await sharp(resized).metadata();

    // Center on transparent canvas
    await sharp({
      create: {
        width: SIZE,
        height: SIZE,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      }
    })
    .composite([{
      input: resized,
      left: Math.floor((SIZE - metadata.width) / 2),
      top: Math.floor((SIZE - metadata.height) / 2)
    }])
    .png()
    .toFile(outputPath);

    console.log(`Processed: ${inputPath} -> ${outputPath}`);
  } catch (err) {
    console.error(`Error processing ${inputPath}:`, err.message);
  }
}

// Process all images in directories
async function main() {
  for (const dir of INPUT_DIRS) {
    const fullDir = path.join(__dirname, '..', dir);

    if (!fs.existsSync(fullDir)) {
      console.log(`Directory not found: ${fullDir}`);
      continue;
    }

    const files = fs.readdirSync(fullDir);

    for (const file of files) {
      // Skip already processed files and non-image files
      if (file.includes('-processed') || !/\.(png|jpg|jpeg|webp)$/i.test(file)) {
        continue;
      }

      const inputPath = path.join(fullDir, file);
      const outputPath = path.join(fullDir, file.replace(/\.\w+$/, '-processed.png'));

      await processImage(inputPath, outputPath);
    }
  }

  console.log('\nDone! Processed images have "-processed.png" suffix.');
  console.log('Update your code to use the processed versions, then delete originals if desired.');
}

main();
