'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { APPROACH } from '@/shared/content/site';
import './ProcessTimeline.css';

gsap.registerPlugin(ScrollTrigger);

export function ProcessTimeline() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      root.querySelectorAll('.process-timeline__progress').forEach((el) => {
        (el as HTMLElement).style.transform = 'scaleY(1)';
      });
      root.querySelectorAll('.process-timeline__item').forEach((el) => {
        el.classList.add('is-active');
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from('.process-timeline__intro > *', {
        opacity: 0,
        y: 28,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.process-timeline__intro',
          start: 'top 85%',
          once: true,
        },
      });

      const progress = root.querySelector('.process-timeline__progress');
      if (progress) {
        gsap.fromTo(
          progress,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '.process-timeline__track',
              start: 'top 70%',
              end: 'bottom 35%',
              scrub: 0.6,
            },
          }
        );
      }

      root.querySelectorAll<HTMLElement>('.process-timeline__item').forEach((item) => {
        const side = item.dataset.side;
        const content = item.querySelector('.process-timeline__content');
        const node = item.querySelector('.process-timeline__node');

        if (content) {
          gsap.fromTo(
            content,
            {
              opacity: 0,
              x: side === 'left' ? -56 : 56,
              y: 24,
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.95,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 78%',
                once: true,
              },
            }
          );
        }

        if (node) {
          gsap.fromTo(
            node,
            { opacity: 0, scale: 0.6 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.7,
              ease: 'back.out(1.6)',
              scrollTrigger: {
                trigger: item,
                start: 'top 78%',
                once: true,
              },
            }
          );

          ScrollTrigger.create({
            trigger: item,
            start: 'top 55%',
            end: 'bottom 45%',
            onEnter: () => item.classList.add('is-active'),
            onEnterBack: () => item.classList.add('is-active'),
            onLeave: () => item.classList.remove('is-active'),
            onLeaveBack: () => item.classList.remove('is-active'),
          });
        }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="section-x section-y process-timeline" aria-label="Delivery path">
      <div className="container">
        <div className="process-timeline__intro">
          <p className="eyebrow">Delivery path</p>
          <h2 className="section-heading">
            From idea to a release
            <br />
            <span className="accent">that performs.</span>
          </h2>
          <p className="section-lede">
            Five clear phases take your idea from uncertainty to a dependable release — with
            decisions, ownership, and useful outputs at every step.
          </p>
          <span className="process-timeline__scroll-hint">Scroll to explore</span>
        </div>

        <div className="process-timeline__track">
          <div className="process-timeline__line" aria-hidden>
            <div className="process-timeline__progress" />
          </div>

          {APPROACH.map((item, index) => {
            const side = index % 2 === 0 ? 'right' : 'left';
            return (
              <article
                key={item.step}
                className={`process-timeline__item process-timeline__item--${side}`}
                data-side={side}
              >
                <div className="process-timeline__node" aria-hidden>
                  <span className="process-timeline__hex">
                    <strong>{item.step}</strong>
                    <em>{item.label}</em>
                  </span>
                </div>

                <div className="process-timeline__content">
                  <p className="process-timeline__step-label">
                    Step {item.step} · {item.label}
                  </p>
                  <h3>{item.headline}</h3>
                  <p>{item.body}</p>
                  <div className="process-timeline__outcomes">
                    <span>You get</span>
                    <p>{item.outcomes.join(', ')}.</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
