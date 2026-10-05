import React, { useState } from "react";
import "../Style/Donations.css";

function Donations() {
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  const [donations, setDonations] = useState([
    {
      id: 1,
      donor: "John David",
      amount: 5000,
      type: "General",
      method: "Cash",
      date: "2026-10-01",
      note: "Sunday offering",
    },
    {
      id: 2,
      donor: "Mary Joseph",
      amount: 2500,
      type: "Church Fund",
      method: "UPI",
      date: "2026-10-02",
      note: "Monthly contribution",
    },
  ]);

  const [formData, setFormData] = useState({
    donor: "",
    amount: "",
    type: "",
    method: "",
    date: "",
    note: "",
  });

  // Handle Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add / Update Donation
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.donor ||
      !formData.amount ||
      !formData.type ||
      !formData.method ||
      !formData.date
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (editId) {
      setDonations(
        donations.map((donation) =>
          donation.id === editId
            ? {
                ...donation,
                donor: formData.donor,
                amount: Number(formData.amount),
                type: formData.type,
                method: formData.method,
                date: formData.date,
                note: formData.note,
              }
            : donation
        )
      );
    } else {
      const newDonation = {
        id: Date.now(),
        donor: formData.donor,
        amount: Number(formData.amount),
        type: formData.type,
        method: formData.method,
        date: formData.date,
        note: formData.note,
      };

      setDonations([
        ...donations,
        newDonation,
      ]);
    }

    resetForm();
  };

  // Edit Donation
  const handleEdit = (donation) => {
    setFormData({
      donor: donation.donor,
      amount: donation.amount,
      type: donation.type,
      method: donation.method,
      date: donation.date,
      note: donation.note || "",
    });

    setEditId(donation.id);
    setShowForm(true);
  };

  // Delete Donation
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this donation?"
    );

    if (confirmDelete) {
      setDonations(
        donations.filter(
          (donation) => donation.id !== id
        )
      );
    }
  };

  // Reset Form
  const resetForm = () => {
    setFormData({
      donor: "",
      amount: "",
      type: "",
      method: "",
      date: "",
      note: "",
    });

    setEditId(null);
    setShowForm(false);
  };

  // Search
  const filteredDonations = donations.filter(
    (donation) =>
      donation.donor
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      donation.type
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      donation.method
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  // Total Donation
  const totalAmount = donations.reduce(
    (total, donation) =>
      total + Number(donation.amount),
    0
  );

  // Currency Format
  const formatAmount = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Date Format
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  return (
    <div className="donations-page">

      {/* =========================
          HEADER
      ========================= */}

      <div className="donations-header">

        <div>
          <h2>Donations</h2>

          <p>
            Manage church donations and contributions
          </p>
        </div>

        <button
          className="add-donation-btn"
          onClick={() => {
            if (showForm) {
              resetForm();
            } else {
              setShowForm(true);
            }
          }}
        >
          {showForm
            ? "✕ Close"
            : "+ Add Donation"}
        </button>

      </div>

      {/* =========================
          SUMMARY
      ========================= */}

      <div className="donation-summary">

        <div className="donation-summary-card green">

          <div className="summary-icon">
            💰
          </div>

          <div>
            <span>Total Donations</span>

            <strong>
              {formatAmount(totalAmount)}
            </strong>

            <small>
              All Contributions
            </small>
          </div>

        </div>

        <div className="donation-summary-card blue">

          <div className="summary-icon">
            👥
          </div>

          <div>
            <span>Total Records</span>

            <strong>
              {donations.length}
            </strong>

            <small>
              Donation Records
            </small>
          </div>

        </div>

        <div className="donation-summary-card yellow">

          <div className="summary-icon">
            📊
          </div>

          <div>
            <span>Average Donation</span>

            <strong>
              {formatAmount(
                donations.length > 0
                  ? totalAmount /
                      donations.length
                  : 0
              )}
            </strong>

            <small>
              Per Donation
            </small>
          </div>

        </div>

      </div>

      {/* =========================
          ADD DONATION FORM
      ========================= */}

      {showForm && (
        <div className="donation-form-container">

          <div className="donation-form-title">

            <div className="donation-form-icon">
              💰
            </div>

            <div>
              <h3>
                {editId
                  ? "Edit Donation"
                  : "Add New Donation"}
              </h3>

              <p>
                {editId
                  ? "Update donation details"
                  : "Enter donation details below"}
              </p>
            </div>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="donation-form-grid">

              {/* Donor Name */}

              <div className="donation-form-group">

                <label>
                  Donor Name *
                </label>

                <input
                  type="text"
                  name="donor"
                  placeholder="Enter donor name"
                  value={formData.donor}
                  onChange={handleChange}
                />

              </div>

              {/* Amount */}

              <div className="donation-form-group">

                <label>
                  Amount *
                </label>

                <input
                  type="number"
                  name="amount"
                  min="1"
                  placeholder="Enter amount"
                  value={formData.amount}
                  onChange={handleChange}
                />

              </div>

              {/* Donation Type */}

              <div className="donation-form-group">

                <label>
                  Donation Type *
                </label>

                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Donation Type
                  </option>

                  <option value="General">
                    General
                  </option>

                  <option value="Tithe">
                    Tithe
                  </option>

                  <option value="Offering">
                    Offering
                  </option>

                  <option value="Church Fund">
                    Church Fund
                  </option>

                  <option value="Building Fund">
                    Building Fund
                  </option>

                  <option value="Mission">
                    Mission
                  </option>

                  <option value="Poor Fund">
                    Poor Fund
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>

              {/* Payment Method */}

              <div className="donation-form-group">

                <label>
                  Payment Method *
                </label>

                <select
                  name="method"
                  value={formData.method}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Payment Method
                  </option>

                  <option value="Cash">
                    Cash
                  </option>

                  <option value="UPI">
                    UPI
                  </option>

                  <option value="Bank Transfer">
                    Bank Transfer
                  </option>

                  <option value="Cheque">
                    Cheque
                  </option>

                  <option value="Online">
                    Online
                  </option>

                </select>

              </div>

              {/* Date */}

              <div className="donation-form-group">

                <label>
                  Donation Date *
                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />

              </div>

              {/* Note */}

              <div className="donation-form-group">

                <label>
                  Note
                </label>

                <input
                  type="text"
                  name="note"
                  placeholder="Optional note"
                  value={formData.note}
                  onChange={handleChange}
                />

              </div>

            </div>

            {/* FORM BUTTONS */}

            <div className="donation-form-actions">

              <button
                type="button"
                className="donation-cancel-btn"
                onClick={resetForm}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="donation-save-btn"
              >
                {editId
                  ? "✓ Update Donation"
                  : "✓ Save Donation"}
              </button>

            </div>

          </form>

        </div>
      )}

      {/* =========================
          DONATION LIST
      ========================= */}

      <div className="donations-container">

        <div className="donations-list-header">

          <div>
            <h3>
              Donation History
            </h3>

            <span>
              {donations.length} Records
            </span>
          </div>

          <input
            type="text"
            className="donation-search"
            placeholder="🔍 Search donations..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        {/* DONATION CARDS */}

        <div className="donations-grid">

          {filteredDonations.length > 0 ? (

            filteredDonations.map(
              (donation) => (

                <div
                  className="donation-item"
                  key={donation.id}
                >

                  {/* TOP */}

                  <div className="donation-item-top">

                    <div className="donor-avatar">
                      {donation.donor
                        .charAt(0)
                        .toUpperCase()}
                    </div>

                    <span className="donation-type">
                      {donation.type}
                    </span>

                  </div>

                  {/* DETAILS */}

                  <div className="donation-details">

                    <h3>
                      {donation.donor}
                    </h3>

                    <div className="donation-amount">
                      {formatAmount(
                        donation.amount
                      )}
                    </div>

                    <p>
                      💳 {donation.method}
                    </p>

                    <p>
                      📅 {formatDate(
                        donation.date
                      )}
                    </p>

                    {donation.note && (
                      <p className="donation-note">
                        📝 {donation.note}
                      </p>
                    )}

                  </div>

                  {/* ACTIONS */}

                  <div className="donation-actions">

                    <button
                      className="donation-edit-btn"
                      onClick={() =>
                        handleEdit(donation)
                      }
                    >
                      ✏️ Edit
                    </button>

                    <button
                      className="donation-delete-btn"
                      onClick={() =>
                        handleDelete(
                          donation.id
                        )
                      }
                    >
                      🗑️ Delete
                    </button>

                  </div>

                </div>

              )
            )

          ) : (

            <div className="no-donations">

              <div>
                💰
              </div>

              <h3>
                No Donations Found
              </h3>

              <p>
                Click "Add Donation" to add
                your first donation.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Donations;
