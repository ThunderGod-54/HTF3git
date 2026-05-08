import { AlertTriangle, MapPin, Clock, Shield, Ambulance, Activity, Users } from "lucide-react";

const nearbyServices = [
  {
    id: 1,
    type: "Police",
    name: "Gokak Police Station",
    distance: "1.2 km",
    eta: "4 min",
    status: "Available",
    icon: Shield,
    color: "#3b82f6",
  },
  {
    id: 2,
    type: "Police",
    name: "Khanapur Outpost",
    distance: "3.5 km",
    eta: "9 min",
    status: "On Patrol",
    icon: Shield,
    color: "#3b82f6",
  },
  {
    id: 3,
    type: "Ambulance",
    name: "City Medical Unit 1",
    distance: "2.1 km",
    eta: "6 min",
    status: "Available",
    icon: Ambulance,
    color: "#ef4444",
  },
  {
    id: 4,
    type: "Ambulance",
    name: "Rapid Response Unit",
    distance: "4.8 km",
    eta: "12 min",
    status: "Standby",
    icon: Ambulance,
    color: "#ef4444",
  },
];

const Dashboard = () => {
  const activeAlerts = [
    { id: 1, status: "Critical", location: "Gokak Falls", time: "2 mins ago", type: "Flood" },
    { id: 2, status: "Urgent", location: "Khanapur Forest", time: "10 mins ago", type: "Fire" },
    { id: 3, status: "Moderate", location: "Belagavi Highway", time: "22 mins ago", type: "Accident" },
  ];

  const stats = [
    { label: "Active Alerts", value: "3", icon: AlertTriangle, color: "#ef4444" },
    { label: "Units Deployed", value: "7", icon: Users, color: "#3b82f6" },
    { label: "Resolved Today", value: "12", icon: Activity, color: "#22c55e" },
  ];

  return (
    <div className="dashboard-container">
      {/* Stats Row */}
      <div className="stats-row">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="stat-card">
              <div className="stat-icon" style={{ color: stat.color, background: `${stat.color}18` }}>
                <Icon size={20} />
              </div>
              <div>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Grid */}
      <div className="dashboard-grid">
        {/* Live Alert Feed */}
        <div className="dashboard-panel">
          <h2>
            <span className="live-dot" aria-hidden="true"></span>
            Live Emergency Feed
          </h2>
          <div className="alert-list">
            {activeAlerts.map((alert) => (
              <div key={alert.id} className={`alert-item ${alert.status.toLowerCase()}`}>
                <span className="alert-badge">{alert.status}</span>
                <div className="alert-info">
                  <p className="alert-location">
                    <MapPin size={14} /> {alert.location}
                  </p>
                  <small>
                    <Clock size={12} /> {alert.time} &nbsp;·&nbsp; {alert.type}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Services */}
        <div className="dashboard-panel">
          <h2>Nearby Services</h2>
          <div className="services-list">
            {nearbyServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="service-item">
                  <div className="service-icon" style={{ background: `${service.color}22`, color: service.color }}>
                    <Icon size={18} />
                  </div>
                  <div className="service-info">
                    <span className="service-name">{service.name}</span>
                    <span className="service-meta">
                      <MapPin size={11} /> {service.distance} &nbsp;&middot;&nbsp;
                      <Clock size={11} /> ETA {service.eta}
                    </span>
                  </div>
                  <span
                    className="service-status"
                    style={{ color: service.status === "Available" ? "#22c55e" : "#f59e0b" }}
                  >
                    {service.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Emergency hint */}
      <div className="emergency-hint-bar">
        <AlertTriangle size={16} />
        <span>In an emergency, press the red SOS button at the bottom-right of your screen</span>
      </div>
    </div>
  );
};

export default Dashboard;
