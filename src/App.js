import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgotPassword from './pages/forgot-password';
import Login from './pages/login';
import ResetPassword from './pages/reset-password';
import StudentDashboard from './pages/student-dashboard';
import EditProfile from './pages/edit-profile';
import Notifications from './pages/notifications';
import Security from './pages/security';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
