import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Jobs from "./components/Jobo/Jobs";
import PagePoste from "./components/PagePoste/PagePoste";
import Dashbords from "./components/dashbord/Layout";
import Layout from "./components/dashbord/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/job" element={<Jobs />} />
          <Route path="/page-post" element={<PagePoste />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
