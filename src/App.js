import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './screens/Home';
import CalltUs from './screens/CalltUs';
import About_Us from './screens/About_Us';
import Webdesign from './screens/Webdesign';
import Marketing from './screens/Marketing'
import GraphicDesign from './screens/GraphicDesign'
function App() {
  return (
    <div className="App">
      <Home/>
      <About_Us/>
      <CalltUs/>
      <Webdesign/>
      <Marketing/>
      <GraphicDesign/>
    </div>
  );
}

export default App;