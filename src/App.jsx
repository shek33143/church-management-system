import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Events from "./pages/Events";
import Donations from "./pages/Donations";
import Documents from "./pages/Documents";

import "./App.css";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("churchLogin") === "true"
  );


  // =========================
  // LOGIN
  // =========================

  const handleLogin = () => {
    localStorage.setItem("churchLogin", "true");

    setIsLoggedIn(true);
  };


  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {
    localStorage.removeItem("churchLogin");

    setIsLoggedIn(false);
  };


  // =========================
  // LOGIN SCREEN
  // =========================

  if (!isLoggedIn) {
    return (
      <Login onLogin={handleLogin} />
    );
  }


  // =========================
  // MAIN APP
  // =========================

  return (
    <BrowserRouter>

      <div className="app">

        {/* SIDEBAR */}

        <aside className="sidebar">

          {/* LOGO */}

          <div className="logo">

            <div className="logo-icon">
              ⛪
            </div>

            <div>

              <h2>
                Church Admin
              </h2>

              <span>
                Management System
              </span>

            </div>

          </div>


          {/* NAVIGATION */}

          <nav className="sidebar-nav">

            <div className="nav-title">
              Main Menu
            </div>


            <NavLink to="/">
              <span className="nav-icon">
                🏠
              </span>

              Home
            </NavLink>


            <NavLink to="/dashboard">
              <span className="nav-icon">
                📊
              </span>

              Dashboard
            </NavLink>


            <NavLink to="/members">
              <span className="nav-icon">
                👥
              </span>

              Members
            </NavLink>


            <NavLink to="/events">
              <span className="nav-icon">
                📅
              </span>

              Events
            </NavLink>


            <NavLink to="/donations">
              <span className="nav-icon">
                💰
              </span>

              Donations
            </NavLink>


            <NavLink to="/documents">
              <span className="nav-icon">
                📄
              </span>

              Documents
            </NavLink>

          </nav>


          {/* USER */}

          <div className="sidebar-footer">

            <div className="sidebar-user">

              <div className="sidebar-user-avatar">
                A
              </div>

              <div className="sidebar-user-info">

                <strong>
                  Admin
                </strong>

                <span>
                  Administrator
                </span>

              </div>

            </div>


            {/* LOGOUT */}

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              🚪 Logout
            </button>

          </div>

        </aside>


        {/* MAIN */}

        <main className="main">

          {/* TOPBAR */}

          <header className="topbar">

            <div className="topbar-left">

              <div>

                <h3>
                  Church Management System
                </h3>

                <p>
                  Manage your church activities
                </p>

              </div>

            </div>


            <div className="topbar-right">

              <button className="notification-btn">
                🔔
                <span className="notification-dot"></span>
              </button>


              <div className="profile">

                <div className="profile-avatar">
                  A
                </div>

                <div className="profile-info">

                  <strong>
                    Admin
                  </strong>

                  <span>
                    Administrator
                  </span>

                </div>

              </div>

            </div>

          </header>


          {/* CONTENT */}

          <section className="content">

            <Routes>

              <Route
                path="/"
                element={<Home />}
              />

              <Route
                path="/dashboard"
                element={<Dashboard />}
              />

              <Route
                path="/members"
                element={<Members />}
              />

              <Route
                path="/events"
                element={<Events />}
              />

              <Route
                path="/donations"
                element={<Donations />}
              />

              <Route
                path="/documents"
                element={<Documents />}
              />

              <Route
                path="*"
                element={
                  <Navigate
                    to="/"
                    replace
                  />
                }
              />

            </Routes>

          </section>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;