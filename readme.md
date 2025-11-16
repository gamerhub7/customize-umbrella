🌂 Custom Umbrella Preview Tool

A responsive web tool that lets users upload a logo and preview it on an umbrella mockup with live color switching, smooth loading animations, and a reset system.
Built using pure HTML, CSS, and Vanilla JavaScript — no frameworks needed.

🚀 Features
🟣 1. Live Logo Upload

Upload .png or .jpg (up to 5MB)

Logo appears neatly at the bottom-center of the umbrella

Automatically hidden while loading

Always maintains aspect ratio

🎨 2. Theme Switching (Blue, Yellow, Pink)

Instant umbrella color switching

Smooth fade animation

Loader appears at center while switching

Logo hides during transition and reappears afterward

🔄 3. Smart Reset Button

The "Reset" button:

✔ Removes the uploaded logo
✔ Keeps the same umbrella color (does not reset to Blue)
✔ Shows a loader
✔ Hides the umbrella image briefly
✔ Then fades the same umbrella back in
✔ Background stays unchanged
✔ Logo container stays hidden until a new upload

This gives a very clean, professional “reset” behavior.

📱 4. Fully Responsive

Works on all screen sizes

Logo & Loader auto-resize for mobile

Umbrella scales smoothly

No overlap or breaking layout

⚡ 5. Loader With Smart Behavior

Always centered perfectly

Appears during:

Theme switches

Logo uploads

Reset action

Logo hides while loader is active

Reappears only when necessary

🏗️ Tech Used

HTML5 – Structure

CSS3 – Styling + Responsive Design

JavaScript (Vanilla) – Logo uploads, theme switching, loader logic

Zero libraries. Zero dependencies.


🧩 How It Works
Logo Upload

File input triggers FileReader()

Logo is previewed via base64 URL

Logo container becomes visible only after upload

Theme Switching

Hides logo

Shows loader

Fades umbrella out → swaps image → fades in

Shows logo again if uploaded

Reset Button

Clears uploaded logo

Hides logo container

Shows loader

Fades umbrella out → reloads same umbrella → fades in



💡 Installation / Usage

Just download the folder and open:

index.html


No server or setup required.

If you want a local server:

npx http-server .


Then visit:

http://localhost:8080
