# Figma Image Export Guide

This guide will help you export all images from Figma to use in your website.

## Quick Method: Using Figma Node IDs

Each image in your code has a `data-node-id` attribute. You can use these to quickly find images in Figma.

### Step 1: Open Your Figma File
1. Open your Figma design file
2. Make sure you're viewing the correct page/frame

### Step 2: Find Images Using Node IDs

In Figma, you can search for nodes by ID:
1. Press `Cmd/Ctrl + /` to open the search
2. Type the node ID (e.g., `107:1081`)
3. This will highlight the element

### Step 3: Export Each Image

For each image below, follow these steps:
1. Find the image using its node ID (or visually locate it)
2. **Select the image element** (make sure you select the actual image, not a container)
3. In the right sidebar, scroll to the **Export** section
4. Click the **+** button to add an export setting
5. Choose the format:
   - **JPG** for photos (hero images, project images, team photos)
   - **PNG** for logos and graphics with transparency
   - **SVG** for icons (chevrons)
6. Set the export size (usually 1x or 2x for retina displays)
7. Click **Export [filename]**
8. Save to: `my-figma-project/public/images/` with the exact filename listed below

---

## Image Export Checklist

### Navbar Logo
- **Filename:** `logo.png`
- **Node ID:** `6:5`
- **Element Name:** "IMG_4785 1"
- **Format:** PNG
- **Location:** Top left of navbar

### HomePage Images

#### Hero Image
- **Filename:** `hero-image.jpg`
- **Node ID:** `107:1081`
- **Element Name:** "506613215_122248739240243162_596900854839290210_n 1"
- **Format:** JPG
- **Location:** Large hero image at top of homepage

#### Project Card 1
- **Filename:** `project-1.jpg`
- **Node ID:** `107:1089`
- **Element Name:** "467235088_122193737036243162_8915996321142650166_n 1"
- **Format:** JPG
- **Location:** First project card (Leaf Compost)

#### Project Card 2
- **Filename:** `project-2.jpg`
- **Node ID:** `107:1091`
- **Element Name:** "490003386_122233624088243162_256006985192082019_n 1"
- **Format:** JPG
- **Location:** Second project card (Organic Vegetables)

#### Project Card 3
- **Filename:** `project-3.jpg`
- **Node ID:** `107:1090`
- **Element Name:** "Mini Green Camp 1"
- **Format:** JPG
- **Location:** Third project card (Learning Center)

#### Sponsor Logo 1
- **Filename:** `sponsor-1.png`
- **Node ID:** `107:1093`
- **Element Name:** "download 1"
- **Format:** PNG
- **Location:** First sponsor logo in "Supported By" section

#### Sponsor Logo 2
- **Filename:** `sponsor-2.png`
- **Node ID:** `108:1094`
- **Element Name:** "MJU_LOGO.svg 1"
- **Format:** PNG
- **Location:** Second sponsor logo

#### Sponsor Logo 3
- **Filename:** `sponsor-3.png`
- **Node ID:** `108:1096`
- **Element Name:** "Untitled design (3) 1"
- **Format:** PNG
- **Location:** Third sponsor logo

#### Sponsor Logo 4
- **Filename:** `sponsor-4.png`
- **Node ID:** `107:1092`
- **Element Name:** "Logo_25630402142624_728956 1"
- **Format:** PNG
- **Location:** Fourth sponsor logo

### AboutPage Images

#### Mission Image
- **Filename:** `mission-image.jpg`
- **Node ID:** `110:1098`
- **Element Name:** "466599918_122193737282243162_5164657571554732780_n 1"
- **Format:** JPG
- **Location:** Large image in "Our Mission" section

#### Team Photo
- **Filename:** `team-photo.jpg`
- **Node ID:** `110:1101` (or `110:1102` for second photo - they use the same image)
- **Element Name:** "506613215_122248739240243162_596900854839290210_n 2"
- **Format:** JPG
- **Location:** Team photos in "Meet The Team" section

### ServicesPage Images

#### Services Image 1
- **Filename:** `services-1.jpg`
- **Node ID:** `110:1164`
- **Element Name:** "466741475_122193952916243162_8461739260359411220_n 1"
- **Format:** JPG
- **Location:** First image in services carousel

#### Services Image 2
- **Filename:** `services-2.jpg`
- **Node ID:** `110:1165`
- **Element Name:** "LINE_ALBUM_Family Farm Day_250610_83 1"
- **Format:** JPG
- **Location:** Second image in services carousel

### BlogPage Image

#### Blog Item Image
- **Filename:** `blog-item.jpg`
- **Node ID:** `25:377` (carousel item)
- **Format:** JPG
- **Location:** Blog post carousel image

### ContactPage Images

#### Contact Image
- **Filename:** `contact-image.jpg`
- **Node ID:** `110:1172`
- **Element Name:** "1754126895376 1"
- **Format:** JPG
- **Location:** Image on contact page

#### Chevron Up Icon
- **Filename:** `chevron-up.svg`
- **Node ID:** Check accordion expand icon
- **Format:** SVG
- **Location:** FAQ accordion expand icon

#### Chevron Down Icon
- **Filename:** `chevron-down.svg`
- **Node ID:** Check accordion collapse icon
- **Format:** SVG
- **Location:** FAQ accordion collapse icon

---

## Batch Export Method (Faster)

If you want to export multiple images at once:

1. **Select multiple images** (hold `Cmd/Ctrl` and click each image)
2. In the right sidebar, go to **Export** section
3. Add export settings for all selected images
4. Click **Export** - Figma will export all selected images
5. Organize them into the correct folders with the correct names

---

## Verification

After exporting all images, verify:
1. All files are in `my-figma-project/public/images/`
2. Filenames match exactly (case-sensitive)
3. File formats are correct (JPG for photos, PNG for logos, SVG for icons)

Then test locally:
```bash
cd my-figma-project
npm run dev
```

All images should now load correctly!

