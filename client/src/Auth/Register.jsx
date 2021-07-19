import axios from 'axios'
import { useState } from 'react'
import './Register.scss'

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [bias, setBias] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

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
        else if (firstName === '') {
            alert("Please input your name")
            return 
        }
        else if (lastName === '') {
            alert("Please input your last name")
            return 
        }
        
        const formData = {
            email: email,
            password: password,
            firstname: firstName,
            lastname: lastName,
            bias: bias
        }

        axios.post('/register', formData)
        .then(response => {
            if(response.data === 'userexists')
                alert("User Already Exists")
            else 
                window.location.href = '/login'
        })
        .catch(error => console.log(error))
    }

    const handleInput = event => {
        switch (event.target.name) {
            case "password": setPassword(event.target.value)
                break
            case "firstname": setFirstName(event.target.value)
                break
            case "lastname": setLastName(event.target.value)
                break
            case "bias": setBias(event.target.value)
                break
            default: setEmail(event.target.value)
        }
    }

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit} autoComplete="off">
                <label>계정 만들기</label>
                <input onChange={handleInput} type="email" id="email" name="email" placeholder="이메일"/>
                <input onChange={handleInput} type="password" id="password" name="password" minLength={5} placeholder="비밀번호"/>
                <input onChange={handleInput} type="password" id="password" name="password" minLength={5} placeholder="비밀번호 재입력"/>
                <div class="name-container">
                <input onChange={handleInput} type="text" id="lastname" name="lastname" placeholder="성"/>
                <input onChange={handleInput} type="text" id="firstname" name="firstname" placeholder="이름"/>
                </div>
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