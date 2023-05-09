import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import CalltUs from "./screens/CalltUs";
import AboutUs from "./screens/About_Us";
import Webdesign from "./screens/Webdesign";
import Marketing from "./screens/Marketing";
import GraphicDesign from "./screens/GraphicDesign";
import ErrorBoundary from "./ErrorBoundaryComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>} />
        <Route path="/AboutUs" element={<ErrorBoundary><AboutUs /></ErrorBoundary>} />
        <Route path="/CalltUs" element={<ErrorBoundary><CalltUs /></ErrorBoundary>} />
        <Route path="/Webdesign" element={<ErrorBoundary><Webdesign /></ErrorBoundary>} />
        <Route path="/Marketing" element={<ErrorBoundary><Marketing /></ErrorBoundary>} />
        <Route path="/GraphicDesign" element={<ErrorBoundary><GraphicDesign /></ErrorBoundary>} />
        <Route path="*" element={<ErrorBoundary />} />
      </Routes>
    </div>
  );
}

export default App;
