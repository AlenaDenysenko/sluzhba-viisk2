import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={`bg-dark text-light py-5 ${styles.footer}`}>
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        <div className={styles.footerBoxLogo}>
          <a href="./index.html" className={`navbar-brand text-uppercase fw-bold ${styles.logoWebFooter}`}>
            Служба<span className={styles.logoStudioFooter}>Військ</span>
          </a>
          <p className={`text-muted mt-2 ${styles.textFooter}`}>
            Increase the flow of customers and sales for your business with digital marketing & growth solutions.
          </p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <p className={`mb-2 ${styles.socialFooterText}`}>Social media</p>
          <ul className={`list-inline ${styles.socialFooter}`}>
            <li className="list-inline-item">
              <a href="https://www.instagram.com/" className={`btn btn-outline-light rounded-circle ${styles.socialIconHrefFooter}`} aria-label="Instagram">
                <svg className={styles.iconsSocialFooter} width="24" height="24">
                  <use href="./images/icons.svg#icon-instagram" />
                </svg>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://ua.linkedin.com/" className={`btn btn-outline-light rounded-circle ${styles.socialIconHrefFooter}`} aria-label="LinkedIn">
                <svg className={styles.iconsSocialFooter} width="24" height="24">
                  <use href="./images/icons.svg#icon-twitter" />
                </svg>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://uk-ua.facebook.com/" className={`btn btn-outline-light rounded-circle ${styles.socialIconHrefFooter}`} aria-label="Facebook">
                <svg className={styles.iconsSocialFooter} width="24" height="24">
                  <use href="./images/icons.svg#icon-facebook" />
                </svg>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://uk-ua.facebook.com/" className={`btn btn-outline-light rounded-circle ${styles.socialIconHrefFooter}`} aria-label="LinkedIn">
                <svg className={styles.iconsSocialFooter} width="24" height="24">
                  <use href="./images/icons.svg#icon-linkedin" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container d-flex flex-column align-items-center">
        <p className={`fw-bold mb-3 ${styles.subscribe}`}>Subscribe</p>
        <form className={`d-flex flex-column flex-md-row align-items-center ${styles.formFooter}`}>
          <label className="w-100 mb-2 mb-md-0">
            <input className={`form-control mb-2 mb-md-0 ${styles.inputFooter}`} name="email" type="email" placeholder="E-mail" />
          </label>
          <button className={`btn btn-primary ms-md-2 ${styles.formFooterButton}`} type="submit">
            Subscribe
            <svg className={`ms-2 ${styles.iconFormFooter}`} width="24" height="24">
              <use href="./images/icons.svg#icon-frame" />
            </svg>
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;



