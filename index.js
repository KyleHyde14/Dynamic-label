const express = require('express')
const app = express()
const path = require('path')

const PORT = 777

app.use(express.static(path.join(__dirname, 'Static')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Zara_label.html'))
    console.log('A label was requested')
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})