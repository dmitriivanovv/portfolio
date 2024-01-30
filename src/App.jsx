import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProjectPage from "./pages/ProjectPage";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Routes, Route, Navigate, HashRouter, } from "react-router-dom";

import "./styles/main.css";
import ScrollToTop from "./utils/ScrollRestoration";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL} >
        <ScrollToTop/>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/project/:id" element={<ProjectPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>

        <Footer />

      </Router>

    </div>
  );
}

export default App;
