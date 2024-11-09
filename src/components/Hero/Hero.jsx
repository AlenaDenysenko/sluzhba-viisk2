import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={`container-fluid ${styles.heroBackground} text-white py-5`}> 
      <div className="container text-center">
        <h1 className={`display-4 ${styles.heroHeading}`}>Ласкаво просимо на інформаційний портал</h1>
        <p className={`lead ${styles.heroSubtext}`}>Оберіть шлях до нових знань та новин</p>
        <button className="btn btn-primary mt-3">Дізнатися більше</button>
      </div>
    </div>
  );
}

export default Hero;
