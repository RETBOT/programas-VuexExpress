var addUtility = require('./../add.js');
//var assert = require('assert');
var expect = require('chai').expect;

describe('Add', function(){
  it('debería tener un método suma', function() {
    //assert.equal(typeof addUtility, 'object');
    //assert.equal(typeof addUtility.suma, 'function');
    expect(addUtility).to.be.an('object');
    expect(addUtility).to.have.property('suma');
  });

  it('addUtility.suma(5,4) deberia retornar 9', function() {
    // assert.deepEqual(addUtility.suma(5, 4), 9);
    expect(addUtility.suma(5,4)).to.deep.equal(9);
  });

  it('addUtility.suma(100, 6) debería de retornar 106', 
  function() {
    expect(addUtility.suma(100, 6)).to.deep.equal(106);
  });
});