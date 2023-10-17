import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/home";
import CreateHousePage from "./pages/createHouse";

export default function RouterLink() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create_house" element={<CreateHousePage />} />
      </Routes>
    </Router>
  );
}
