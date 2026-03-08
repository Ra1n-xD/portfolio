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

function Contact() {
    const { t } = useLang();

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <motion.span
                        className="section-label"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        style={{ display: 'inline-flex', marginBottom: 16 }}
                    >
                        {t.contact.label}
                    </motion.span>

                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {t.contact.title}
                    </motion.h2>

                    <motion.p
                        className="contact-desc"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {t.contact.desc}
                    </motion.p>

                    <div className="contact-cards">
                        {t.contact.items.map((c, i) => (
                            <motion.a
                                key={c.label}
                                href={c.href}
                                target={c.href.startsWith('mailto') ? undefined : '_blank'}
                                rel="noopener noreferrer"
                                className="contact-card"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i * 0.5}
                            >
                                <span className="contact-card-icon">{c.icon}</span>
                                <div className="contact-card-info">
                                    <div className="contact-card-label">{c.label}</div>
                                    <div className="contact-card-value">{c.value}</div>
                                </div>
                                <span className="contact-card-arrow">›</span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
