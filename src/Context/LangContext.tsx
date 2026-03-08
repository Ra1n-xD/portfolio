import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { STORAGE_KEYS } from '@/constants/storage';

type Lang = 'en' | 'ru';

interface Stat {
    number: string;
    label: string;
}

interface SkillGroup {
    icon: string;
    title: string;
    tags: string[];
}

export interface WorkItem {
    role: string;
    company: string;
    period: string;
    current: boolean;
    bullets: string[];
}

export interface ProjectItem {
    icon: string;
    title: string;
    period: string;
    desc: string;
    tags: string[];
    link?: string;
}

export interface MentoringProject {
    badge: string | null;
    title: string;
    period: string;
    desc: string;
    tags: string[];
}

interface PriceItem {
    name: string;
    value: string;
}

interface ContactItem {
    icon: string;
    label: string;
    value: string;
    href: string;
}

export interface Translations {
    nav: {
        about: string;
        skills: string;
        experience: string;
        projects: string;
        mentoring: string;
        contact: string;
    };
    hero: {
        badge: string;
        name: string;
        firstName: string;
        lastName: string;
        subtitle: string;
        desc: string;
        cta: string;
        viewProjects: string;
        scroll: string;
    };
    about: {
        label: string;
        title: string;
        p1: ReactNode;
        p2: ReactNode;
        p3: ReactNode;
        stats: Stat[];
    };
    skills: {
        label: string;
        title: string;
        groups: SkillGroup[];
    };
    experience: {
        label: string;
        workTitle: string;
        now: string;
        work: WorkItem[];
    };
    projectCards: {
        label: string;
        title: string;
        items: ProjectItem[];
        mentoring: MentoringProject;
    };
    mentoring: {
        label: string;
        title: string;
        about: string;
        aboutExtra: string;
        helpTitle: string;
        helpItems: string[];
        disclaimer: string;
        priceTitle: string;
        prices: PriceItem[];
        cta: string;
    };
    contact: {
        label: string;
        title: string;
        desc: string;
        items: ContactItem[];
    };
    footer: {
        copy: string;
    };
}

interface LangContextValue {
    lang: Lang;
    toggleLang: () => void;
    t: Translations;
}

const LangContext = createContext<LangContextValue | undefined>(undefined);

const translations: Record<Lang, Translations> = {
    en: {
        nav: {
            about: 'About',
            skills: 'Tech Stack',
            experience: 'Career',
            projects: 'Portfolio',
            mentoring: 'Mentoring',
            contact: 'Contact me'
        },
        hero: {
            badge: 'Available for work',
            name: 'Eduard Chervonenko',
            firstName: 'Eduard',
            lastName: 'Chervonenko',
            subtitle: 'Fullstack Developer',
            desc: '3+ years building web applications with React, TypeScript, Next.js and NestJS. Passionate about clean code, great UX, and continuous learning.',
            cta: 'Get in touch',
            viewProjects: 'View projects',
            scroll: 'scroll'
        },
        about: {
            label: 'About me',
            title: 'Who I am',
            p1: (
                <>
                    I'm a <strong>Fullstack Developer</strong> with 3+ years of experience building modern web applications. My stack centers around React, TypeScript, Next.js on the frontend and
                    NestJS on the backend.
                </>
            ),
            p2: (
                <>
                    I got into development at 16 and never stopped. Since then I've worked across the stack — from building pixel-perfect UIs to architecting backend services and setting up CI/CD
                    pipelines.
                </>
            ),
            p3: (
                <>
                    I graduated with <strong>honors</strong> in Computer Science and Information Technology from Belgorod State University in 2024. Beyond coding, I enjoy mentoring junior developers
                    and establishing good engineering practices in teams.
                </>
            ),
            stats: [
                { number: '3+', label: 'Years of experience' },
                { number: '10+', label: 'Projects shipped' },
                { number: '2', label: 'Teams led' },
                { number: '5+', label: 'Devs mentored' }
            ]
        },
        skills: {
            label: 'Tech Stack',
            title: 'Skills & Technologies',
            groups: [
                { icon: '\u26A1', title: 'Languages', tags: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Go'] },
                { icon: '\uD83C\uDFA8', title: 'Frontend', tags: ['React', 'Next.js', 'Vue.js', 'Redux / RTK', 'Zustand', 'SCSS', 'Ant Design', 'MUI'] },
                { icon: '\uD83D\uDEE0\uFE0F', title: 'Backend', tags: ['NestJS', 'FastAPI', 'Node.js', 'REST API', 'GraphQL'] },
                { icon: '\uD83D\uDDC4\uFE0F', title: 'Databases', tags: ['PostgreSQL', 'MySQL', 'MongoDB'] },
                { icon: '\uD83D\uDE80', title: 'DevOps', tags: ['Docker', 'GitLab CI/CD', 'Linux', 'VPS / VDS'] },
                { icon: '\uD83D\uDD27', title: 'Tools', tags: ['Git', 'ESLint', 'Prettier', 'Vite', 'Webpack', 'Figma'] }
            ]
        },
        experience: {
            label: 'Career',
            workTitle: 'Work Experience',
            now: 'now',
            work: [
                {
                    role: 'Frontend Developer',
                    company: 'Txix',
                    period: 'Feb 2024 — Present',
                    current: true,
                    bullets: [
                        'Refactored legacy projects (migrated from class components and Redux), introduced ESLint and Prettier — improved maintainability and team code style standards.',
                        'Developed frontend for a multi-channel communication service (Email, SMS, Push, social networks, messengers) — unified campaign management interface for the client.',
                        'Built frontend for a meeting and electronic voting management service, replacing paper-based workflows and accelerating decision-making.',
                        'Contributed to an internal UI Kit, unifying visual style and reducing new interface development time via reusable components.'
                    ]
                },
                {
                    role: 'Fullstack Developer',
                    company: 'SG-Group',
                    period: 'Jan 2021 — Jul 2021',
                    current: false,
                    bullets: [
                        'Built fullstack websites and admin panels from scratch for local businesses (pharmacies, stores), addressing regional digitalization needs.',
                        'Integrated third-party services via API on demand, extending product functionality.',
                        'Mentored new developers and introduced Git and Scrum to the company, reducing onboarding time and eliminating code loss.'
                    ]
                }
            ]
        },
        projectCards: {
            label: 'Portfolio',
            title: 'Projects',
            items: [
                {
                    icon: '\uD83D\uDCAC',
                    title: 'ManipulA',
                    period: 'Dec 2025 — Present',
                    desc: 'Telegram bot for a massage salon with booking, scheduling and admin panel. MVP launched in one week with a full team workflow.',
                    tags: ['NestJS', 'React', 'PostgreSQL', 'Docker', 'Telegram Bot API']
                },
                {
                    icon: '\uD83C\uDFB2',
                    title: 'PartyPlay',
                    period: 'Feb 2026 — Present',
                    desc: 'Web platform for board games — play with friends online in real time. Built as a fullstack pet project.',
                    tags: ['React', 'TypeScript', 'NestJS', 'WebSocket'],
                    link: 'https://partyplay.duckdns.org:8444/'
                }
            ],
            mentoring: {
                badge: null,
                title: 'JS Mentoring from Scratch',
                period: 'Jun 2024 — Present',
                desc: '6Seniors — mentoring entry-level developers from zero to junior/middle, building a real fullstack project step by step with best practices and live coding.',
                tags: ['React', 'NestJS', 'TypeScript', 'Live Coding', 'Mentoring']
            }
        },
        mentoring: {
            label: 'Mentoring',
            title: 'My Services',
            about: "I'm a frontend/fullstack developer and I prepare beginners in this field. I've been working professionally since 2021. I hold an honors bachelor's degree in Computer Science and Information Technology.",
            aboutExtra: "I've been mentoring since summer 2024 in an educational project and individually. Several people have already been hired since then.",
            helpTitle: 'What I help with',
            helpItems: [
                'Fundamental JavaScript learning',
                'React and its ecosystem',
                'Code review',
                'Interview preparation',
                'Resume building',
                'Connecting with HRs who reach out to me (when possible)',
                'Other real-life questions (real work cases, procrastination, etc.)'
            ],
            disclaimer: "I do mentoring — helping you learn. I can't promise 100% employment like sketchy courses, especially now when the market is oversaturated with juniors.",
            priceTitle: 'Pricing',
            prices: [
                { name: 'Quick basic questions', value: 'Free' },
                { name: 'Intro call', value: 'Free' },
                { name: 'Group mentoring', value: '750 ₽/hr' },
                { name: '1-on-1 sessions', value: '1500 ₽/hr' }
            ],
            cta: 'Book a session'
        },
        contact: {
            label: 'Contact',
            title: "Let's work together",
            desc: "Open to new opportunities, freelance projects, and interesting collaborations. Don't hesitate to reach out — I usually respond within 24 hours.",
            items: [
                { icon: '\u2709\uFE0F', label: 'Email', value: 'ed.chervonenko@gmail.com', href: 'mailto:ed.chervonenko@gmail.com' },
                { icon: '\u2708\uFE0F', label: 'Telegram', value: '@ra1n_xd', href: 'https://t.me/ra1n_xd' },
                { icon: '\uD83D\uDCE2', label: 'Telegram Channel', value: '@fronted_engineer', href: 'https://t.me/fronted_engineer' },
                { icon: '\uD83D\uDCBC', label: 'LinkedIn', value: 'linkedin.com/in/chervonenko-ed', href: 'https://www.linkedin.com/in/chervonenko-ed' },
                { icon: '\uD83D\uDC19', label: 'GitHub', value: 'github.com/Ra1n-xD', href: 'https://github.com/Ra1n-xD' }
            ]
        },
        footer: {
            copy: 'Eduard Chervonenko'
        }
    },
    ru: {
        nav: {
            about: 'Обо мне',
            skills: 'Стек',
            experience: 'Карьера',
            projects: 'Портфолио',
            mentoring: 'Менторинг',
            contact: 'Связаться'
        },
        hero: {
            badge: 'Открыт к работе',
            name: 'Эдуард Червоненко',
            firstName: 'Эдуард',
            lastName: 'Червоненко',
            subtitle: 'Fullstack-разработчик',
            desc: '3+ года разработки веб-приложений на React, TypeScript, Next.js и NestJS. Ценю чистый код, отличный UX и непрерывное развитие.',
            cta: 'Связаться',
            viewProjects: 'Проекты',
            scroll: 'листай'
        },
        about: {
            label: 'Обо мне',
            title: 'Кто я',
            p1: (
                <>
                    Я — <strong>Fullstack-разработчик</strong> с 3+ годами опыта создания современных веб-приложений. Мой стек: React, TypeScript, Next.js на фронтенде и NestJS на бэкенде.
                </>
            ),
            p2: <>Начал программировать в 16 лет и не останавливался. С тех пор работал на всех уровнях — от pixel-perfect UI до архитектуры бэкенда и настройки CI/CD.</>,
            p3: (
                <>
                    Окончил с <strong>отличием</strong> направление «Информатика и вычислительная техника» в БелГУ в 2024 году. Помимо кода, мне нравится менторить джунов и выстраивать инженерные
                    практики в командах.
                </>
            ),
            stats: [
                { number: '3+', label: 'Лет опыта' },
                { number: '10+', label: 'Проектов' },
                { number: '2', label: 'Команды' },
                { number: '5+', label: 'Менторил' }
            ]
        },
        skills: {
            label: 'Стек',
            title: 'Навыки и технологии',
            groups: [
                { icon: '\u26A1', title: 'Языки', tags: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Go'] },
                { icon: '\uD83C\uDFA8', title: 'Фронтенд', tags: ['React', 'Next.js', 'Vue.js', 'Redux / RTK', 'Zustand', 'SCSS', 'Ant Design', 'MUI'] },
                { icon: '\uD83D\uDEE0\uFE0F', title: 'Бэкенд', tags: ['NestJS', 'FastAPI', 'Node.js', 'REST API', 'GraphQL'] },
                { icon: '\uD83D\uDDC4\uFE0F', title: 'Базы данных', tags: ['PostgreSQL', 'MySQL', 'MongoDB'] },
                { icon: '\uD83D\uDE80', title: 'DevOps', tags: ['Docker', 'GitLab CI/CD', 'Linux', 'VPS / VDS'] },
                { icon: '\uD83D\uDD27', title: 'Инструменты', tags: ['Git', 'ESLint', 'Prettier', 'Vite', 'Webpack', 'Figma'] }
            ]
        },
        experience: {
            label: 'Карьера',
            workTitle: 'Опыт работы',
            now: 'сейчас',
            work: [
                {
                    role: 'Frontend-разработчик',
                    company: 'Txix',
                    period: 'Фев 2024 — н.в.',
                    current: true,
                    bullets: [
                        'Рефакторинг легаси-проектов (миграция с классовых компонентов и Redux), внедрение ESLint и Prettier — улучшение поддерживаемости и стандартов кода.',
                        'Разработка фронтенда сервиса мультиканальных коммуникаций (Email, SMS, Push, соцсети, мессенджеры) — единый интерфейс управления рассылками.',
                        'Создание фронтенда сервиса управления совещаниями и электронным голосованием, заменившего бумажный документооборот.',
                        'Участие в разработке внутреннего UI Kit — унификация визуального стиля и сокращение времени создания интерфейсов.'
                    ]
                },
                {
                    role: 'Fullstack-разработчик',
                    company: 'SG-Group',
                    period: 'Янв 2021 — Июл 2021',
                    current: false,
                    bullets: [
                        'Создание сайтов и админ-панелей с нуля для локальных бизнесов (аптеки, магазины).',
                        'Интеграция сторонних сервисов через API по запросу, расширение функциональности продуктов.',
                        'Менторинг новых разработчиков, внедрение Git и Scrum — сокращение онбординга и устранение потерь кода.'
                    ]
                }
            ]
        },
        projectCards: {
            label: 'Портфолио',
            title: 'Проекты',
            items: [
                {
                    icon: '\uD83D\uDCAC',
                    title: 'ManipulA',
                    period: 'Дек 2025 — н.в.',
                    desc: 'Telegram-бот для массажного салона с бронированием, расписанием и админ-панелью. MVP запущен за неделю.',
                    tags: ['NestJS', 'React', 'PostgreSQL', 'Docker', 'Telegram Bot API']
                },
                {
                    icon: '\uD83C\uDFB2',
                    title: 'PartyPlay',
                    period: 'Фев 2026 — н.в.',
                    desc: 'Веб-платформа для настольных игр — играйте с друзьями онлайн в реальном времени.',
                    tags: ['React', 'TypeScript', 'NestJS', 'WebSocket'],
                    link: 'https://partyplay.duckdns.org:8444/'
                }
            ],
            mentoring: {
                badge: null,
                title: 'JS менторинг с нуля',
                period: 'Июн 2024 — н.в.',
                desc: '6Seniors — менторинг начинающих разработчиков от нуля до junior/middle, пошаговое создание fullstack-проекта с лучшими практиками и live coding.',
                tags: ['React', 'NestJS', 'TypeScript', 'Live Coding', 'Менторинг']
            }
        },
        mentoring: {
            label: 'Менторинг',
            title: 'Мои услуги',
            about: 'Работаю frontend/fullstack разработчиком и занимаюсь подготовкой начинающих в данной сфере. Профессионально работаю с 2021 года. Имею красный диплом бакалавра по направлению «Фундаментальная информатика и информационные технологии».',
            aboutExtra: 'Менторингом занимаюсь с лета 2024 года в одном образовательном проекте и индивидуально. С этого момента уже несколько человек трудоустроились.',
            helpTitle: 'С чем помогаю',
            helpItems: [
                'Фундаментальное изучение JS',
                'Изучение React и его инфраструктуры',
                'Ревью кода',
                'Подготовка к собесам',
                'Составление резюме',
                'Связываю с HR, которые пишут мне с предложением о работе (по возможности)',
                'Прочие жизненные вопросы (реальные рабочие кейсы, проблемы с прокрастинацией и т.д.)'
            ],
            disclaimer: 'Я занимаюсь именно менторингом, то есть помощью с обучением. Обещать 100% трудоустройство как на «говно-курсах» я не могу, особенно сейчас, когда рынок перенасыщен джунами.',
            priceTitle: 'Стоимость',
            prices: [
                { name: 'Быстрые и базовые вопросы', value: 'Бесплатно' },
                { name: 'Ознакомительный созвон', value: 'Бесплатно' },
                { name: 'Групповой менторинг', value: '750 ₽/час' },
                { name: 'Встречи 1 на 1', value: '1500 ₽/час' }
            ],
            cta: 'Записаться'
        },
        contact: {
            label: 'Контакты',
            title: 'Давайте работать вместе',
            desc: 'Открыт к новым возможностям, фрилансу и интересным коллаборациям. Пишите — обычно отвечаю в течение 24 часов.',
            items: [
                { icon: '\u2709\uFE0F', label: 'Email', value: 'ed.chervonenko@gmail.com', href: 'mailto:ed.chervonenko@gmail.com' },
                { icon: '\u2708\uFE0F', label: 'Telegram', value: '@ra1n_xd', href: 'https://t.me/ra1n_xd' },
                { icon: '\uD83D\uDCE2', label: 'Telegram-канал', value: '@fronted_engineer', href: 'https://t.me/fronted_engineer' },
                { icon: '\uD83D\uDCBC', label: 'LinkedIn', value: 'linkedin.com/in/chervonenko-ed', href: 'https://www.linkedin.com/in/chervonenko-ed' },
                { icon: '\uD83D\uDC19', label: 'GitHub', value: 'github.com/Ra1n-xD', href: 'https://github.com/Ra1n-xD' }
            ]
        },
        footer: {
            copy: 'Эдуард Червоненко'
        }
    }
};

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>(() => {
        const saved = localStorage.getItem(STORAGE_KEYS.LANG);
        return saved === 'ru' || saved === 'en' ? saved : 'en';
    });

    const toggleLang = useCallback(() => {
        setLang((prev) => {
            const next = prev === 'en' ? 'ru' : 'en';
            localStorage.setItem(STORAGE_KEYS.LANG, next);
            return next;
        });
    }, []);

    const t = translations[lang];

    return <LangContext.Provider value={{ lang, toggleLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
    const ctx = useContext(LangContext);
    if (!ctx) throw new Error('useLang must be used within LangProvider');
    return ctx;
}
