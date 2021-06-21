const 
  avro = require('avsc'),
  path = require('path'),
  fs = require('fs');

exports.command = 'validate <schemafile> <jsonfile>';

exports.describe = 'validates whether an Avro schema can be applied to an object';

exports.builder = {
  jsonfile: {
    describe: 'JSON file containing the object to validate',
    type: 'string'
  },
  schemafile: {
    describe: 'File containing an Avro schema',
    type: 'string'
  }
};

exports.handler = (argv) => {
  let schemaPath = path.resolve(argv.schemafile);
  if (!fs.existsSync(schemaPath)) {
    console.error('Error: file ' + schemaPath + ' does not exist.');
    return;
  }

  let jsonPath = path.resolve(argv.jsonfile);
  if (!fs.existsSync(jsonPath)) {
    console.error('Error: file ' + jsonPath + ' does not exist.');
    return;
  }

  let type;
  try {
    type = avro.parse(schemaPath);
  } catch (error) {
    console.error('Error: failed to parse schema from file.');
    return;
  }

  let data;
  try {
    data = JSON.parse(fs.readFileSync(jsonPath));
  } catch (error) {
    console.error('Error: failed to parse json from file.');
    return;
  }
  
  if (type.isValid(data)) {
    console.log(true);
  } else {
    console.log(false);
  }
};
