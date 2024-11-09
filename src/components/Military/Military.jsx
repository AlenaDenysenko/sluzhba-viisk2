import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Military.module.css';

function Military() {
  return (
    <section className={`py-5 ${styles.teamSection}`}>
      <div className="container">
        <h2 className={`text-center mb-5 ${styles.teamHeading}`}>Види, роди військ (сил)</h2>
        <ul className="row list-unstyled">
          <li className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className={`card h-100 ${styles.teamItem}`}>
              <img src="./images/sukhoputni-viiska.png" className="card-img-top" alt="Сухопутні війська" />
              <div className={`card-body text-center ${styles.divTeam}`}>
                <h3 className={styles.teamNames}>Сухопутні війська</h3>
                <p className={styles.paragraphTeam}>За Україну! За її волю!</p>
                <ul className={`d-flex justify-content-center list-unstyled ${styles.socialTeam}`}>
                  <li className={styles.socialIconLi}><a href="https://www.instagram.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-instagram" />
                    </svg></a></li>
                  <li className={styles.socialIconLi}><a href="https://ua.linkedin.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-twitter" />
                    </svg></a></li>
                  <li className={styles.socialIconLi}><a href="https://uk-ua.facebook.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-facebook" />
                    </svg></a></li>
                  <li className={styles.socialIconLi}><a href="https://uk-ua.facebook.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-linkedin" />
                    </svg></a></li>
                </ul>
              </div>
            </div>
          </li>
          <li className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className={`card h-100 ${styles.teamItem}`}>
              <img src="./images/povitriani-syly.png" className="card-img-top" alt="Повітряні сили" />
              <div className={`card-body text-center ${styles.divTeam}`}>
                <h3 className={styles.teamNames}>Повітряні сили</h3>
                <p className={styles.paragraphTeam}>Небо під замком!</p>
                <ul className={`d-flex justify-content-center list-unstyled ${styles.socialTeam}`}>
                  <li className={styles.socialIconLi}><a href="https://www.instagram.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-instagram" />
                    </svg></a></li>
                  <li className={styles.socialIconLi}><a href="https://ua.linkedin.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-twitter" />
                    </svg></a></li>
                  <li className={styles.socialIconLi}><a href="https://uk-ua.facebook.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-facebook" />
                    </svg></a></li>
                  <li className={styles.socialIconLi}><a href="https://uk-ua.facebook.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-linkedin" />
                    </svg></a></li>
                </ul>
              </div>
            </div>
          </li>
          <li className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className={`card h-100 ${styles.teamItem}`}>
              <img src="./images/viiskovo-morski-syly.png" className="card-img-top" alt="Військово-морські сили" />
              <div className={`card-body text-center ${styles.divTeam}`}>
                <h3 className={styles.teamNames}>Військово-морські сили</h3>
                <p className={styles.paragraphTeam}>Вірність, Мужність, Сила!</p>
                <ul className={`d-flex justify-content-center list-unstyled ${styles.socialTeam}`}>
                  <li className={styles.socialIconLi}><a href="https://www.instagram.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-instagram" />
                    </svg></a></li>
                  <li className={styles.socialIconLi}><a href="https://ua.linkedin.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-twitter" />
                    </svg></a></li>
                  <li className={styles.socialIconLi}><a href="https://uk-ua.facebook.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-facebook" />
                    </svg></a></li>
                  <li className={styles.socialIconLi}><a href="https://uk-ua.facebook.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-linkedin" />
                    </svg></a></li>
                </ul>
              </div>
            </div>
          </li>
          <li className="col-lg-3 col-md-4 col-sm-6 mb-4">
  <div className={`card h-100 ${styles.teamItem}`}>
    <img src="./images/desantno-shturmovi-viiska.png" className="card-img-top" alt="Десантно-штурмові війська" loading="lazy" />
    <div className={`card-body text-center ${styles.divTeam}`}>
      <h3 className={styles.teamNames}>Десантно-штурмові війська</h3>
      <p className={styles.paragraphTeam}>Завжди перші!</p>
      <ul className={`d-flex justify-content-center list-unstyled ${styles.socialTeam}`}>
        <li className={styles.socialIconLi}><a href="https://www.instagram.com/" className={styles.socialIconHref}>
          <svg className={styles.iconsSocial} width="16" height="16">
            <use href="./images/icons.svg#icon-instagram" />
          </svg></a></li>
        <li className={styles.socialIconLi}><a href="https://ua.linkedin.com/" className={styles.socialIconHref}>
          <svg className={styles.iconsSocial} width="16" height="16">
            <use href="./images/icons.svg#icon-twitter" />
          </svg></a></li>
        <li className={styles.socialIconLi}><a href="https://uk-ua.facebook.com/" className={styles.socialIconHref}>
          <svg className={styles.iconsSocial} width="16" height="16">
            <use href="./images/icons.svg#icon-facebook" />
          </svg></a></li>
        <li className={styles.socialIconLi}><a href="https://uk-ua.facebook.com/" className={styles.socialIconHref}>
          <svg className={styles.iconsSocial} width="16" height="16">
            <use href="./images/icons.svg#icon-linkedin" />
          </svg></a></li>
      </ul>
    </div>
  </div>
</li>
        
        
          <li className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className={`card h-100 ${styles.teamItem}`}>
              <img src="./images/syly-spetsialnykh-operatsii.png" className="card-img-top" alt="Сили спеціальних операцій" loading="lazy" />
              <div className={`card-body text-center ${styles.divTeam}`}>
                <h3 className={styles.teamNames}>Сили спеціальних операцій</h3>
                <p className={styles.paragraphTeam}>Іду на ви!</p>
                <ul className={`d-flex justify-content-center list-unstyled ${styles.socialTeam}`}>
                  <li className={styles.socialIconLi}><a href="https://www.instagram.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-instagram" />
                    </svg></a></li>
                  <li className={styles.socialIconLi}><a href="https://ua.linkedin.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-twitter" />
                    </svg></a></li>
                  <li className={styles.socialIconLi}><a href="https://uk-ua.facebook.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-facebook" />
                    </svg></a></li>
                  <li className={styles.socialIconLi}><a href="https://uk-ua.facebook.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-linkedin" />
                    </svg></a></li>
                </ul>
              </div>
            </div>
          </li>
          <li className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className={`card h-100 ${styles.teamItem}`}>
              <img src="./images/syly-terytorialnoi-oborony.png" className="card-img-top" alt="Сили територіальної оборони" loading="lazy" />
              <div className={`card-body text-center ${styles.divTeam}`}>
                <h3 className={styles.teamNames}>Сили територіальної оборони</h3>
                <p className={styles.paragraphTeam}>Готові до спротиву!</p>
                <ul className={`d-flex justify-content-center list-unstyled ${styles.socialTeam}`}>
                  <li className={styles.socialIconLi}><a href="https://www.instagram.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-instagram" />
                    </svg></a></li>
                  <li className={styles.socialIconLi}><a href="https://ua.linkedin.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-twitter" />
                    </svg></a></li>
                  <li className={styles.socialIconLi}><a href="https://uk-ua.facebook.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-facebook" />
                    </svg></a></li>
                  <li className={styles.socialIconLi}><a href="https://uk-ua.facebook.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-linkedin" />
                    </svg></a></li>
                </ul>
              </div>
            </div>
          </li>
          <li className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className={`card h-100 ${styles.teamItem}`}>
              <img src="./images/Sbs_army_logo.svg.png" className="card-img-top" alt="Сили безпілотних систем" loading="lazy" />
              <div className={`card-body text-center ${styles.divTeam}`}>
                <h3 className={styles.teamNames}>Сили безпілотних систем</h3>
                <p className={styles.paragraphTeam}>Сталева ластівка</p>
                <ul className={`d-flex justify-content-center list-unstyled ${styles.socialTeam}`}>
                  <li className={styles.socialIconLi}><a href="https://www.instagram.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-instagram" />
                    </svg></a></li>
                  <li className={styles.socialIconLi}><a href="https://ua.linkedin.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-twitter" />
                    </svg></a></li>
                  <li className={styles.socialIconLi}><a href="https://uk-ua.facebook.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-facebook" />
                    </svg></a></li>
                  <li className={styles.socialIconLi}><a href="https://uk-ua.facebook.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-linkedin" />
                    </svg></a></li>
                </ul>
              </div>
            </div>
          </li>
          <li className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className={`card h-100 ${styles.teamItem}`}>
              <img src="./images/med.gif" className="card-img-top" alt="Медичні сили" />
              <div className={`card-body text-center ${styles.divTeam}`}>
                <h3 className={styles.teamNames}>Медичні сили</h3>
                <p className={styles.paragraphTeam}>Життя. Здоровя. Перемога.</p>
                <ul className={`d-flex justify-content-center list-unstyled ${styles.socialTeam}`}>
                  <li className={styles.socialIconLi}><a href="https://www.instagram.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-instagram" />
                    </svg></a></li>
                  <li className={styles.socialIconLi}><a href="https://ua.linkedin.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-twitter" />
                    </svg></a></li>
                  <li className={styles.socialIconLi}><a href="https://uk-ua.facebook.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-facebook" />
                    </svg></a></li>
                  <li className={styles.socialIconLi}><a href="https://uk-ua.facebook.com/" className={styles.socialIconHref}>
                    <svg className={styles.iconsSocial} width="16" height="16">
                      <use href="./images/icons.svg#icon-linkedin" />
                    </svg></a></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Military;



