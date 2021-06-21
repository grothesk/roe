const 
  avro = require('avsc'),
  path = require('path'),
  fs = require('fs');

exports.command = 'sample <schemafile>';

exports.describe = 'create a randomized sample of the given Avro schema';

exports.builder = {
  schemafile: {
    describe: 'File containing an Avro schema',
    string: 'string'
  }
};

exports.handler = (argv) => {
  let schemaPath = path.resolve(argv.schemafile);

  if (!fs.existsSync(schemaPath)) {
    console.error('Error: file ' + schemaPath + ' does not exist.');
    return;
  }

  let type; 
  try {
    type = avro.parse(schemaPath);
  } catch (error) {
    console.error('Error: failed to parse schema from file.');
    return;
  }

  console.log(JSON.stringify(type.random(), null, 2));
};
