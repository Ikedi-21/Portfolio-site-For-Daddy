import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.resolve('public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');
const LOGO_DIR = path.join(PUBLIC_DIR, 'logo');
const LOGO_SRC = path.join(LOGO_DIR, 'logo.png');

async function main() {
  console.log('1. Converting images to WebP...');
  const imageFiles = fs.readdirSync(IMAGES_DIR).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

  for (const file of imageFiles) {
    const ext = path.extname(file);
    const base = path.basename(file, ext);
    // Normalized slug filename
    const slugName = base.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const outPath = path.join(IMAGES_DIR, `${slugName}.webp`);
    
    const inputPath = path.join(IMAGES_DIR, file);
    const image = sharp(inputPath);
    const meta = await image.metadata();

    let pipeline = sharp(inputPath);
    if (meta.width > 1600) {
      pipeline = pipeline.resize(1600, null, { withoutEnlargement: true });
    }
    await pipeline.webp({ quality: 80 }).toFile(outPath);
    console.log(`Converted ${file} -> ${slugName}.webp`);
  }

  // Also convert logo to webp
  if (fs.existsSync(LOGO_SRC)) {
    await sharp(LOGO_SRC)
      .webp({ quality: 90 })
      .toFile(path.join(LOGO_DIR, 'logo.webp'));
    console.log('Converted logo.png -> logo.webp');
  }

  console.log('2. Generating favicon.svg (Navy rounded square with Gold interlocking OO mark)...');
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="108" fill="#0B1630"/>
  <g transform="translate(256, 256)">
    <!-- Outer accent ring -->
    <circle r="190" fill="none" stroke="#D4AF37" stroke-width="8" opacity="0.35"/>
    
    <!-- Left Interlocking O -->
    <g transform="translate(-48, 0) rotate(-12)">
      <ellipse cx="0" cy="0" rx="90" ry="145" fill="none" stroke="#D4AF37" stroke-width="34"/>
      <ellipse cx="0" cy="0" rx="90" ry="145" fill="none" stroke="#E0C07A" stroke-width="12" opacity="0.8"/>
    </g>

    <!-- Right Interlocking O -->
    <g transform="translate(48, 0) rotate(12)">
      <ellipse cx="0" cy="0" rx="90" ry="145" fill="none" stroke="#D4AF37" stroke-width="34"/>
      <ellipse cx="0" cy="0" rx="90" ry="145" fill="none" stroke="#E0C07A" stroke-width="12" opacity="0.8"/>
    </g>
  </g>
</svg>`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.svg'), faviconSvg, 'utf8');

  console.log('3. Generating PNG icons from favicon SVG...');
  // 512x512
  const icon512Buffer = await sharp(Buffer.from(faviconSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'icon-512.png'));

  // 192x192
  const icon192Buffer = await sharp(Buffer.from(faviconSvg))
    .resize(192, 192)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'icon-192.png'));

  // 180x180 apple touch icon
  await sharp(Buffer.from(faviconSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));

  // 32x32 & 16x16 for favicon.ico
  const png32 = await sharp(Buffer.from(faviconSvg)).resize(32, 32).png().toBuffer();
  const png16 = await sharp(Buffer.from(faviconSvg)).resize(16, 16).png().toBuffer();

  // Simple multi-image ICO builder
  function createIco(images) {
    // images: array of { width, height, buffer }
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // icon type (1 = icon)
    header.writeUInt16LE(images.length, 4); // number of images

    let offset = 6 + images.length * 16;
    const directoryEntries = [];
    for (const img of images) {
      const entry = Buffer.alloc(16);
      entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
      entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
      entry.writeUInt8(0, 2); // color count
      entry.writeUInt8(0, 3); // reserved
      entry.writeUInt16LE(1, 4); // color planes
      entry.writeUInt16LE(32, 6); // bits per pixel
      entry.writeUInt32LE(img.buffer.length, 8); // image size
      entry.writeUInt32LE(offset, 12); // image offset
      directoryEntries.push(entry);
      offset += img.buffer.length;
    }

    return Buffer.concat([header, ...directoryEntries, ...images.map(i => i.buffer)]);
  }

  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 }
  ]);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), icoBuffer);
  console.log('Generated favicon.ico (16x16, 32x32)');

  console.log('4. Generating site.webmanifest...');
  const manifest = {
    name: "Prof. Osita Ogbu, OON, FNAE - Official Portfolio",
    short_name: "Prof. Osita Ogbu",
    description: "Official portfolio of Prof. Osita Ogbu, OON, FNAE — Development Economist, Former Presidential Adviser, Author",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1630",
    theme_color: "#0B1630",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
  fs.writeFileSync(path.join(PUBLIC_DIR, 'site.webmanifest'), JSON.stringify(manifest, null, 2), 'utf8');

  console.log('5. Generating public/og-image.png (1200x630, navy background, centered light logo and name in Playfair Display)...');
  // First, extract or prepare logo on a solid cream circular badge
  const logoResize = await sharp(LOGO_SRC)
    .resize(200, 200, { fit: 'contain' })
    .png()
    .toBuffer();

  const creamBadge = Buffer.from(`<svg width="220" height="220" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
    <circle cx="110" cy="110" r="108" fill="#F7F4EE" stroke="#D4AF37" stroke-width="4"/>
  </svg>`);

  const logoWithBadge = await sharp(creamBadge)
    .composite([{ input: logoResize, top: 10, left: 10 }])
    .png()
    .toBuffer();

  // Save as logo-cream-badge.png for dark backgrounds
  fs.writeFileSync(path.join(LOGO_DIR, 'logo-dark-bg.png'), logoWithBadge);

  const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0B1630"/>
        <stop offset="100%" stop-color="#1A3156"/>
      </linearGradient>
    </defs>
    <!-- Subtle navy gradient from SPEC -->
    <rect width="1200" height="630" fill="url(#bg)"/>
    
    <!-- Outer decorative gold line border -->
    <rect x="30" y="30" width="1140" height="570" rx="16" fill="none" stroke="#D4AF37" stroke-width="2" opacity="0.4"/>
    
    <!-- Text Elements -->
    <text x="600" y="405" font-family="'Playfair Display', Georgia, serif" font-size="44" font-weight="700" fill="#F7F4EE" text-anchor="middle" letter-spacing="0.5">
      Prof. Osita Ogbu, OON, FNAE
    </text>
    
    <text x="600" y="455" font-family="'Inter', sans-serif" font-size="20" font-weight="500" fill="#D4AF37" text-anchor="middle" letter-spacing="2">
      DEVELOPMENT ECONOMIST · FORMER CHIEF ECONOMIC ADVISER · AUTHOR
    </text>
    
    <text x="600" y="495" font-family="'Inter', sans-serif" font-size="16" font-weight="400" fill="#F7F4EE" opacity="0.8" text-anchor="middle" letter-spacing="0.5">
      Official Academic &amp; Professional Portfolio
    </text>
  </svg>`;

  // Composite the badge over the SVG background
  await sharp(Buffer.from(ogSvg))
    .composite([
      {
        input: logoWithBadge,
        top: 110,
        left: Math.round((1200 - 220) / 2)
      }
    ])
    .png({ quality: 85, compressionLevel: 8 })
    .toFile(path.join(PUBLIC_DIR, 'og-image.png'));

  const ogStat = fs.statSync(path.join(PUBLIC_DIR, 'og-image.png'));
  console.log(`Generated og-image.png (${Math.round(ogStat.size / 1024)} KB, max allowed 300 KB)`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
