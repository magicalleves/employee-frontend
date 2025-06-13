export default function Reports() {
    return (
      <section className="reports-section">
        <h2>Generate Reports</h2>
        <div className="reports-grid">
          <div className="report-card">
            <h3>Individual Feedback</h3>
            <p>A detailed breakdown per employee across competencies.</p>
            <button className="generate-button">Generate</button>
          </div>
          <div className="report-card">
            <h3>Group Summary</h3>
            <p>Summary report by team or department showing averages.</p>
            <button className="generate-button">Generate</button>
          </div>
          <div className="report-card">
            <h3>Comparison Charts</h3>
            <p>Visual comparisons across time periods or roles.</p>
            <button className="generate-button">Generate</button>
          </div>
        </div>
      </section>
    );
  }