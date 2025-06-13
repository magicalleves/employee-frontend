export default function Features() {
    return (
      <section className="features-section">
        <h2>System Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Multilingual Support</h3>
            <ul>
              <li>English</li>
              <li>German</li>
              <li>Spanish</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Technical Support</h3>
            <ul>
              <li>Chatbot (24/7)</li>
              <li>FAQ Section</li>
              <li>Email Helpdesk</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Reminders</h3>
            <ul>
              <li>Email notification system</li>
              <li>Automatic follow-up</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>File Upload & Export</h3>
            <ul>
              <li>Upload employee CSV</li>
              <li>Download PDF reports</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }