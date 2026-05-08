import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Ai from "./pages/Ai";

function App() {
  // useLocation() is the "hook" that's failing.
  // It ONLY works if <BrowserRouter> is in main.jsx!
  const location = useLocation();

  return (
    <div className="app-container">
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/triage" element={<Ai />} />
      </Routes>
    </div>
  );
}

export default App;
