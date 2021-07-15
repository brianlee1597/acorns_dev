import { useState } from 'react'
import axios from 'axios'
import { NavLink } from "react-router-dom"
import './Login.scss'

const Login = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleInput = event => {
        event.target.name === "email"? setEmail(event.target.value):
        setPassword(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        
        if(email === '') {
            alert("Please input a username")
            return 
        }
        else if (password === '') {
            alert("Please input a password")
            return 
        }
        
        const formData = {
            email: email,
            password: password
        }

        axios.post('/login', formData)
        .then(response => {
            if (response.data === 'nouser') {
                alert("Please check your email and password again")
                return 
            }
            else {
                window.location.href = '/'
            }
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <label>로그인</label>
                    <input onChange={handleInput} type="email" style={{width: "40vw", height: "50px"}} id="email" name="email" minLength={5} placeholder="이메일"/>
                    <input onChange={handleInput} type="password" style={{width: "40vw", height: "50px"}} id="password" name="password" minLength={5} placeholder="비밀번호"/>
                    <button type="submit">고고~!</button>
                    <p>Don't have an account? <NavLink to="/register">Create one</NavLink></p>
                </form>
        </div>
    )
}

export default Login