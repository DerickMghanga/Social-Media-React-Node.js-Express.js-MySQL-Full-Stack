import { Link, useNavigate } from "react-router-dom"
import "./login.scss"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

const LogIn = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  })

  const [err, setErr] = useState("" || null);
  const navigate = useNavigate();

  //set initial values and the updated ones while typing
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  // console.log(inputs)

  const { logIn } = useContext(AuthContext);

  const handleLogIn = async(e) => {
    e.preventDefault();

    try {
      await logIn(inputs);
      navigate("/");
    } catch (error) {
      console.log(error.response);
      setErr(error.response.data.message);
    }
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Sed aliquam ultrices mauris. Phasellus viverra nulla ut metus varius laoreet. Fusce vulputate eleifend sapien.
            Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Praesent ac massa at ligula laoreet iaculis. Fusce vel dui.
          </p>
          <span>Dont have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>

        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" name="username"
              onChange={handleChange}
            />
            <input type="password" placeholder="Password" name="password"
              onChange={handleChange}
            />

            {
              err && (
                <span style={{color: "red"}}>{err}!!</span>
              )
            }
            <button onClick={handleLogIn}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn