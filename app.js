const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.use(express.json())

app.get('/', (req, res) => {
    console.log('Server del mio blog')
    res.send('Benvento nel mio blog')
})

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`)
})