import Card from "./card";
import styles from '../styles/Card.module.css';
import temp1 from './images/Minimalist Furniture Website Desktop Prototype (1).png';
import temp2 from './images/Screenshot 2023-04-18 010216.png';
import temp3 from './images/Screenshot 2023-04-18 010254.png';
function Workes() {
  return (
    <div className="Works">
      <section className={styles.workes}>
        <div className={styles.head}>
          <h3>اعمالنا</h3>
        </div>
        <div className={styles.workes}>
          <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <form className="container-fluid justify-content-start li_work ">
              <button className="btn btn-outline-warning" type="button">
                الكل
              </button>
              <button
                className="btn btn-sm btn-outline-secondary"
                type="button"
              >
                خدمات التصميم
              </button>
              <button
                className="btn btn-sm btn-outline-secondary"
                type="button"
              >
                خدمات مواقع الويب
              </button>
              <button
                className="btn btn-sm btn-outline-secondary"
                type="button"
              >
                خدمات تسويق الكتروني 
              </button>
            </form>
          </nav>
          <div className={styles.worker}>
          <Card photo={temp1} title='Fashop Store'/>
          <Card photo={temp2} title='Furniture Gallery'/>
          <Card photo={temp3} title='Movie App UX\UI Design'/>
          
          </div>
        </div>
      </section>
    </div>
  );
}
export default Workes;
