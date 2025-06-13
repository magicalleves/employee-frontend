'use client';

import { useState } from 'react';

interface Employee {
  name: string;
  department: string;
  feedbacks: number;
  avgScore: number;
  skills: string[];
}

const fakeEmployees: Employee[] = [
  {
    name: 'John Smith',
    department: 'Engineering',
    feedbacks: 8,
    avgScore: 4.5,
    skills: ['Leadership', 'Communication', 'Innovation']
  },
  {
    name: 'Jane Doe',
    department: 'Marketing',
    feedbacks: 5,
    avgScore: 4.1,
    skills: ['Creativity', 'Teamwork', 'Planning']
  },
  {
    name: 'Ali Khan',
    department: 'HR',
    feedbacks: 6,
    avgScore: 4.3,
    skills: ['Listening', 'Support', 'Conflict Management']
  }
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>360° Feedback Dashboard</h1>
        <div className="tabs">
          <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>Overview</button>
          <button className={activeTab === 'features' ? 'active' : ''} onClick={() => setActiveTab('features')}>Features</button>
          <button className={activeTab === 'reports' ? 'active' : ''} onClick={() => setActiveTab('reports')}>Reports</button>
          <button className={activeTab === 'admin' ? 'active' : ''} onClick={() => setActiveTab('admin')}>Admin</button>
        </div>
      </header>

      <main className="dashboard-content">
        {activeTab === 'overview' && <OverviewSection />}
        {activeTab === 'features' && <FeaturesSection />}
        {activeTab === 'reports' && <ReportsSection />}
        {activeTab === 'admin' && <AdminSection />}
      </main>

      <footer className="dashboard-footer">
        <span>© 2025 Feedback360</span>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </div>
  );
}

function OverviewSection() {
  return (
    <section className="overview-section">
      <h2>Quick Stats</h2>
      <div className="quick-stats">
        <div className="stat-card">
          <h4>Total Employees</h4>
          <p>3</p>
        </div>
        <div className="stat-card">
          <h4>Feedback Submitted</h4>
          <p>19</p>
        </div>
        <div className="stat-card">
          <h4>Average Score</h4>
          <p>4.3</p>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="features-section">
      <h2>System Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Multilingual Support</h3>
          <ul>
            <li>English</li>
            <li>Spanish</li>
            <li>French</li>
          </ul>
        </div>
        <div className="feature-card">
          <h3>Automated Reminders</h3>
          <ul>
            <li>Email notifications</li>
            <li>Deadline warnings</li>
          </ul>
        </div>
        <div className="feature-card">
          <h3>Custom Feedback Forms</h3>
          <ul>
            <li>Team-based customization</li>
            <li>Role-specific templates</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ReportsSection() {
  return (
    <section className="reports-section">
      <h2>Generate Reports</h2>
      <div className="reports-grid">
        <div className="report-card">
          <h3>Individual Report</h3>
          <p>Generate personalized feedback summaries for each employee.</p>
          <button className="generate-button">Generate</button>
        </div>
        <div className="report-card">
          <h3>Team Report</h3>
          <p>View aggregate scores and areas of improvement for teams.</p>
          <button className="generate-button">Generate</button>
        </div>
        <div className="report-card">
          <h3>Skill Report</h3>
          <p>Analyze performance by key skill categories across departments.</p>
          <button className="generate-button">Generate</button>
        </div>
      </div>
    </section>
  );
}

function AdminSection() {
  const [skills, setSkills] = useState<string[]>(['Communication', 'Leadership', 'Teamwork']);
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills(prev => [...prev, newSkill]);
      setNewSkill('');
    }
  };

  return (
    <section className="admin-section">
      <h2>Admin Actions</h2>
      <div className="admin-actions">
        <div className="admin-card">
          <h3>Manage Employees</h3>
          <button onClick={() => alert('CSV Upload simulated.')}>Upload CSV</button>
          <button onClick={() => alert('Employee list simulated.')}>View All</button>
        </div>
        <div className="admin-card">
          <h3>Manage Skills</h3>
          <input
            type="text"
            className="form-input"
            value={newSkill}
            placeholder="Enter new skill"
            onChange={e => setNewSkill(e.target.value)}
          />
          <button onClick={handleAddSkill}>Add Skill</button>
          <button onClick={() => alert('Skills: ' + skills.join(', '))}>View Skills</button>
        </div>
        <div className="admin-card">
          <h3>Reset Feedback</h3>
          <button onClick={() => alert('All feedback cleared (simulated)')}>Clear All</button>
          <button onClick={() => alert('Old feedback archived (simulated)')}>Archive Old</button>
        </div>
      </div>
    </section>
  );
}