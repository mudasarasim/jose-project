import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import AdminSidebar from "../componnents/admin-sidebar";
import { Link } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

const LearnerAdmin = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Doughnut chart data
  const data = {
    labels: ["Pending", "Active", "Resolved"],
    datasets: [
      {
        label: "Teacher Tickets",
        data: [5, 10, 15], // Example data
        backgroundColor: ["#FF6B6B", "#FFD93D", "#6BCB77"], // Matching colors
        hoverBackgroundColor: ["#FF4E4E", "#FFC400", "#4CAF50"], // Hover colors
        borderWidth: 0, // Remove segment borders
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom", // Legend below the chart
        labels: {
          boxWidth: 15, // Smaller legend box
          font: {
            size: 14, // Font size for legend
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `${tooltipItem.label}: ${tooltipItem.raw}`, // Tooltip content
        },
      },
    },
    cutout: "60%", // Creates the hollow center
  };

  return (
    <div className="container-scroller">
      <AdminSidebar /> {/* Sidebar */}

      {/* Navbar */}
      <nav
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          width: "auto",
          padding: "10px 20px",
          backgroundColor: "transparent",
          zIndex: 1000,
        }}
        className="navbar"
      >
        <div
          className="navbar-menu-wrapper d-flex align-items-center justify-content-end mt-3"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "20px",
            marginLeft: '150px'
          }}
        >
          <i className="mdi mdi-bell p-1" style={{
            fontSize: "24px", borderRadius: "50%",
            border: "2px solid #457B9D",
            cursor: "pointer",
          }}></i>
          <i className="mdi mdi-chat p-1" style={{
            fontSize: "24px", borderRadius: "50%",
            border: "2px solid #457B9D",
            cursor: "pointer",
          }}></i>
          <div style={{ position: "relative" }}>
            <img
              src="assets/images/faces/face1.jpg"
              alt="Profile"
              style={{
                height: "45px",
                borderRadius: "50%",
                border: "2px solid #457B9D",
                cursor: "pointer",
              }}
              onClick={toggleDropdown}
            />

            {/* Dropdown Menu */}
            {dropdownVisible && (
              <div
                style={{
                  position: "absolute",
                  top: "55px",
                  right: "0",
                  width: "250px",
                  background: "#FFFFFF",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  padding: "20px",
                  zIndex: 1001,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="assets/images/faces/face1.jpg"
                    alt="Profile"
                    style={{
                      height: "50px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <h6 style={{ margin: 0, fontSize: "16px" }}>James Bond</h6>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        color: "#8E8E93",
                      }}
                    >
                      yourname@gmail.com
                    </p>
                  </div>
                </div>
                <hr style={{ margin: "20px 0", borderColor: "#E8E8E8" }} />
                <div style={{ marginBottom: "20px" }}>
                  <Link to={'/admin-profile'} style={{color: '#8E8E93'}}>
                  <i className="mdi mdi-account" style={{ marginRight: "10px", fontSize: '25px' }}></i>
                  My Profile
                  </Link>
                </div>
                <div style={{ marginBottom: "20px" }}>
                <Link to={'/admin-profile'} style={{color: '#8E8E93'}}>
                  <i className="mdi mdi-settings" style={{ marginRight: "10px", fontSize: '25px' }}></i>
                  Settings
                  </Link>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <i className="mdi mdi-bell" style={{ marginRight: "10px", fontSize: '25px' }}></i>
                  Notification <span style={{ float: "right", marginTop: '10px' }}>Allow</span>
                </div>
                <div style={{ marginBottom: "5px", color: "red" }}>
                <Link to={'/admin-login'} style={{color: '#8E8E93'}}>
                  <i className="mdi mdi-logout" style={{ marginRight: "10px", fontSize: '25px' }}></i>
                  Log Out
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container-fluid page-body-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row" style={{ marginTop: "0px" }}>
              {/* Statistics Cards */}
              <div className="col-lg-4">
                <div className="card p-4 text-center" style={{ background: "#F2F2F2" }}>
                  <h5>Total Assigned Teachers</h5>
                  <h2
                    style={{
                      fontSize: "90px",
                      marginTop: "-10px",
                      marginBottom: "-16px",
                      color: "#8E8E93",
                      fontWeight: "400",
                    }}
                  >
                    20
                  </h2>
                </div>
                <div className="card p-4 text-center mt-3" style={{ background: "#F2F2F2" }}>
                  <h5>Total Assigned Students</h5>
                  <h2
                    style={{
                      fontSize: "90px",
                      marginTop: "-10px",
                      marginBottom: "-16px",
                      color: "#8E8E93",
                      fontWeight: "400",
                    }}
                  >
                    50
                  </h2>
                </div>
              </div>

              {/* Doughnut Chart */}
              <div className="col-lg-7">
                <div className="card" style={{ height: "400px", background: "#F2F2F2" }}>
                  <h5 className="ml-3 mt-4">Statistics</h5>
                  <div
                    className="card-body"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#F2F2F2",
                    }}
                  >
                    <Doughnut data={data} options={options} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnerAdmin;
