import axios from 'axios'
import { useState } from 'react'
import './Register.scss'

const Register = () => {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = event => {
        event.preventDefault()

        if (email === '') {
            console.log("Email is empty")
            return
        }
        else if (username === '') {
            return
        }
        else if (password === '') {
            return 
        }
        
        const formData = {
            username: username,
            password: password,
            email: email
        }

        // axios.post('http://localhost:8080/register-local', formData)
        // .then(response => {
        //     if(response.data === 'userexists') {
        //         alert("User Already Exists")
        //         return
        //     } 
        //     else 
        //         window.location.href = '/login'
        // })
        // .then(error => console.log(error))

        axios.post('/register-local', formData)
        .then(response => {
            if(response.data === 'userexists') {
                alert("User Already Exists")
                return
            } 
            else 
                window.location.href = '/login'
        })
        .then(error => console.log(error))
    }

    const handleInput = event => {
        event.target.name === "username"? setUsername(event.target.value):
        event.target.name === "password"? setPassword(event.target.value):
        setEmail(event.target.value)
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <label>계정 만들기</label>
                <input onChange={handleInput} type="email" style={{width: "40vw", height: "50px"}} id="email" name="email" placeholder="이메일"/>
                <input onChange={handleInput} type="username" style={{width: "40vw", height: "50px"}} id="username" name="username" placeholder="아이디"/>
                <input onChange={handleInput} type="password" style={{width: "40vw", height: "50px"}} id="password" name="password" minlength="5" placeholder="비밀번호"/>
                <button type="submit">고고~!</button>
            </form>
        </div>
    )
}

export default Register