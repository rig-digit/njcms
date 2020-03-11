const fetch = require('node-fetch');

module.exports = {
  getAllCustomers : async function (ctx) {
    var customers =[];
    await fetch('https://igurukul-cms.herokuapp.com/customers', {
      method: 'GET',
      headers:  {
        'User-Agent': 'node-fetch',
        'Authorization': 'Basic bXl1c2VyMTpwYXNzd29yZA==',
        'Content-Type': 'application/json',
        'language-code': 'EN'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log('Success promise customers fetch');   
      customers = data;
    })
    .catch(err => {
      console.log('Success promise customers fetch');   
      console.log(err);
    })
    ctx.ok({ customers })
  },
  getSpecificCustomer : async function (ctx) {
    var customer ={}
    console.log('Going promise customers fetch');   
    await fetch(`https://igurukul-cms.herokuapp.com/customers/${ctx.params.id}`, {
      method: 'GET',
      headers:  {
        'User-Agent': 'node-fetch',
        'Authorization': 'Basic bXl1c2VyMTpwYXNzd29yZA==',
        'Content-Type': 'application/json',
        'language-code': 'EN'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log('Success promise customers fetch');   
      customer = data;
    })
    .catch(err => {
      console.log('Success promise customers fetch');   
      console.log(err);
    })

    
    ctx.ok({ customer }) 
  }
}