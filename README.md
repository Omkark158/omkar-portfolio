# Omkar Kulkarni — Portfolio

A simple React + Vite portfolio site. No Tailwind, no UI framework — just plain CSS in `src/index.css`.

## Project structure

```
src/
  components/   one file per section (Navbar, Hero, About, Skills, Projects, Contact, Footer)
  data.js       all editable content: skills list, project list, social links
  index.css     all styling — colors/fonts are CSS variables at the top
public/
  resume.pdf    add your resume here so the "Download CV" button works
```

## Run it locally

```
npm install
npm run dev
```

## Edit content

- **Projects / skills / links** → edit `src/data.js`. No need to touch any component file.
- **Colors / fonts** → edit the `:root` variables at the top of `src/index.css`.
- **Photo** → the hero and about sections currently use a placeholder initials avatar
  (`src/components/Avatar.jsx`). To use a real photo, drop an image into `public/`
  and swap the `<Avatar ... />` for an `<img src="/your-photo.jpg" />` in
  `src/components/Hero.jsx` and `src/components/About.jsx`.

## Deploy to Netlify

```
npm run build
```

Then drag the generated `dist/` folder into Netlify, or connect this repo to Netlify
and set the build command to `npm run build` with publish directory `dist`.
