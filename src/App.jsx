import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

/* HOME COMPONENTS */
import Hero from "./components/Hero";
import HomeIntro from "./components/HomeIntro";
import HomeStats from "./components/HomeStats";
import HomeResearch from "./components/HomeResearch";

/* PAGES */
import AboutPage from "./components/AboutPage";
import TeamPage from "./components/TeamPage";
import FundingPage from "./components/FundingPage";
import ContactPage from "./components/ContactPage";
import ResearchFocus from "./components/ResearchFocus";
import CapacityDevelopment from "./components/CapacityDevelopment";
import Forums from "./components/Forums";
import Publications from "./components/Publications";
import Media from "./components/Media";

export default function App() {
  return (
    <>
      <NavBar />

      <Routes>

        {/* ================= HOME ================= */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <HomeIntro />
              <HomeStats />
              <HomeResearch />
            </>
          }
        />

        {/* ================= ABOUT ================= */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/funding" element={<FundingPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* ================= RESEARCH ================= */}
        <Route path="/research" element={<ResearchFocus />} />

        {/* ================= CAPACITY ================= */}
        <Route path="/capacity" element={<CapacityDevelopment />} />

        {/* ================= FORUMS ================= */}
        <Route path="/forums" element={<Forums />} />

        {/* ================= PUBLICATIONS ================= */}
        <Route path="/publications" element={<Publications />} />

        {/* ================= MEDIA ================= */}
        <Route path="/media" element={<Media />} />

      </Routes>

      <Footer />
    </>
  );
}
