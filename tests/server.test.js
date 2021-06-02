const app = require('../server')
const { flickrService } = require('../services')
const supertest = require('supertest')

test('GET /flickr-feeds', async () => {
    const feeds = await flickrService.getFeeds(1, 0, '')
    const feed = feeds.items[0]

    await supertest(app)
        .get('/flickr-feeds')
        .expect(200)
        .then(response => {

            // Check type and length
            expect(Array.isArray(response.body.items)).toBeTruthy()
            expect(response.body.items.length).toEqual(1)

            // Check data
            expect(response.body.items[0].title).toBe(feed.title)
            expect(response.body.items[0].link).toBe(feed.link)
            expect(response.body.items[0].date_taken).toBe(feed.date_taken)
        })
})
