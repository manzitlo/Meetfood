const express = require('express');
const router = express.Router();
const UserTest = require('../models/userTest.js')

router.get('/meetfood', async (req, res) => {

    const user = new UserTest({
        userName: "manzitlo",
        firstName: "Wenzhe",
        lastName: "Luo",
    });

    await user.save();

    res.send('<h2> Hello from Meetfood page </h2>');

})

module.exports = router;