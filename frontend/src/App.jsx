import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import Connection from "./pages/Connection";
import CreateProject from "./pages/CreateProject";

function App() {
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
