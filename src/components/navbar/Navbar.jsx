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

    const NAV_IDS = ['about', 'skills', 'experience', 'projects'];

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
            let current = '';
            NAV_IDS.forEach((id) => {
                const sec = document.getElementById(id);
                if (sec && window.scrollY >= sec.offsetTop - 120) current = id;
            });
            setActive(current);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                    <span className="nav-logo" onClick={() => scrollTo('home')}>
                        <svg className="nav-logo-icon" width="22" height="22" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 14C18 14 18 66 18 66L48 66C62 66 68 58 68 50C68 42 62 36 52 36C60 36 64 30 64 24C64 18 58 14 48 14Z" fill="url(#nlg)"/>
                            <rect x="28" y="34" width="20" height="8" rx="2" fill="white" opacity="0.7"/>
                            <defs>
                                <linearGradient id="nlg" x1="18" y1="14" x2="68" y2="66" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#38b6ff"/>
                                    <stop offset="1" stopColor="#6366f1"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        Front<span className="a">Ed</span>
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
