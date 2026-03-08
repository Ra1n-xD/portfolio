import { Component, type ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false };

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '48px', textAlign: 'center', color: 'var(--t2)' }}>
                    <h2>Something went wrong.</h2>
                    <button onClick={() => this.setState({ hasError: false })} style={{ marginTop: 16, cursor: 'pointer' }}>
                        Try again
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
