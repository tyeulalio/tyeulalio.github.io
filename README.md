# Tiffany Eulalio — Personal Website

Source code for [tyeulalio.github.io](https://tyeulalio.github.io/), the professional website of Tiffany Eulalio, PhD.

The site presents selected work in computational epigenetics, biomedical data science, statistical genetics, and molecular epidemiology, with an emphasis on DNA methylation and human disease.

## Featured research

- **Cancer treatment, DNA methylation, and cardiometabolic health:** epigenome-wide association and mediation analyses examining molecular pathways between cancer treatment exposures and later cardiometabolic risk.
- ***regionalpcs*:** a Bioconductor package for analyzing DNA methylation across genomic regions to improve signal beyond individual-CpG analyses.
- **Cell-type-specific DNA methylation in Alzheimer’s disease:** computational methods for studying disease-associated epigenetic patterns within specific brain cell types.

## Technology

The site is built with:

- Next.js
- React
- TypeScript
- Tailwind CSS

## Local preview

Node.js 22 or later is recommended.

```bash
npm ci
npx next dev
```

Then open [http://localhost:3000](http://localhost:3000).

To create the static production build:

```bash
npx next build
```

## Deployment

Pushes to the `main` branch automatically build and publish the site through GitHub Actions and GitHub Pages.
