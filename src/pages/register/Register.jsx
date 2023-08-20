import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">ShazolSocial</h3>
                <span className="loginDesc">Content with friend and the would around you on ShazolSocial</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="email" placeholder="Username" className="loginInput" />
                    <input type="email" placeholder="Email" className="loginInput" />
                    <input type="password" placeholder="Password"  className="loginInput" />
                    <input type="password" placeholder="Password Again"  className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">
                        Login into Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
