# Crimson & Gold Birthday Scrapbook

Build a single-page birthday website with three sequential screens and a dark, textured, vintage scrapbook aesthetic. Deep crimson/maroon and gold color palette (not bright pink/red) — think aged red velvet with gold accents, plus a subtle paper-grain texture overlay across every screen.

Screen 1 — Cover (lined notebook paper background, aged/darkened lines):

Two hand-drawn tan/brown heart outlines (not filled), one top-left corner, one bottom-right corner, both slightly rotated

Script/cursive text: "dear MOM" (placeholder text)

Below that, a "ransom note" cutout-letter title spelling "HAPPY" on one line and "BIRTHDAY" on a second line — each letter is its own small rectangle with a different background color (dark gold, deep maroon, near-black, brown, cream) and its own rotation for a collage look

Below the title, two more script-font placeholder lines: "[Without I'm nothing]" and "[from your loving child]"

A small "tap anywhere to continue →" hint that fades in after ~1.3 seconds

Tapping anywhere on this screen fades it out and transitions to Screen 2

Screen 2 — Envelope:

Dark maroon radial-gradient background

Centered sealed envelope: deep red/crimson gradient body with a subtle diagonal-line + dot texture on the flap, and a cream/ivory heart-shaped wax-style seal in the middle

Flanking the envelope: a large gold cursive "I" on the left and "U" on the right (spelling "I [envelope] U")

Small italic "tap to open" hint below the envelope

Tapping the envelope: the flap folds open (flip animation), the seal fades out, then a brief paper-flash transition plays, and it moves to Screen 3

Screen 3 — Letter (scrapbook style):

Cream/aged paper background with faint horizontal ruled lines and a torn/jagged top edge (irregular zigzag, not straight)

Two washi tape strips across the top corners: one gold-striped diagonal tape, one solid deep-red tape

A few small doodles scattered on the page: two small stars (gold tones), a small heart outline, and a hand-drawn squiggle line

Centered content: cursive "happy birthday" kicker, heading "[Mom's Name]", italic subtext " 28 September 2026"

Below that: placeholder paragraph text "[Write your birthday letter here...]" in a serif font, left-aligned, generous line height. make the letter format as landscape format coz i will write a lot.

Right-aligned cursive sign-off: "with all my love"

General requirements:

Fonts: a cursive/script font (like Caveat or similar) for handwritten-feel text, and a classic serif (like Cormorant Garamond) for body/letter text

Fully responsive, mobile-friendly, no external image files needed (use CSS/SVG for all decorative elements)

Smooth fade/slide transitions between all three screens

Respect prefers-reduced-motion (disable animations for users who have that setting on)

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/333af31f-85b1-5ba1-8ea6-b1349893c7db).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
