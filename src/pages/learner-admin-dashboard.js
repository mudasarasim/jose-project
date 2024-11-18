import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import AdminSidebar from "../componnents/admin-sidebar";

ChartJS.register(ArcElement, Tooltip, Legend);

const LearnerAdmin = () => {
  // Pie chart data
  const data = {
    labels: ["Pending", "Active", "Resolved"],
    datasets: [
      {
        label: "Teacher Tickets",
        data: [5, 10, 15], // Example data
        backgroundColor: ["#FF6384", "#FFCE56", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#FFCE56", "#36A2EB"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="container-scroller">
      <AdminSidebar /> {/* Sidebar */}

      {/* Navbar */}
      <nav style={{marginLeft: '400px'}}  className="navbar fixed-top">
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
          <h4></h4>
          <div>
            <i className="mdi mdi-bell" style={{ marginRight: "15px" }}></i>
            <i className="mdi mdi-chat" style={{ marginRight: "15px" }}></i>
            <img
              src="assets/images/faces/face1.jpg"
              alt="Profile"
              style={{
                height: "42px",
                borderRadius: "50%",
                border: "2px solid #457B9D",
              }}
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container-fluid page-body-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              {/* Statistics Cards */}
              <div className="col-lg-4">
                <div className="card p-4 text-center">
                  <h5>Total Assigned Teachers</h5>
                  <h2 style={{fontSize: '90px', marginTop: '-10px', marginBottom: '-16px'}}>20</h2>
                </div>
                <div className="card p-4 text-center mt-3">
                  <h5>Total Assigned Students</h5>
                  <h2 style={{fontSize: '90px', marginTop: '-10px', marginBottom: '-16px'}}>50</h2>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="col-lg-7">
                <div className="card" style={{height: '400px'}}>
                  <h5 className="ml-3 mt-4">Statistics</h5>
                  <div className="card-body" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Pie data={data} options={options} />
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
