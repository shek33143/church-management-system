import React, { useState } from "react";
import "../Style/Members.css";

function Members() {
  const [showForm, setShowForm] = useState(false);

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "John David",
      phone: "9876543210",
      email: "john@gmail.com",
      family: "David Family",
      gender: "Male",
    },
    {
      id: 2,
      name: "Mary Joseph",
      phone: "9876501234",
      email: "mary@gmail.com",
      family: "Joseph Family",
      gender: "Female",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    family: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.family ||
      !formData.gender
    ) {
      alert("Please fill all fields");
      return;
    }

    const newMember = {
      id: Date.now(),
      ...formData,
    };

    setMembers([...members, newMember]);

    setFormData({
      name: "",
      phone: "",
      email: "",
      family: "",
      gender: "",
    });

    setShowForm(false);
  };

  const deleteMember = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this member?"
    );

    if (confirmDelete) {
      setMembers(
        members.filter((member) => member.id !== id)
      );
    }
  };

  return (
    <div className="members-page">

      {/* Header */}
      <div className="members-header">
        <div>
          <h2>Church Members</h2>
          <p>Manage your church members and family details</p>
        </div>

        <button
          className="add-member-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "✕ Close" : "+ Add Member"}
        </button>
      </div>

      {/* Add Member Form */}
      {showForm && (
        <div className="member-form-container">

          <div className="form-title">
            <div className="form-icon">👤</div>

            <div>
              <h3>Add New Member</h3>
              <p>Enter the member's details below</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Family Name</label>
                <input
                  type="text"
                  name="family"
                  placeholder="Enter family name"
                  value={formData.family}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Gender</label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

            </div>

            <div className="form-actions">

              <button
                type="button"
                className="cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="save-btn"
              >
                ✓ Save Member
              </button>

            </div>

          </form>
        </div>
      )}

      {/* Members Table */}
      <div className="members-container">

        <div className="table-header">
          <div>
            <h3>Member List</h3>
            <span>
              {members.length} Members
            </span>
          </div>

          <input
            className="search-input"
            type="text"
            placeholder="🔍 Search member..."
          />
        </div>

        <div className="table-wrapper">

          <table className="members-table">

            <thead>
              <tr>
                <th>#</th>
                <th>Member</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Family</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {members.map((member, index) => (
                <tr key={member.id}>

                  <td>{index + 1}</td>

                  <td>
                    <div className="member-name">
                      <div className="member-avatar">
                        {member.name
                          .charAt(0)
                          .toUpperCase()}
                      </div>

                      <strong>{member.name}</strong>
                    </div>
                  </td>

                  <td>{member.phone}</td>

                  <td>{member.email}</td>

                  <td>
                    <span className="family-badge">
                      {member.family}
                    </span>
                  </td>

                  <td>
                    <span
                      className={
                        member.gender === "Male"
                          ? "gender-male"
                          : "gender-female"
                      }
                    >
                      {member.gender}
                    </span>
                  </td>

                  <td>
                    <button className="edit-btn">
                      ✏️
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteMember(member.id)
                      }
                    >
                      🗑️
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </div>

    </div>
  );
}

export default Members;
