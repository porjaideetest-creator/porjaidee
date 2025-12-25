// Script to download all images from Figma API URLs
// Run with: node download-images.js

const https = require('https');
const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Map of all images: [filename, URL]
const images = [
  // Navbar
  ['logo.png', 'https://www.figma.com/api/mcp/asset/95d140e2-d1b3-4856-848c-25e6caf2ab18'],
  
  // HomePage
  ['hero-image.jpg', 'https://www.figma.com/api/mcp/asset/2742d79e-a265-453d-aace-66f4e172e77d'],
  ['project-1.jpg', 'https://www.figma.com/api/mcp/asset/37ad8f92-c167-46f1-ab6e-b590ca76ddbc'],
  ['project-2.jpg', 'https://www.figma.com/api/mcp/asset/08de3647-ce0f-4f2e-85b8-05dd2a1285e7'],
  ['project-3.jpg', 'https://www.figma.com/api/mcp/asset/5e604737-3112-48d0-96e1-e96e77856e4a'],
  ['sponsor-1.png', 'https://www.figma.com/api/mcp/asset/0766179c-1acf-43e1-a36c-e104aa417c37'],
  ['sponsor-2.png', 'https://www.figma.com/api/mcp/asset/d3758360-7759-4c55-a108-dd2cce73555d'],
  ['sponsor-3.png', 'https://www.figma.com/api/mcp/asset/d3ca828a-00d3-4a6a-b512-ac0c93f9f649'],
  ['sponsor-4.png', 'https://www.figma.com/api/mcp/asset/f2cff1f7-1e91-40b9-bbd7-2cd00e540848'],
  
  // AboutPage
  ['mission-image.jpg', 'https://www.figma.com/api/mcp/asset/3c8f61bc-39ed-456f-ae68-fc342f3ef665'],
  ['team-photo.jpg', 'https://www.figma.com/api/mcp/asset/e224f2dc-2d32-4cec-b12b-82bd66ebc406'],
  
  // ServicesPage
  ['services-1.jpg', 'https://www.figma.com/api/mcp/asset/f1fe8c60-991c-43bd-a0f8-34ba6a2b3a48'],
  ['services-2.jpg', 'https://www.figma.com/api/mcp/asset/8eada345-80aa-4a1a-9c75-df2d8ecd4b96'],
  
  // BlogPage
  ['blog-item.jpg', 'https://www.figma.com/api/mcp/asset/e41e83cf-d23b-4561-b188-e0b59a698a65'],
  
  // ContactPage
  ['contact-image.jpg', 'https://www.figma.com/api/mcp/asset/3e2ac905-6e7b-4d90-9de3-19ad7354a143'],
  ['chevron-up.svg', 'https://www.figma.com/api/mcp/asset/d0cc2a88-cba5-4b91-ab24-c3b38985d152'],
  ['chevron-down.svg', 'https://www.figma.com/api/mcp/asset/58640af0-2c4d-490a-9400-c21f08b6ae8d'],
];

function downloadImage(url, filepath) {
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
        fs.unlinkSync(filepath);
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlinkSync(filepath);
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
  console.log('Starting image downloads...\n');
  
  for (const [filename, url] of images) {
    const filepath = path.join(imagesDir, filename);
    try {
      await downloadImage(url, filepath);
      // Add a small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`✗ Failed to download ${filename}:`, error.message);
    }
  }
  
  console.log('\nDownload complete!');
}

downloadAll();

