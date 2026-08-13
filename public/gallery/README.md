# Gallery Images

Drop your gallery photos into this folder. Any `.webp`, `.jpg`, or `.png` files placed here
will need to be referenced in `src/pages/gallery.astro` to appear on the Gallery page.

## Recommended format

- **Format:** `.webp` (best compression + quality)
- **Width:** 1200px max (the masonry grid scales them down automatically)
- **Naming:** descriptive kebab-case, e.g. `eggs-benedict-morning.webp`, `dining-room-evening.webp`

## Adding images to the page

Open `src/pages/gallery.astro` and add entries to the `images` array in the frontmatter:

```js
const images = [
  { src: '/gallery/your-photo.webp', alt: 'A descriptive caption' },
  // ...
];
```

The masonry layout and lightbox handle everything else automatically.
