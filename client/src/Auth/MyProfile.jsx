import axios from 'axios'
import { useState } from 'react'
import './MyProfile.scss'

const MyProfile = props => {
/*
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
*/


    return (
        <div className="myprofile-container">
            <header class="header"></header>
            <header class="header header-1">나의 활동</header>
            <main class="main">Profile content here</main>
            <aside class="aside">photo here</aside>
            <footer class="footer">footer</footer>
        </div>
    )
}

export default MyProfile