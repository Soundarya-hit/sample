import React, { useState } from "react";

function App() {
  const [active, setActive] = useState("home");

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', sans-serif;
        }

        body {
          background: #0a0a0a;
          color: #fff;
        }

        .container {
          display: flex;
          min-height: 100vh;
        }

        /* Sidebar */
        .sidebar {
          width: 220px;
          background: #111;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-right: 1px solid #222;
        }

        .logo {
          font-size: 22px;
          font-weight: bold;
          color: #00f5d4;
        }

        .nav {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .nav a {
          color: #aaa;
          text-decoration: none;
          transition: 0.3s;
        }

        .nav a.active,
        .nav a:hover {
          color: #00f5d4;
          transform: translateX(5px);
        }

        /* Main content */
        .main {
          flex: 1;
          padding: 60px;
        }

        section {
          margin-bottom: 80px;
          animation: fade 1s ease;
        }

        h1 {
          font-size: 48px;
          background: linear-gradient(90deg, #00f5d4, #9b5de5);
          -webkit-background-clip: text;
          color: transparent;
        }

        h2 {
          margin-bottom: 20px;
          font-size: 28px;
        }

        p {
          color: #bbb;
          line-height: 1.6;
        }

        /* Projects */
        .projects {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .project-card {
          padding: 20px;
          border-radius: 10px;
          background: #111;
          border: 1px solid #222;
          transition: 0.3s;
        }

        .project-card:hover {
          transform: scale(1.05);
          border-color: #00f5d4;
        }

        /* Button */
        .btn {
          margin-top: 20px;
          padding: 10px 20px;
          border: none;
          background: linear-gradient(90deg, #00f5d4, #9b5de5);
          color: #000;
          cursor: pointer;
          font-weight: bold;
        }

        /* Contact */
        input, textarea {
          width: 100%;
          margin: 10px 0;
          padding: 10px;
          background: #111;
          border: 1px solid #222;
          color: white;
        }

        /* Animation */
        @keyframes fade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }

          .sidebar {
            width: 100%;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }

          .nav {
            flex-direction: row;
          }

          .main {
            padding: 20px;
          }

          .projects {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="logo">DevX</div>

          <div className="nav">
            {["home", "about", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={active === item ? "active" : ""}
                onClick={() => setActive(item)}
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>

          <p style={{ fontSize: "12px", color: "#555" }}>
            © 2026 DevX
          </p>
        </div>

        {/* Main Content */}
        <div className="main">
          {/* Home */}
          <section id="home">
            <h1>Creative Developer</h1>
            <p>
              I design and build modern web experiences with creativity,
              performance, and clean code.
            </p>
            <button className="btn">View Work</button>
          </section>

          {/* About */}
          <section id="about">
            <h2>About Me</h2>
            <p>
              I'm a passionate developer focused on building visually stunning
              and highly functional applications. I love combining design with
              logic to create impactful digital products.
            </p>
          </section>

          {/* Projects */}
          <section id="projects">
            <h2>Projects</h2>

            <div className="projects">
              <div className="project-card">
                <h3>Creative Portfolio</h3>
                <p>Unique UI portfolio with animations</p>
              </div>

              <div className="project-card">
                <h3>Startup Landing Page</h3>
                <p>Modern responsive landing design</p>
              </div>

              <div className="project-card">
                <h3>Dashboard UI</h3>
                <p>Data visualization interface</p>
              </div>

              <div className="project-card">
                <h3>Mobile App UI</h3>
                <p>Clean mobile-first design</p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact">
            <h2>Contact</h2>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email" />
            <textarea rows="5" placeholder="Message"></textarea>
            <button className="btn">Send Message</button>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;