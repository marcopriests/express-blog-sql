const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')

router.get('/', postController.index)


router.get('/:id', postController.show)

router.delete('/:id', postController.destroy)


module.exports = router