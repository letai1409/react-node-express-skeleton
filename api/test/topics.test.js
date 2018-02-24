import chai from 'chai';
import chaiHttp from 'chai-http';
import { API } from '../../api/settings';

const expect = chai.expect;
chai.use(chaiHttp);

describe('/GET Topics', () => {
  it('it should GET all Topics', done => {
    chai
      .request(API.endpoint + '/api/v1')
      .get('/topics')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});