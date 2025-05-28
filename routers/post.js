const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Elenco post')
})

router.get('/:id', (req, res) => {
    res.send(`Dettaglio del post ${req.params.id}`)
})

module.exports = router