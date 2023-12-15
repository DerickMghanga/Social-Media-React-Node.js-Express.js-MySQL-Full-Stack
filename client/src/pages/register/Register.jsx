import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
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
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register