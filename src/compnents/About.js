import Logo from './images/GIRLS__1_-removebg-preview2.png';
import styles from '../styles/About.module.css'; 
import WhatsAppButton from '../compnents/WhatsAppButton';
function About() {
  return (
<div className={styles.main}>
  <section className={styles.div1}>
    <img id="img1" src={Logo} className={styles.img1} alt="logo"/>
  </section>

  <section className={styles.side1}>
      <h2 className={styles.h2}>
        دي جي غيرلز لخدمات البرمجة والتصميم الالكتروني
      </h2>
      <br />
      <div className={styles.div2}>
        <p>
          مرحباً بك في موقعنا الإلكتروني المتخصص في بيع الخدمات البرمجية! نحن
          نقدم لك خدمات برمجية عالية الجودة وفعالة لتلبية احتياجاتك في مجال
          التقنية. سواء كنت تبحث عن تطبيقات الهاتف المحمول، أو تصميم وتطوير
          مواقع الويب، أو تخطيط وتنفيذ أنظمة الحاسوب، فإننا نضمن لك الحصول على
          خدمات تلبي توقعاتك وتفوقها.
        </p>
        <br />
        <WhatsAppButton title="اطلب الخدمة الان"/>
      </div>
  </section>
</div>

);
}

export default About;
