import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Home, Landing, Login, Signup, Dashboard, SignUpSuccess } from "./screens";

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user?.email ? <Navigate to="/dashboard" /> : <Landing />}
        />
        <Route
          path="/signup"
          element={user?.email ? <Navigate to="/home" /> : <Signup />}
        />
        <Route
          path="/login"
          element={user?.email ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/home"
          element={user?.email ? <Home user={user} /> : <Navigate to="/" />}
        />
        <Route
          path="/dashboard"
          element={user?.email ? <Dashboard user={user}/> : <Navigate to="/"/>}
        />
        <Route
          path="/signupsuccess"
          element={user?.email ? <SignUpSuccess user={user}/> : <Navigate to="/"/>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
