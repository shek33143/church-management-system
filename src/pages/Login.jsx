import React, { useState } from "react";


function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    // Demo Login
    if (username === "admin" && password === "1234") {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-page">

      <div className="login-container">

        {/* =================================
            LEFT SIDE
        ================================= */}

        <div className="login-left">

          <div className="login-decoration decoration-one"></div>
          <div className="login-decoration decoration-two"></div>

          <div className="login-church-icon">
            ⛪
          </div>

          <span className="login-welcome">
            WELCOME TO
          </span>

          <h1>
            Church
            <br />
            Management
            <br />
            System
          </h1>

          <p>
            Manage members, events, donations
            and church documents easily from
            one powerful platform.
          </p>

          <div className="login-features">

            <div>
              <span>✓</span>
              Easy Church Management
            </div>

            <div>
              <span>✓</span>
              Secure Member Records
            </div>

            <div>
              <span>✓</span>
              Simple Donation Tracking
            </div>

          </div>

        </div>


        {/* =================================
            RIGHT SIDE
        ================================= */}

        <div className="login-right">

          <div className="login-form-container">

            {/* Logo */}

            <div className="login-logo">
              ⛪
            </div>

            <h2>
              Welcome Back!
            </h2>

            <p className="login-subtitle">
              Please login to continue
            </p>


            {/* =================================
                LOGIN FORM
            ================================= */}

            <form onSubmit={handleLogin}>

              {/* Username */}

              <div className="input-group">

                <label>
                  Username
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    👤
                  </span>

                  <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) =>
                      setUsername(e.target.value)
                    }
                    autoComplete="username"
                    required
                  />

                </div>

              </div>


              {/* Password */}

              <div className="input-group">

                <label>
                  Password
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    🔒
                  </span>

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    autoComplete="current-password"
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    aria-label="Show or hide password"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>

                </div>

              </div>


              {/* Options */}

              <div className="login-options">

                <label className="remember-me">

                  <input
                    type="checkbox"
                  />

                  <span>
                    Remember me
                  </span>

                </label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() =>
                    alert(
                      "Please contact the administrator to reset your password."
                    )
                  }
                >
                  Forgot Password?
                </button>

              </div>


              {/* Error */}

              {error && (
                <div className="login-error">
                  ⚠️ {error}
                </div>
              )}


              {/* Login Button */}

              <button
                type="submit"
                className="login-btn"
              >
                <span>
                  Login
                </span>

                <span>
                  →
                </span>
              </button>

            </form>


            {/* =================================
                DEMO LOGIN
            ================================= */}

            <div className="demo-login">

              <div className="demo-title">
                🔑 Demo Account
              </div>

              <div className="demo-details">

                <div>
                  <span>Username</span>
                  <strong>admin</strong>
                </div>

                <div>
                  <span>Password</span>
                  <strong>1234</strong>
                </div>

              </div>

            </div>


            {/* Footer */}

            <div className="login-footer">
              <span>⛪</span>
              Church Management System
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;