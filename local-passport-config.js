import User from './user.js'
import bcrypt from 'bcryptjs'
import localStrategy from 'passport-local'

export default function (passport) { //authentication strategy for username and password
    passport.use(
        new localStrategy((username, password, done) => {
            User.findOne({username: username}, (err, user) => {
                if (err) throw err
                if (!user) return done(null, false)
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) throw err
                    if (result) {
                        return done(null, user)
                    }
                    else {
                        return done(null, false)
                    }
                })
            })
        })
    )

    passport.serializeUser((user, cb) => {
        cb(null, user.id)
    })
    passport.deserializeUser((id, cb) => {
        User.findOne({_id: id}, (err, user) => {
            cb(err, user)
        })
    })
}