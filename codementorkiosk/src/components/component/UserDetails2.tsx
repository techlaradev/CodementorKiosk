// UserDetails2.tsx
import React, { useEffect, useState } from "react";

const UserDetails2 = () => {
  const [userType, setUserType] = useState<string>("");

  useEffect(() => {
    // Obtendo os dados do usuário do localStorage
    const userDataString = localStorage.getItem("user");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      if (userData.tipoUsuario) {
        // Verifique se o tipo de usuário está presente
        setUserType(userData.tipoUsuario);
      }
    }
  }, []);

  return userType;
};

export default UserDetails2;
