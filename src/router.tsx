import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./pages/home";
import CreateHousePage from "./pages/createHouse";
import ApplyPage from "./pages/apply";

export default function RouterLink() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create_house" element={<CreateHousePage />} />
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
    </Router>
  );
}
