import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";
import animatedSignUp from '../../assets/animated-signup.png';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err)

  return (
    <div className="container">
      <div className="content">
          <div className="left">
            <h1>Entre para a nossa <br /> comunidade</h1>
            <img src={animatedSignUp} alt = "illustration"  />
          </div>

          <div className="form">
            <h1>Registre-se</h1>
            <form>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
              />
              {err && err}
              <button onClick={handleClick}>Registre-se</button>
            </form>
            <div className="redirect">
              <span>Já tem uma conta?</span>
              <Link to="/login">
                <p>Login</p>
              </Link>
            </div>
           

          </div>

      </div>
    </div>
  );
};

export default Register;