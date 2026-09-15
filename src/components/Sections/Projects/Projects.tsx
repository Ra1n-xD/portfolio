import './Projects.css';
import React from 'react';
import { motion } from 'framer-motion';
import { useLang, type MentoringProject, type ProjectItem } from '@/Context/LangContext';
import { fadeUp } from '@/constants/animations';

const YT_VIDEO_ID = 'W2y0QlShyd0';
const YT_URL = `https://www.youtube.com/live/${YT_VIDEO_ID}?si=vIflkj8zBXXuKTfH`;
const YT_THUMB = `https://img.youtube.com/vi/${YT_VIDEO_ID}/maxresdefault.jpg`;

const handleGlassMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
};

interface VideoCardProps {
    project: Omit<MentoringProject, 'badge'> & { badge?: string | null };
    link: string;
    thumbnail: string;
    index: number;
}

const VideoCard = ({ project, link, thumbnail, index }: VideoCardProps) => (
    <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card mentoring-card"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={index * 0.5}
    >
        <div className="mentoring-thumb-wrap">
            <img src={thumbnail} alt={project.title} className="mentoring-thumb" loading="lazy" />
            <div className="mentoring-play">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                </svg>
            </div>
        </div>
        <div className="mentoring-info">
            {project.badge && <div className="mentoring-badge">{project.badge}</div>}
            <div className="mentoring-header">
                <div className="project-card-title">{project.title}</div>
                {project.period && <span className="project-card-period">{project.period}</span>}
            </div>
            {project.role && <div className="project-card-role">{project.role}</div>}
            <p className="project-card-desc">{project.desc}</p>
            <div className="project-card-tags">
                {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.a>
);

const ProjectCard = ({ project, index }: { project: ProjectItem; index: number }) => {
    if (project.videoId && project.link) {
        return <VideoCard project={project} link={project.link} thumbnail={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`} index={index} />;
    }

    const content = (
        <>
            <div className="project-card-header">
                <span className="project-icon">{project.icon}</span>
                {project.period && <span className="project-card-period">{project.period}</span>}
            </div>
            <div className="project-card-title">{project.title}</div>
            {project.role && <div className="project-card-role">{project.role}</div>}
            <p className="project-card-desc">{project.desc}</p>
            <div className="project-card-tags">
                {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">
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
        custom: index * 0.5,
        onMouseMove: handleGlassMove
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
                        <ProjectCard key={i} project={project} index={i} />
                    ))}

                    <VideoCard project={t.projectCards.mentoring} link={YT_URL} thumbnail={YT_THUMB} index={t.projectCards.items.length} />
                </div>
            </div>
        </section>
    );
}

export default Projects;
