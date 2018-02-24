
import { serverReady } from '../../server';

describe('/Run unit test', () => {
  before(done => {
    const listenServer = setInterval(()=>{
      if(serverReady()){
        done();
        clearInterval(listenServer);
      }
    }, 1000);
  });
 
  after(() => setTimeout(() => process.exit(), 1000))

  require('./topics.test')

});