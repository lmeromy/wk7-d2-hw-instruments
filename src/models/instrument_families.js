const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};


InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish('InstrFamilies:instrument-fams-ready', this.data);
  // console.log('New logs', this.data);

  PubSub.subscribe('SelectInstrFam:change', (event) => {
      // console.log(event);
      const selectedIndex = event.detail;
      this.publishInstrFamDetail(selectedIndex);
    });

};

InstrumentFamilies.prototype.publishInstrFamDetail = function (instrFamIndex) {
  const selectedInstrFam = this.data[instrFamIndex];
  PubSub.publish('InstrFamilies:selected-instrument-fam-ready', selectedInstrFam);
};
module.exports = InstrumentFamilies;
