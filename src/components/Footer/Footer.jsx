// Footer.js
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBoxLogo}>
        <a href="./index.html" className={styles.logoWebFooter}>
          Служба<span className={styles.logoStudioFooter}>Військ</span>
        </a>
        <p className={styles.textFooter}>
          Increase the flow of customers and sales for your business with digital marketing & growth solutions.
        </p>
      </div>
      <div className={styles.socialFooterDiv}>
        <p className={styles.socialFooterText}>Social media</p>
        <ul className={styles.socialFooter}>
          <li className={styles.socialIconLiFooter}>
            <a href="https://www.instagram.com/" className={styles.socialIconHrefFooter}>
              <svg className={styles.iconsSocialFooter} width="24" height="24">
                <use href="./images/icons.svg#icon-instagram" />
              </svg>
            </a>
          </li>
          <li className={styles.socialIconLiFooter}>
            <a href="https://ua.linkedin.com/" className={styles.socialIconHrefFooter}>
              <svg className={styles.iconsSocialFooter} width="24" height="24">
                <use href="./images/icons.svg#icon-twitter" />
              </svg>
            </a>
          </li>
          <li className={styles.socialIconLiFooter}>
            <a href="https://uk-ua.facebook.com/" className={styles.socialIconHrefFooter}>
              <svg className={styles.iconsSocialFooter} width="24" height="24">
                <use href="./images/icons.svg#icon-facebook" />
              </svg>
            </a>
          </li>
          <li className={styles.socialIconLiFooter}>
            <a href="https://uk-ua.facebook.com/" className={styles.socialIconHrefFooter}>
              <svg className={styles.iconsSocialFooter} width="24" height="24">
                <use href="./images/icons.svg#icon-linkedin" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.formFooterDiv}>
        <p className={styles.subscribe}>Subscribe</p>
        <form className={styles.formFooter}>
          <label className={styles.formFooterLabel}>
            <input className={styles.inputFooter} name="email" type="email" placeholder="E-mail" />
          </label>
          <button className={styles.formFooterButton} type="submit">
            Subscribe
            <svg className={styles.iconFormFooter} width="24" height="24">
              <use href="./images/icons.svg#icon-frame" />
            </svg>
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;


