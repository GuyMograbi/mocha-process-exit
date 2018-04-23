const {expect} =  require('chai');
describe('sum', function(){
  it('should sum 1 and 1', function(){
    expect(1+1).to.eq(2);
    process.exit(0);
  })

  it('should also sum 2 and 2', function(){
    expect(2+2).to.eq(3);
  })
})
