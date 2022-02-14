const express = require('express')
const app = express()

app.route('/').get((req, res) => {
        res.send('Hi there')
})

app.listen(3000)