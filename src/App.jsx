import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import HomeIntro from "./components/HomeIntro";
import HomeStats from "./components/HomeStats";
import HomeResearch from "./components/HomeResearch";

import AboutPage from "./components/AboutPage";
import TeamPage from "./components/TeamPage";
import FundingPage from "./components/FundingPage";
import ContactPage from "./components/ContactPage";
import WorkWithUs from "./components/WorkWithUs";
import ResearchFocus from "./components/ResearchFocus";
import ResearchAreaPage from "./components/ResearchAreaPage";
import CapacityDevelopment from "./components/CapacityDevelopment";
import Forums from "./components/Forums";
import Publications from "./components/Publications";
import Media from "./components/Media";
import AdminPage from "./components/AdminPage";

import PublicationDetail from "./components/PublicationDetail";
import AdminPublications from "./components/AdminPublications";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <NavBar />

      <Routes>
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

        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="/funding" element={<FundingPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/research" element={<ResearchFocus />} />
        <Route path="/research/:slug" element={<ResearchAreaPage />} />

        <Route path="/capacity" element={<CapacityDevelopment />} />

        <Route path="/forums" element={<Forums />} />

        <Route path="/publications" element={<Publications />} />

        <Route
          path="/publications/:slug"
          element={<PublicationDetail />}
        />

        <Route
          path="/content/:slug"
          element={<PublicationDetail />}
        />

        <Route
          path="/admin/publications"
          element={<AdminPublications />}
        />

        <Route path="/media" element={<Media />} />

        <Route path="/admin" element={<AdminPage />} />
      </Routes>

      <Footer />
    </>
  );
}
