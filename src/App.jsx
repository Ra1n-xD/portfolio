import { LangProvider } from './context/LangContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/navbar/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/footer/Footer';

import './styles/main.css';

function App() {
    return (
        <ThemeProvider>
            <LangProvider>
                <div className="App">
                    <Navbar />
                    <main>
                        <Hero />
                        <About />
                        <Skills />
                        <Experience />
                        <Projects />
                        <Contact />
                    </main>
                    <Footer />
                </div>
            </LangProvider>
        </ThemeProvider>
    );
}

export default App;
