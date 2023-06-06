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
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9a-zA-Z]).{8,}$/;


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    
    if (name === 'email') {
      const isValidEmail = emailRegex.test(value);
        if(isValidEmail){
          alert('Email Inválido')
          return;
        }
    };
    if (name === 'password') {
      const isValidPassword = passwordRegex.test(value);
        if(isValidPassword) {
          alert('Senha inválida: A senha deve conter ao menos 8 carateres. Sendo ao menos uma letra maiuscula especial(!@#$%ˆ&)')
          return;
        }
    }

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err)

  return (
    <div className="container-form">
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
              <button onClick={handleClick}><Link to="/login" >Registre-se</Link></button>
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