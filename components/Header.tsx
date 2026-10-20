'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './Logo';

export default function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey); };
  }, []);

  useEffect(() => setOpen(false), [path]);

  const cls = (href: string) => (path === href ? 'is-active' : '');

  return (
    <header className={`top ${scrolled ? 'scrolled' : ''}`}>
      <div className="top-in">
        <Link href="/" aria-label="RMI Agentic, home" className="brand-link"><Logo /></Link>
        <nav className="menu" aria-label="Main">
          <Link href="/" className={cls('/')}>Home</Link>
          <Link href="/product" className={cls('/product')}>Product</Link>
          <Link href="/cover-cost" className={cls('/cover-cost')}>Cover cost</Link>
          <Link href="/contact" className={`contact-link ${cls('/contact')}`}>Contact us</Link>
          <button className="menu-toggle" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span className="mt-lines" aria-hidden="true"><i /><i /></span>Menu
          </button>
        </nav>
      </div>
      {open && (
        <nav className="mobile-menu" aria-label="Mobile">
          <Link href="/">Home</Link>
          <Link href="/product">Product</Link>
          <Link href="/cover-cost">Cover cost</Link>
          <Link href="/contact" className="mm-cta">Contact us</Link>
        </nav>
      )}
    </header>
  );
}
