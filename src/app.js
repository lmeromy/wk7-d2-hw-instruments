const instrumentFamData = require('./data/instrument_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const InstrFamInput = require('./views/select_instrumentfam.js');
const DisplayInstrFam = require('./views/display_instrumentfam.js');

document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');
  const selectElement = document.querySelector('#instrument-families');
  const instrFamDropdown = new InstrFamInput(selectElement);
  instrFamDropdown.bindEvents();

  const display = document.querySelector('#instrument-family-display')
  const instrumentFamInfoDisplay = new DisplayInstrFam(display);
  instrumentFamInfoDisplay.bindEvents();


  const instrumentFamDataModel = new InstrumentFamilies(instrumentFamData);
  // console.log(instrumentFamDataModel.data);
  instrumentFamDataModel.bindEvents();

});
