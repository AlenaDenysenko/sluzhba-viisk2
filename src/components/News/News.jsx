import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './News.module.css';
import newsData from '../../data/newsData';

function News() {
  return (
    <main className={`container py-5 ${styles.mainContent}`}>
      <section className={`mb-5 ${styles.sectionPortfolio}`}>
        <div className="container">
          <h2 className={`text-center mb-4 ${styles.headingPortfolio}`} id="portfolio">Новини</h2>
          <ul className="row list-unstyled">
            {newsData.map((news, index) => (
              <li key={index} className="col-lg-4 col-md-6 mb-4">
                <div className={`card h-100 ${styles.liPortfolio}`}>
                  <div className="position-relative">
                    <img src={news.image} className="card-img-top" alt={`Новина ${index + 1}`} loading="lazy" />
                    <p className={`position-absolute w-100 h-100 d-flex align-items-center justify-content-center text-white bg-dark bg-opacity-75 m-0 ${styles.overlay}`}>
                      {news.description}
                    </p>
                  </div>
                  <div className="card-body text-center">
                    <h3 className={`card-title ${styles.listHeadingPortfolio}`}>{news.title}</h3>
                    <p className={`text-muted ${styles.textPortfolio}`}>{news.date}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default News;
