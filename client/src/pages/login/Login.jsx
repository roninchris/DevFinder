import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
import loginImage from '../../assets/login-animated.png';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="container">
      <div className="content">
          <div className="left">
            <h1>Como é bom ter você <br /> de volta!</h1>
            <img src = {loginImage} /> 
          </div>
          <div className="form">
            <h1>Login</h1>
            <form>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              {err && err}
              <button onClick={handleLogin}>Login</button>
            </form>
            <div className="redirect">
              <span>Ainda não tem uma conta DevFinder?</span>
              <Link to="/register">
                <p>Registre-se</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;