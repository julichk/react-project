import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";

const LogOut = () => {
  const navigate = useNavigate();
  const [confirmLogoutVisible, setConfirmLogoutVisible] = useState(false);

  const handleLogoutClick = () => {
    setConfirmLogoutVisible(true);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("login");
    navigate("/news");
  };

  const handleCancelLogout = () => {
    setConfirmLogoutVisible(false);
  };

  return (
    <div>
      <p
        className="side_log-out"
        onClick={handleLogoutClick}
        aria-label="log-out"
      >
        Log out
      </p>
      <Modal
        title="Confirm Logout"
        visible={confirmLogoutVisible}
        onOk={handleConfirmLogout}
        onCancel={handleCancelLogout}
      >
        <p>Are you sure you want to log out?</p>
      </Modal>
    </div>
  );
};

export default LogOut;
