import { Link } from "react-router-dom";
import { ArrowRight, Globe, Zap, Shield } from "lucide-react"; // Premium icons

const Landing = () => {
  return (
    <div
      className="container"
      style={{ paddingTop: "10vh", textAlign: "center" }}
    >
      <header className="hero-section" style={{ marginBottom: "60px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "4px 12px",
            borderRadius: "100px",
            border: "1px solid var(--accents-2)",
            fontSize: "0.8rem",
            color: "var(--accents-3)",
            marginBottom: "24px",
          }}
        >
          <Shield size={14} /> Building in Public
        </div>

        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            lineHeight: "1.1",
            marginBottom: "20px",
          }}
        >
          Project Sahayaka
        </h1>
        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto 40px auto",
            fontSize: "1.1rem",
            color: "var(--accents-3)",
          }}
        >
          Bridging the emergency communication gap in remote India with
          AI-driven multilingual triage.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          {/* THE LINK TO DASHBOARD */}
          <Link to="/dashboard">
            <button
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              Get Started <ArrowRight size={18} />
            </button>
          </Link>

          <button className="secondary-btn">Learn More</button>
        </div>
      </header>

      {/* Simplified Bento Features */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "80px",
        }}
      >
        <div className="card">
          <Globe
            size={24}
            style={{ marginBottom: "12px", color: "var(--foreground)" }}
          />
          <h3>Multilingual AI</h3>
          <p>Report emergencies in Kannada, Hindi, or Marathi seamlessly.</p>
        </div>
        <div className="card">
          <Zap
            size={24}
            style={{ marginBottom: "12px", color: "var(--foreground)" }}
          />
          <h3>Offline First</h3>
          <p>
            Engineered to work in low-connectivity "dead zones" using local
            sync.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Landing;
