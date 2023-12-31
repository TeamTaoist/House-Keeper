import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./pages/home";
import CreateHousePage from "./pages/create-hacker-house";
import ExploreHouses from "./pages/explore/houses";
import ExploreHackers from "./pages/explore/hackers";
import ExploreProjects from "./pages/explore/projects";
import HackerHouseInfoPage from "./pages/hacker-house/info";
import ApplyPage from "./pages/hacker-house/apply";
import ApplyProjectPage from "./pages/hacker-house/applyProject";
import ProjectInfoPage from "./pages/project/info";
import Profile from "./pages/profile";
import ManageHackerHouseIndex from "./pages/manage/index";
import ManageHackerHouse from "./pages/manage/hackerHouse";
import RegistrationResult from "./pages/manage/registrationResult";
import GuidancePage from "./pages/guidance";
import MyHousePage from "./pages/myHouse";
import GuidanceNotion from "./pages/guidance/notion"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function RouterLink() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-to-docs" element={<GuidancePage />} />
        <Route path="/how-to-docs/:id" element={<GuidanceNotion />} />
        <Route path="/explore/hacker-houses" element={<ExploreHouses />} />
        <Route path="/explore/hackers" element={<ExploreHackers />} />
        <Route path="/explore/projects" element={<ExploreProjects />} />
        <Route path="/create-hacker-house" element={<CreateHousePage />} />
        <Route path="/hacker-house/:id" element={<HackerHouseInfoPage />} />
        <Route path="/hacker-house/:id/apply" element={<ApplyPage />} />
        <Route
          path="/hacker-house/:id/apply-project"
          element={<ApplyProjectPage />}
        />

        <Route path="/project/:id" element={<ProjectInfoPage />} />

        {/* user */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-house" element={<MyHousePage />} />
        <Route
          path="/manage/hacker-house"
          element={<ManageHackerHouseIndex />}
        />
        <Route
          path="/manage/hacker-house/:id"
          element={<ManageHackerHouse />}
        />
        <Route
          path="/manage/hacker-house/:id/registraction-result"
          element={<RegistrationResult />}
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
  );
}
