import './Experience.css';
import { motion } from 'framer-motion';
import { useLang, type WorkItem } from '@/Context/LangContext';
import { fadeUp } from '@/constants/animations';

interface TimelineCardProps {
    item: WorkItem;
    index: number;
    nowLabel: string;
}

const TimelineCard = ({ item, index, nowLabel }: TimelineCardProps) => (
    <motion.div className="timeline-item" variants={fadeUp} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }}>
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
                {item.bullets.map((b) => (
                    <li key={b.slice(0, 40)}>{b}</li>
                ))}
            </ul>
        </div>
    </motion.div>
);

function Experience() {
    const { t } = useLang();

    return (
        <section className="experience section" id="experience">
            <div className="container">
                <motion.span className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
                    {t.experience.label}
                </motion.span>
                <motion.h2 className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
                    {t.experience.workTitle}
                </motion.h2>

                <div className="timeline">
                    {t.experience.work.map((item) => (
                        <TimelineCard key={item.company} item={item} index={2} nowLabel={t.experience.now} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
