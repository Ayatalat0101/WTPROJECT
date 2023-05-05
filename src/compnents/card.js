
import styles from '../styles/Card.module.css'; 
import Buttn from './btn';
function Card(props) {
  return (
  
      <div className={styles.serivers}>
        <div className="card">
          <img src={props.photo} className="card-img-top ser_img" alt="خدمة" />
          <div className="card-body ser_body">
            <div className={styles.mid}>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              {props.desc}
            </p>
            <Buttn title="اطلب الخدمة"/>
          </div>
          </div>
        </div>
      </div>
  );
}



export default Card;