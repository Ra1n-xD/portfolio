import { createContext, useContext, useState, useCallback } from 'react';

const LangContext = createContext();

const translations = {
    en: {
        nav: {
            about: 'About',
            skills: 'Skills',
            experience: 'Experience',
            projects: 'Projects',
            contact: 'Contact me',
        },
        hero: {
            badge: 'Available for work',
            subtitle: 'Fullstack Developer',
            desc: '3+ years building web applications with React, TypeScript, Next.js and NestJS. Passionate about clean code, great UX, and continuous learning.',
            cta: 'Get in touch',
            viewProjects: 'View projects',
            scroll: 'scroll',
        },
        about: {
            label: 'About me',
            title: 'Who I am',
            p1: <>I'm a <strong>Fullstack Developer</strong> with 3+ years of experience building modern web applications. My stack centers around React, TypeScript, Next.js on the frontend and NestJS on the backend.</>,
            p2: <>I got into development at 16 and never stopped. Since then I've worked across the stack — from building pixel-perfect UIs to architecting backend services and setting up CI/CD pipelines.</>,
            p3: <>I graduated with <strong>honors</strong> in Computer Science and Information Technology from Belgorod State University in 2024. Beyond coding, I enjoy mentoring junior developers and establishing good engineering practices in teams.</>,
            stats: [
                { number: '3+', label: 'Years of experience' },
                { number: '10+', label: 'Projects shipped' },
                { number: '2', label: 'Teams led' },
                { number: '5+', label: 'Devs mentored' },
            ],
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
                { icon: '\uD83D\uDD27', title: 'Tools', tags: ['Git', 'ESLint', 'Prettier', 'Vite', 'Webpack', 'Figma'] },
            ],
        },
        experience: {
            label: 'Career',
            workTitle: 'Work Experience',
            projectsTitle: 'Projects',
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
                        'Contributed to an internal UI Kit, unifying visual style and reducing new interface development time via reusable components.',
                    ],
                },
                {
                    role: 'Fullstack Developer',
                    company: 'SG-Group',
                    period: 'Jan 2021 — Jul 2021',
                    current: false,
                    bullets: [
                        'Built fullstack websites and admin panels from scratch for local businesses (pharmacies, stores), addressing regional digitalization needs.',
                        'Integrated third-party services via API on demand, extending product functionality.',
                        'Mentored new developers and introduced Git and Scrum to the company, reducing onboarding time and eliminating code loss.',
                    ],
                },
            ],
            projects: [
                {
                    role: 'Team Lead / Fullstack Developer',
                    company: 'ManipulA',
                    period: 'Dec 2025 — Present',
                    current: true,
                    bullets: [
                        'Assembled a development team, established processes (task allocation, code review) — launched MVP Telegram bot for a massage salon in one week.',
                        'Designed architecture, set up CI/CD with Telegram notifications, Docker containerization and log monitoring — reduced release times and accelerated error resolution.',
                        'Implemented Conventional Commits, Semantic Versioning and wrote comprehensive project documentation.',
                    ],
                },
                {
                    role: 'Mentor / Fullstack Developer',
                    company: '6Seniors',
                    period: 'Jun 2024 — Present',
                    current: true,
                    bullets: [
                        'Mentored entry-level developers from zero experience to junior/middle level, created a project knowledge base.',
                        'Developed a student attendance monitoring dashboard for mentors to track progress visually.',
                        'Improved the backend and refactored the platform codebase, enhancing stability, visual design, and UX.',
                    ],
                },
            ],
        },
        projectCards: {
            label: 'Portfolio',
            title: 'Featured Projects',
            items: [
                { icon: '\uD83D\uDCAC', title: 'ManipulA', desc: 'Telegram bot for a massage salon with booking, scheduling and admin panel. MVP launched in one week with a full team workflow.', tags: ['NestJS', 'React', 'PostgreSQL', 'Docker', 'Telegram Bot API'] },
                { icon: '\uD83D\uDCCA', title: '6Seniors Platform', desc: 'Educational platform with student attendance monitoring dashboard. Mentored developers from zero to junior/middle level.', tags: ['React', 'TypeScript', 'NestJS', 'PostgreSQL'] },
                { icon: '\uD83D\uDCE7', title: 'Multi-Channel Comms', desc: 'Frontend for a communication service supporting Email, SMS, Push, social networks and messengers with unified campaign management.', tags: ['React', 'TypeScript', 'Ant Design', 'Redux RTK'] },
                { icon: '\uD83D\uDDF3\uFE0F', title: 'e-Voting Service', desc: 'Meeting and electronic voting management system replacing paper-based workflows, built for an enterprise client.', tags: ['React', 'TypeScript', 'NestJS', 'REST API'] },
            ],
            mentoring: {
                badge: null,
                title: 'JS Mentoring from Scratch',
                desc: 'Stream recording where I build a real fullstack project step by step, share best practices and answer questions from the community.',
                tags: ['React', 'NestJS', 'TypeScript', 'Live Coding', 'Mentoring'],
            },
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
                { icon: '\uD83D\uDC19', label: 'GitHub', value: 'github.com/Ra1n-xD', href: 'https://github.com/Ra1n-xD' },
            ],
        },
        footer: {
            copy: 'Eduard Chervonenko',
        },
    },
    ru: {
        nav: {
            about: 'Обо мне',
            skills: 'Навыки',
            experience: 'Опыт',
            projects: 'Проекты',
            contact: 'Связаться',
        },
        hero: {
            badge: 'Открыт к работе',
            subtitle: 'Fullstack-разработчик',
            desc: '3+ года разработки веб-приложений на React, TypeScript, Next.js и NestJS. Ценю чистый код, отличный UX и непрерывное развитие.',
            cta: 'Связаться',
            viewProjects: 'Проекты',
            scroll: 'листай',
        },
        about: {
            label: 'Обо мне',
            title: 'Кто я',
            p1: <>Я — <strong>Fullstack-разработчик</strong> с 3+ годами опыта создания современных веб-приложений. Мой стек: React, TypeScript, Next.js на фронтенде и NestJS на бэкенде.</>,
            p2: <>Начал программировать в 16 лет и не останавливался. С тех пор работал на всех уровнях — от pixel-perfect UI до архитектуры бэкенда и настройки CI/CD.</>,
            p3: <>Окончил с <strong>отличием</strong> направление «Информатика и вычислительная техника» в БелГУ в 2024 году. Помимо кода, мне нравится менторить джунов и выстраивать инженерные практики в командах.</>,
            stats: [
                { number: '3+', label: 'Лет опыта' },
                { number: '10+', label: 'Проектов' },
                { number: '2', label: 'Команды' },
                { number: '5+', label: 'Менторил' },
            ],
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
                { icon: '\uD83D\uDD27', title: 'Инструменты', tags: ['Git', 'ESLint', 'Prettier', 'Vite', 'Webpack', 'Figma'] },
            ],
        },
        experience: {
            label: 'Карьера',
            workTitle: 'Опыт работы',
            projectsTitle: 'Проекты',
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
                        'Участие в разработке внутреннего UI Kit — унификация визуального стиля и сокращение времени создания интерфейсов.',
                    ],
                },
                {
                    role: 'Fullstack-разработчик',
                    company: 'SG-Group',
                    period: 'Янв 2021 — Июл 2021',
                    current: false,
                    bullets: [
                        'Создание сайтов и админ-панелей с нуля для локальных бизнесов (аптеки, магазины).',
                        'Интеграция сторонних сервисов через API по запросу, расширение функциональности продуктов.',
                        'Менторинг новых разработчиков, внедрение Git и Scrum — сокращение онбординга и устранение потерь кода.',
                    ],
                },
            ],
            projects: [
                {
                    role: 'Тимлид / Fullstack-разработчик',
                    company: 'ManipulA',
                    period: 'Дек 2025 — н.в.',
                    current: true,
                    bullets: [
                        'Сформировал команду, выстроил процессы (распределение задач, код-ревью) — запуск MVP Telegram-бота для массажного салона за неделю.',
                        'Спроектировал архитектуру, настроил CI/CD с уведомлениями в Telegram, Docker-контейнеризацию и мониторинг логов.',
                        'Внедрил Conventional Commits, Semantic Versioning и написал документацию проекта.',
                    ],
                },
                {
                    role: 'Ментор / Fullstack-разработчик',
                    company: '6Seniors',
                    period: 'Июн 2024 — н.в.',
                    current: true,
                    bullets: [
                        'Менторинг начинающих разработчиков от нуля до junior/middle, создание базы знаний проекта.',
                        'Разработка дашборда мониторинга посещаемости студентов для менторов.',
                        'Улучшение бэкенда и рефакторинг платформы — повышение стабильности, дизайна и UX.',
                    ],
                },
            ],
        },
        projectCards: {
            label: 'Портфолио',
            title: 'Избранные проекты',
            items: [
                { icon: '\uD83D\uDCAC', title: 'ManipulA', desc: 'Telegram-бот для массажного салона с бронированием, расписанием и админ-панелью. MVP запущен за неделю.', tags: ['NestJS', 'React', 'PostgreSQL', 'Docker', 'Telegram Bot API'] },
                { icon: '\uD83D\uDCCA', title: '6Seniors Platform', desc: 'Образовательная платформа с дашбордом посещаемости. Менторинг разработчиков от нуля до junior/middle.', tags: ['React', 'TypeScript', 'NestJS', 'PostgreSQL'] },
                { icon: '\uD83D\uDCE7', title: 'Мультиканальные коммуникации', desc: 'Фронтенд сервиса коммуникаций: Email, SMS, Push, соцсети, мессенджеры — единый интерфейс управления рассылками.', tags: ['React', 'TypeScript', 'Ant Design', 'Redux RTK'] },
                { icon: '\uD83D\uDDF3\uFE0F', title: 'Сервис голосования', desc: 'Система управления совещаниями и электронным голосованием, заменившая бумажный документооборот.', tags: ['React', 'TypeScript', 'NestJS', 'REST API'] },
            ],
            mentoring: {
                badge: null,
                title: 'JS менторинг с нуля',
                desc: 'Запись стрима, на котором я строю реальный fullstack-проект пошагово, делюсь практиками и отвечаю на вопросы сообщества.',
                tags: ['React', 'NestJS', 'TypeScript', 'Live Coding', 'Менторинг'],
            },
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
                { icon: '\uD83D\uDC19', label: 'GitHub', value: 'github.com/Ra1n-xD', href: 'https://github.com/Ra1n-xD' },
            ],
        },
        footer: {
            copy: 'Эдуард Червоненко',
        },
    },
};

export function LangProvider({ children }) {
    const [lang, setLang] = useState(() => {
        const saved = localStorage.getItem('portfolio-lang');
        return saved === 'ru' || saved === 'en' ? saved : 'en';
    });

    const toggleLang = useCallback(() => {
        setLang((prev) => {
            const next = prev === 'en' ? 'ru' : 'en';
            localStorage.setItem('portfolio-lang', next);
            return next;
        });
    }, []);

    const t = translations[lang];

    return (
        <LangContext.Provider value={{ lang, toggleLang, t }}>
            {children}
        </LangContext.Provider>
    );
}

export function useLang() {
    return useContext(LangContext);
}
