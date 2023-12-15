import { Link } from "react-router-dom"
import "./login.scss"

const LogIn = () => {
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
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn