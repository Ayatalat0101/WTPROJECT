import Header from "../compnents/Header";
import About from "../compnents/About";
import Service from "../compnents/service";
import  Abs from "../compnents/Abs";
import Clients from "../compnents/clients";
import Footer from "../compnents/footer";
function About_Us() {
  return (
    <div className="About_Us">
      <Header />
      <About/>
      <Abs/>
      <Service />
      <Clients />
      <Footer/>
    </div>
  );
}
export default About_Us;