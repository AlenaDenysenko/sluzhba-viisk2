import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={`container-fluid ${styles.heroBackground} text-white py-5`}> 
      <div className={`container text-center ${styles.container}`}>
        <h1 className={`display-4 ${styles.heroHeading}`}>Інформаційний портал для військовослужбовців</h1>
        <button className={`btn btn-primary mt-3 ${styles.button}`}>Особистий кабінет</button>
      </div>
    </div>
  );
}

export default Hero;
