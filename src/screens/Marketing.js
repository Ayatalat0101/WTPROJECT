import Header from "../compnents/Header";
import Footer from "../compnents/footer";
import mar1 from "../compnents/images/mar1.jpg";
import gr7 from "../compnents/images/gr7.jpg";
import gr4 from "../compnents/images/gr4.jpg";
import mar2 from "../compnents/images/mar2.jpg";

function Marketing(){ 
return(
<section>
  <Header/>
  <main>
    <aside className="aside1">
      <img src={mar1} className="listimage1" />
    </aside>
    <aside className="aside2">
      <article>
        <h1 className="h1">خدمات التسويق</h1>
        <br />
        <div className="div1">
          <p>
            خدمات التسويق متعددة والنجاح واحد ,فهي تعتبر العنصر الرئيسي الذي
            يساعد المشاريع سواء الكبيرة او الصغيرة في الوصول لعملائها المستهدفين
            .
          </p>
          <br />
          <button type="button" className="btn btn-outline-warning">
            اطلب خدمة الاّن
          </button>
        </div>
      </article>
    </aside>
  </main>
  <nav className="marknav1">
    <div>
      <h2>خدمات التسويق</h2>
      <h3>أطلق حملاتك الإعلانية الاّن بسعر يبدأ من $500</h3>
      <button
        type="button"
        className="btn btn-outline-warning"
        style={{
          backgroundColor: "rgb(53, 235, 241)",
          marginTop: 10,
          color: "black"
        }}
      >
        اطلب خدمة الاّن
      </button>
    </div>
  </nav>
  <nav className="marknav2">
    <nav className="marknav3">
      <h1>خدمات دي جي غيرلز</h1>
      <br />
      <h6>
        من أجل تحدي منافسيك بشخصية تتمتع بالقوة والذكاء, نقدم لك خدماتنا عبر
        مجموعة متنوعة من التصميمات والحلول التسويقية التي ترسم بها أهدافك
        وأفكارك وتجسد بها رؤيتك وتخيلاتك
      </h6>
    </nav>
    <nav className="marknav4">
      <section className="marksection">
        <img src={gr7} />
        <br />
        <h3>إدارة الحملات الإعلانية </h3>
        <h6>دي جي غيرلز هي الأفضل في إدارة الحملات الإعلانية </h6>
      </section>
      <section className="marksection">
        <img src={mar2}/>
        <br />
        <h3>إدارة السوشيال ميديا</h3>
        <h6> نتولى إدارة مواقع التواصل الاجتماعي لنشاطك التجاري </h6>
      </section>
      <section className="marksection">
        <img src={gr4}/>
        <br />
        <h3>الرد ومتابعة العملاء</h3>
        <h6>نظراً أننا نقدر وقت عملائنا والحاجة للسرعة في الرد</h6>
      </section>
    </nav>
  </nav>
  <nav>
    <section className="section2">
      <div className="div3">
        <h1 style={{ marginBottom: 40 }}>
          <lord-icon
            src="https://cdn.lordicon.com/iwaotjbp.json"
            trigger="hover"
            style={{ width: 50, height: 50 }}
          ></lord-icon>
          أعمالنا
        </h1>
        <lord-icon
          src="https://cdn.lordicon.com/oqhlhtfq.json"
          trigger="hover"
          style={{ width: 50, height: 50 }}
        ></lord-icon>
        <lord-icon
          src="https://cdn.lordicon.com/pxecqsgb.json"
          trigger="hover"
          style={{ width: 50, height: 50 }}
        ></lord-icon>
        <lord-icon
          src="https://cdn.lordicon.com/ggihhudh.json"
          trigger="hover"
          style={{ width: 50, height: 50 }}
        ></lord-icon>
        <article>
          شاركنا برسم الملامح التسويقية للعديد من المشاريع الكبرى على مستوى
          الوطن العربي، وكنا سبب رئيسي في إبرازها بتقديم أفضل الخدمات التي جعلت
          كلًا منهم يتميز وينفرد بين منافسيه.
        </article>
      </div>
    </section>
  </nav>
  <Footer/>
</section>
);
};
export default Marketing;