import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Military.module.css';
import militaryData from '../../data/militaryData';

function Military() {
  return (
    <section className={`py-5 ${styles.teamSection}`}>
      <div className="container">
        <h2 className={`text-center mb-5 ${styles.teamHeading}`}>Види, роди військ (сил)</h2>
        <ul className="row list-unstyled">
          {militaryData.map((unit, index) => (
            <li key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className={`card h-100 ${styles.teamItem}`}>
                <img src={unit.image} className="card-img-top" alt={unit.alt} loading="lazy" />
                <div className={`card-body text-center ${styles.divTeam}`}>
                  <h3 className={styles.teamNames}>{unit.name}</h3>
                  <p className={styles.paragraphTeam}>{unit.description}</p>
                  <ul className={`d-flex justify-content-center list-unstyled ${styles.socialTeam}`}>
                    {unit.socialLinks.map((link, linkIndex) => (
                      <li key={linkIndex} className={styles.socialIconLi}>
                        <a href={link.href} className={styles.socialIconHref}>
                          <svg className={styles.iconsSocial} width="16" height="16">
                            <use href={link.icon} />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Military;




