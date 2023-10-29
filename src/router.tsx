import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./pages/home";
import CreateHousePage from "./pages/create-hacker-house";
import ApplyPage from "./pages/apply";
import ExploreHouses from "./pages/explore/houses";
import ExploreHackers from "./pages/explore/hackers";
import ExploreProjects from "./pages/explore/projects";
import HackerHouseInfoPage from "./pages/hacker-house/info";

export default function RouterLink() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore/hacker-houses" element={<ExploreHouses />} />
        <Route path="/explore/hackers" element={<ExploreHackers />} />
        <Route path="/explore/projects" element={<ExploreProjects />} />
        <Route path="/create-hacker-house" element={<CreateHousePage />} />
        <Route path="/hacker-house/:id" element={<HackerHouseInfoPage />} />

        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
    </Router>
  );
}
