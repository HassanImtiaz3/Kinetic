'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProcessTimeline } from '@/shared/components/ui/ProcessTimeline';
import { Reveal } from '@/shared/components/ui/Reveal';
import { ROUTES } from '@/shared/constants/routes';
import { SITE_DESCRIPTION, SITE_NAME, SITE_SUBLINE, SITE_TAGLINE } from '@/shared/constants/site';
import {
  APPROACH,
  COMMITMENTS,
  HOME_FAQS,
  INDUSTRIES,
  PARTNER_INTRO,
  PARTNER_POINTS,
  SERVICES,
  WHY_CHOOSE,
} from '@/shared/content/site';
import './home.css';

gsap.registerPlugin(ScrollTrigger);

const highlights = SERVICES.slice(0, 6);

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
        .from('.home-hero__lede', { opacity: 0, y: 24, duration: 0.7, stagger: 0.1 }, '-=0.45')
        .from('.home-hero__actions > *', { opacity: 0, y: 16, duration: 0.55, stagger: 0.08 }, '-=0.35')
        .from('.home-hero__panel', { opacity: 0, x: 40, duration: 0.9 }, '-=0.7')
        .from(
          '.home-hero__pipeline span',
          { opacity: 0, x: -12, duration: 0.45, stagger: 0.07 },
          '-=0.55'
        );

      gsap.to('.home-hero__orb', {
        y: 18,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.home-hero__panel', {
        y: -18,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
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
            <p className="section-lede home-hero__lede home-hero__lede--secondary">{SITE_DESCRIPTION}</p>
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

      <section className="section-x section-y section--light">
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

          <Reveal staggerChildren=".surface-card" style={{ marginTop: 40 }}>
            <div className="card-grid card-grid--3">
              {highlights.map((service) => (
                <article key={service.slug} className="surface-card" style={{ opacity: 0 }}>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </article>
              ))}
            </div>
          </Reveal>

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

      <section className="section-x section-y home-commitments">
        <div className="container">
          <Reveal>
            <p className="eyebrow">How we operate</p>
            <h2 className="section-heading">
              Three commitments that stay true
              <br />
              <span className="accent">when delivery pressure is high.</span>
            </h2>
          </Reveal>
          <Reveal staggerChildren=".home-commitments__card" style={{ marginTop: 36 }}>
            <div className="card-grid card-grid--3">
              {COMMITMENTS.map((item) => (
                <article
                  key={item.step}
                  className="surface-card home-commitments__card"
                  style={{ opacity: 0 }}
                >
                  <span className="home-commitments__step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <ProcessTimeline />

      <section className="section-x section-y section--light home-industries-light">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Who we support</p>
            <h2 className="section-heading">
              Solutions across
              <br />
              <span className="accent">business and everyday needs.</span>
            </h2>
            <p className="section-lede">
              We serve businesses and consumers with technology that covers infrastructure, security,
              software, and the devices that power modern workplaces.
            </p>
          </Reveal>
          <Reveal staggerChildren=".surface-card" style={{ marginTop: 36 }}>
            <div className="card-grid">
              {INDUSTRIES.map((item) => (
                <article key={item.title} className="surface-card" style={{ opacity: 0 }}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-x section-y section--light home-faq">
        <div className="container">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="section-heading">
              Answers before
              <br />
              <span className="accent">you reach out.</span>
            </h2>
            <p className="section-lede">
              Clear information about our services, location, delivery approach, and how to contact
              Kinetic Enterprise.
            </p>
          </Reveal>
          <div className="home-faq__list">
            {HOME_FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 60}>
                <details className="home-faq__item">
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-x section-y home-cta">
        <div className="container">
          <Reveal direction="scale">
            <h2 className="section-heading">
              More than a technology supplier —
              <br />
              <span className="accent">a partner in your progress.</span>
            </h2>
            <p className="section-lede">{PARTNER_INTRO}</p>
            <ul className="home-partner-list home-partner-list--dark">
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
