const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

passport.use(
    new GoogleStrategy(
      // Configuartion object
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
      },

      async function(accessToken, refreshToken, profile, cb) {
        let user = await User.findOne({ googleId: profile.id });
        if (user) return cb(null, user);
      }
    )
  );