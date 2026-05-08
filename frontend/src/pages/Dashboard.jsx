const Dashboard = () => {
  const activeAlerts = [
    { id: 1, status: "Critical", location: "Gokak Falls", time: "2 mins ago" },
    {
      id: 2,
      status: "Urgent",
      location: "Khanapur Forest",
      time: "10 mins ago",
    },
  ];

  return (
    <div className="dashboard-container">
      <h2>Live Emergency Feed</h2>
      <div className="alert-list">
        {activeAlerts.map((alert) => (
          <div
            key={alert.id}
            className={`alert-item ${alert.status.toLowerCase()}`}
          >
            <span>{alert.status}</span>
            <p>{alert.location}</p>
            <small>{alert.time}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
