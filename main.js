const { createRandomData } = require('./dataGenerator');
const { checkData, checkHost } = require('./checkData');
const program = require('commander');

program
    .option('-g, --generate', 'Generate dataset')
    .option('-s, --size [num]', 'Dataset Size')
    .option('-s, --sample', 'Sample Endpoints')
    .option('-c, --check [host]', 'Test endpoints at host')
    .parse(process.argv);

if (program.generate) {
    const size = program.size || 50;
    console.log(`Generating new data set of size ${size}`);
    createRandomData(size);
}

if (program.sample) {
    checkData();
}

if (program.check || true) {
    const host = (program.check === true) ? 'localhost:1299' : program.check;
    checkHost(host);
}