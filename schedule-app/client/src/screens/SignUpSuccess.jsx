import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"

const SignUpSuccess = () => {
  return (
    <>
      <div style={{ marginTop: '10px', marginRight: '10px'}}>
        <a href="https://bobatalks.com"><img src={"./Bobatalk-Logo-darkblue.png"} alt="bobtalks logo" style={{width:'20%', height:'20%'}}/></a>
      </div>
      <div style={{ textAlign:"center", marginTop: '50px'}}>
        <header>
          <h1>Sign Up Successful</h1>
          <h5 className="poppins-regular" style={{ marginBottom: '10px'}}>Your account has been successfully activated.</h5>
        </header>
        <div style={{ justifyContent:"center", marginTop: '50px'}}>
            <img src={"./6-Signup-successful.png"} alt="happy boba" style={{width:'30%', height:'30%'}}/>
        </div>
      </div>
      <main style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
          <Link
          to="/dashboard">
          <button style={{width:"400px", height:"40px", backgroundColor: "dark-brown"}}>
            Go to Dashboard
          </button>
          </Link>
        </main>
    </>
  );
};

export default SignUpSuccess;
