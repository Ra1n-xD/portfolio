import { useLang } from '../../context/LangContext';

function Footer() {
    const { t } = useLang();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <span className="footer-copy">
                        &copy; {new Date().getFullYear()} {t.footer.copy}
                    </span>
                    <div className="footer-links">
                        <a href="https://github.com/Ra1n-xD" target="_blank" rel="noopener noreferrer" className="footer-link">
                            GitHub
                        </a>
                        <a href="https://t.me/ra1n_xd" target="_blank" rel="noopener noreferrer" className="footer-link">
                            Telegram
                        </a>
                        <a href="https://t.me/fronted_engineer" target="_blank" rel="noopener noreferrer" className="footer-link">
                            TG Channel
                        </a>
                        <a href="https://www.linkedin.com/in/chervonenko-ed" target="_blank" rel="noopener noreferrer" className="footer-link">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
