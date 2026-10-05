import React from "react";
import "../Style/Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* =================================
          HERO SECTION
      ================================= */}

      <section className="home-hero">

        <div className="hero-content">

          <span className="hero-badge">
            ⛪ CHURCH MANAGEMENT SYSTEM
          </span>

          <h1>
            Welcome to Our
            <span> Church Family</span>
          </h1>

          <p>
            Manage your church members, events,
            donations and documents easily from
            one simple and powerful system.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() =>
                (window.location.href = "/dashboard")
              }
            >
              📊 Go to Dashboard
            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                (window.location.href = "/events")
              }
            >
              📅 View Events
            </button>

          </div>

        </div>


        {/* CHURCH VISUAL */}

        <div className="hero-visual">

          <div className="sun-circle"></div>

          <div className="cloud cloud-one"></div>
          <div className="cloud cloud-two"></div>

          <div className="church-building">

            <div className="church-cross">
              ✝
            </div>

            <div className="church-roof"></div>

            <div className="church-body">

              <div className="church-window window-one">
                ◉
              </div>

              <div className="church-door">
                🚪
              </div>

              <div className="church-window window-two">
                ◉
              </div>

            </div>

          </div>

          <div className="ground"></div>

        </div>

      </section>


      {/* =================================
          WELCOME SECTION
      ================================= */}

      <section className="welcome-section">

        <div className="welcome-text">

          <span className="section-label">
            ✨ WELCOME
          </span>

          <h2>
            Everything Your Church
            <span> Needs in One Place</span>
          </h2>

          <p>
            Our Church Management System helps
            administrators organize church activities,
            manage members, track donations and
            maintain important documents efficiently.
          </p>

        </div>


        <div className="welcome-quote">

          <div className="quote-icon">
            “
          </div>

          <p>
            Serve with love, manage with wisdom,
            and grow together as one family.
          </p>

          <span>
            — Church Family
          </span>

        </div>

      </section>


      {/* =================================
          FEATURE CARDS
      ================================= */}

      <section className="features-section">

        <div className="feature-card members-card">

          <div className="feature-icon">
            👥
          </div>

          <div>
            <h3>
              Members
            </h3>

            <p>
              Manage church members and
              their information easily.
            </p>
          </div>

          <span className="feature-arrow">
            →
          </span>

        </div>


        <div className="feature-card events-card">

          <div className="feature-icon">
            📅
          </div>

          <div>
            <h3>
              Events
            </h3>

            <p>
              Organize upcoming church
              events and programs.
            </p>
          </div>

          <span className="feature-arrow">
            →
          </span>

        </div>


        <div className="feature-card donation-card">

          <div className="feature-icon">
            💰
          </div>

          <div>
            <h3>
              Donations
            </h3>

            <p>
              Keep track of church donations
              and financial records.
            </p>
          </div>

          <span className="feature-arrow">
            →
          </span>

        </div>


        <div className="feature-card document-card">

          <div className="feature-icon">
            📄
          </div>

          <div>
            <h3>
              Documents
            </h3>

            <p>
              Store and manage important
              church documents securely.
            </p>
          </div>

          <span className="feature-arrow">
            →
          </span>

        </div>

      </section>


      {/* =================================
          BIBLE VERSE
      ================================= */}

      <section className="verse-section">

        <div className="verse-cross">
          ✝
        </div>

        <h2>
          "For where two or three are gathered
          in my name, there am I among them."
        </h2>

        <p>
          Matthew 18:20
        </p>

      </section>


      {/* =================================
          FOOTER
      ================================= */}

      <footer className="home-footer">

        <div>
          ⛪
          <strong>
            Church Management System
          </strong>
        </div>

        <span>
          Manage • Serve • Grow Together
        </span>

      </footer>

    </div>
  );
}

export default Home;