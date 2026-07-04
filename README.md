# Rahul Gautam — Portfolio

Personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

**Live site (after deploy):** https://rahulgautam034.github.io/rahul-gautam-portfolio/

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and publishes automatically on every push to `main`.

### One-time setup

1. **Create a GitHub repo** named `rahul-gautam-portfolio` under your account  
   https://github.com/new

2. **Push this project** (from this folder):

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/rahul-gautam-portfolio.git
   git push -u origin main
   ```

   Use GitHub CLI (`gh auth login`) or a [Personal Access Token](https://github.com/settings/tokens) if prompted for credentials.

3. **Enable GitHub Pages**
   - Repo → **Settings** → **Pages**
   - **Source:** GitHub Actions

4. After the workflow completes (~1–2 min), your site will be live at:  
   `https://YOUR_USERNAME.github.io/rahul-gautam-portfolio/`

### Manual build (optional)

```bash
npm run build:pages
```

## Customize

Edit content in `src/data/portfolio.ts` to update experience, skills, and contact info.
