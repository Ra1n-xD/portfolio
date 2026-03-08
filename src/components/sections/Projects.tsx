import { motion } from 'framer-motion';
import { useLang, type ProjectItem } from '../../context/LangContext';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }
    })
};

const YT_VIDEO_ID = 'W2y0QlShyd0';
const YT_URL = `https://www.youtube.com/live/${YT_VIDEO_ID}?si=vIflkj8zBXXuKTfH`;
const YT_THUMB = `https://img.youtube.com/vi/${YT_VIDEO_ID}/maxresdefault.jpg`;

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
    const content = (
        <>
            <div className="project-card-header">
                <span className="project-icon">{project.icon}</span>
                {project.period && <span className="project-card-period">{project.period}</span>}
            </div>
            <div className="project-card-title">{project.title}</div>
            <p className="project-card-desc">{project.desc}</p>
            <div className="project-card-tags">
                {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                        {tag}
                    </span>
                ))}
            </div>
        </>
    );

    if (project.link) {
        return (
            <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index * 0.5}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.div key={project.title} className="project-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index * 0.5}>
            {content}
        </motion.div>
    );
}

function Projects() {
    const { t } = useLang();

    return (
        <section className="section" id="projects">
            <div className="container">
                <motion.span className="section-label" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    {t.projectCards.label}
                </motion.span>
                <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                    {t.projectCards.title}
                </motion.h2>

                <div className="projects-grid">
                    {t.projectCards.items.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}

                    <motion.a
                        href={YT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card mentoring-card"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={t.projectCards.items.length * 0.5}
                    >
                        <div className="mentoring-thumb-wrap">
                            <img src={YT_THUMB} alt={t.projectCards.mentoring.title} className="mentoring-thumb" loading="lazy" />
                            <div className="mentoring-play">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                        <div className="mentoring-info">
                            {t.projectCards.mentoring.badge && <div className="mentoring-badge">{t.projectCards.mentoring.badge}</div>}
                            <div className="mentoring-header">
                                <div className="project-card-title">{t.projectCards.mentoring.title}</div>
                                {t.projectCards.mentoring.period && <span className="project-card-period">{t.projectCards.mentoring.period}</span>}
                            </div>
                            <p className="project-card-desc">{t.projectCards.mentoring.desc}</p>
                            <div className="project-card-tags">
                                {t.projectCards.mentoring.tags.map((tag) => (
                                    <span key={tag} className="project-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
