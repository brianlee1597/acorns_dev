import './Login.scss'

const Login = () => {
    return (
        <div className="login-container">
            <form>
                <label>Log In</label>
                <input type="text" style={{width: "40vw", height: "50px"}} id="username" name="username" placeholder="Username"/>
                <input type="text" style={{width: "40vw", height: "50px"}} id="password" name="password" placeholder="Password"/>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login