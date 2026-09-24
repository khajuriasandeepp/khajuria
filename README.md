# Sandeep Khajuria portfolio

Personal portfolio for Sandeep Khajuria. The frontend is React and Vite, with Tailwind CSS. It highlights application security, DevSecOps, ISO 27001 lead auditing, Linux experience, selected projects, and a downloadable resume.

## Run locally

```bash
npm ci
npm run dev
```

Open the local address printed by Vite. For checks and production output:

```bash
npm run lint
npm run build
```

## Deploy to GitHub Pages

The existing workflow in `.github/workflows/main.yml` builds and publishes the site. The Vite base path in `vite.config.js` is `/khajuria`, matching the current repository path. Push the changed files to the repository's publishing branch and check the workflow result. The resume PDF is stored in `public/` so Vite copies it into the published site.

## Domain check demo

The optional demo calls `https://khajuriasandeepp.pythonanywhere.com/api/scan`. That backend is not included in this repository. Its availability, behavior, and CORS configuration must be checked independently. The demo is not a penetration test. Use only authorized domains.

## Personal information

Contact links point to `sandykhajuria@gmail.com`. Review the project links and resume before publishing updates. The resume PDF can be replaced at `public/Sandeep_Khajuria_Resume.pdf`.
