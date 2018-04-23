const {expect} =  require('chai');
const winston = require('winston');

if (process.env.WITH_WINSTON){
  const logger = new winston.Logger({
    transports: [
      new winston.transports.Console({
        handleExceptions: true
      })
    ],
    exitOnError: false
  });
}

if (process.env.WITH_UNCAUGHT_EXCEPTION){
  process.on('uncaughtException', (err) => {
    console.log('this is uncaughtException', err);
  });
}

throw new Error('uncaught');

describe('sum', function(){
  it('should sum 1 and 1', function(done){
    expect(1+1).to.eq(2);
    if (process.env.WITH_PROCESS_EXIT_CALL){
      process.exit(0);
    }
  })

  it('should also sum 2 and 2', function(){
    expect(2+2).to.eq(3);
  })
})
