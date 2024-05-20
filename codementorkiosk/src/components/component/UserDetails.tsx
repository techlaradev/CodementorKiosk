// UserDetails.tsx
"use client";
import React, { useEffect, useState } from "react";

const UserDetails = () => {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    // Obtendo os dados do usuário do localStorage
    const userDataString = localStorage.getItem("user");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      if (userData.nome) {
        setUserName(userData.nome);
      }
    }
  }, []);

  return <span>{userName}</span>;
};

export default UserDetails;
