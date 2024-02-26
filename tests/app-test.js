const request = require('supertest');
const app = require('../app');

describe('GET /', function () {
    it('responds with text "Hello world, Herzlich Willkommen bei meiner Präsentation"', function (done) {
        request(app)
            .get('/')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });
});
