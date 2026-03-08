import { motion } from 'framer-motion';
import { useLang } from '../../context/LangContext';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
    }),
};

function Projects() {
    const { t } = useLang();

    return (
        <section className="section" id="projects">
            <div className="container">
                <motion.span
                    className="section-label"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {t.projectCards.label}
                </motion.span>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {t.projectCards.title}
                </motion.h2>

                <div className="projects-grid">
                    {t.projectCards.items.map((project, i) => (
                        <motion.div
                            key={project.title}
                            className="project-card"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i * 0.5}
                        >
                            <div className="project-card-header">
                                <span className="project-icon">{project.icon}</span>
                            </div>

                            <div className="project-card-title">{project.title}</div>
                            <p className="project-card-desc">{project.desc}</p>

                            <div className="project-card-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="project-tag">{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
