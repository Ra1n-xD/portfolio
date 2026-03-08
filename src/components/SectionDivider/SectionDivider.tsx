import './SectionDivider.css';

interface Props {
    variant?: 'wave' | 'glow' | 'dots';
    flip?: boolean;
}

export default function SectionDivider({ variant = 'glow', flip }: Props) {
    if (variant === 'wave') {
        return (
            <div className={`section-divider wave${flip ? ' flip' : ''}`} aria-hidden="true">
                <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
                    <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z" />
                </svg>
            </div>
        );
    }

    if (variant === 'dots') {
        return (
            <div className="section-divider dots" aria-hidden="true">
                <span />
                <span />
                <span />
            </div>
        );
    }

    // glow (default)
    return <div className="section-divider glow" aria-hidden="true" />;
}
