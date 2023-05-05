
import styles from '../styles/About.module.css'; 
function Abs() {
  return (
    <div className={styles.con}>
    <nav className="nav1">
      <section className="section">
        <div className="div2">
          <h1 className="h1">من نحن</h1>
          <lord-icon
            src="https://cdn.lordicon.com/bxxnzvfm.json"
            trigger="hover"
            style={{ width: 150, height: 150 }}
          ></lord-icon>
          <lord-icon
            src="https://cdn.lordicon.com/ttioogfl.json"
            trigger="morph"
            style={{ width: 150, height: 150 }}
          ></lord-icon>
          <p>
            تأسست شركة دي جي غيرلز لخدمات التصميم على يد كوادر طموحة، مبدعة، وذات
            خبرة واسعة في مجال التصميم الإبداعي، لتصبح واحدة من أكبر الشركات
            الرسمية والمعتمدة المتخصصة في مجالات التصميم وبناء العلامات التجارية
            وحلول الإعلان في الشرق الأوسط،"دي جي غيرلز" شركة يقودها زُمرة من
            المبدعين والخبراء في مجال التصميم، تتخصص في هذا المجال بخلفية تجمع بين
            الاحترافية والإبداع.
          </p>
        </div>
      </section>
      <section className="section1">
        <div className="div2">
          <h1>لماذا دي جي غيرلز ؟</h1>
          <lord-icon
            src="https://cdn.lordicon.com/hgbzryoa.json"
            trigger="hover"
            style={{ width: 150, height: 150 }}
          ></lord-icon>
          <lord-icon
            src="https://cdn.lordicon.com/dqxvvqzi.json"
            trigger="hover"
            style={{ width: 150, height: 150 }}
          ></lord-icon>
          <p>
            نقدم مجموعة من حلول التصميم والتسويق المبتكرة، فنحن نرسم خطة كاملة
            تمتلئ بالإبداع والتخطيط المثالي، حيث نبدأ معك الطريق من خطوة البحث عن
            فكرة، مرورًا بمرحلة الدراسة والتخطيط، انتهاء بمرحلة التنفيذ واللمسات
            الأخيرة.
          </p>
        </div>
      </section>
    </nav>

    <nav>
      <section className="section2">
        <div className="div3">
          <h6 style={{ margin:'30px'}}>
              شاركنا برسم الملامح التسويقية للعديد من المشاريع الكبرى على مستوى
          الوطن العربي، وكنا سبب رئيسي في إبرازها بتقديم أفضل
          الخدمات التي جعلت كلًا منهم يتميز وينفرد بين منافسيه
          </h6>
        </div>

      </section>
    </nav>
  </div>
  

);
}

export default Abs;
