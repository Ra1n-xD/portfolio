import './Projects.css';
import { motion } from 'framer-motion';
import { useLang, type ProjectItem } from '@/Context/LangContext';
import { fadeUp } from '@/constants/animations';

const YT_VIDEO_ID = 'W2y0QlShyd0';
const YT_URL = `https://www.youtube.com/live/${YT_VIDEO_ID}?si=vIflkj8zBXXuKTfH`;
const YT_THUMB = `https://img.youtube.com/vi/${YT_VIDEO_ID}/maxresdefault.jpg`;

const ProjectCard = ({ project, index }: { project: ProjectItem; index: number }) => {
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

    const props = {
        className: 'project-card',
        variants: fadeUp,
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: { once: true },
        custom: index * 0.5
    };

    if (project.link) {
        return (
            <motion.a href={project.link} target="_blank" rel="noopener noreferrer" {...props}>
                {content}
            </motion.a>
        );
    }

    return <motion.div {...props}>{content}</motion.div>;
};

function Projects() {
    const { t } = useLang();

    return (
        <section className="section" id="projects">
            <div className="container">
                <motion.span className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
                    {t.projectCards.label}
                </motion.span>
                <motion.h2 className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
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
