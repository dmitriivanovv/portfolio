import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import Projects from "./pages/Projects";

import "./styles/main.css";
import ScrollToTop from "./utils/ScrollRestoration";

function App() {
  return (
    <div className="App">
      <Router basename={'/portfolio/'} >
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
