import Link from 'next/link';
import Reveal from '@/components/Reveal';
import WhySection from '@/components/WhySection';

const CARDS = [
  ['Insurance', 'Customers are reimbursed for covered agent errors.', '/product'],
  ['Rate', 'Adversarial testing sets your Trust Score and premium.', '/product#rate'],
  ['Monitor', 'We alert you the moment your agent behaves unusually.', '/product#monitor'],
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="wrap hero-in">
          <div className="hero-copy">
            <h1 className="rise d1">Have peace of mind while your agents move money.</h1>
            <div className="rule rise d2" aria-hidden="true" />
            <p className="sub rise d3">Insurance that protects you and your customers every time your AI agent pays.</p>
            <a className="hook rise d3" href="#problem">So what happens when an agent gets it wrong?</a>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-mark" src="/rmi-logo-light.svg" alt="" aria-hidden="true" />
        </div>
      </section>

      <div className="problem" id="problem">
        <Reveal className="wrap">
          <p>Today, no one covers agent mistakes. <span>The loss falls on your customers.</span></p>
          <p className="enter">Until RMI Agentic.</p>
        </Reveal>
      </div>

      <section className="sec band-paper2" id="overview">
        <div className="wrap">
          <Reveal><p className="lab">What we do</p></Reveal>
          <Reveal><h2>Insurance, backed by testing and live monitoring.</h2></Reveal>
          <div className="ov-cards">
            {CARDS.map((c, i) => (
              <Reveal key={c[0]} delay={i * 0.1} className="ov-wrap">
                <Link className="ov-card" href={c[2]}><span className="ov-lab">{c[0]}</span><span className="ov-line">{c[1]}</span><span className="ov-more">Learn more</span></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhySection />
    </main>
  );
}
