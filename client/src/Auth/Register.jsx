import axios from 'axios'
import { useState } from 'react'
import './Register.scss'

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [bias, setBias] = useState('')

    const handleSubmit = event => {
        event.preventDefault()

        if(email === '') {
            alert("Please input an email")
            return 
        }
        else if (password === '') {
            alert("Please input a password")
            return 
        }
        else if (bias === '') {
            alert("Please choose a bias")
            return 
        }
        
        const formData = {
            email: email,
            password: password,
            bias: bias
        }

        axios.post('/register', formData)
        .then(response => {
            if(response.data === 'userexists') {
                alert("User Already Exists")
                return
            } 
            else 
                window.location.href = '/login'
        })
        .catch(error => console.log(error))
    }

    const handleInput = event => {
        event.target.name === "email"?    setEmail(event.target.value):
        event.target.name === "password"? setPassword(event.target.value):
                                          setBias(event.target.value)
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <label>계정 만들기</label>
                <input onChange={handleInput} type="email" id="email" name="email" placeholder="이메일"/>
                <input onChange={handleInput} type="password" id="password" name="password" minLength={5} placeholder="비밀번호"/>
                <h2>Bias:</h2>
                <div className="bias-container">
                    <input type="radio" onChange={handleInput} name="bias" id="radioAespa" value="Aespa"/>
                    <label htmlFor="radioAespa">Aespa</label>

                    <input type="radio" onChange={handleInput} name="bias" id="radioBTS" value="BTS"/>
                    <label htmlFor="radioBTS">BTS</label>

                    <input type="radio" onChange={handleInput} name="bias" id="radioBlackpink" value="Blackpink"/>
                    <label htmlFor="radioBlackpink">Blackpink</label>
                </div>
                <button type="submit">고고~!</button>
            </form>
        </div>
    )
}

export default Register