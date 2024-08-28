const express = require('express');
const path = require('path');
const router = express.Router();

    const messages = [];

router.get('/message', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'message.html'));
});

router.post('/message', (req, res) => {
    const { username, message } = req.body; // Receive both username and message from the form
    console.log(`Username: ${username}, Message: ${message}`); // Log the message to the server console

    // Respond with a confirmation
    res.send(`Message received from ${username}: ${message}`);
});
router.get('/get-message', (req, res) =>{
    res.json(messages)
})
// router.get('/get-messages', (req, res) => {
//     res.json(messages); // Send all messages as JSON
// });

module.exports = router;