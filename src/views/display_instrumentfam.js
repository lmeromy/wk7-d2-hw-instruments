const PubSub = require('../helpers/pub_sub.js');

const DisplayInstrFam = function(container){
  this.container = container;
};

DisplayInstrFam.prototype.bindEvents = function(){
  PubSub.subscribe('InstrFamilies:selected-instrument-fam-ready', (event) => {
    const instrumentFam = event.detail;
    this.render(instrumentFam);
  });
};

DisplayInstrFam.prototype.render = function(instrumentFam){
  const instrFamName = document.createElement('h2');
  instrFamName.textContent = instrumentFam.name;
  this.container.innerHTML = '';
  this.container.appendChild(instrFamName);

  const instrFamDescription = document.createElement('p');
  instrFamDescription.textContent = instrumentFam.description;
  this.container.appendChild(instrFamDescription)

  const instrFamList = document.createElement('ul');
  this.container.appendChild(instrFamList);


// not working yet
  const instruments = instrumentFam.instruments;
  for(let instrument in instruments){
    const instrument = document.createElement('li');
    instrument.textContent = instrument;
    // console.log(instrument);
    instrFamList.appendChild(instrument);

  }
};

module.exports = DisplayInstrFam;
