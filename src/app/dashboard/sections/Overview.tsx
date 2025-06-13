export default function Overview() {
    return (
      <section className="overview-section">
        <h2>Welcome to the 360° Feedback Dashboard</h2>
        <div className="quick-stats">
          <div className="stat-card">
            <h4>Total Employees</h4>
            <p>42</p>
          </div>
          <div className="stat-card">
            <h4>Active Evaluations</h4>
            <p>8</p>
          </div>
          <div className="stat-card">
            <h4>Completed Reports</h4>
            <p>23</p>
          </div>
        </div>
      </section>
    );
  }