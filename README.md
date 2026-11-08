# 6h05t.net

**Our fight is binary. Our future is not.**

[6h05t.net](https://6h05t.net) is an experimental fiction and worldbuilding archive by **Second Realm (Eric Rhodes)**. It brings together a serialized story, an unpublished novel concept, and the working material behind a fictional universe concerned with identity, surveillance, authorship, technological control, and resistance.

The project was originally developed in 2023 and archived in 2025. This website is a later effort to preserve and present the work in one place.

## Explore the archive

### The Society

A 16-chapter serialized story following Charles, a digital artist whose pseudonymous identity, Jxsper, becomes central to a networked resistance movement. Originally released through the *Creative Bytes* newsletter.

- [Chapter index](/society/)
- Chapter routes: `/society/01/` through `/society/16/`

**Archive status:** The chapter pages and navigation have been created, but their original prose has **not yet been migrated** into those pages. Until that work is complete, the pages link to the original chapters on [secondrealm.net](https://secondrealm.net).

### The Last Stand

An unpublished, exploratory four-act novel concept featuring Alex, Zoe, the Sentinels, and the Remnants. The struggle centers on 6h05t.net, a decentralized mesh network threatened by increasingly powerful human–computer hybrids.

*The Last Stand* and *The Society* share creative ideas, but the surviving notes do not establish them as one continuous narrative. The novel outline is presented as development material, not a finished book.

### Worldbuilding and process

The worldbuilding archive adapts the original development notes into browsable sections:

| Section | Path | Contents |
| --- | --- | --- |
| Overview | `/worldbuilding/` | Entry point to the development archive |
| World | `/worldbuilding/world/` | Setting, technology, society, and the network |
| Factions | `/worldbuilding/factions/` | Sentinels, Remnants, and key characters |
| Narrative | `/worldbuilding/narrative/` | *The Last Stand* four-act outline |
| Themes | `/worldbuilding/themes/` | Identity, freedom, resistance, and technology |
| Process | `/worldbuilding/process/` | AI collaboration and narrative-development methods |

These pages are edited presentations of the working notes, not complete transcripts. They distinguish established material from possibilities explored during development.

## Two layers of collaboration

**The original fiction was a creative experiment in human–AI collaboration.** Second Realm used generative AI in iterative conversations to explore plot structures, fictional systems, character relationships, emotional dynamics, and narrative perspective. The work also drew from onchain personas in *Unofficial Punks*, serialized publishing, and fictional social accounts. AI was part of the working process; the project was not simply a one-prompt generated story.

**This website was also built collaboratively with AI.** In 2026, Second Realm directed the site's visual concept, content hierarchy, editorial decisions, and archival goals while working with ChatGPT to develop the design, write the HTML/CSS/JavaScript, build the reading and worldbuilding page templates, and organize material from the original notes. The website itself is therefore another artifact of the same interest in how human intentions and computational tools shape creative work.

The creative direction, selection of historical material, and decisions about what to publish belong to Second Realm. AI-assisted output was reviewed and arranged through that process; it should not be mistaken for a complete or authoritative record of an independently operating fictional universe.

## Site structure

```text
index.html               Homepage and project overview
styles.css               Main visual styles
script.js                Homepage navigation and chapter index
assets/                  Images and site assets
society/
  index.html             Chapter directory
  chapters.json          Chapter metadata
  reader.css             Reader styling
  reader.js              Reader behavior
  01/ ... 16/            Chapter routes
worldbuilding/
  index.html             Worldbuilding directory
  worldbuilding.css       Archive styling
  world/                  Setting and society
  factions/               Characters and factions
  narrative/              Novel outline
  themes/                 Themes
  process/                Creative process
```

This is a **static website** built with HTML, CSS, and JavaScript. It has no package dependencies or build step.

## Run locally

From the website's root folder:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/`.

## Deployment

Deploy the website root as a static site through a service such as Cloudflare Pages, Vercel, or another static host. Ensure that directory URLs resolve to their `index.html` files (for example, `/worldbuilding/world/`). Root-relative links assume the site is hosted at the domain root; adjust them if deploying under a repository subpath.

## Archival notes

- The original Society chapter pages on secondrealm.net should remain available until the full text has been transferred and checked.
- Original working notes and external social or publication links may become unavailable over time.
- The worldbuilding pages summarize and organize development material. They should not be treated as evidence that every explored subplot became part of a published story.
- The archive preserves distinctions between published fiction, unfinished concepts, and retrospective interpretation.

## Credits and rights

**Concept, fiction, creative direction, and project:** Second Realm / Eric Rhodes  
**Website design and development:** Second Realm in collaboration with ChatGPT (OpenAI), 2026

All original fiction, artwork, characters, and project documentation remain the intellectual property of their respective rights holders. No open-source license is granted by this repository unless a separate license is explicitly added. Attribution to AI-assisted development does not grant permission to reproduce the creative works.

For more about the artist: [secondrealm.net](https://secondrealm.net).
