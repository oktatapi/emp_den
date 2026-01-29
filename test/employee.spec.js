import request from 'supertest'
import app from '../app/app.js'

describe('/api/employees', () => {
    const restype= 'application/json; charset=utf-8'
    var token = null

    it('post /employees ', async () => {
      await request(app)
        .post('/api/employees')
        .set('Accept', 'application/json')
        .send({
            name: 'Something'
        })
        .expect('Content-Type', restype)
        .expect(201)

    })
    it('get /employees', async () => {
      await request(app)
        .get('/api/employees')
        .set('Accept', 'application/json')
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('put /employees/:id', async () => {
      await request(app)
        .put('/api/employees/1')
        .set('Accept', 'application/json')
        .send({
            name: 'Another'
        })
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('delete /employees/:id', async () => {
      await request(app)
        .delete('/api/employees/1')
        .set('Accept', 'application/json')
        .expect(200)
    })
})
