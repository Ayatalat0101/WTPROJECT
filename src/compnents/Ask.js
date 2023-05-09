import ask from './images/ask.png';
import Accordion from 'react-bootstrap/Accordion';
import styles from '../styles/ask.module.css';
function Ask() {
  return (
<section className={styles.ask}>
  <div className={styles.head}>
    <h3>اسئلة و اجوبة</h3>
    <p>مستعد للمضي قدمًا لتنفيذ أفكارك؟</p>
    <p>
      نحن هنا للمساعدة دائمًا، لذلك دعنا نجعل تحقيق تخيلك وأحلامك لواقع بسهولة،
    </p>
    <p>اتصل بنا اليوم لاتخاذ الخطوة الأولى واحصل على استشارتك المجانية!</p>
  </div>
  <div className={styles.askes}>

  <div className={styles.sec2}>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>كيفية التفاوض أو التعاقد ؟</Accordion.Header>
        <Accordion.Body>
        يمكننا مناقشة طلبك عبر اتصال أو مكالمة هاتفية أو عبر الواتس اب، وبعد
        الانتهاء من التفاوض نقوم بتجهيز عرض السعر الفني والمالي وإرساله للتوقيع
        ثم القيام بعملية التحويل البنكي أو الدفع كاش
        </Accordion.Body>
      </Accordion.Item>
    
      <Accordion.Item eventKey="1">
        <Accordion.Header>ما هي خدماتكم بالتحديد ؟</Accordion.Header>
        <Accordion.Body>
        خدمات لتسويق , خدمات تصميم الجرافيك , خدمات الموشن جرافيك , خدمات السوشيال ميديا ,خدمات تصميم المواقع , خدمات السيو
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion>
      <Accordion.Item eventKey="3">
      <Accordion.Header>هل لديكم خدمات طباعة ؟</Accordion.Header>
        <Accordion.Body>
        في اوكودا لا نقدم خِدْمَات تخص الطباعة ولكننا نقوم بتقديم خدمة تصميمات الطباعة عالية الجودة، فنحن شركة متخصصة في مجال التصميم فقط
        </Accordion.Body>
      </Accordion.Item>
    
      <Accordion.Item eventKey="4">
        <Accordion.Header>كيف يمكنني طلب خدمة عن بعد ؟</Accordion.Header>
        <Accordion.Body>
        يمكن للعميل الدخول إلى صفحات الخِدْمَات لدينا للتعرف على الأسعار والباقات المخصصة لكل خدمة، ثم يقوم بتحديد الباقة المناسبة له، والقيام بالتواصل معنا عبر رقمنا الموحد أو الواتس اب أو الرسائل الإلكترونية أو عبر ملئ نموذج طلب الخدمة من خلال الموقع بكل سهولة وسنقوم بالمتابعة مع العميل حتى توقيع العقد وبدء العمل عن بعد والمتابعة والتقارير الدورية
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
    </div>
    <div className={styles.sec1}>
      <img className={styles.img_ask} src={ask} alt="" />
    </div>
    
  </div>
</section>


  );
}
export default Ask;        
