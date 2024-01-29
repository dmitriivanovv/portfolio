import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProjectPage from "./pages/ProjectPage";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";

import "./styles/main.css";
import ScrollToTop from "./utils/ScrollRestoration";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>

        <Navbar />

        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/projects/project/:id" element={<ProjectPage />} />
          <Route path="/portfolio/contacts" element={<Contacts />} />
          <Route
            path="*"
            element={<Navigate to="/portfolio" />}
          />
        </Routes>

        <Footer />

      </Router>

    </div>
  );
}

export default App;
