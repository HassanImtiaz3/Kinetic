'use client';

import { useState, type FormEvent } from 'react';
import { Reveal } from '@/shared/components/ui/Reveal';
import { SITE_EMAIL, SITE_NAME, SITE_PHONE, SITE_WEB } from '@/shared/constants/site';
import './contact.css';

export function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="page-hero section-x">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Contact us</p>
            <h1 className="section-heading">
              Let’s discuss your
              <br />
              <span className="accent">technology needs.</span>
            </h1>
            <p className="section-lede">
              Whether you need IT services, technology products, or a trusted partner for your next
              project — {SITE_NAME} is ready to help.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-x section-y section--light">
        <div className="container grid-2 contact-grid">
          <Reveal>
            <div className="contact-details">
              <h2 className="section-heading" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                {SITE_NAME}
              </h2>
              <p className="contact-role">IT Solutions Provider</p>
              <ul>
                <li>
                  <span>Phone</span>
                  <a href={`tel:${SITE_PHONE.replace(/[^+\d]/g, '')}`}>{SITE_PHONE}</a>
                </li>
                <li>
                  <span>Email</span>
                  <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
                </li>
                <li>
                  <span>Website</span>
                  <a href={`https://${SITE_WEB}`} target="_blank" rel="noreferrer">
                    {SITE_WEB}
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form className="contact-form surface-card" onSubmit={onSubmit}>
              {sent ? (
                <p className="contact-form__success">
                  Thank you. Your message has been captured locally — connect this form to your
                  preferred email or CRM endpoint before going live.
                </p>
              ) : (
                <>
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" required autoComplete="name" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required autoComplete="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send message
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
