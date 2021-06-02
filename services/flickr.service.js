const fetch = require('node-fetch')

const getFeeds = async (limit, offset) =>
    await fetch(
        'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1',
        {
            headers: { 'Content-Type': 'application/json' },
        }
    )
        .then(resp => resp.json())
        .then(json => ({ ...json, items: json.items.slice(offset, limit) }))

module.exports = {
    getFeeds,
}
