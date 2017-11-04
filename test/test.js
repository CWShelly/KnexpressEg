process.env.NODE_ENV = 'test';
const knex = require(__dirname + '/../knex').knex;
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request;
const app = require(__dirname + '/../server/_server');
const port = 4000;

describe('the requests', ()=>{

    before((done)=>{

        this.server = app(port, console.log('up on' + port));
        done();
    });

    after((done)=>{
        this.server.close(()=>{
            done();
        });
    });


    beforeEach(function(done) {
        knex.migrate.rollback()
    .then(function() {
        knex.migrate.latest()
    .then(function() {
        return knex.seed.run()
    .then(function() {
        done();
    });
    });
    });
    });

    afterEach(function(done) {
        knex.migrate.rollback()
        .then(function() {
            done();
        });
    });


    it('should get', (done)=>{
        request('http://localhost:4000')
        .get('/api/sample')
        .end((err, res)=>{
            console.log(res.status);
            console.log(err);
            done();
        });

    });


    it('should post', (done) => {
        request('localhost:4000')
    .post('/api/sample')
    .send({ name: 'testy testface', email:'emaily@emailface.com'} )
    .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        done();
    });
    });

});
