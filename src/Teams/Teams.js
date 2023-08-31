import React from 'react';
import './Teams.css';
import '../boxicons-2.0.9/css/boxicons.min.css';

function Teams() {
  const centerStyle = {
    textAlign: 'center',
  };

  return (
<div id="teams" className="bg-light py-3">
      <div className="text-left">
        <br />
       
<div className="d-flex align-items-center">
  <h2>Meet Our Professional Teams</h2>
  <button className="lets-talk-btn">let's work together</button>
</div>


      </div>
      <div className="wrapper">
      
        <div className="card-items-row">
        
          {/* Software Development Team */}
          <div className="card">
            <div className="card-header">
              <img src="/images/Software Development Team.jpg" alt="Software Development Team" />
            </div>
            <div className="card-body">
              <h3>Software Development Team</h3>
              <p>Our Software Development Team is committed to building robust platforms that harness the power of AI to innovate and transform industries. Driving changes through tailored software solutions, we empower businesses to reach new heights of efficiency and excellence.</p>
              <button className="meet-team-btn">Meet Our Team</button>
            </div>
          </div>
          {/* Machine Learning Team */}
          <div className="card">
            <div className="card-header">
              <img src="/images/Machine Learning Team.jpg" alt="Machine Learning Team" />
            </div>
            <div className="card-body">
              <h3>Machine Learning Team</h3>
              <p>The Machine Learning Team at Inteliverse is at the forefront of leveraging data to create intelligent solutions that adapt and grow. Through our machine learning expertise, we enable enterprises to derive insights and make data-driven decisions that fuel growth.</p>
              <button className="meet-team-btn">Meet Our Team</button>
            </div>
          </div>
          {/* Data Engineering Team */}
          <div className="card">
            <div className="card-header">
              <img src="/images/Data Engineering Team.jpg" alt="Data Engineering Team" />
            </div>
            <div className="card-body">
              <h3>Data Engineering Team</h3>
              <p>Inteliverse's Data Engineering Team is dedicated to architecting data infrastructure that ensures seamless integration and scalability. We construct data solutions that enable businesses to harness information effectively, driving changes that lead to success.</p>
              <button className="meet-team-btn">Meet Our Team</button>
            </div>
          </div>
        </div>
        <div className="card-items-row">
          {/* DevOps Team */}
          <div className="card">
            <div className="card-header">
              <img src="/images/DevOps Team.jpg" alt="DevOps Team" />
            </div>
            <div className="card-body">
              <h3>DevOps Team</h3>
              <p>Our DevOps Team ensures smooth deployment and continuous integration, keeping our AI-powered solutions agile and responsive. Through automation and collaboration, we provide a seamless environment that nurtures innovation and rapid development.</p>
              <button className="meet-team-btn">Meet Our Team</button>
            </div>
          </div>
          {/* CyberSecurity Team */}
          <div className="card">
            <div className="card-header">
              <img src="/images/CyberSecurity Team.jpg" alt="CyberSecurity Team" />
            </div>
            <div className="card-body">
              <h3>CyberSecurity Team</h3>
              <p>Inteliverse's Security Team is steadfast in protecting the integrity of our AI & Data Solutions, ensuring trust and compliance. We build security into every layer of our solutions, safeguarding data and privacy, and driving changes responsibly.</p>
              <button className="meet-team-btn">Meet Our Team</button>
            </div>
          </div>
          {/* UI/UX Team */}
          <div className="card">
            <div className="card-header">
              <img src="/images/User Experience and User Interface Team.jpg" alt="User Experience and User Interface Team (UI/UX)" />
            </div>
            <div className="card-body">
              <h3>User Experience and User Interface Team (UI/UX)</h3>
              <p>Our UI/UX Team crafts user-centric designs that make our AI & Data Solutions accessible and engaging for all users. By focusing on human-centered design, we create experiences that empower users to interact with data in meaningful ways.</p>
              <button className="meet-team-btn">Meet Our Team</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;

