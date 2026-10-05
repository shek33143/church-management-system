import React, { useRef, useState } from "react";
import "../Style/Documents.css";

function Documents() {
  const fileInputRef = useRef(null);

  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const [documents, setDocuments] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    file: null,
  });

  // Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // File Select
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData({
      ...formData,
      file: file,
      name:
        formData.name ||
        file.name.replace(/\.[^/.]+$/, ""),
    });
  };

  // Upload Document
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name) {
      alert("Please enter document name");
      return;
    }

    if (!formData.category) {
      alert("Please select document category");
      return;
    }

    if (!formData.file) {
      alert("Please select a file");
      return;
    }

    const file = formData.file;

    let type = "Document";

    if (file.type.includes("pdf")) {
      type = "PDF";
    } else if (file.type.includes("image")) {
      type = "Image";
    } else if (
      file.type.includes("word") ||
      file.name.endsWith(".doc") ||
      file.name.endsWith(".docx")
    ) {
      type = "Word";
    } else if (
      file.type.includes("excel") ||
      file.name.endsWith(".xls") ||
      file.name.endsWith(".xlsx")
    ) {
      type = "Excel";
    }

    const newDocument = {
      id: Date.now(),
      name: formData.name,
      category: formData.category,
      type: type,
      fileName: file.name,
      size: file.size,
      sizeText: formatFileSize(file.size),
      file: file,
      date: new Date().toISOString(),
    };

    setDocuments([
      ...documents,
      newDocument,
    ]);

    resetForm();
  };

  // Reset Form
  const resetForm = () => {
    setFormData({
      name: "",
      category: "",
      file: null,
    });

    setShowForm(false);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // File Size
  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";

    const sizes = [
      "Bytes",
      "KB",
      "MB",
      "GB",
    ];

    const i = Math.floor(
      Math.log(bytes) / Math.log(1024)
    );

    return (
      parseFloat(
        (bytes / Math.pow(1024, i)).toFixed(2)
      ) +
      " " +
      sizes[i]
    );
  };

  // Format Date
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

  // Delete
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this document?"
    );

    if (confirmDelete) {
      setDocuments(
        documents.filter(
          (document) => document.id !== id
        )
      );
    }
  };

  // Download
  const handleDownload = (document) => {
    if (!document.file) {
      alert("File is not available");
      return;
    }

    const url = URL.createObjectURL(
      document.file
    );

    const link = window.document.createElement("a");

    link.href = url;
    link.download = document.fileName;

    window.document.body.appendChild(link);

    link.click();

    window.document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  // Search
  const filteredDocuments = documents.filter(
    (document) =>
      document.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      document.category
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      document.fileName
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  // File Icon
  const getFileIcon = (type) => {
    if (type === "PDF") return "📕";
    if (type === "Image") return "🖼️";
    if (type === "Word") return "📘";
    if (type === "Excel") return "📗";

    return "📄";
  };

  return (
    <div className="documents-page">

      {/* =========================
          HEADER
      ========================= */}

      <div className="documents-header">

        <div>
          <h2>Documents</h2>

          <p>
            Upload and manage church documents
          </p>
        </div>

        <button
          className="add-document-btn"
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
            : "+ Upload Document"}
        </button>

      </div>

      {/* =========================
          UPLOAD FORM
      ========================= */}

      {showForm && (
        <div className="document-form-container">

          <div className="document-form-title">

            <div className="document-form-icon">
              📤
            </div>

            <div>
              <h3>
                Upload New Document
              </h3>

              <p>
                Select a file and enter document
                details
              </p>
            </div>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="document-form-grid">

              {/* Document Name */}

              <div className="document-form-group">

                <label>
                  Document Name *
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter document name"
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>

              {/* Category */}

              <div className="document-form-group">

                <label>
                  Category *
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Category
                  </option>

                  <option value="Church">
                    Church
                  </option>

                  <option value="Reports">
                    Reports
                  </option>

                  <option value="Finance">
                    Finance
                  </option>

                  <option value="Members">
                    Members
                  </option>

                  <option value="Events">
                    Events
                  </option>

                  <option value="Photos">
                    Photos
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>

              {/* File Upload */}

              <div className="document-form-group full-width">

                <label>
                  Select File *
                </label>

                <div
                  className="file-upload-box"
                  onClick={() =>
                    fileInputRef.current?.click()
                  }
                >

                  <input
                    ref={fileInputRef}
                    type="file"
                    hidden
                    onChange={handleFileChange}
                    accept="
                      .pdf,
                      .doc,
                      .docx,
                      .xls,
                      .xlsx,
                      .jpg,
                      .jpeg,
                      .png
                    "
                  />

                  <div className="upload-content">

                    <div className="upload-icon">
                      {formData.file
                        ? "✅"
                        : "📤"}
                    </div>

                    {formData.file ? (

                      <>
                        <h4>
                          {formData.file.name}
                        </h4>

                        <p>
                          {formatFileSize(
                            formData.file.size
                          )}
                        </p>

                        <span>
                          Click to change file
                        </span>
                      </>

                    ) : (

                      <>
                        <h4>
                          Click to Upload File
                        </h4>

                        <p>
                          PDF, Word, Excel, JPG,
                          PNG
                        </p>

                        <span>
                          Maximum file size: 10MB
                        </span>
                      </>

                    )}

                  </div>

                </div>

              </div>

            </div>

            {/* Buttons */}

            <div className="document-form-actions">

              <button
                type="button"
                className="document-cancel-btn"
                onClick={resetForm}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="document-save-btn"
              >
                📤 Upload Document
              </button>

            </div>

          </form>

        </div>
      )}

      {/* =========================
          DOCUMENT LIST
      ========================= */}

      <div className="documents-container">

        <div className="documents-list-header">

          <div>
            <h3>
              Uploaded Documents
            </h3>

            <span>
              {documents.length} Documents
            </span>
          </div>

          <input
            type="text"
            className="document-search"
            placeholder="🔍 Search documents..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        {/* Document Cards */}

        <div className="documents-grid">

          {filteredDocuments.length > 0 ? (

            filteredDocuments.map(
              (document) => (

                <div
                  className="document-item"
                  key={document.id}
                >

                  {/* Icon */}

                  <div className="document-item-top">

                    <div
                      className={`document-icon ${document.type.toLowerCase()}`}
                    >
                      {getFileIcon(
                        document.type
                      )}
                    </div>

                    <span className="document-type">
                      {document.type}
                    </span>

                  </div>

                  {/* Details */}

                  <div className="document-details">

                    <h3>
                      {document.name}
                    </h3>

                    <p className="document-file-name">
                      📄 {document.fileName}
                    </p>

                    <p>
                      📁 {document.category}
                    </p>

                    <p>
                      💾 {document.sizeText}
                    </p>

                    <p>
                      📅 {formatDate(document.date)}
                    </p>

                  </div>

                  {/* Actions */}

                  <div className="document-actions">

                    <button
                      className="document-download-btn"
                      onClick={() =>
                        handleDownload(
                          document
                        )
                      }
                    >
                      ⬇️ Download
                    </button>

                    <button
                      className="document-delete-btn"
                      onClick={() =>
                        handleDelete(
                          document.id
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

            <div className="no-documents">

              <div>
                📁
              </div>

              <h3>
                No Documents Found
              </h3>

              <p>
                Click "Upload Document" to add
                your first document.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Documents;
