import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import Connection from "./pages/Connection";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Connection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
