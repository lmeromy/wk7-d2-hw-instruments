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

// refactor this into 2 smaller fns!
DisplayInstrFam.prototype.render = function(instrumentFam){
  this.container.innerHTML = '';
  const instrFamName = document.createElement('h2');
  instrFamName.textContent = instrumentFam.name;
  this.container.appendChild(instrFamName);

  const instrFamDescription = document.createElement('p');
  instrFamDescription.textContent = instrumentFam.description;
  this.container.appendChild(instrFamDescription)

  const instrFamList = document.createElement('ul');
  this.container.appendChild(instrFamList);

  const instruments = instrumentFam.instruments;
  for(let instrument of instruments){
    const li = document.createElement('li');
    li.textContent = instrument;
    instrFamList.appendChild(li);
  }
  return instrFamList;
};

module.exports = DisplayInstrFam;
