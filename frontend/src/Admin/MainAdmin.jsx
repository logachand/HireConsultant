import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import "./admin.css";
import { useNavigate } from "react-router-dom";

export default function MainAdmin() {
  const navigate = useNavigate();
  useEffect(() => {
    const getAdminToken = window.localStorage.getItem("adminToken");

    while (getAdminToken) {
      if (!getAdminToken) {
        alert("Restricted Admin. Please log in to Admin.");
        navigate("/");
      }   
    }
  });

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      <div className="body">
        <div className="grid-container">
          <Header OpenSidebar={OpenSidebar} />
          <Sidebar
            openSidebarToggle={openSidebarToggle}
            OpenSidebar={OpenSidebar}
          />
          <Home />
        </div>
      </div>
    </>
  );
}
