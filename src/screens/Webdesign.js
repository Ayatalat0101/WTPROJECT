import Header from "../compnents/Header";
import Footer from "../compnents/footer";
import web2 from "../compnents/images/web2.jpg";
import php from "../compnents/images/php (1).png";
import pysh from "../compnents/images/physics.png";
import photp from "../compnents/images/photoshop.png";
function Webdesign() {
  return (
    <div className="Webdesign">
      <Header/>
      <div>
        <main>
          <aside className="aside1">
            <img src={web2} className="listimage1" />
          </aside>
          <aside className="aside2">
            <article>
              <h1 className="h1">تصميم المواقع </h1>
              <br />
              <div className="div1">
                <p>
                  تقدم لك دي جي غيرلز الأهم لنجاح مشروعك بخدمة مرنة وذكية وأفضل
                  الحلول على الإطلاق
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
            <h2>تصميم المواقع </h2>
            <h3>أطلب موقعك الاّن بسعر يبدأ من $500</h3>
            <button
              type="button"
              className="btn btn-outline-warning"
              style={{
                backgroundColor: "rgb(53, 235, 241)",
                marginTop: 10,
                color: "black",
              }}
            >
              اطلب خدمة الاّن
            </button>
          </div>
        </nav>
        <nav className="marknav2">
          <nav className="marknav3">
            <h1>تقنيات التصميم المستخدمة في دي جي غيرلز </h1>
            <br />
            <h6>
              تصميم مواقع احترافية مع دي جي غيرلز من أهم الخطوات الأولى التي يجب
              عليك اتخاذها عند الاعتماد على التسويق عبر الإنترنت سواء للخدمات أو
              المنتجات كما أنها أيضا من أكثر الوسائل التسويقية الفعالة للاستفادة
              من مزايا التسويق الالكتروني المتعددة . المتاجر الإلكترونية مواقع
              الشركات مواقع محركات البحث مواقع شخصية المدونات مواقع الخدمات
              المصرفية بوابات الإنترنت
            </h6>
          </nav>
          <nav className="marknav4">
            <section className="marksection" style={{ border: "none" }}>
              <img src={photp} />
            </section>
            <section className="marksection" style={{ border: "none" }}>
              <img src={php} />
            </section>
            <section className="marksection" style={{ border: "none" }}>
              <img src={pysh} />
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
                شاركنا برسم الملامح التسويقية للعديد من المشاريع الكبرى على
                مستوى الوطن العربي، وكنا سبب رئيسي في إبرازها بتقديم أفضل
                الخدمات التي جعلت كلًا منهم يتميز وينفرد بين منافسيه.
              </article>
            </div>
          </section>
        </nav>
      </div>
      <Footer/>
    </div>
  );
}

export default Webdesign;
