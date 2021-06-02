const express = require('express')
const { flickrService } = require('../services')

const router = express.Router()

router.get('/', async (req, res) => {
    const { limit = 1, offset = 0, tags = '' } = req.query
    const feeds = await flickrService.getFeeds(limit, offset, tags)

    res.send(feeds)
})

module.exports = router
