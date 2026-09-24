'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { Reveal } from '@/shared/components/ui/Reveal';
import { ROUTES } from '@/shared/constants/routes';
import { SERVICES, SERVICES_COUNT_LABEL, SERVICES_PAGE_LEDE } from '@/shared/content/site';
import './services.css';

export function ServicesPage() {
  const [active, setActive] = useState(0);
  const featureRef = useRef<HTMLDivElement>(null);
  const service = SERVICES[active];
  const total = SERVICES.length;

  useEffect(() => {
    const el = featureRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.services-feature__anim',
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.07,
          ease: 'power3.out',
        }
      );
    }, el);

    return () => ctx.revert();
  }, [active]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % total);
    }, 7000);
    return () => window.clearInterval(id);
  }, [total]);

  function selectService(index: number) {
    setActive(index);
    document.getElementById(SERVICES[index].slug)?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  }

  return (
    <>
      <section className="page-hero section-x services-hero">
        <div className="container">
          <Reveal>
            <p className="services-breadcrumb">
              <Link href={ROUTES.home}>Home</Link>
              <span>/</span>
              <span>Services</span>
            </p>
            <p className="eyebrow">Services we offer</p>
            <h1 className="section-heading">
              Nine practices.
              <br />
              <span className="accent">Clear capabilities.</span>
            </h1>
            <p className="section-lede">{SERVICES_PAGE_LEDE}</p>
            <div className="cta-row">
              <Link href={ROUTES.contact} className="btn btn-primary">
                Work with us
              </Link>
              <a href="#explore-services" className="btn btn-ghost">
                Explore practices
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-x section-y services-featured">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Featured practices</p>
            <h2 className="section-heading">
              One practice
              <br />
              <span className="accent">at a time.</span>
            </h2>
          </Reveal>

          <div className="services-feature" ref={featureRef}>
            <div className="services-feature__main">
              <p className="services-feature__count services-feature__anim">
                {String(active + 1).padStart(2, '0')} / {SERVICES_COUNT_LABEL}
              </p>
              <p className="services-feature__practice services-feature__anim">
                Practice {String(active + 1).padStart(2, '0')}
              </p>
              <h3 className="services-feature__title services-feature__anim">{service.title}</h3>
              <p className="services-feature__summary services-feature__anim">{service.summary}</p>
              <div className="cta-row services-feature__anim">
                <a href={`#${service.slug}`} className="btn btn-ghost">
                  View service
                </a>
                <Link href={ROUTES.contact} className="btn btn-primary">
                  Book a scoping call
                </Link>
              </div>
            </div>

            <aside className="services-feature__aside">
              <ul className="services-feature__metrics">
                {service.highlights.map((item) => (
                  <li key={item.label} className="services-feature__anim">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>

              <div className="services-feature__switcher" role="tablist" aria-label="Featured practices">
                {SERVICES.map((item, index) => (
                  <button
                    key={item.slug}
                    type="button"
                    role="tab"
                    aria-selected={index === active}
                    className={`services-feature__dot${index === active ? ' is-active' : ''}`}
                    onClick={() => setActive(index)}
                    title={item.title}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <em>{item.title}</em>
                  </button>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="explore-services" className="section-x section-y section--light services-explore">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Explore services</p>
            <h2 className="section-heading">
              Choose the expertise
              <br />
              <span className="accent">your next step requires.</span>
            </h2>
            <p className="section-lede">
              Pick a practice to go deeper, or tell us the outcome — we will map the right mix of
              capabilities.
            </p>
          </Reveal>

          <div className="services-pulse">
            <div className="services-pulse__live">
              <span className="services-pulse__dot" />
              Delivery focus
              <strong>Live</strong>
            </div>
            <ul className="services-pulse__stats">
              <li>
                <strong>9</strong>
                <span>Practices</span>
              </li>
              <li>
                <strong>5+</strong>
                <span>Years</span>
              </li>
              <li>
                <strong>End-to-end</strong>
                <span>Delivery</span>
              </li>
            </ul>
            <ul className="services-pulse__chips">
              <li>Web</li>
              <li>Mobile</li>
              <li>Security</li>
              <li>Infrastructure</li>
            </ul>
          </div>

          <ol className="services-list">
            {SERVICES.map((item, index) => (
              <Reveal key={item.slug} delay={(index % 4) * 50}>
                <li id={item.slug} className="services-list__item">
                  <button
                    type="button"
                    className="services-list__trigger"
                    onClick={() => selectService(index)}
                  >
                    <span className="services-list__index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="services-list__body">
                      <h3>{item.title}</h3>
                      <p>{item.summary}</p>
                      <ul className="services-list__tags">
                        {item.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                    <span className="services-list__arrow" aria-hidden>
                      →
                    </span>
                  </button>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-x section-y services-consult">
        <div className="container">
          <Reveal direction="scale">
            <div className="services-consult__panel">
              <div>
                <p className="eyebrow">Next step</p>
                <h2 className="section-heading" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)' }}>
                  Not sure which service fits?
                </h2>
                <p className="section-lede">
                  Tell us what you need to achieve. We will recommend the right mix of practices and
                  a practical first step.
                </p>
              </div>
              <div className="cta-row">
                <Link href={ROUTES.contact} className="btn btn-primary">
                  Get a consultation
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
