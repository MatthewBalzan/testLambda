'use strict';

// tests for hello
// Generated by serverless-mocha-plugin

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let wrapped = mochaPlugin.getWrapper('hello', '/handler.ts', 'hello');

describe('hello', () => {
  before((done) => {
    done();
  });

  it('Test hello()', async () => {
    const response = await wrapped.run({});
    expect(JSON.parse(response.body).message).to.be.equal('We are in develop!');
  });
});
