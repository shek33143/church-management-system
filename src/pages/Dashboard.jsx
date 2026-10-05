import React from "react";
import { Link } from "react-router-dom";
import "../Style/Dashboard.css";

function Dashboard() {
  // =========================
  // SAMPLE DATA
  // =========================

  const members = [
    {
      name: "Raj Kumar",
      role: "Member",
      phone: "9876543210",
      status: "Active",
    },
    {
      name: "Anitha",
      role: "Member",
      phone: "9876543211",
      status: "Active",
    },
    {
      name: "Samuel",
      role: "Volunteer",
      phone: "9876543212",
      status: "Active",
    },
    {
      name: "John",
      role: "Member",
      phone: "9876543213",
      status: "Active",
    },
  ];

  const events = [
    {
      title: "Sunday Worship",
      date: "12",
      month: "JUN",
      time: "09:00 AM",
      location: "Main Church",
    },
    {
      title: "Youth Meeting",
      date: "15",
      month: "JUN",
      time: "05:00 PM",
      location: "Youth Hall",
    },
    {
      title: "Bible Study",
      date: "18",
      month: "JUN",
      time: "06:30 PM",
      location: "Prayer Hall",
    },
    {
      title: "Prayer Meeting",
      date: "22",
      month: "JUN",
      time: "07:00 PM",
      location: "Main Church",
    },
  ];

  const donations = [
    {
      name: "Raj Kumar",
      type: "Sunday Offering",
      amount: "₹2,500",
    },
    {
      name: "Anitha",
      type: "Church Fund",
      amount: "₹1,500",
    },
    {
      name: "Samuel",
      type: "Building Fund",
      amount: "₹5,000",
    },
    {
      name: "John",
      type: "Special Offering",
      amount: "₹2,000",
    },
  ];

  const documents = [
    {
      name: "Church Annual Report",
      type: "PDF",
      date: "10 Jun 2025",
    },
    {
      name: "Member Registration Form",
      type: "DOCX",
      date: "08 Jun 2025",
    },
    {
      name: "Church Meeting Notes",
      type: "PDF",
      date: "05 Jun 2025",
    },
    {
      name: "Financial Report",
      type: "XLSX",
      date: "02 Jun 2025",
    },
  ];

  return (
    <div className="dashboard-page">

      {/* =========================
          HEADER
      ========================= */}

      <div className="dashboard-header">

        <div>
          <h2>Dashboard</h2>

          <p>
            Welcome back, Admin! Here's your church overview.
          </p>
        </div>

        <div className="dashboard-date">
          📅 Today
        </div>

      </div>


      {/* =========================
          SUMMARY CARDS
      ========================= */}

      <div className="dashboard-cards">

        {/* Members */}

        <Link
          to="/members"
          className="dashboard-card members-card"
        >
          <div className="dashboard-card-icon">
            👥
          </div>

          <div className="dashboard-card-content">

            <span>Total Members</span>

            <h3>250</h3>

            <small>
              <b>+12</b> this month
            </small>

          </div>
        </Link>


        {/* Events */}

        <Link
          to="/events"
          className="dashboard-card events-card"
        >
          <div className="dashboard-card-icon">
            📅
          </div>

          <div className="dashboard-card-content">

            <span>Upcoming Events</span>

            <h3>08</h3>

            <small>
              <b>3</b> this week
            </small>

          </div>
        </Link>


        {/* Donations */}

        <Link
          to="/donations"
          className="dashboard-card donations-card"
        >
          <div className="dashboard-card-icon">
            💰
          </div>

          <div className="dashboard-card-content">

            <span>Total Donations</span>

            <h3>₹45,500</h3>

            <small>
              This month
            </small>

          </div>
        </Link>


        {/* Documents */}

        <Link
          to="/documents"
          className="dashboard-card documents-card"
        >
          <div className="dashboard-card-icon">
            📄
          </div>

          <div className="dashboard-card-content">

            <span>Total Documents</span>

            <h3>36</h3>

            <small>
              Uploaded files
            </small>

          </div>
        </Link>

      </div>


      {/* =========================
          RECENT ACTIVITY
      ========================= */}

      <div className="dashboard-box">

        <div className="dashboard-box-header">

          <div>
            <h3>Recent Activity</h3>

            <p>
              Latest church management activities
            </p>
          </div>

        </div>


        <div className="recent-activity-grid">

          <div className="activity-item">

            <div className="activity-icon green">
              👤
            </div>

            <div>
              <strong>
                New member added
              </strong>

              <span>
                Raj Kumar was added to members
              </span>

              <small>
                10 minutes ago
              </small>
            </div>

          </div>


          <div className="activity-item">

            <div className="activity-icon blue">
              📅
            </div>

            <div>
              <strong>
                New event created
              </strong>

              <span>
                Sunday Worship event was created
              </span>

              <small>
                30 minutes ago
              </small>
            </div>

          </div>


          <div className="activity-item">

            <div className="activity-icon yellow">
              💰
            </div>

            <div>
              <strong>
                Donation received
              </strong>

              <span>
                ₹2,500 donation received
              </span>

              <small>
                1 hour ago
              </small>
            </div>

          </div>


          <div className="activity-item">

            <div className="activity-icon purple">
              📄
            </div>

            <div>
              <strong>
                Document uploaded
              </strong>

              <span>
                Church Annual Report uploaded
              </span>

              <small>
                2 hours ago
              </small>
            </div>

          </div>

        </div>

      </div>


      {/* =========================
          TWO COLUMN SECTION
      ========================= */}

      <div className="dashboard-main-grid">


        {/* =========================
            RECENT MEMBERS
        ========================= */}

        <div className="dashboard-box">

          <div className="dashboard-box-header">

            <div>
              <h3>Recent Members</h3>

              <p>
                Recently added church members
              </p>
            </div>

            <Link
              to="/members"
              className="view-all"
            >
              View All
            </Link>

          </div>


          <div className="member-list">

            {members.map((member, index) => (

              <div
                className="member-list-item"
                key={index}
              >

                <div className="member-avatar">
                  {member.name.charAt(0)}
                </div>

                <div className="member-info">

                  <strong>
                    {member.name}
                  </strong>

                  <span>
                    {member.role}
                  </span>

                </div>

                <div className="member-status">
                  {member.status}
                </div>

              </div>

            ))}

          </div>

        </div>


        {/* =========================
            UPCOMING EVENTS
        ========================= */}

        <div className="dashboard-box">

          <div className="dashboard-box-header">

            <div>
              <h3>Upcoming Events</h3>

              <p>
                Next church activities
              </p>
            </div>

            <Link
              to="/events"
              className="view-all"
            >
              View All
            </Link>

          </div>


          <div className="event-list">

            {events.map((event, index) => (

              <div
                className="event-item"
                key={index}
              >

                <div className="event-date">

                  <strong>
                    {event.date}
                  </strong>

                  <span>
                    {event.month}
                  </span>

                </div>


                <div className="event-info">

                  <strong>
                    {event.title}
                  </strong>

                  <span>
                    ⏰ {event.time}
                  </span>

                  <small>
                    📍 {event.location}
                  </small>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* =========================
          DONATIONS + DOCUMENTS
      ========================= */}

      <div className="dashboard-main-grid">


        {/* =========================
            DONATIONS
        ========================= */}

        <div className="dashboard-box">

          <div className="dashboard-box-header">

            <div>
              <h3>Recent Donations</h3>

              <p>
                Latest donation records
              </p>
            </div>

            <Link
              to="/donations"
              className="view-all"
            >
              View All
            </Link>

          </div>


          <div className="dashboard-list">

            {donations.map((donation, index) => (

              <div
                className="dashboard-list-item"
                key={index}
              >

                <div
                  className={`list-avatar ${
                    index === 0
                      ? "green"
                      : index === 1
                      ? "blue"
                      : index === 2
                      ? "yellow"
                      : "purple"
                  }`}
                >
                  {donation.name.charAt(0)}
                </div>


                <div className="list-content">

                  <strong>
                    {donation.name}
                  </strong>

                  <span>
                    {donation.type}
                  </span>

                </div>


                <strong className="amount">
                  {donation.amount}
                </strong>

              </div>

            ))}

          </div>

        </div>


        {/* =========================
            DOCUMENTS
        ========================= */}

        <div className="dashboard-box">

          <div className="dashboard-box-header">

            <div>
              <h3>Recent Documents</h3>

              <p>
                Recently uploaded files
              </p>
            </div>

            <Link
              to="/documents"
              className="view-all"
            >
              View All
            </Link>

          </div>


          <div className="document-list">

            {documents.map((document, index) => (

              <div
                className="document-list-item"
                key={index}
              >

                <div className="document-list-icon">
                  📄
                </div>


                <div className="document-list-info">

                  <strong>
                    {document.name}
                  </strong>

                  <span>
                    {document.type} • {document.date}
                  </span>

                </div>


                <span className="document-type">
                  {document.type}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* =========================
          QUICK ACTIONS
      ========================= */}

      <div className="dashboard-box quick-actions-box">

        <div className="dashboard-box-header">

          <div>
            <h3>Quick Actions</h3>

            <p>
              Frequently used options
            </p>
          </div>

        </div>


        <div className="quick-actions">

          <Link
            to="/members"
            className="quick-action quick-member"
          >
            <span>👤</span>
            <strong>Add Member</strong>
          </Link>


          <Link
            to="/events"
            className="quick-action quick-event"
          >
            <span>📅</span>
            <strong>Add Event</strong>
          </Link>


          <Link
            to="/donations"
            className="quick-action quick-donation"
          >
            <span>💰</span>
            <strong>Add Donation</strong>
          </Link>


          <Link
            to="/documents"
            className="quick-action quick-document"
          >
            <span>📄</span>
            <strong>Upload Document</strong>
          </Link>

        </div>

      </div>


      {/* =========================
          FOOTER MESSAGE
      ========================= */}

      <div className="dashboard-footer">

        <span>⛪</span>

        <p>
          Serving the church with faith,
          love and dedication.
        </p>

      </div>

    </div>
  );
}

export default Dashboard;