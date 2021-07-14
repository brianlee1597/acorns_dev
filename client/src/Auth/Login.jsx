import { useState } from 'react'
import axios from 'axios'
import './Login.scss'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleInput = event => {
        event.target.name === "username"? setUsername(event.target.value):
        setPassword(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        
        const formData = {
            username: username,
            password: password
        }

        axios.post('/login', formData)
        .then(response => {
            // if (response.data === 'nouser') {
            //     console.log("Please check your email and password again")
            //     return 
            // }
            // else 
            //     window.location.href = '/'
            console.log(response)
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <label>로그인</label>
                <input onChange={handleInput} type="username" style={{width: "40vw", height: "50px"}} id="username" name="username" minLength="8" placeholder="아이디"/>
                <input onChange={handleInput} type="password" style={{width: "40vw", height: "50px"}} id="password" name="password" minLength="8" placeholder="비밀번호"/>
                <button type="submit">고고~!</button>
            </form>
        </div>
    )
}

export default Login