// MainContent.js
import styles from './MainContent.module.css';

function MainContent() {
  return (
    <main className={styles.mainContent}>
      <section className={styles.heading}>
        <div className={styles.container}>
          <h1 className={styles.mainHeading}>Інформаційний портал для військовослужбовців</h1>
          <button className={styles.button} type="button">Особистий кабінет</button>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className={styles.container}>
          <h2 className={styles.teamHeading}>Види, роди військ (сил)</h2>
          <ul className={styles.teamList}>
            {/* Кожен елемент списку тут – це частина вашого HTML */}
            <li className={styles.teamItem}>
              <img src="./images/sukhoputni-viiska.png" alt="Сухопутні війська" width="264" height="260" />
              <div className={styles.divTeam}>
                <h3 className={styles.teamNames}>Сухопутні війська</h3>
                <p className={styles.paragraphTeam}>За Україну! За її волю!</p>
                {/* Соціальні посилання */}
                <ul className={styles.socialTeam}>
                  {/* ...всі соціальні іконки */}
                </ul>
              </div>
            </li>
            {/* Інші види військ аналогічно */}
          </ul>
        </div>
      </section>

      <section className={styles.sectionPortfolio}>
        <div className={styles.container}>
          <h2 className={styles.headingPortfolio} id="portfolio">Новини</h2>
          <ul className={styles.listPortfolio}>
            <li className={styles.liPortfolio}>
              <div className={styles.divPortfolioImg}>
                <img src="./images/new1.jpg" alt="Новина 1" width="360" height="300" />
                <p className={styles.overlay}>
                  Одним із ключових елементів підготовки є тактична підготовка. Під час польових занять військові опановують навички...
                </p>
              </div>
              <div className={styles.divPortfolio}>
                <h3 className={styles.listHeadingPortfolio}>Базову загальновійськову підготовку проходять новобранці у Великій Британії</h3>
                <p className={styles.textPortfolio}>08.11.2024</p>
              </div>
            </li>
            {/* Інші новини аналогічно */}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
