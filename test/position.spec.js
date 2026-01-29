import request from 'supertest'
import app from '../app/app.js'

describe('/api/positions', () => {
    const restype= 'application/json; charset=utf-8'
    var token = null

    it('post /positions ', async () => {
      await request(app)
        .post('/api/positions')
        .set('Accept', 'application/json')
        .send({
            name: 'Something'
        })
        .expect('Content-Type', restype)
        .expect(201)

    })
    it('get /positions', async () => {
      await request(app)
        .get('/api/positions')
        .set('Accept', 'application/json')
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('put /positions/:id', async () => {
      await request(app)
        .put('/api/positions/1')
        .set('Accept', 'application/json')
        .send({
            name: 'Another'
        })
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('delete /positions/:id', async () => {
      await request(app)
        .delete('/api/positions/1')
        .set('Accept', 'application/json')
        .expect(200)
    })
})
