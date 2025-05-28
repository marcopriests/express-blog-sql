const connection = require('../data/db')

const index = (req, res) => {
    const sql = 'SELECT * FROM posts'

    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed' })
        }

        res.json(results)
    })
}

const show = (req, res) => {
    const id = req.params.id
    const sql = 'SELECT * FROM posts WHERE id = ?'
    const tagSql = 'SELECT * FROM tags JOIN post_tag ON tags.id = post_tag.tag_id WHERE post_tag.post_id = ?'

    connection.query(sql, [id], (err, postResults) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })
        if (postResults.length === 0) return res.status(404).json({ error: 'Post not found' })

        const post = postResults[0]

        connection.query(tagSql, [id], (err, tagResults) => {
            if (err) return res.status(500).json({ error: 'Database query failed' })
            post.tags = tagResults
            res.json(post)
        })

    })
}

const destroy = (req, res) => {
    const id = req.params.id
    const sql = 'DELETE FROM posts WHERE id = ?'

    connection.query(sql, [id], (err) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })


        res.sendStatus(204)
    })
}

module.exports = { index, show, destroy }