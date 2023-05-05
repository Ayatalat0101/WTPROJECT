import styles from '../styles/Card.module.css'; 
import Card from './card';
import web from './images/image4.jpg';
import digi from './images/dijital.jpg';
import design from './images/design.png';

function Service() {
  return (
    <section className={styles.Service}>
      <div className={styles.head}>
        <h3>خدماتنا</h3>
        <p>
          من أجل تحدي منافسيك بشخصية تتمتع بالقوة والذكاء، نقدم لك خدماتنا عبر
          مجموعة متنوعة التي نرسم بها أهدافك وأفكارك ونُجسد بها رؤيتك وتخيلاتك
        </p>
      </div>
      <div className ={styles.div2}>
      <Card photo={web} title="تصميم مواقع ويب" desc="نقدم لك في جي دي جيرلز الأهم لنجاح مشروعك بخدمة مرنة وذكية وأفضل الحلول على الإطلاق" />
      <Card photo={digi} title="تصميم جرافيك" desc="نقدم خدمة تصميم جرافيك عالية الجودة بمختلف الصيغ، بتمييز وإبداع بلا حدود ." />
      <Card photo={design} title="خدمات التسويق " desc="خدمات التسويق متعددة والنجاح واحد، فهى تعتبر العنصر الرئيسي الذي يساعد المشاريع سواء الكبيرة أو الصغيرة في الوصول لعملائها المستهدفين.." />
      </div>
    </section>
  );
}



export default Service;