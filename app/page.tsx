const projects = [
  {
    number: "01",
    type: "Cancer survivorship",
    title: "Epigenetics of long-term health after cancer therapy",
    description:
      "I study how treatment exposures become biologically embedded, using DNA methylation and longitudinal clinical data to understand cardiometabolic health in survivors of childhood cancer.",
    methods: "DNA methylation · Clinical phenotypes · Mediation · RNA-seq",
    className: "project-visual survivorship",
  },
  {
    number: "02",
    type: "Regulatory genomics",
    title: "Cell-specific regulation in Alzheimer’s disease",
    description:
      "My doctoral work mapped cell-type-specific methylation quantitative trait loci in the human brain and examined how regulatory variation contributes to Alzheimer’s disease biology.",
    methods: "meQTLs · Statistical genetics · Fine-mapping · Brain epigenomics",
    className: "project-visual regulation",
  },
  {
    number: "03",
    type: "Methods & software",
    title: "Regional population structure for genetic studies",
    description:
      "I developed regionalpcs, an open-source Bioconductor package for quantifying ancestry and population structure within targeted genomic regions.",
    methods: "R/Bioconductor · Package development · Reproducible research",
    className: "project-visual software",
  },
];

const publications = [
  {
    journal: "Nature Communications · 2026",
    title:
      "Epigenome-wide analysis identifies DNA methylation mediators of treatment-related cardiometabolic risk in survivors of childhood cancer",
    role: "First author",
    url: "https://www.nature.com/articles/s41467-026-68689-6",
  },
  {
    journal: "Nature Communications · 2025",
    title:
      "regionalpcs improve discovery of DNA methylation associations with complex traits",
    role: "First author",
    url: "https://www.nature.com/articles/s41467-024-55698-6",
  },
  {
    journal: "Journal of the American Medical Informatics Association · 2021",
    title:
      "Developing machine learning models to personalize care levels among emergency room patients for hospital admission",
    role: "Collaborative research",
    url: "https://pubmed.ncbi.nlm.nih.gov/34402507/",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Tiffany Eulalio home">
          TE
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Computational epigenetics &amp; biomedical data science</p>
          <h1>Tiffany Eulalio, PhD</h1>
          <p className="hero-lede">
            I study how genetic, epigenetic, and clinical variation shapes
            long-term human health.
          </p>
          <p className="hero-body">
            I am an Assistant Professor at the University of South Florida. My
            research combines statistical genetics, molecular epidemiology,
            and reproducible computational analysis across large human cohorts,
            with a particular interest in cancer survivorship and complex
            disease.
          </p>
          <div className="hero-links" aria-label="Professional links">
            <a href="#work">Selected work <span aria-hidden="true">↓</span></a>
            <a href="#contact">Resume &amp; CV <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-frame">
            <img
              src="/tiffany-eulalio-headshot.webp"
              alt="Tiffany Eulalio smiling in a navy blazer"
              width="1200"
              height="1530"
            />
          </div>
          <p className="portrait-caption">
            Assistant Professor<br />
            University of South Florida
          </p>
        </div>
      </section>

      <div className="field-note" aria-label="Research approach">
        <p>
          <span>Across my work</span>
          I connect molecular measurements with the clinical histories and
          lived trajectories they represent.
        </p>
      </div>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Questions I return to</h2>
          <p>
            A selection of research spanning cancer survivorship, regulatory
            genomics, and computational methods.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className={project.className} aria-hidden="true">
                <span className="visual-number">{project.number}</span>
                <div className="visual-art">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className="project-copy">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="methods">{project.methods}</p>
                <a href="#publications" className="text-link">
                  Related work <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-title">
          <p className="eyebrow">About</p>
          <h2>From biomedical questions to careful analysis</h2>
        </div>
        <div className="about-copy">
          <p>
            My training sits at the intersection of biomedical informatics,
            epidemiology, and statistical genomics. I earned my PhD in
            Biomedical Informatics at Stanford University and later conducted
            research at Johns Hopkins University and St. Jude Children’s
            Research Hospital.
          </p>
          <p>
            At USF, I lead and collaborate on studies integrating whole-genome
            sequencing, RNA sequencing, DNA methylation, electronic health
            records, and longitudinal clinical phenotypes. I care about methods
            that are statistically rigorous, biologically interpretable, and
            reproducible by the next person who works with the data.
          </p>
          <div className="disciplines" aria-label="Areas of expertise">
            <span>Epigenomics</span>
            <span>Statistical genetics</span>
            <span>Molecular epidemiology</span>
            <span>Multi-omic integration</span>
            <span>Reproducible computing</span>
          </div>
        </div>
      </section>

      <section className="section publications" id="publications">
        <div className="section-heading compact">
          <p className="eyebrow">Selected publications</p>
          <h2>Recent and representative work</h2>
        </div>

        <div className="publication-list">
          {publications.map((publication, index) => (
            <article className="publication" key={publication.title}>
              <p className="publication-index">0{index + 1}</p>
              <div>
                <p className="journal">{publication.journal}</p>
                <h3>
                  <a href={publication.url} target="_blank" rel="noreferrer">
                    {publication.title}
                  </a>
                </h3>
                <p className="publication-role">{publication.role}</p>
              </div>
              <span className="publication-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>

        <p className="publication-note">
          A complete publication record will be linked through Google Scholar.
        </p>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Thank you for visiting.</h2>
        <p>
          I am based in Tampa, Florida, and work with collaborators across
          biomedical research, clinical science, and computational methods.
        </p>
        <a className="email-link" href="mailto:teulalio@usf.edu">
          teulalio@usf.edu <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-links" aria-label="Additional links">
          <span>GitHub</span>
          <span>Google Scholar</span>
          <span>LinkedIn</span>
          <span>Resume</span>
          <span>CV</span>
        </div>
      </section>

      <footer>
        <p>© 2026 Tiffany Eulalio</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
