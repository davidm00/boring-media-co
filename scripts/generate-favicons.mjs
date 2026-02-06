import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

// Read the SVG
const svgPath = join(publicDir, 'logos', 'boring-b-icon.svg');
const svgContent = readFileSync(svgPath, 'utf-8');

// Convert SVG to PNG at different sizes
async function generateFavicons() {
  // Render SVG to PNG at high resolution first
  const resvg = new Resvg(svgContent, {
    fitTo: { mode: 'width', value: 512 },
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  // Generate favicon.ico (32x32)
  const favicon32 = await sharp(pngBuffer)
    .resize(32, 32)
    .png()
    .toBuffer();
  writeFileSync(join(publicDir, 'favicon.ico'), favicon32);
  console.log('✓ Generated favicon.ico (32x32)');

  // Generate apple-touch-icon.png (180x180)
  const appleTouchIcon = await sharp(pngBuffer)
    .resize(180, 180)
    .png()
    .toBuffer();
  writeFileSync(join(publicDir, 'apple-touch-icon.png'), appleTouchIcon);
  console.log('✓ Generated apple-touch-icon.png (180x180)');

  // Generate favicon-16x16.png
  const favicon16 = await sharp(pngBuffer)
    .resize(16, 16)
    .png()
    .toBuffer();
  writeFileSync(join(publicDir, 'favicon-16x16.png'), favicon16);
  console.log('✓ Generated favicon-16x16.png');

  // Generate favicon-32x32.png
  const favicon32png = await sharp(pngBuffer)
    .resize(32, 32)
    .png()
    .toBuffer();
  writeFileSync(join(publicDir, 'favicon-32x32.png'), favicon32png);
  console.log('✓ Generated favicon-32x32.png');

  console.log('\n✅ All favicons generated successfully!');
}

generateFavicons().catch(console.error);
