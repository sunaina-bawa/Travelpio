import React, { useState, useEffect } from "react";
import Home from "./Home";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import "./Dashboard.css";

const Dashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 5;

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = () => {
    // Fetch existing form submissions from backend API endpoint
    fetch("https://travelopia-29rz.onrender.com/traveller/getData")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSubmissions(data);
      })
      .catch((error) => {
        // Handle error
        throw error;
      });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleRefresh = () => {
    fetchSubmissions();
    setCurrentPage(1); // Set the current page to 1
  };

  const handleNext = () => {
    const totalPages = Math.ceil(submissions.length / entriesPerPage);
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleDownloadCity = () => {
    const worksheet = XLSX.utils.json_to_sheet(submissions);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Submissions");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "submissions.xlsx");
  };

  // Calculate the range of entries to display on the current page
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = submissions.slice(indexOfFirstEntry, indexOfLastEntry);

  return (
    <div>
      <Home />
      <h1
        style={{
          width: "10%",
          margin: "auto",
          color: "black",
          marginTop: "20px",
        }}
      >
        Dashboard
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          margin: "auto",
        }}
      >
        <div>
          <button
            onClick={handlePrevious}
            style={{
              background: "pink",
              color: "black",
              padding: "10px",
              borderRadius: "10px",
              border: "none",
            }}
          >
            Previous
          </button>
          <button
            onClick={handleRefresh}
            style={{
              background: "red",
              color: "white",
              padding: "10px",
              borderRadius: "10px",
              border: "none",
              marginLeft: "10px",
            }}
          >
            Refresh
          </button>
        </div>
        <div>
          <button
            onClick={handleDownloadCity}
            style={{
              background: "blue",
              color: "white",
              padding: "10px",
              borderRadius: "10px",
              border: "none",
              marginLeft: "10px",
            }}
          >
            Download City
          </button>
          <button
            onClick={handleNext}
            style={{
              background: "pink",
              color: "black",
              padding: "10px",
              borderRadius: "10px",
              border: "none",
              marginLeft: "10px",
            }}
          >
            Next
          </button>
        </div>
      </div>
      {submissions.length === 0 ? (
        <p style={{ margin: "auto", width: "30%", color: "white" }}>
          No submissions found.
        </p>
      ) : (
        <table
          border="2px solid red"
          style={{
            width: "70%",
            margin: "auto",
            color: "white",
            marginTop: "10px",
            background: "black",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Destination</th>
              <th>Number of Travelers</th>
              <th>Budget per Person</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((submission) => (
              <tr key={submission.id}>
                <td>{submission.name}</td>
                <td>{submission.email}</td>
                <td>{submission.place}</td>
                <td>{submission.numberofTravellers}</td>
                <td>${submission.budgetPerPerson}</td>
                <td>${submission.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
