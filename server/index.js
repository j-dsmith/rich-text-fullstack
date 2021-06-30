const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./config/keys')

const app = express()


passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken) =>  {
  console.log(accessToken);
}))

//authenticate user with google strategy and ask for profile and email from google
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))

const PORT = process.env.PORT || 5000
app.listen(PORT)

// 991341807959-daelhlv0nec97io5r6jg9jqldtldq797.apps.googleusercontent.com
// EtT42YvR18TtrreZt4Z8dDEU