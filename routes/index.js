const express = require('express')
const flickrRoute = require('./flickr.route')

const router = express.Router()

router.use('/flickr-feeds', flickrRoute)

module.exports = router
