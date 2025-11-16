# Custom Umbrella — README

> ⚡️ *Make your umbrellas pop. Fast previews. Clean code.*

This project is a small, responsive web demo that lets users preview custom logos on umbrella mockups and switch umbrella colors/themes. It's lightweight, mobile-friendly, and built to be easily extended.

---

## 💎what makes this cool

* **Instant logo preview** — Upload a `.png` or `.jpg` (≤5MB) and see it on the umbrella immediately.
* **Bottom-centered logo placement** — The uploaded logo snaps to the bottom-center of the umbrella mockup for realistic placement.
* **Theme switching with loader** — Smooth theme switches (Blue / Yellow / Pink) with a centered loading animation.
* **Responsive UI** — Works across desktop/tablet/phone (mobile-first CSS breakpoints).
* **Non-blocking UX** — Loader hides the logo while the umbrella image is swapping to avoid visual glitches.
* **Small and dependency-free** — Vanilla HTML/CSS/JS — no frameworks required.
* **Accessible file picker** — File input is friendly to mobile browsers and keyboard users.

---

## 🧭 Quick Start

1. Clone the repo or copy the files into a folder.
2. Ensure `assets/` contains `Blue.png`, `Yello.png`, `Pink.png`, `loader_icon.svg`, `upload_icon.svg` and the `icons/` folder with theme icons.
3. Open `index.html` in a browser.

No build step required — just open the file or serve with a static server.

Example (with `http-server`):

```bash
npx http-server .
# then visit http://localhost:8080
```

---

## 🔧 Files

* `index.html` — markup (keeps original structure)
* `style.css` — responsive styles (mobile-first)
* `script.js` — logo upload, validation, theme switching logic
* `assets/` — images and icons used in the demo

---

## ✅ UX / Behaviour Notes

* The logo container is **hidden** until the user uploads an image.
* During theme changes the logo is temporarily hidden and the **loader is shown in the center**.
* The logo is constrained to the logo container size and uses `object-fit: contain` so it never overflows.
* Image validation prevents non-image files and files larger than 5MB.

---

## 🚀 Ideas to flex further (future enhancements)

* Drag / drop + drag-to-position the logo across the umbrella surface.
* Scale & rotate handles for the uploaded logo (pinch/gesture on mobile).
* Export final preview to PNG (client-side canvas rendering).
* Multiple logo layers and pattern fills.
* Add product preview mockups (e.g., different umbrella shapes, sizes).



Made with ☕️ and a little CSS magic.

