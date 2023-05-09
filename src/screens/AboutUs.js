import Header from "../compnents/Header";
import About from "../compnents/About";
import Service from "../compnents/service";
import  Abs from "../compnents/Abs";
import Clients from "../compnents/clients";
import Footer from "../compnents/footer";
function AboutUs() {
  return (
    <div className="AboutUs">
      <Header />
      <About/>
      <Abs/>
      <Service />
      <Clients />
      <Footer/>
    </div>
  );
}
export default AboutUs;