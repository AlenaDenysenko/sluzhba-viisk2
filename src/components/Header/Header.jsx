import styles from './Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header className={`d-flex justify-content-between align-items-center ${styles.header} py-3 px-4`}>
      <a href="/" className={`${styles.logoWeb} text-decoration-none`}>
        Служба <span className={styles.logoStudio}>Військ</span>
      </a>
      <nav className={`${styles.headerNav} d-flex`}>
        <ul className="list-unstyled d-flex gap-4 mb-0">
          <li><a href="#about" className={`nav-link ${styles.navigation}`}>Про сайт</a></li>
          <li><a href="#gallery" className={`nav-link ${styles.navigation}`}>Галерея</a></li>
          <li><a href="#news" className={`nav-link ${styles.navigation}`}>Новини</a></li>
          <li><a href="#contacts" className={`nav-link ${styles.navigation}`}>Контакти</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


