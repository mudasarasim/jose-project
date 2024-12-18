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
import AllInstructors from './pages/all-instructors';
import TeacherDashboard from './pages/teacher-dashboard';
import Payment from './pages/payments';
import StrikeCount from './pages/strike-count';
import UpdatePortfolio from './pages/update-portfolio';
import Help from './pages/help';
import AdminLogin from './pages/admin-login';
import AdminForgot from './pages/a-forgot-password';
import AdminReset from './pages/a-reset-password';
import LearnerAdmin from './pages/learner-admin-dashboard';
import MakeupClasses from './pages/makeup-classes';
import AdminProfile from './pages/admin-profile';
import AdminNotifications from './pages/admin-notifications';
import AdminSecurity from './pages/admin-security';
import AdminHelp from './pages/admin-help';
import StudentAllMakeupClasses from './pages/student-all-makeup-classes';
import ClassroomSupport from './pages/classroom-support';
import AdminTickets from './pages/admin-tickets';
import AdminEditTicket from './pages/admin-edit-ticket';
import Strikes from './pages/strikes';
import TeacherStrikeList from './pages/teacher-strike-list';
import StudentList from './pages/student-list';
import TeacherList from './pages/teacher-list';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/security" element={<Security />} />
          <Route path="/manage-tickets" element={<ManageTickets />} />
          <Route path="/create-ticket" element={<CreateTicket />} />
          <Route path="/edit-ticket" element={<EditTicket />} />
          <Route path="/admin-edit-ticket" element={<AdminEditTicket />} />
          <Route path="/all-instructors" element={<AllInstructors />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/help" element={<Help />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/strike-count" element={<StrikeCount />} />
          <Route path="/update-portfolio" element={<UpdatePortfolio />} />
          <Route path="/a-forgot-password" element={<AdminForgot />} />
          <Route path="/a-reset-password" element={<AdminReset />} />
          <Route path="/learner-admin-dashboard" element={<LearnerAdmin />} />
          <Route path="/makeup-classes" element={<MakeupClasses />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route path="/admin-notifications" element={<AdminNotifications />} />
          <Route path="/admin-security" element={<AdminSecurity />} />
          <Route path="/admin-help" element={<AdminHelp />} />
          <Route path="/student-all-makeup-classes" element={<StudentAllMakeupClasses />} />
          <Route path="/classroom-support" element={<ClassroomSupport />} />
          <Route path="/admin-tickets" element={<AdminTickets />} />
          <Route path="/strikes" element={<Strikes />} />
          <Route path="/teacher-strike-list" element={<TeacherStrikeList />} />
          <Route path="/student-list" element={<StudentList />} />
          <Route path="/teacher-list" element={<TeacherList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
