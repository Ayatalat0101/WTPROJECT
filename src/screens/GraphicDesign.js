import Header from "../compnents/Header";
import Footer from "../compnents/footer";
import gr6 from "../compnents/images/gr6.jpg";
import gr8 from "../compnents/images/gr8.jpg";
import gr1 from "../compnents/images/gr1.jpg";
import gr5 from "../compnents/images/gr5.jpg";
function GraphicDesign() {
  return (
    <section>
      <Header />
      <section>
        <main>
          <aside className="aside1">
            <img src={gr6} className="listimage1" />
          </aside>
          <aside className="aside2">
            <article>
              <h1 className="h1">تصميم جرافيك </h1>
              <br />
              <div className="div1">
                <p>
                  نقدم خدمة تصميم جرافيك عالية الجودة بمختلف الصيغ , بتميز
                  وإبداع بلا حدود
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
            <h2>تصميم جرافيك </h2>
            <h3>أطلب هويتك البصرية كاملة الاّن بسعر يبدأ من $500</h3>
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
            <h1>خدمات دي جي غيرلز</h1>
            <br />
            <h6>
              من أجل تحدي منافسيك بشخصية تتمتع بالقوة والذكاء, نقدم لك خدماتنا
              عبر مجموعة متنوعة من التصميمات والحلول التسويقية التي ترسم بها
              أهدافك وأفكارك وتجسد بها رؤيتك وتخيلاتك
            </h6>
          </nav>
          <nav className="marknav4">
            <section className="marksection">
              <img src={gr8} />
              <br />
              <h3> تصميم ملف شركة </h3>
              <h6>دعنا نعرف العالم بك </h6>
            </section>
            <section className="marksection">
              <img src={gr1} />
              <br />
              <h3>تصميم شعار إحترافي </h3>
              <h6>
                {" "}
                معنا لكل شعار قصة , فنحن نلتزم تجاه عملائنا بإبراز علاماتهم
                التجارية{" "}
              </h6>
            </section>
            <section className="marksection">
              <img src={gr5} />
              <br />
              <h3>تصميم فلاير</h3>
              <h6>
                نبرز شخصيتك لتتميز بين منافسيك بأعلى جودة خلال تصميم فلاير وجهين
                بألوان وصور مميزة{" "}
              </h6>
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
      </section>

      <Footer />
    </section>
  );
}
export default GraphicDesign;
