import styles from "../styles/About.module.css";
import style from "../styles//ask.module.css";
function CALLs() {
  return (
    <div>
    <section className={styles.main} >
      
      
      <div className={styles.side1}
        style={{
          backgroundColor: "#ffbd59",
          padding: 20,
          display: "flex",
          flexDirection: "column",
          rowGap: 40,
        }}
      >
        <h2 className="h1">تواصل معنا</h2>
        <div className="div1">
          اختار من خدمات التصميم والتسويق، وأحصل على الخدمة التي تظهرك بأفضل شكل
          يترسخ في عقل جمهورك وتميزك بين منافسيك
        </div>

        <div>
            <form
              id="form"
              dir="rtl"
              style={{ display: "flex", flexDirection: "column", gap: 30 }}
            >
              <div>
                <textarea
                  id="form_massege"
                  className="form-control"
                  name="massege"
                  rows={5}
                  cols={80}
                  placeholder="الرسالة "
                  defaultValue={""}
                />
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                <input
                  id="form_name"
                  className="form-control"
                  name="name"
                  type="text"
                  placeholder="الاسم"
                />
                <input
                  id="form_site"
                  className="form-control"
                  name="site"
                  type="text"
                  placeholder="الموقع الإلكتروني"
                />
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <input
                  id="form_email"
                  className="form-control"
                  name="email"
                  type="email"
                  placeholder="البريد الإلكتروني"
                />
                <input
                  id="form_tel"
                  className="form-control"
                  name="tel"
                  type="tel"
                  placeholder="الهاتف"
                />
              </div>
              <div>
                <select name="services" className="form-control">
                  <option value="">اختيار الخدمة</option>
                  <option value="تصميم مواقع">تصميم مواقع</option>
                  <option value="تصميم جرافيك">تصميم جرافيك</option>
                  <option value="خدمات التسويق">خدمات التسويق</option>
                  <option value="إدارة صفحات السوشيال ميديا">
                    إدارة صفحات السوشيال ميديا
                  </option>
                  <option value="خدمات الموشن جرافيك">
                    خدمات الموشن جرافيك
                  </option>
                  <option value="خدمات السيو">خدمات السيو</option>
                </select>
              </div>
              <div className="d-grid gap-2">
                <button
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "rgb(247, 150, 5)",
                    color: "black",
                    border: "2px solid white",
                    fontWeight: "bold",
                  }}
                  type="button"
                >
                  ارسل رسالة
                </button>
              </div>
            </form>
          </div>


        </div>
          
        <div className={styles.side1}>

          <div style={{ display: "flex", alignItems: "start" }}>
            <div style={{ padding: 10, marginLeft: 20, rowGap: 100 }}>

              <h3 className="h1" style={{ color: "#ffbd59" }}>
                تواصل معنا
              </h3>
                <p>
                  اختار من خدمات التصميم والتسويق، وأحصل على الخدمة التي تظهرك
                  بأفضل شكل يترسخ في عقل جمهورك وتميزك بين منافسيك
                </p>
              <div
                style={{ display: "flex", flexDirection: "column", rowGap: 30 }}
              >
                <div className="divfooter">
                  <span>digigirls@gmail.com</span>
                  <i className="bi bi-envelope-fill" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    className="bi bi-envelope-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                  </svg>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className="divfooter">
                    <span>العنوان: سوريا _حمص</span>
                    <i className="bi bi-envelope-fill" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      fill="currentColor"
                      className="bi bi-envelope-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg>
                  </div>
                </div>
              </div>


            </div>


          </div>
        </div>
      </section>



      <h5 className={style.head}>
        نسعى لتكوين مجتمع من المبرمجين والمصممين والخبراء في التسويق الرقمي وكما
        نعمل على مساعدة المبتدئين وإكسابهم الخبرة وإدخالهم إلى سوق العمل
      </h5>
  </div>
    
  );
}
export default CALLs;
