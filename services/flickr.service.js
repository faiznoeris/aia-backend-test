const fetch = require('node-fetch')

const getFeeds = async (pageNumber, limit, tags) =>
    await fetch(
        `https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1${
            tags ? `&tags=${tags}` : ''
        }`,
        {
            headers: { 'Content-Type': 'application/json' },
        }
    )
        .then(resp => resp.json())
        .then(json => ({
            ...json,
            // reduce pageNumber by 1 because usually human readable number starts with 1
            items: json.items.slice(
                (pageNumber - 1) * limit,
                pageNumber * limit
            ),
            total: json.items.length,
        }))

module.exports = {
    getFeeds,
}
