import React from "react";
// import { userMenu } from './Menus/userMenu'
import { Link, useLocation } from "react-router-dom";
import "../../../styles/Layout.css";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <div className="sidebar">
        <div className="menu">
          {user?.role === "organisation" && (
            <>
              <div
                className={`menu-item ${location.pathname === "/" && "active"}`}
              >
                <i className="fa-solid fa-cubes"></i>
                <Link to="/">Inventory</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/donar" && "active"
                }`}
              >
                <i className="fa-solid fa-hand-holding-medical"></i>
                <Link to="/donar">Donars</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/hospital" && "active"
                }`}
              >
                <i className="fa-solid fa-truck-medical"></i>
                <Link to="/hospital">Hospitals</Link>
              </div>
            </>
          )}
          
          {user?.role === "admin" && (
            <>
              <div
                className={`menu-item ${
                  location.pathname === "/donar-list" && "active"
                }`}
              >
                <i className="fa-solid fa-hand-holding-medical"></i>
                <Link to="/donar-list">Donar List</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/hospital-list" && "active"
                }`}
              >
                <i className="fa-solid fa-truck-medical"></i>
                <Link to="/hospital-list">Hospital List</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/org-list" && "active"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/org-list">Organisation List</Link>
              </div>
            </>
          )}

          {(user?.role === "donar" || user?.role === "hospital") && (
            <>
              <div
                className={`menu-item ${
                  location.pathname === "/organisation" && "active"
                }`}
              >
                <i className="fa-solid fa-building-ngo"></i>
                <Link to="/organisation">Organisations</Link>
              </div>
            </>
          )}

          {user?.role === "hospital" && (
            <div
              className={`menu-item ${
                location.pathname === "/consumer" && "active"
              }`}
            >
              <i className="fa-solid fa-users-between-lines"></i>
              <Link to="/consumer">Consumer</Link>
            </div>
          )}
          {user?.role === "donar" && (
            <div
              className={`menu-item ${
                location.pathname === "/donation" && "active"
              }`}
            >
              <i className="fa-solid fa-book-medical"></i>
              <Link to="/donation">Donations Log</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
