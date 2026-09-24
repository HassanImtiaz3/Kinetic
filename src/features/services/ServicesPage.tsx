import Link from 'next/link';
import { Reveal } from '@/shared/components/ui/Reveal';
import { ROUTES } from '@/shared/constants/routes';
import { SERVICES } from '@/shared/content/site';
import './services.css';

export function ServicesPage() {
  return (
    <>
      <section className="page-hero section-x">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Services &amp; solutions</p>
            <h1 className="section-heading">
              Technology services
              <br />
              <span className="accent">aligned to your goals.</span>
            </h1>
            <p className="section-lede">
              From web and software to networking, security, mobile apps, and consultancy — we deliver
              practical, innovative solutions with a focus on quality and customer satisfaction.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-x section-y">
        <div className="container">
          <div className="card-grid">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 4) * 70}>
                <article className="surface-card services-card">
                  <span className="services-card__index">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="services-banner">
              <h2 className="section-heading" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                Understand. Assess. Recommend. Implement. Support.
              </h2>
              <p className="section-lede">
                We approach every project as an opportunity to create value — listening first,
                recommending the right technology, and supporting lasting improvements.
              </p>
              <div className="cta-row">
                <Link href={ROUTES.contact} className="btn btn-primary">
                  Start a project
                </Link>
                <Link href={ROUTES.about} className="btn btn-ghost">
                  About Kinetic
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
