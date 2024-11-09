// Header.js
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.divBox}>
        <nav className={styles.headerNav}>
          <a href="./index.html" className={styles.logoWeb}>
            <img
              src="./images/zsu-logo.png"
              width="30"
              height="30"
              alt="Служба Військ Логотип"
              className={styles.logoImage}
            />
            Служба<span className={styles.logoStudio}>Військ</span>
          </a>
          <button className={styles.menuBtn} type="button" aria-label="Open menu button">
            <svg className={styles.menuBtnIcon} width="24" height="24">
              <use href="./images/icons.svg#icon-menu-btn"></use>
            </svg>
          </button>
          <ul className={styles.listHeader}>
            <li><a className={styles.navigation} href="./index.html">Новини</a></li>
            <li><a className={styles.navigation} href="Portfolio">Галерея</a></li>
            <li><a className={styles.navigation} href="Contacts">Контакти</a></li>
            <li><a className={styles.navigation} href="Contacts">Про сайт</a></li>
          </ul>
        </nav>
        <address className={styles.address} id="contacts">
          <ul className={styles.listContacts}>
            <li>
              <a className={styles.addressContacts} href="mailto:info@sluzhba.com">info@sluzhba.com</a>
            </li>
            <li>
              <a className={styles.addressContacts} href="tel:+110001111111">+38 (000) 111-11-11</a>
            </li>
          </ul>
        </address>
      </div>
    </header>
  );
}

export default Header;

