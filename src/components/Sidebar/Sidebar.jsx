import React from 'react';
import './Sidebar.css';
import { MdDashboard, MdApartment, MdPeople, MdPayment, MdSettings, MdLogout } from 'react-icons/md';
import { GiModernCity } from 'react-icons/gi';
import property1 from "../../assets/images/user-avatar.jpg";

const Sidebar = () => {
  return (
    <div className="luxury-sidebar">
      <div className="sidebar-brand">
        <GiModernCity className="brand-icon" />
        <h1>Elite<span>Estate</span></h1>
      </div>
      <div className="sidebar-menu">
        <div className="menu-item active">
          <MdDashboard className="menu-icon" />
          <span>Dashboard</span>
        </div>
        <div className="menu-item">
          <MdApartment className="menu-icon" />
          <span>Properties</span>
        </div>
        <div className="menu-item">
          <MdPeople className="menu-icon" />
          <span>Tenants</span>
        </div>
        <div className="menu-item">
          <MdPayment className="menu-icon" />
          <span>Payments</span>
        </div>
        <div className="menu-item">
          <MdSettings className="menu-icon" />
          <span>Settings</span>
        </div>
      </div>
      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="avatar" style={{ backgroundImage: "url('./assets/images/user-avatar.jpg')" }}></div>
          <div className="user-info">
            <h4>P Divya</h4>
            <p>Admin</p>
          </div>
        </div>
        <button className="logout-btn">
          <MdLogout className="logout-icon" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;