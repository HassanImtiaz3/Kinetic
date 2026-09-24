import { Reveal } from '@/shared/components/ui/Reveal';
import './legal.css';

interface LegalSection {
  title: string;
  body: string;
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  lede: string;
  updated: string;
  sections: readonly LegalSection[];
}

export function LegalPage({ eyebrow, title, lede, updated, sections }: LegalPageProps) {
  return (
    <>
      <section className="page-hero section-x">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="section-heading">{title}</h1>
            <p className="section-lede">{lede}</p>
            <p className="legal-updated">Last updated: {updated}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-x section-y section--light">
        <div className="container legal-doc">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 40}>
              <article className="legal-doc__section">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
