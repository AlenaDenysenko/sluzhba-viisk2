import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header className={`d-flex justify-content-between align-items-center ${styles.header} py-3 px-4`}>
      <Link to="/" className={`${styles.logoWeb} text-decoration-none`}>
        <img className="logo-image" src="/public/images/zsu-logo.png" width="30" height="30" alt="Служба Військ Логотип" ></img>
        Служба <span className={styles.logoStudio}>Військ</span>
      </Link>
      <nav className={`${styles.headerNav} d-flex`}>
        <ul className="list-unstyled d-flex gap-4 mb-0">
          <li><a href="#about" className={`nav-link ${styles.navigation}`}>Про сайт</a></li>
          <li><a href="#gallery" className={`nav-link ${styles.navigation}`}>Галерея</a></li>
          <li><a href="#news" className={`nav-link ${styles.navigation}`}>Новини</a></li>
          <li><Link to="/contacts" className={`nav-link ${styles.navigation}`}>Контакти</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;



