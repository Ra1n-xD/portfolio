import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { useLang, type WorkItem } from '../../context/LangContext';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }
    })
};

interface TimelineCardProps {
    item: WorkItem;
    index: number;
    inView: boolean;
    nowLabel: string;
}

function TimelineCard({ item, index, inView, nowLabel }: TimelineCardProps) {
    return (
        <motion.div className="timeline-item" variants={fadeUp} custom={index} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <div>
                <div className="timeline-dot">
                    <div className="timeline-dot-inner" />
                </div>
            </div>
            <div className="timeline-card">
                <div className="timeline-header">
                    <span className="timeline-role">
                        {item.role}
                        {item.current && <span className="timeline-badge">{nowLabel}</span>}
                    </span>
                    <span className="timeline-period">{item.period}</span>
                </div>
                <div className="timeline-company">{item.company}</div>
                <ul className="timeline-list">
                    {item.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

function Experience() {
    const [workRef, workInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
    const { t } = useLang();

    return (
        <section className="experience section" id="experience">
            <div className="container">
                <motion.span className="section-label" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    {t.experience.label}
                </motion.span>
                <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                    {t.experience.workTitle}
                </motion.h2>

                <div className="timeline" ref={workRef}>
                    {t.experience.work.map((item, i) => (
                        <TimelineCard key={i} item={item} index={i + 1} inView={workInView} nowLabel={t.experience.now} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
