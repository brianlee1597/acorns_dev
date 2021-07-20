import User, { userBiasSettings } from './components/user.js'
import bcrypt from 'bcryptjs'

export default function (app) {

    // /* ----- AUTHENTICATION (LOGIN/LOGOUT) methods ----- */

    app.post('/register', (req, res) => { //register user function, checks if user already exists, if not make new user
        req.socket.setTimeout(10000, () => { res.status(500).end() }) //if request doesn't respond, terminate after 10 sec
        try {
            User.findOne({email: req.body.email}, async (err, doc) => { //find duplicate user in the database if exists
                if (err) throw err
                if (doc) res.json("userexists") // doc = user already exists
                else {
                    const encryptedPassword = await bcrypt.hash(req.body.password, 10)
                    const newUser = new User({
                        email: req.body.email,
                        password: encryptedPassword,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        bias: req.body.bias,
                        backgroundcolor: userBiasSettings.get(req.body.bias)
                    })

                    await newUser.save() //upload new user to database
                    res.json("usercreated")
                }
            })
        } catch {
            res.json("failedpost")
        }
    })

    app.post('/login', (req, res, next) => { //login function 
        req.socket.setTimeout(10000, () => { res.status(500).end() }) //if request doesn't respond, terminate after 10 sec
        try {
            passport.authenticate('local', (error, user, info) => { //authenticate user using passport
                if (error) throw error
                if (!user) res.json('nouser')
                else {
                    req.logIn(user, error => {
                        if (error) throw error
                        res.send(req.user)
                    })
                }
            })(req, res, next)
        } catch {
            res.json("failedpost")
        }
    })

    app.post('/logout', (req, res) => { //logs user out when called from react
        req.logOut()
        res.json("loggedout")
    })
}