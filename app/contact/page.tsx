import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Contact us — RMI Agentic' };

export default function Contact() {
  return (
    <main className="page-min">
      <section className="wrap cv-wrap">
        <h1 className="cv-title">Contact us</h1>
        <p className="cv-sub">Tell us a little about you, and we’ll get back to you shortly.</p>
        <ContactForm />
      </section>
    </main>
  );
}
