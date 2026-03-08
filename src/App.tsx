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
                                <About />
                                <Experience />
                                <Projects />
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
