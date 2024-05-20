// LogoutButton.tsx
import React from "react";
import { logout } from "@/app/utils/auth";

const LogoutButton = () => {
  const handleLogout = () => {
    logout();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
