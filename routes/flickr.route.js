const express = require('express')
const { flickrService } = require('../services')

const router = express.Router()

router.get('/', async (req, res) => {
    const { pageNumber = 1, limit = 1, tags = '' } = req.query
    const feeds = await flickrService.getFeeds(
        Number(pageNumber),
        Number(limit),
        tags
    )

    res.send(feeds)
})

module.exports = router
