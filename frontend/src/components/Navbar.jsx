import { Shield, Activity, LayoutDashboard, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Shield size={24} />
        <span style={{ fontWeight: 700, fontSize: "1.2rem" }}>Sahayaka</span>
      </div>
      <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        <Link
          to="/"
          style={{
            color: "var(--accents-3)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <Home size={18} /> Home
        </Link>
        <Link
          to="/dashboard"
          style={{
            color: "var(--accents-3)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <LayoutDashboard size={18} /> Dashboard
        </Link>
        <Link to="/triage">
          <button style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Activity size={18} /> Triage
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
