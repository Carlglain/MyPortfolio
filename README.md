# MyPortfolio

Personal portfolio of Nyuysemo Calglain, software developer at Nkwa.

Live: https://nyuysemo-calglain.vercel.app

## Stack

Next.js (App Router), TypeScript and Tailwind CSS. Animations are plain CSS
transitions triggered by an IntersectionObserver, with no animation library.

## Editing content

All copy, experience, projects and the shipping-log data live in
`src/content/site.ts`. Project screenshots are in `public/projects/` and the
downloadable CV is `public/Nyuysemo-Calglain-CV.pdf`.

## Development

```bash
npm install
npm run dev
```

## Deployment

Pushing to `main` deploys to production on Vercel. Pull requests get preview
deployments.
