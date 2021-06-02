const express = require('express')
const fetch = require('node-fetch')

const app = express()
const port = process.env.PORT || 4000

const getFeeds = async () =>
    await fetch(
        'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1',
        {
            headers: { 'Content-Type': 'application/json' },
        }
    ).then(resp => resp.json())

app.get('/feeds', async (req, res) => {
    const { limit = 1, offset = 0 } = req.query

    const result = await getFeeds()

    res.send({ ...result, items: result.items.slice(offset, limit) })
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})
