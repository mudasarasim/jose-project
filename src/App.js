import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgotPassword from './pages/forgot-password';
import Login from './pages/login';
import ResetPassword from './pages/reset-password';
import StudentDashboard from './pages/student-dashboard';
import EditProfile from './pages/edit-profile';
import Notifications from './pages/notifications';
import Security from './pages/security';
import ManageTickets from './pages/manage-tickets';
import CreateTicket from './pages/create-ticket';
import EditTicket from './pages/edit-ticket';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/security" element={<Security />} />
          <Route path="/manage-tickets" element={<ManageTickets />} />
          <Route path="/create-ticket" element={<CreateTicket />} />
          <Route path="/edit-ticket" element={<EditTicket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
