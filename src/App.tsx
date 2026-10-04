import { LangProvider } from '@/Context/LangContext';
import { ThemeProvider } from '@/Context/ThemeContext';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import FrontEdOS from '@/components/FrontEdOS/FrontEdOS';

import '@/styles/main.css';

function App() {
    return (
        <ThemeProvider>
            <LangProvider>
                <ErrorBoundary>
                    <FrontEdOS />
                </ErrorBoundary>
            </LangProvider>
        </ThemeProvider>
    );
}

export default App;
