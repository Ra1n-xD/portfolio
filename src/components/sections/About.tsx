import { motion } from 'framer-motion';
import { useInView } from '@/Hooks/useInView';
import { useLang } from '@/Context/LangContext';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }
    })
};

function About() {
    const [ref, inView] = useInView({ threshold: 0.1 });
    const { t } = useLang();

    return (
        <section className="about section" id="about" ref={ref}>
            <div className="container">
                <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'}>
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
                                <motion.div key={i} className="stat-card" variants={fadeUp} custom={3 + i * 0.5}>
                                    <div className="stat-number">{stat.number}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div className="macos-window about-skills" variants={fadeUp} custom={5}>
                        <div className="macos-titlebar">
                            <div className="macos-dots">
                                <span className="macos-dot macos-dot-red" />
                                <span className="macos-dot macos-dot-yellow" />
                                <span className="macos-dot macos-dot-green" />
                            </div>
                            <div className="macos-title">~/ed/skills</div>
                            <div className="macos-titlebar-right" />
                        </div>
                        <div className="macos-body">
                            <div className="skills-grid">
                                {t.skills.groups.map((group, i) => (
                                    <motion.div key={group.title} className="skill-group" variants={fadeUp} custom={6 + i * 0.5}>
                                        <span className="skill-group-icon">{group.icon}</span>
                                        <div className="skill-group-title">{group.title}</div>
                                        <div className="skill-tags">
                                            {group.tags.map((tag) => (
                                                <span key={tag} className="skill-tag">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
