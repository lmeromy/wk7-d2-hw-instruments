const PubSub = require('../helpers/pub_sub.js');

const InstrFamInput = function (element) {
  this.element = element;

};

InstrFamInput.prototype.bindEvents = function () {
  // console.log(this.element);
  PubSub.subscribe('InstrFamilies:instrument-fams-ready', (event) => {
    const allInstrFams = event.detail;
    this.populate(allInstrFams);
  });

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectInstrFam:change', selectedIndex);
  });

};

InstrFamInput.prototype.populate = function (instrumentFamData) {
  instrumentFamData.forEach((family, index) => {
    const option = document.createElement('option');
    option.textContent = family.name;
    option.value = index; // is this line necessary?
    this.element.appendChild(option);
  })

};


module.exports = InstrFamInput;
