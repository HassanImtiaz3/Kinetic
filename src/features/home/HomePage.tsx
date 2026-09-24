'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { Reveal } from '@/shared/components/ui/Reveal';
import { ROUTES } from '@/shared/constants/routes';
import { SITE_NAME, SITE_SUBLINE, SITE_TAGLINE } from '@/shared/constants/site';
import { APPROACH, PARTNER_POINTS, SERVICES, WHY_CHOOSE } from '@/shared/content/site';
import './home.css';

const highlights = SERVICES.slice(0, 3);

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.home-hero__eyebrow', { opacity: 0, y: 18, duration: 0.6 })
        .from('.home-hero__title', { opacity: 0, y: 40, duration: 0.85 }, '-=0.25')
        .from('.home-hero__lede', { opacity: 0, y: 24, duration: 0.7 }, '-=0.45')
        .from('.home-hero__actions > *', { opacity: 0, y: 16, duration: 0.55, stagger: 0.08 }, '-=0.35')
        .from('.home-hero__panel', { opacity: 0, x: 40, duration: 0.9 }, '-=0.7');

      gsap.to('.home-hero__orb', {
        y: 18,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={heroRef} className="page-hero section-x">
        <div className="container home-hero">
          <div>
            <p className="eyebrow home-hero__eyebrow">{SITE_NAME}</p>
            <h1 className="home-hero__title section-heading">
              Bringing
              <br />
              <span className="accent">possibilities</span>
              <br />
              to your imagination.
            </h1>
            <p className="section-lede home-hero__lede">{SITE_SUBLINE}</p>
            <div className="cta-row home-hero__actions">
              <Link href={ROUTES.services} className="btn btn-primary">
                Explore services
              </Link>
              <Link href={ROUTES.contact} className="btn btn-ghost">
                Contact us
              </Link>
            </div>
          </div>

          <div className="home-hero__panel" aria-hidden>
            <div className="home-hero__orb" />
            <div className="home-hero__pipeline">
              {APPROACH.map((item) => (
                <span key={item.step}>{item.title}</span>
              ))}
            </div>
            <p className="home-hero__panel-copy">{SITE_TAGLINE}</p>
          </div>
        </div>
      </section>

      <section className="section-x section-y">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Why choose us</p>
            <h2 className="section-heading">
              Experience, expertise,
              <br />
              <span className="accent">and customer commitment.</span>
            </h2>
            <p className="section-lede">{WHY_CHOOSE.body}</p>
          </Reveal>

          <div className="card-grid card-grid--3" style={{ marginTop: 40 }}>
            {highlights.map((service, i) => (
              <Reveal key={service.slug} delay={i * 100}>
                <article className="surface-card">
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="cta-row">
              <Link href={ROUTES.about} className="btn btn-ghost">
                About Kinetic
              </Link>
              <Link href={ROUTES.services} className="btn btn-primary">
                All services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-x section-y home-approach">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Our approach</p>
            <h2 className="section-heading">
              Understanding your needs.
              <br />
              <span className="accent">Delivering practical solutions.</span>
            </h2>
          </Reveal>
          <div className="home-approach__grid">
            {APPROACH.map((item, i) => (
              <Reveal key={item.step} delay={i * 70}>
                <article className="surface-card home-approach__card">
                  <span className="home-approach__step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-x section-y home-cta">
        <div className="container">
          <Reveal>
            <h2 className="section-heading">
              More than a technology supplier —
              <br />
              <span className="accent">a partner in your progress.</span>
            </h2>
            <p className="section-lede">
              We combine IT services, technology products, and professional expertise with a focus on
              quality, reliable technology, and long-term relationships.
            </p>
            <ul className="home-partner-list">
              {PARTNER_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="cta-row">
              <Link href={ROUTES.contact} className="btn btn-primary">
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
