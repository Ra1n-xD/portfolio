import { LangProvider } from '@/Context/LangContext';
import { ThemeProvider } from '@/Context/ThemeContext';
import { ModalProvider } from '@/Context/ModalContext';
import ErrorBoundary from '@/components/ErrorBoundary';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Sections/Hero';
import About from '@/components/Sections/About';
import Experience from '@/components/Sections/Experience';
import Projects from '@/components/Sections/Projects';
import Mentoring from '@/components/Sections/Mentoring';
import ParticleCanvas from '@/components/Background/ParticleCanvas';
import SectionDivider from '@/components/SectionDivider';

import '@/styles/main.css';

function App() {
    return (
        <ThemeProvider>
            <LangProvider>
                <ModalProvider>
                    <ErrorBoundary>
                        <div className="App">
                            <ParticleCanvas />
                            <Navbar />
                            <main>
                                <Hero />
                                <SectionDivider variant="glow" />
                                <About />
                                <SectionDivider variant="glow" />
                                <Experience />
                                <SectionDivider variant="glow" />
                                <Projects />
                                <SectionDivider variant="glow" />
                                <Mentoring />
                            </main>
                        </div>
                    </ErrorBoundary>
                </ModalProvider>
            </LangProvider>
        </ThemeProvider>
    );
}

export default App;
