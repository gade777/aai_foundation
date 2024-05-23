import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
import LogoBlue from "../../assets/images/logo_blue.svg";
import LogoWhite from "../../assets/images/logo_white.svg";
import {
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineShoppingBag,
  MdOutlineTask,
} from "react-icons/md";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { SidebarContext } from "../../context/SidebarContext";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);
  const [isStaffSubMenuOpen, setIsStaffSubMenuOpen] = useState(false);
  const [isDonorOpen, setIsDonorOpen] = useState(false);
  const [isVisitorOpen, setIsVisitorOpen] = useState(false);
  const [isMdonationOpen, setIsMdonationOpen] = useState(false);
  const [isBucketOpen, setIsBucketOpen] = useState(false);
  const [isTaskOpen, setIsTaskOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);

  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-open-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleStaffSubMenu = () => {
    setIsStaffSubMenuOpen(!isStaffSubMenuOpen);
    // Close other dropdowns
    setIsDonorOpen(false);
    setIsVisitorOpen(false);
    setIsMdonationOpen(false);
    setIsBucketOpen(false);
    setIsTaskOpen(false);
    setIsEmailOpen(false);
  };

  const toggleDonor = () => {
    setIsDonorOpen(!isDonorOpen);
    // Close other dropdowns
    setIsStaffSubMenuOpen(false);
    setIsVisitorOpen(false);
    setIsMdonationOpen(false);
    setIsBucketOpen(false);
    setIsTaskOpen(false);
    setIsEmailOpen(false);
  };

  const toggleVisitor = () => {
    setIsVisitorOpen(!isVisitorOpen);
    // Close other dropdowns
    setIsStaffSubMenuOpen(false);
    setIsDonorOpen(false);
    setIsMdonationOpen(false);
    setIsBucketOpen(false);
    setIsTaskOpen(false);
    setIsEmailOpen(false);
  };

  const toggleMdonation = () => {
    setIsMdonationOpen(!isMdonationOpen);
    // Close other dropdowns
    setIsStaffSubMenuOpen(false);
    setIsDonorOpen(false);
    setIsVisitorOpen(false);
    setIsBucketOpen(false);
    setIsTaskOpen(false);
    setIsEmailOpen(false);
  };

  const toggleBucket = () => {
    setIsBucketOpen(!isBucketOpen);
    // Close other dropdowns
    setIsStaffSubMenuOpen(false);
    setIsDonorOpen(false);
    setIsVisitorOpen(false);
    setIsMdonationOpen(false);
    setIsTaskOpen(false);
    setIsEmailOpen(false);
  };

  const toggleTask = () => {
    setIsTaskOpen(!isTaskOpen);
    // Close other dropdowns
    setIsStaffSubMenuOpen(false);
    setIsDonorOpen(false);
    setIsVisitorOpen(false);
    setIsMdonationOpen(false);
    setIsBucketOpen(false);
    setIsEmailOpen(false);
  };

  const toggleEmail = () => {
    setIsEmailOpen(!isEmailOpen);
    // Close other dropdowns
    setIsStaffSubMenuOpen(false);
    setIsDonorOpen(false);
    setIsVisitorOpen(false);
    setIsMdonationOpen(false);
    setIsBucketOpen(false);
    setIsTaskOpen(false);
  };

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <img src={theme === LIGHT_THEME ? LogoBlue : LogoWhite} alt="" />
          <span className="sidebar-brand-text">AAI FOUNDATION</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/" className="menu-link active">
                <span className="menu-link-icon">
                  <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </Link>
            </li>
            <li className="menu-item">
              <div
                className={`menu-link ${isStaffSubMenuOpen ? "active" : ""}`}
                onClick={toggleStaffSubMenu}
              >
                <span className="menu-link-icon">
                  <MdOutlineBarChart size={20} />
                </span>
                <span className="menu-link-text">Manage Staff</span>
                <span className="menu-link-icon-right">
                  {isStaffSubMenuOpen ? (
                    <FaAngleUp size={20} />
                  ) : (
                    <FaAngleDown size={20} />
                  )}
                </span>
              </div>
              {isStaffSubMenuOpen && (
                <ul className="submenu-list">
                  <li className="submenu-item">
                    <Link to="/addstaff" className="submenu-link">
                      Add Staff
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/addStaffList" className="submenu-link">
                      Active Staff List
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/addpendinglist" className="submenu-link">
                      Pending Staff List
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="menu-item">
              <div
                className={`menu-link ${isDonorOpen ? "active" : ""}`}
                onClick={toggleDonor}
              >
                <span className="menu-link-icon">
                  <MdOutlineAttachMoney size={20} />
                </span>
                <span className="menu-link-text">Manage Donor</span>
                <span className="menu-link-icon-right">
                  {isDonorOpen ? (
                    <FaAngleUp size={20} />
                  ) : (
                    <FaAngleDown size={20} />
                  )}
                </span>
              </div>
              {isDonorOpen && (
                <ul className="submenu-list">
                  <li className="submenu-item">
                    <Link to="/searchDonor" className="submenu-link">
                      Search Donor
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/addDonor" className="submenu-link">
                      Add Donor
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="menu-item">
              <div
                className={`menu-link ${isVisitorOpen ? "active" : ""}`}
                onClick={toggleVisitor}
              >
                <span className="menu-link-icon">
                  <MdOutlineShoppingBag size={20} />
                </span>
                <span className="menu-link-text">Manage Visitors</span>
                <span className="menu-link-icon-right">
                  {isVisitorOpen ? (
                    <FaAngleUp size={20} />
                  ) : (
                    <FaAngleDown size={20} />
                  )}
                </span>
              </div>
              {isVisitorOpen && (
                <ul className="submenu-list">
                  <li className="submenu-item">
                    <Link to="/searchVisitor" className="submenu-link">
                      Search Visitor
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/addVisitor" className="submenu-link">
                      Add Visitor
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="menu-item">
              <div
                className={`menu-link ${isMdonationOpen ? "active" : ""}`}
                onClick={toggleMdonation}
              >
                <span className="menu-link-icon">
                  <MdOutlinePeople size={20} />
                </span>
                <span className="menu-link-text">Manage Donation</span>
                <span className="menu-link-icon-right">
                  {isMdonationOpen ? (
                    <FaAngleUp size={20} />
                  ) : (
                    <FaAngleDown size={20} />
                  )}
                </span>
              </div>
              {isMdonationOpen && (
                <ul className="submenu-list">
                  <li className="submenu-item">
                    <Link to="/searchDonation" className="submenu-link">
                      Search Donation
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/addDonation" className="submenu-link">
                      Add Donation
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="menu-item">
              <div
                className={`menu-link ${isBucketOpen ? "active" : ""}`}
                onClick={toggleBucket}
              >
                <span className="menu-link-icon">
                  <MdOutlineMessage size={20} />
                </span>
                <span className="menu-link-text">Manage Bucket</span>
                <span className="menu-link-icon-right">
                  {isBucketOpen ? (
                    <FaAngleUp size={20} />
                  ) : (
                    <FaAngleDown size={20} />
                  )}
                </span>
              </div>
              {isBucketOpen && (
                <ul className="submenu-list">
                  <li className="submenu-item">
                    <Link to="/addBucket" className="submenu-link">
                      Add Bucket
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/searchBucket" className="submenu-link">
                      Search Bucket
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="menu-item">
              <div
                className={`menu-link ${isTaskOpen ? "active" : ""}`}
                onClick={toggleTask}
              >
                <span className="menu-link-icon-left">
                  <MdOutlineTask size={20} />
                </span>
                <span className="menu-link-text">Manage Task</span>
                <span className="menu-link-icon-right">
                  {isTaskOpen ? (
                    <FaAngleUp size={20} />
                  ) : (
                    <FaAngleDown size={20} />
                  )}
                </span>
              </div>
              {isTaskOpen ? (
                <ul className="submenu-list">
                  <li className="submenu-item">
                    <Link to="/addTask" className="submenu-link">
                      Add Task
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/pendingTask" className="submenu-link">
                      Pending Task
                    </Link>
                  </li>
                </ul>
              ) : null}
            </li>
          </ul>
        </div>

        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
            <li className="menu-item">
              <div
                className={`menu-link ${isEmailOpen ? "active" : ""}`}
                onClick={toggleEmail}
              >
                <span className="menu-link-icon-left">
                  <MdOutlineSettings size={20} />
                </span>
                <span className="menu-link-text">Email Template</span>
                <span className="menu-link-icon-right">
                  {isEmailOpen ? (
                    <FaAngleUp size={20} />
                  ) : (
                    <FaAngleDown size={20} />
                  )}
                </span>
              </div>
              {isEmailOpen ? (
                <ul className="submenu-list">
                  <li className="submenu-item">
                    <Link to="/addEmail" className="submenu-link">
                      Add Email Template
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link to="/emailList" className="submenu-link">
                      Email list
                    </Link>
                  </li>
                </ul>
              ) : null}
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineLogout size={20} />
                </span>
                <span className="menu-link-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
