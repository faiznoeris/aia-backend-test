const express = require('express')
const { flickrService } = require('../services')

const router = express.Router()

router.get('/', async (req, res) => {
    const { limit = 1, offset = 0 } = req.query
    const feeds = await flickrService.getFeeds(limit, offset)

    res.send(feeds)
})

module.exports = router
