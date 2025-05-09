import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import PropertyCards from './components/PropertyCards/PropertyCards';
import StatsOverview from './components/StatsOverview/StatsOverview';
import RecentActivity from './components/RecentActivity/RecentActivity';
import SignIn from './components/Auth/SignIn';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Protected route wrapper
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <div className="luxury-app">
        <Routes>
          <Route path="/login" element={
            <SignIn setIsAuthenticated={setIsAuthenticated} />
          } />
          
          <Route path="/" element={
            <ProtectedRoute>
              <div className="app-layout">
                {/* Fixed Sidebar */}
                <div className="sidebar-container">
                  <Sidebar />
                </div>
                
                {/* Main Content Area */}
                <div className="main-content-container">
                  {/* Sticky Navbar */}
                  <div className="navbar-container">
                    <Navbar setIsAuthenticated={setIsAuthenticated} />
                  </div>
                  
                  {/* Scrollable Content */}
                  <div className="content-wrapper">
                    <div className="dashboard-hero">
                      <div className="hero-overlay"></div>
                      <div className="hero-content">
                        <h1>Manage Your Luxury Properties</h1>
                        <p>Premium real estate portfolio management at your fingertips</p>
                      </div>
                    </div>
                    
                    <div className="dashboard-grid">
                      <div className="stats-section">
                        <StatsOverview />
                      </div>
                      <div className="properties-section">
                        <PropertyCards />
                      </div>
                      <div className="activity-section">
                        <RecentActivity />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;