import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">ShazolSocial</h3>
                <span className="loginDesc">Content with friend and the would around you on ShazolSocial</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="email" placeholder="Email" className="loginInput" />
                    <input type="password" placeholder="Password"  className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForget">Forget Password</span>
                    <button className="loginRegisterButton">
                        Create a New Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
