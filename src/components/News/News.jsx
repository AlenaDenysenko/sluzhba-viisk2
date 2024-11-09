import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './News.module.css';

function News() {
  return (
   <main className={`container py-5 ${styles.mainContent}`}>
      <section className={`mb-5 ${styles.sectionPortfolio}`}>
        <div className="container">
          <h2 className={`text-center mb-4 ${styles.headingPortfolio}`} id="portfolio">Новини</h2>
          <ul className="row list-unstyled">
            <li className="col-lg-4 col-md-6 mb-4">
              <div className={`card h-100 ${styles.liPortfolio}`}>
                <div className="position-relative">
                  <img src="./images/new1.jpg" className="card-img-top" alt="Новина 1" loading="lazy" />
                  <p className={`position-absolute w-100 h-100 d-flex align-items-center justify-content-center text-white bg-dark bg-opacity-75 m-0 ${styles.overlay}`}>
                    Одним із ключових елементів підготовки є тактична підготовка. Під час польових занять військові опановують різноманітні навички, зокрема: індивідуальні переміщення на полі бою, переміщення двійками, малими групами, методи пересування та розгортання на місцевості, дії під вогневим впливом противника тощо.
                  </p>
                </div>
                <div className="card-body text-center">
                  <h3 className={`card-title ${styles.listHeadingPortfolio}`}>Базову загальновійськову підготовку проходять новобранці у Великій Британії</h3>
                  <p className={`text-muted ${styles.textPortfolio}`}>08.11.2024</p>
                </div>
              </div>
            </li>
            <li className="col-lg-4 col-md-6 mb-4">
              <div className={`card h-100 ${styles.liPortfolio}`}>
                <div className="position-relative">
                  <img src="./images/new2.jpg" className="card-img-top" alt="Новина 2" loading="lazy" />
                  <p className={`position-absolute w-100 h-100 d-flex align-items-center justify-content-center text-white bg-dark bg-opacity-75 m-0 ${styles.overlay}`}>
                    Міністерство оборони України та Генштаб ЗСУ розробляють цифровий сервіс для спрощеного переведення між пріоритетними військовими частинами. Тому двом структурам важливо знати думку військових з цього приводу. «Сили оборони України потребують вмотивованих військовослужбовців. Ми впевнені, що можливість змінити місце служби і підрозділ впливає на ефективність військових. Це допоможе їм служити там, де вони хочуть. Завдяки опитуванню ми зможемо удосконалити процес переведення, щоб місце служби можна було змінити простіше і без зайвої бюрократії», – зазначила заступниця міністра оборони України з питань цифровізації Катерина Черногоренко.
                  </p>
                </div>
                <div className="card-body text-center">
                  <h3 className={`card-title ${styles.listHeadingPortfolio}`}>В Армія+ розпочалося опитування щодо зміни місця служби</h3>
                  <p className={`text-muted ${styles.textPortfolio}`}>06.11.2024</p>
                </div>
              </div>
            </li>
            <li className="col-lg-4 col-md-6 mb-4">
              <div className={`card h-100 ${styles.liPortfolio}`}>
                <div className="position-relative">
                  <img src="./images/new3.jpg" className="card-img-top" alt="Новина 3" loading="lazy" />
                  <p className={`position-absolute w-100 h-100 d-flex align-items-center justify-content-center text-white bg-dark bg-opacity-75 m-0 ${styles.overlay}`}>
                    Десантно-штурмові війська, Військово-Морські Сили та Командування Сил підтримки стали лідерами у використанні Армія+ та обробці електронних рапортів. Як мінімум кожна друга їхня військова частина опрацьовує рапорти через Армія+. Зокрема, у ДШВ частка таких частин складає 80%, ВМС — 70% і КСП — 50%.
                  </p>
                </div>
                <div className="card-body text-center">
                  <h3 className={`card-title ${styles.listHeadingPortfolio}`}>Десантно-штурмові війська, Військово-Морські Сили та Командування Сил підтримки стали лідерами у використанні Армія+ та обробці електронних рапортів</h3>
                  <p className={`text-muted ${styles.textPortfolio}`}>06.11.2024</p>
                </div>
              </div>
            </li>
            <li className="col-lg-4 col-md-6 mb-4">
              <div className={`card h-100 ${styles.liPortfolio}`}>
                <div className="position-relative">
                  <img src="./images/new4.jpg" className="card-img-top" alt="Новина 4" loading="lazy" />
                  <p className={`position-absolute w-100 h-100 d-flex align-items-center justify-content-center text-white bg-dark bg-opacity-75 m-0 ${styles.overlay}`}>
                    “У травні цього року розвідкою було підтверджено задум ворога щодо наступу на Сумському напрямку з Курської області для створення так званої “буферної зони” на півночі України. Це мало стати продовженням російської операції на Харківському напрямку.
                  </p>
                </div>
                <div className="card-body text-center">
                  <h3 className={`card-title ${styles.listHeadingPortfolio}`}>Головнокомандувач ЗС України генерал Олександр Сирський про втрати противника на Курському напрямку</h3>
                  <p className={`text-muted ${styles.textPortfolio}`}>06.11.2024</p>
                </div>
              </div>
            </li>
            <li className="col-lg-4 col-md-6 mb-4">
              <div className={`card h-100 ${styles.liPortfolio}`}>
                <div className="position-relative">
                  <img src="./images/new5.jpg" className="card-img-top" alt="Новина 5" loading="lazy" />
                  <p className={`position-absolute w-100 h-100 d-flex align-items-center justify-content-center text-white bg-dark bg-opacity-75 m-0 ${styles.overlay}`}>
                    Увага, в ході проведення заходів з відбиття повітряних атак російських окупантів застосовуються засоби радіоелектронної боротьби. Зокрема, для підвищення ефективності впливу на противника застосовуються засоби підміни координат супутникової навігації GPS (спуфінг).
                  </p>
                </div>
                <div className="card-body text-center">
                  <h3 className={`card-title ${styles.listHeadingPortfolio}`}>Важливо</h3>
                  <p className={`text-muted ${styles.textPortfolio}`}>05.11.2024</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default News;
