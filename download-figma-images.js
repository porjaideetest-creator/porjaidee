// Script to download all images from Figma using the MCP asset URLs
// Run with: node download-figma-images.js

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Map of all images: [filename, assetId]
// Asset IDs are extracted from Figma MCP asset URLs
const images = [
  // Navbar
  ['logo.png', 'd9ae382e-c3fd-4a86-ad82-46289087a799'],
  
  // HomePage
  ['hero-image.jpg', '9e5c9aa2-60e0-4c1b-9441-d5be3a4eabfc'],
  ['project-1.jpg', '8817e223-01ff-4c66-961e-746af2f0af63'],
  ['project-2.jpg', '50f54f1b-aaa9-4285-9f28-a067cafe3988'],
  ['project-3.jpg', '9664080b-b3b8-4eee-8fa4-aae98857e025'],
  ['sponsor-1.png', '54223912-dbb2-4f34-a6f6-f1c67969c1b7'],
  ['sponsor-2.png', '6b86ea8e-abda-49e6-995e-4978f055c6d4'],
  ['sponsor-3.png', '75d28330-80ed-43e1-99bd-8d006e078350'],
  ['sponsor-4.png', '526777eb-983e-44b5-b99f-f581d2ce884e'],
  
  // AboutPage
  ['mission-image.jpg', 'ccf20bcc-4753-47bb-a6fd-c1765004dbbe'],
  ['team-photo.jpg', '9d4e7ff6-e50d-4cf2-b71c-38379951255a'],
  
  // ServicesPage
  ['services-1.jpg', 'bbc07611-3fab-41f1-9bf3-ad3ccbfb8b50'],
  ['services-2.jpg', 'ebdce865-a96b-4130-af3b-3e409bf6e8ac'],
  
  // ContactPage
  ['contact-image.jpg', '272d304f-fb58-4638-9c2c-7837eff36b7c'],
  
  // BlogPage - using same image as services for now, will need to get actual blog image
  // ['blog-item.jpg', 'TBD'],
  
  // Chevron icons - need to find these
  // ['chevron-up.svg', 'TBD'],
  // ['chevron-down.svg', 'TBD'],
];

function downloadImage(assetId, filepath) {
  const url = `https://www.figma.com/api/mcp/asset/${assetId}`;
  
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${path.basename(filepath)}`);
          resolve();
        });
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirects
        file.close();
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
        }
        downloadImage(response.headers.location.split('/').pop(), filepath).then(resolve).catch(reject);
      } else {
        file.close();
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
        }
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('Starting image downloads from Figma...\n');
  
  for (const [filename, assetId] of images) {
    const filepath = path.join(imagesDir, filename);
    try {
      await downloadImage(assetId, filepath);
      // Add a small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`✗ Failed to download ${filename}:`, error.message);
    }
  }
  
  console.log('\nDownload complete!');
  console.log(`\nNote: Some images may still be missing:`);
  console.log(`- blog-item.jpg (need to find node ID)`);
  console.log(`- chevron-up.svg (need to find node ID)`);
  console.log(`- chevron-down.svg (need to find node ID)`);
  console.log(`\nYou can export these manually from Figma or find their node IDs.`);
}

downloadAll();

