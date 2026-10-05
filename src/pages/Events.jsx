import React, { useState } from "react";
import "../Style/Events.css";

function Events() {
  const [showForm, setShowForm] = useState(false);

  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Sunday Worship Service",
      date: "2026-10-11",
      time: "09:00 AM",
      location: "Main Church",
      type: "Worship",
      description: "Weekly Sunday worship and prayer service.",
    },
    {
      id: 2,
      title: "Youth Meeting",
      date: "2026-10-15",
      time: "06:00 PM",
      location: "Church Hall",
      type: "Youth",
      description: "Special meeting and fellowship for church youth.",
    },
    {
      id: 3,
      title: "Bible Study",
      date: "2026-10-18",
      time: "05:00 PM",
      location: "Prayer Hall",
      type: "Bible Study",
      description: "Weekly Bible study and spiritual discussion.",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    type: "",
    description: "",
  });

  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  // Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add / Update Event
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.date ||
      !formData.time ||
      !formData.location ||
      !formData.type
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (editId) {
      setEvents(
        events.map((event) =>
          event.id === editId
            ? {
                ...event,
                ...formData,
              }
            : event
        )
      );

      setEditId(null);
    } else {
      const newEvent = {
        id: Date.now(),
        ...formData,
      };

      setEvents([
        ...events,
        newEvent,
      ]);
    }

    setFormData({
      title: "",
      date: "",
      time: "",
      location: "",
      type: "",
      description: "",
    });

    setShowForm(false);
  };

  // Edit Event
  const handleEdit = (event) => {
    setFormData({
      title: event.title,
      date: event.date,
      time: event.time,
      location: event.location,
      type: event.type,
      description: event.description || "",
    });

    setEditId(event.id);
    setShowForm(true);
  };

  // Delete Event
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (confirmDelete) {
      setEvents(
        events.filter(
          (event) => event.id !== id
        )
      );
    }
  };

  // Search
  const filteredEvents = events.filter(
    (event) =>
      event.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      event.type
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      event.location
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  // Format Date
  const getDate = (date) => {
    const eventDate = new Date(date);

    return {
      day: eventDate.getDate(),
      month: eventDate.toLocaleDateString(
        "en-US",
        {
          month: "short",
        }
      ),
    };
  };

  // Cancel Form
  const handleCancel = () => {
    setShowForm(false);
    setEditId(null);

    setFormData({
      title: "",
      date: "",
      time: "",
      location: "",
      type: "",
      description: "",
    });
  };

  return (
    <div className="events-page">

      {/* Header */}

      <div className="events-header">

        <div>
          <h2>Events</h2>

          <p>
            Manage church events and activities
          </p>
        </div>

        <button
          className="add-event-btn"
          onClick={() => {
            if (showForm) {
              handleCancel();
            } else {
              setShowForm(true);
            }
          }}
        >
          {showForm
            ? "✕ Close"
            : "+ Add Event"}
        </button>

      </div>

      {/* Add / Edit Form */}

      {showForm && (
        <div className="event-form-container">

          <div className="event-form-title">

            <div className="event-form-icon">
              📅
            </div>

            <div>
              <h3>
                {editId
                  ? "Edit Event"
                  : "Add New Event"}
              </h3>

              <p>
                {editId
                  ? "Update event details"
                  : "Enter the details of your church event"}
              </p>
            </div>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="event-form-grid">

              {/* Event Name */}

              <div className="event-form-group">

                <label>
                  Event Name *
                </label>

                <input
                  type="text"
                  name="title"
                  placeholder="Enter event name"
                  value={formData.title}
                  onChange={handleChange}
                />

              </div>

              {/* Event Type */}

              <div className="event-form-group">

                <label>
                  Event Type *
                </label>

                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Event Type
                  </option>

                  <option value="Worship">
                    Worship
                  </option>

                  <option value="Prayer">
                    Prayer
                  </option>

                  <option value="Youth">
                    Youth
                  </option>

                  <option value="Bible Study">
                    Bible Study
                  </option>

                  <option value="Meeting">
                    Meeting
                  </option>

                  <option value="Festival">
                    Festival
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>

              {/* Date */}

              <div className="event-form-group">

                <label>
                  Date *
                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />

              </div>

              {/* Time */}

              <div className="event-form-group">

                <label>
                  Time *
                </label>

                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                />

              </div>

              {/* Location */}

              <div className="event-form-group">

                <label>
                  Location *
                </label>

                <input
                  type="text"
                  name="location"
                  placeholder="Enter event location"
                  value={formData.location}
                  onChange={handleChange}
                />

              </div>

              {/* Description */}

              <div className="event-form-group">

                <label>
                  Description
                </label>

                <input
                  type="text"
                  name="description"
                  placeholder="Enter event description"
                  value={formData.description}
                  onChange={handleChange}
                />

              </div>

            </div>

            {/* Form Buttons */}

            <div className="event-form-actions">

              <button
                type="button"
                className="event-cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="event-save-btn"
              >
                {editId
                  ? "✓ Update Event"
                  : "✓ Save Event"}
              </button>

            </div>

          </form>

        </div>
      )}

      {/* Events List */}

      <div className="events-container">

        <div className="events-list-header">

          <div>
            <h3>
              Upcoming Events
            </h3>

            <span>
              {events.length} Events
            </span>
          </div>

          <input
            type="text"
            className="event-search"
            placeholder="🔍 Search events..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        {/* Event Cards */}

        <div className="events-grid">

          {filteredEvents.length > 0 ? (

            filteredEvents.map((event) => {

              const eventDate = getDate(
                event.date
              );

              return (
                <div
                  className="event-item"
                  key={event.id}
                >

                  {/* Top */}

                  <div className="event-item-top">

                    <div className="event-date">

                      <span>
                        {eventDate.day}
                      </span>

                      <small>
                        {eventDate.month}
                      </small>

                    </div>

                    <span className="event-type">
                      {event.type}
                    </span>

                  </div>

                  {/* Details */}

                  <div className="event-details">

                    <h3>
                      {event.title}
                    </h3>

                    <p>
                      🕐 {event.time}
                    </p>

                    <p>
                      📍 {event.location}
                    </p>

                    {event.description && (
                      <p className="event-description">
                        {event.description}
                      </p>
                    )}

                  </div>

                  {/* Actions */}

                  <div className="event-actions">

                    <button
                      className="event-edit-btn"
                      onClick={() =>
                        handleEdit(event)
                      }
                    >
                      ✏️ Edit
                    </button>

                    <button
                      className="event-delete-btn"
                      onClick={() =>
                        handleDelete(event.id)
                      }
                    >
                      🗑️ Delete
                    </button>

                  </div>

                </div>
              );
            })

          ) : (

            <div className="no-events">

              <div>
                📅
              </div>

              <h3>
                No Events Found
              </h3>

              <p>
                Add a new event or change your
                search.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Events;
