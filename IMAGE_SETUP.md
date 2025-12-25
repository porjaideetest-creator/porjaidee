# Image Setup Instructions

All images have been updated to use local paths from `/public/images/`. You need to add the actual image files to make them work.

## Required Images

Place the following images in the `public/images/` directory:

### Navbar
- `logo.png` - Website logo (Navbar)

### HomePage
- `hero-image.jpg` - Main hero image
- `project-1.jpg` - First project card image
- `project-2.jpg` - Second project card image  
- `project-3.jpg` - Third project card image
- `sponsor-1.png` - First sponsor logo
- `sponsor-2.png` - Second sponsor logo
- `sponsor-3.png` - Third sponsor logo
- `sponsor-4.png` - Fourth sponsor logo

### AboutPage
- `mission-image.jpg` - Mission section image
- `team-photo.jpg` - Team photo

### ServicesPage
- `services-1.jpg` - First services carousel image
- `services-2.jpg` - Second services carousel image

### BlogPage
- `blog-item.jpg` - Blog post image

### ContactPage
- `contact-image.jpg` - Contact page image
- `chevron-up.svg` - Accordion expand icon
- `chevron-down.svg` - Accordion collapse icon

## How to Get the Images

### Option 1: Export from Figma (Recommended)
1. Open your Figma design file
2. For each image element, right-click and select "Export"
3. Choose the appropriate format (JPG for photos, PNG for logos, SVG for icons)
4. Save them with the exact filenames listed above to `public/images/`

### Option 2: Try the Download Script
Run the download script (may require authentication):
```bash
node download-images.js
```

### Option 3: Manual Download
If you have access to the Figma API URLs, you can manually download each image and save it to `public/images/` with the correct filename.

## After Adding Images

Once all images are in place:
1. Run `npm run build` to test locally
2. Commit and push to GitHub
3. Vercel will automatically deploy with the images

