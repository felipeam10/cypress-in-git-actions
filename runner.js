const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijk4NjQwMGE2LTQ3NjAtNDBmMS1hNDdjLWI4NTEwZDBmZjY3Ni0xNzQzNzQxNDQzNDM4IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZGI5NTZlZmEtNjYxYy00MWUxLTlhN2YtZTI1ODhhZGE4ZjJjIiwidHlwZSI6InQifQ.RuaE3GRoXqccIwnaKozMUyPGQXA2tHvd09dnoJGIIag';

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})