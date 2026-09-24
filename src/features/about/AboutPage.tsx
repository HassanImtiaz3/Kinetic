import Link from 'next/link';
import { Reveal } from '@/shared/components/ui/Reveal';
import { ROUTES } from '@/shared/constants/routes';
import {
  ABOUT_APPROACH,
  ABOUT_INTRO,
  INDUSTRIES,
  MISSION_CLOSE,
  MISSION_INTRO,
  MISSION_POINTS,
  PRODUCTS,
  PRODUCTS_INTRO,
  TEAM,
  VALUES,
  VISION,
  WHY_CHOOSE,
} from '@/shared/content/site';
import './about.css';

export function AboutPage() {
  return (
    <>
      <section className="page-hero section-x">
        <div className="container">
          <Reveal>
            <p className="eyebrow">About us</p>
            <h1 className="section-heading">
              Innovative IT solutions
              <br />
              <span className="accent">built for lasting value.</span>
            </h1>
            <p className="section-lede">{ABOUT_INTRO}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-x section-y section--light">
        <div className="container grid-2">
          <Reveal>
            <h2 className="section-heading">
              How we
              <br />
              <span className="accent">work with you.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="section-lede" style={{ marginTop: 0 }}>
              {ABOUT_APPROACH}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-x section-y">
        <div className="container grid-2">
          <Reveal>
            <p className="eyebrow">Vision</p>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
              Collaboration, innovation,
              <br />
              <span className="accent">and excellence.</span>
            </h2>
            <p className="section-lede">{VISION}</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Mission</p>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
              Improve performance
              <br />
              <span className="accent">and efficiency.</span>
            </h2>
            <p className="section-lede">{MISSION_INTRO}</p>
            <ul className="about-mission-list">
              {MISSION_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="section-lede" style={{ marginTop: 16 }}>
              {MISSION_CLOSE}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-x section-y section--light">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Why choose Kinetic</p>
            <h2 className="section-heading">{WHY_CHOOSE.title}</h2>
            <p className="section-lede">{WHY_CHOOSE.body}</p>
          </Reveal>
          <div className="card-grid" style={{ marginTop: 36 }}>
            {WHY_CHOOSE.strengths.map((item, i) => (
              <Reveal key={item} delay={(i % 4) * 60}>
                <article className="surface-card">
                  <p>{item}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-x section-y about-values">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Our values</p>
            <h2 className="section-heading">
              Diversity, collaboration,
              <br />
              <span className="accent">and excellence.</span>
            </h2>
          </Reveal>
          <Reveal staggerChildren=".surface-card" style={{ marginTop: 36 }}>
            <div className="card-grid card-grid--3">
              {VALUES.map((value) => (
                <article key={value.title} className="surface-card" style={{ opacity: 0 }}>
                  <h3>{value.title}</h3>
                  <p>{value.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-x section-y section--light">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Our team</p>
            <h2 className="section-heading">
              Skilled professionals.
              <br />
              <span className="accent">Collaborative solutions.</span>
            </h2>
            <p className="section-lede">{TEAM}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-x section-y about-industries">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Industries &amp; support</p>
            <h2 className="section-heading">
              Technology for
              <br />
              <span className="accent">a range of client needs.</span>
            </h2>
          </Reveal>
          <div className="card-grid" style={{ marginTop: 36 }}>
            {INDUSTRIES.map((item, i) => (
              <Reveal key={item.title} delay={(i % 4) * 60}>
                <article className="surface-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-x section-y section--light">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Products</p>
            <h2 className="section-heading">
              Technology products
              <br />
              <span className="accent">for business and everyday needs.</span>
            </h2>
            <p className="section-lede">{PRODUCTS_INTRO}</p>
          </Reveal>
          <div className="card-grid" style={{ marginTop: 36 }}>
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.title} delay={(i % 4) * 60}>
                <article className="surface-card">
                  <h3>{product.title}</h3>
                  <p>{product.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="cta-row">
              <Link href={ROUTES.services} className="btn btn-primary">
                View services
              </Link>
              <Link href={ROUTES.contact} className="btn btn-ghost">
                Contact us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
