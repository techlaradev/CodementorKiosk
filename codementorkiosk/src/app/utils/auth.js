// src/app/utils/auth.js

export const logout = () => {
    // Remove os tokens de autenticação e os dados do usuário do armazenamento local
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    
    // Redireciona o usuário para a página de login
    window.location.href = "/";
  }
  
  export default logout;