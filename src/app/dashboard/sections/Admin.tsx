export default function Admin() {
    return (
      <section className="admin-section">
        <h2>Admin Tools</h2>
        <div className="admin-actions">
          <div className="admin-card">
            <h3>Manage Employees</h3>
            <button>Add Employee</button>
            <button>Edit/Delete</button>
          </div>
          <div className="admin-card">
            <h3>Manage Skills</h3>
            <button>Add Skill Group</button>
            <button>Edit Skills</button>
          </div>
          <div className="admin-card">
            <h3>Setup Evaluation</h3>
            <button>New 360° Setup</button>
            <button>Define Roles</button>
          </div>
          <div className="admin-card">
            <h3>Export & Import</h3>
            <button>Upload CSV</button>
            <button>Download Reports</button>
          </div>
        </div>
      </section>
    );
  }