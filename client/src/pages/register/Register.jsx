import { Link } from "react-router-dom"
import "./register.scss"
import { useState } from "react"
import axios from "axios"

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    name: "",
    password: "",
  })

  const [err, setErr] = useState("" || null);

  //set initial values and the updated ones while typing
  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));  
  }
  // console.log(inputs)

  const handleClick = async(e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs)
      .then((res)=> {
        console.log(res.data);
      })
    } catch (error) {
      console.log(error.response.data.message );
      setErr(error.response.data.message );
    }
  }

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Deroo Social.</h1>
          <p>
            Sed aliquam ultrices mauris. Phasellus viverra nulla ut metus varius laoreet. Fusce vulputate eleifend sapien.
            Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Praesent ac massa at ligula laoreet iaculis. Fusce vel dui.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>

        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="Username" 
              name="username" onChange={handleChange}
            />
            <input type="email" placeholder="Email"
              name="email" onChange={handleChange}
            />
            <input type="text" placeholder="Name"
              name="name" onChange={handleChange}
            />
            <input type="password" placeholder="Password"
              name="password" onChange={handleChange}
            />

            {
              err && (
                <span>{err}!!</span>
              )
            }
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register