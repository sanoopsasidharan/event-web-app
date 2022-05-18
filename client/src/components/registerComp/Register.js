import React, { useState } from "react";

import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [RegisterType, setRegisterType] = useState("virtual");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();

  const handleNavigate = () => {
    navigate("/");
  };
  const handleSubmit = () => {
    try {
      if (name === "" || email === "" || number === "" || RegisterType === "") {
        alert("please fill the form");
        return false;
      }

      axios
        .post("/register", { name, email, number, RegisterType })
        .then((res) => {
          console.log(res);
          if (res.data.user) {
            alert("register user");
            handleNavigate();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="mainDivRegister">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 className="my-4 font-weight-bold .display-4">Register</h1>
        </div>

        <div
          style={{
            color: "red",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="inputDiv">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control shadow-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control shadow-none"
            />
            <input
              type="number"
              placeholder="Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="form-control shadow-none"
            />

            <div>
              <select
                value={RegisterType}
                onChange={(e) => setRegisterType(e.target.value)}
              >
                <option value="virtual">virtual</option>
                <option value="offline">offline</option>
              </select>
            </div>
          </div>
        </div>

        <button
          style={{ width: "100%" }}
          className="btn btn-dark mt-3"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Register;
