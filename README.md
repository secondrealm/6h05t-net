# 6h05t.net Repository

This repository contains the static site source for 6h05t.net: a homepage, the 16-chapter *The Society* reader, and an archive of the original *The Last Stand* worldbuilding and development notes.

## Site-wide components

- `site-chrome.js` defines the shared header, responsive navigation menu, active-page state, and footer used across the site.
- `site-typography.css` applies Geist Pixel to primary headings and display text.
- `styles.css` contains homepage layout and visual styles.
- `hero-face.css` styles the full-width homepage hero image.
- `script.js` generates the Society chapter list on the homepage.
- `assets/` contains images and site assets.

## Page groups

### Homepage

- `index.html` contains the homepage, project sections, chapter links, and shared navigation/footer elements.
- `index-old.html` is a legacy homepage copy.

### Society reader

- `society/index.html` is the chapter directory.
- `society/chapters.json` contains chapter metadata.
- `society/reader.css` and `society/reader.js` provide reader styling and behavior.
- `society/01/` through `society/16/` contain the chapter pages and original text.

### Worldbuilding archive

- `worldbuilding/index.html` is the archive directory.
- `worldbuilding/world/` covers setting and systems.
- `worldbuilding/factions/` covers factions and character concepts.
- `worldbuilding/narrative/` presents the four-act outline.
- `worldbuilding/themes/` covers themes and conflicts.
- `worldbuilding/process/` documents the creative process.
- `worldbuilding/notes.md` contains the source development notes.
- `worldbuilding/worldbuilding.css` styles the archive pages.

### The Last Stand archive

- `last-stand/index.html` contains the concept, synopsis, and four-act overview.
- `last-stand/act-1/` through `last-stand/act-4/` contain the detailed act pages.
- `last-stand/subplots/` contains the optional subplot brainstorm.
