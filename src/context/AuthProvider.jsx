import axios from "axios";
import React, { createContext, useState, useEffect, useContext } from "react";

// 1️⃣ Create context
export const AuthContext = createContext();

// 2️⃣ Provider
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on first render
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Signup/Login -> Save user
  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  // Logout -> Clear user
const logout = async () => {
  try {
    await axios.post("http://localhost:3000/logout", {}, { withCredentials: true });
    localStorage.removeItem("user"); // optional
    setUser(null);
    console.log("Logged out successfully");
  } catch (err) {
    console.error("Logout failed", err);
  }
};

  useEffect(() => {
  // Check if redirected from Google login
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("googleLogin") === "success") {
    axios.get("http://localhost:3000/auth/me", {
      withCredentials: true // important for cookies/session
    })
      .then((res) => {
        console.log(res.data.user)
        if (res.data.user) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          setUser(res.data.user); // save user globally
        }
      });
  }
}, []);


  const authInfo = { user, login, logout };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

// 3️⃣ Custom hook (easy access)
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;