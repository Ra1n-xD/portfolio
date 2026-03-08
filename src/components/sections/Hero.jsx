import { motion } from 'framer-motion';
import { useLang } from '../../context/LangContext';

const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.55, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
    }),
};

const ICONS = {
    telegram: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
    ),
    github: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
    ),
    linkedin: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
    ),
    email: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
    ),
    channel: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>
        </svg>
    ),
};

function Hero() {
    const { t } = useLang();

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="home">
            <div className="hero-glow hero-glow-1" />
            <div className="hero-glow hero-glow-2" />

            <div className="container">
                {/* Profile card */}
                <motion.div
                    className="profile-card"
                    initial={{ opacity: 0, x: -32 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
                >
                    <div className="profile-avatar">
                        <svg width="36" height="36" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 14C18 14 18 66 18 66L48 66C62 66 68 58 68 50C68 42 62 36 52 36C60 36 64 30 64 24C64 18 58 14 48 14Z" fill="white"/>
                            <rect x="28" y="34" width="20" height="8" rx="2" fill="rgba(56,182,255,0.5)"/>
                        </svg>
                    </div>

                    <div>
                        <div className="profile-name">Eduard Chervonenko</div>
                        <div className="profile-role">{t.hero.subtitle}</div>

                        <div className="profile-divider" />

                        <div className="profile-links">
                            <a href="https://t.me/ra1n_xd" target="_blank" rel="noopener noreferrer" className="profile-link">
                                <span className="profile-link-key">{ICONS.telegram} Telegram</span>
                                <span className="profile-link-val">@ra1n_xd</span>
                            </a>
                            <a href="https://t.me/fronted_engineer" target="_blank" rel="noopener noreferrer" className="profile-link">
                                <span className="profile-link-key">{ICONS.channel} TG Channel</span>
                                <span className="profile-link-val">@fronted_engineer</span>
                            </a>
                            <a href="https://github.com/Ra1n-xD" target="_blank" rel="noopener noreferrer" className="profile-link">
                                <span className="profile-link-key">{ICONS.github} GitHub</span>
                                <span className="profile-link-val">Ra1n-xD</span>
                            </a>
                            <a href="https://www.linkedin.com/in/chervonenko-ed" target="_blank" rel="noopener noreferrer" className="profile-link">
                                <span className="profile-link-key">{ICONS.linkedin} LinkedIn</span>
                                <span className="profile-link-val">chervonenko-ed</span>
                            </a>
                            <a href="mailto:ed.chervonenko@gmail.com" className="profile-link">
                                <span className="profile-link-key">{ICONS.email} Email</span>
                                <span className="profile-link-val">ed.chervonenko@…</span>
                            </a>
                        </div>

                        <div className="profile-tags">
                            {['React', 'TypeScript', 'Next.js', 'NestJS', 'Docker'].map((tag) => (
                                <span key={tag} className="profile-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Hero content */}
                <motion.div
                    className="hero-content"
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="hero-badge" variants={fadeIn} custom={0}>
                        <span className="hero-badge-dot" />
                        {t.hero.badge}
                    </motion.div>

                    <motion.h1 className="hero-title" variants={fadeIn} custom={1}>
                        Eduard
                        <em> Chervonenko</em>
                    </motion.h1>

                    <motion.p className="hero-subtitle" variants={fadeIn} custom={2}>
                        <span className="hi">// </span>{t.hero.subtitle}
                    </motion.p>

                    <motion.p className="hero-desc" variants={fadeIn} custom={3}>
                        {t.hero.desc}
                    </motion.p>

                    <motion.div className="hero-actions" variants={fadeIn} custom={4}>
                        <button className="btn-primary" onClick={() => scrollTo('contact')}>
                            {t.hero.cta}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </button>
                        <button className="btn-outline" onClick={() => scrollTo('projects')}>
                            {t.hero.viewProjects}
                        </button>
                        <a
                            href="https://t.me/fronted_engineer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                            style={{ display:'inline-flex', alignItems:'center', gap:8 }}
                        >
                            {ICONS.telegram} Channel
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            <div className="hero-scroll" onClick={() => scrollTo('about')}>
                <div className="hero-scroll-line" />
                <span>{t.hero.scroll}</span>
            </div>
        </section>
    );
}

export default Hero;
