import { motion } from 'framer-motion';
import { useLang } from '../../Context/LangContext';

const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }
    })
};

function Mentoring() {
    const { t } = useLang();
    const m = t.mentoring;

    return (
        <section className="section mentoring-section" id="mentoring">
            <div className="container">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
                    <motion.div className="section-label" variants={fadeIn} custom={0}>
                        {m.label}
                    </motion.div>
                    <motion.h2 className="section-title" variants={fadeIn} custom={1}>
                        {m.title}
                    </motion.h2>

                    <div className="mentoring-grid">
                        {/* What I help with */}
                        <motion.div className="mentoring-block" variants={fadeIn} custom={2}>
                            <div className="mentoring-block-icon">🧑‍💻</div>
                            <div className="mentoring-block-title">{m.helpTitle}</div>
                            <ul className="mentoring-help-list">
                                {m.helpItems.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <p className="mentoring-disclaimer">{m.disclaimer}</p>
                        </motion.div>

                        {/* Pricing */}
                        <motion.div className="mentoring-block" variants={fadeIn} custom={3}>
                            <div className="mentoring-block-icon">💸</div>
                            <div className="mentoring-block-title">{m.priceTitle}</div>
                            <div className="mentoring-prices">
                                {m.prices.map((p, i) => (
                                    <div key={i} className="mentoring-price-row">
                                        <span className="mentoring-price-name">{p.name}</span>
                                        <span className="mentoring-price-dots" />
                                        <span className="mentoring-price-value">{p.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mentoring-cta-wrap">
                                <a href="https://t.me/ra1n_xd" target="_blank" rel="noopener noreferrer" className="btn-primary mentoring-cta-btn">
                                    {m.cta}
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Mentoring;
