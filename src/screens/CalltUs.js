import Header from "../compnents/Header";
import Clients from "../compnents/clients";
import Footer from "../compnents/footer";
import CALLs from "../compnents/CALLs";

function CalltUs() {
  return (
    <div className="Home">
      <Header/>
      <CALLs/>
      <Clients/>
      <Footer/>
    </div>
  );
}
export default CalltUs;