import styles from "../styles/client.module.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import img7 from "./images/img7.png";
import img8 from "./images/img8.png";
import img9 from "./images/img9.png";
function Clients() {
  return (
    <div className={styles.scroll_container}>
      <img src={img1}  className={styles.imgx} />
      <img src={img2}  className={styles.imgx} />
      <img src={img3}  className={styles.imgx}/>
      <img src={img4}  className={styles.imgx}/>
      <img src={img5}  className={styles.imgx}/>
      <img src={img6}  className={styles.imgx} />
      <img src={img7}  className={styles.imgx} />
      <img src={img8}  className={styles.imgx} />
      <img src={img9}  className={styles.imgx} />
    </div>
  );
}

export default Clients;
