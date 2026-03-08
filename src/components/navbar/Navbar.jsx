import { useState, useEffect } from 'react';
import { useLang } from '../../context/LangContext';
import { useTheme } from '../../context/ThemeContext';

function Navbar() {
    const { t, lang, toggleLang } = useLang();
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('');
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        { label: t.nav.about, id: 'about' },
        { label: t.nav.skills, id: 'skills' },
        { label: t.nav.experience, id: 'experience' },
        { label: t.nav.projects, id: 'projects' },
    ];

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navLinks.map((l) => document.getElementById(l.id));
            let current = '';
            sections.forEach((sec) => {
                if (!sec) return;
                if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
            });
            setActive(current);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    });

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    return (
        <>
            <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
                <div className="container">
                    <span className="nav-logo" onClick={() => scrollTo('home')} style={{ cursor: 'pointer' }}>
                        ed.<span>dev</span>
                    </span>

                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <button
                                    className={`nav-list__link${active === link.id ? ' active' : ''}`}
                                    onClick={() => scrollTo(link.id)}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="nav-controls">
                        <button className="nav-toggle" onClick={toggleLang} title={lang === 'en' ? 'Русский' : 'English'}>
                            {lang === 'en' ? 'RU' : 'EN'}
                        </button>

                        <button className="nav-toggle" onClick={toggleTheme} title={theme === 'dark' ? 'Light mode' : 'Dark mode'}>
                            {theme === 'dark' ? (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5"/>
                                    <line x1="12" y1="1" x2="12" y2="3"/>
                                    <line x1="12" y1="21" x2="12" y2="23"/>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                                    <line x1="1" y1="12" x2="3" y2="12"/>
                                    <line x1="21" y1="12" x2="23" y2="12"/>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                                </svg>
                            ) : (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                                </svg>
                            )}
                        </button>

                        <button className="nav-cta" onClick={() => scrollTo('contact')}>
                            {t.nav.contact}
                        </button>

                        <button
                            className={`nav-burger${mobileOpen ? ' open' : ''}`}
                            onClick={() => setMobileOpen((v) => !v)}
                            aria-label="Menu"
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </nav>

            {mobileOpen && (
                <div className="nav-mobile">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            className={`nav-list__link${active === link.id ? ' active' : ''}`}
                            onClick={() => scrollTo(link.id)}
                        >
                            {link.label}
                        </button>
                    ))}
                    <button className="nav-cta" onClick={() => scrollTo('contact')}>
                        {t.nav.contact}
                    </button>
                </div>
            )}
        </>
    );
}

export default Navbar;
