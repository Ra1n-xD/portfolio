import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLang } from '../../context/LangContext';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
    }),
};

function About() {
    const [ref, inView] = useInView({ threshold: 0.15 });
    const { t } = useLang();

    return (
        <section className="about section" id="about" ref={ref}>
            <div className="container">
                <motion.div
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.span className="section-label" variants={fadeUp} custom={0}>
                        {t.about.label}
                    </motion.span>
                    <motion.h2 className="section-title" variants={fadeUp} custom={1}>
                        {t.about.title}
                    </motion.h2>

                    <div className="about-grid">
                        <motion.div className="about-text" variants={fadeUp} custom={2}>
                            <p>{t.about.p1}</p>
                            <p>{t.about.p2}</p>
                            <p>{t.about.p3}</p>
                        </motion.div>

                        <motion.div className="about-stats" variants={fadeUp} custom={3}>
                            {t.about.stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    className="stat-card"
                                    variants={fadeUp}
                                    custom={3 + i * 0.5}
                                >
                                    <div className="stat-number">{stat.number}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
