const 
  avro = require('avsc'),
  path = require('path'),
  fs = require('fs');

exports.command = 'generalize <jsonfile>';

exports.describe = 'derives an Avro schema based on an object.';

exports.builder = {
  jsonfile: {
    describe: 'JSON file containing the object to derive from the Avro schema',
    type: 'string'
  }
};

exports.handler = (argv) => {
  let jsonPath = path.resolve(argv.jsonfile);
  if (!fs.existsSync(jsonPath)) {
    console.error('Error: file ' + jsonPath + ' does not exist.');
    return;
  }

  let data;
  try {
    data = JSON.parse(fs.readFileSync(jsonPath));
  } catch (error) {
    console.error('Error: failed to parse json from file.');
    return;
  }

  let type = avro.Type.forValue(data);
  console.log(JSON.stringify(type, null, 2));
};
