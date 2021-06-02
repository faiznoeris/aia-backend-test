const express = require('express')
const fetch = require('node-fetch')
const xml2js = require('xml2js')

const app = express()
const port = process.env.PORT || 4000

const getFeeds = async () =>
    await fetch('https://api.flickr.com/services/feeds/photos_public.gne', {
        headers: { 'Content-Type': 'application/xml' },
    }).then(resp => resp.text())

app.get('/feeds', async (req, res) => {
    const feeds = await getFeeds()

    const result = await xml2js.parseStringPromise(feeds, {
        mergeAttrs: true,
    })

    res.send(result)
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})
