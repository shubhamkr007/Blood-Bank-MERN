import './App.css';
import {Routes, Route} from 'react-router-dom' 
import HomePage from './pages/HomePage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import {Toaster} from 'react-hot-toast'
import ProtectedRoute from './components/routes/ProtectedRoute';
import PublicRoute from './components/routes/PublicRoute';
import Donar from './pages/Dashboard/Donar';
import Hospital from './pages/Dashboard/Hospital';
import OrganisationPage from './pages/Dashboard/OrganisationPage';
import Consumer from './pages/Dashboard/Consumer';
import Donation from './pages/Donation';
import Analytics from './pages/Dashboard/Analytics';
import DonarList from './pages/admin/DonarList';
import HospitalList from './pages/admin/HospitalList';
import OrgList from './pages/admin/OrgList';
import AdminHome from './pages/admin/AdminHome';
function App() {
  return (
    <>
    <div><Toaster position="top-left" /></div>
      <Routes>
        <Route path="/" element={
            <ProtectedRoute>
              <HomePage/>
            </ProtectedRoute>
        } />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donar-list"
          element={
            <ProtectedRoute>
              <DonarList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospital-list"
          element={
            <ProtectedRoute>
              <HospitalList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/org-list"
          element={
            <ProtectedRoute>
              <OrgList />
            </ProtectedRoute>
          }/>

        <Route path="/donar" element={
            <ProtectedRoute>
              <Donar/>
            </ProtectedRoute>
        } />
        <Route path="/hospital" element={
            <ProtectedRoute>
              <Hospital/>
            </ProtectedRoute>
        } />
        <Route path="/analytics" element={
            <ProtectedRoute>
              <Analytics/>
            </ProtectedRoute>
        } />
        <Route path="/consumer" element={
            <ProtectedRoute>
              <Consumer/>
            </ProtectedRoute>
        } />
        <Route path="/donation" element={
            <ProtectedRoute>
              <Donation/>
            </ProtectedRoute>
        } />
        <Route path="/organisation" element={
            <ProtectedRoute>
              <OrganisationPage/>
            </ProtectedRoute>
        } />
        <Route path="/login" element={
          <PublicRoute>
            <Login/>
          </PublicRoute>
        } />
        <Route path="/register" element={
            <PublicRoute>
              <Register/>
            </PublicRoute>
        } />
      </Routes>
    </>
  );
}

export default App;
