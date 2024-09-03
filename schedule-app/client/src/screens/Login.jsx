import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

// https://developers.google.com/identity/gsi/web/reference/js-reference

const Login = () => {
  const { handleGoogle, loading, error } = useFetch(
    "http://localhost:5152/login"
  );

  useEffect(() => {
    /* global google */
    if (window.google) {
      // Load the Google Identity Services library dynamically if not already loaded
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.onload = () => {
        // Initialize the Google One Tap sign-in
        google.accounts.id.initialize({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID, // Replace with your Google Client ID
          callback: handleGoogle,
          auto_select: true, // Automatically prompt the user if they've previously signed in
          context: 'signin',
        });

        // Prompt for One Tap sign-in or automatic sign-in
        google.accounts.id.prompt((notification) => {
          if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
            // Handle cases where the One Tap UI is not displayed or skipped
          }
        });
      };
      document.body.appendChild(script);

      // Cleanup function to remove the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [handleGoogle]);

  return (
    <>
      <nav style={{ padding: "2rem" }}>
        <Link to="/">Go Back</Link>
      </nav>
      <header style={{ textAlign: "center" }}>
        <h1>Login to continue</h1>
      </header>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading ? <div>Loading....</div> : <div id="loginDiv"></div>}
      </main>
      <footer></footer>
    </>
  );
};

export default Login;
