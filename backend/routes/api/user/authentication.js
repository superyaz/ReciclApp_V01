const { Router } = require('express');
const passport = require('passport');
const router = Router();

router.post('/signin', (req, res, next) => {
    passport.authenticate('local.signin', {
        //
    })(req, res, next);
});

router.post('/signup', (req, res, next) => {
    passport.authenticate('local.signup', {
        //
    })(req, res, next);
});

module.exports = router;