import React from "react";
import Register from "../components/registerComp/Register";
import "./RegisterPage.css";

function RegisterPage() {
  return (
    <div className="mainDiv">
      <div className=" container mt-5">
        <div className="row">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="col-md-5"
          >
            <Register />
          </div>
          <div className="col-md-7 my-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
