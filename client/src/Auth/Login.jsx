import './Login.scss'

const Login = () => {
    return (
        <div className="login-container">
            <form>
                <label>로그인</label>
                <input type="username" style={{width: "40vw", height: "50px"}} id="username" name="username" placeholder="아이디"/>
                <input type="password" style={{width: "40vw", height: "50px"}} id="password" name="password" placeholder="비밀번호"/>
                <button type="submit">고고~!</button>
            </form>
        </div>
    )
}

export default Login