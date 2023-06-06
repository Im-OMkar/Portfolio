import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home-page";
import ProjectPage from "./pages/project-page";
import AboutPage from "./pages/about-page";
import ContactPage from "./pages/contact-page";

function App() {
  return (
    <div className="bg-[#282C33]">
      <Navbar />
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
