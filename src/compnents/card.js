
import styles from '../styles/Card.module.css'; 
import WhatsAppButton from '../compnents/WhatsAppButton';
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
            <WhatsAppButton title="اطلب الخدمة الان"/>
          </div>
          </div>
        </div>
      </div>
  );
}



export default Card;