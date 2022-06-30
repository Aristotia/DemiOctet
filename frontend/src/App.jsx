import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import Home from "./pages/Home";
import "./App.css";
import Connection from "./pages/Connection";
import CreateProject from "./pages/CreateProject";

import "aos/dist/aos.css";

function App() {
  AOS.init();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Connection />} />
          <Route path="/create/*" element={<CreateProject />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
