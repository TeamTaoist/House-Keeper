import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "layout/header";
import Home from "pages/Home";
import Houses from "pages/Houses";
import Projects from "pages/Projects";
import Hackers from "pages/Hackers";
import HouseInfo from "pages/Houses/house";


export default function RouterLink() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/houses" element={<Houses />} />
        <Route path="/house/:id" element={<HouseInfo />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hackers" element={<Hackers />} />
      </Routes>
    </Router>
  );
}