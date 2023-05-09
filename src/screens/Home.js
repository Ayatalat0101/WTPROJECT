import Header from "../compnents/Header";
import About from "../compnents/About";
import Service from "../compnents/service";
import Workes from "../compnents/wokes";
import Ask from "../compnents/Ask";
import Clients from "../compnents/clients";
import Footer from "../compnents/footer";
function Home() {
  return (
    <div className="Home">
      <Header />
      <About/>
      <Service />
      <Workes/>
      <Ask/>
      <Clients />
      <Footer/>
    </div>
  );
}
export default Home;
