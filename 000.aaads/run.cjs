//GILLIAN - i put the build in the scripts. "play" is an 'executable'
const path = require('path');
const fs = require('fs');
const MQTT = require('async-mqtt');
const { program } = require('commander');

const PORT = 1014;
const value = fs.readFileSync('./data/count.txt').toString();

let val = Number(value);
val += 1;

//IDK what kind of prefix or name convention you could use , but i thought but generic function names like  open() and command_line were system functions???
const func_open = async (prt) => {
  var bit;
  ///USE PATH.RESOLVE (not files in node_modules tho - local package files) FOR CROSS PLATFORM FILES .   a '.' refers to the current directory . text me if it doesnt work.
  ///GILLIAN: WHY IS THIS REFERRING TO THE INSIDE OF ABOTHR PACKAGE???? also, thee should RETURN SOMETHING - dont set global variables
  require(path.resolve('./../998.terminal/998.terminal/000.quest.terminal'));
  // GOT RID OF THIS FILE ITS WIERD require(path.resolve("./dist/000.quest.aaads.js"));
  //gillian: switched these all to  const . they should all be available in global scope?
  const AAADS = require(path.resolve('./dist/hunt'));
  //gillian :: WHY ARE YOU ASSIGNING THIS AS A SUB PROPERTY?  const is available in this context
  const AAADS_ACTION = require(path.resolve(
    './dist/00.aaads.unit/aaads.action',
  ));

  const title = func_command_line();
  const local = 'mqtt://localhost:' + prt;
  const localBit = { idx: 'local', src: local };

  //do these need to share a variable?
  bit = await TERMINAL.hunt(TERMINAL.ActTrm.INIT_TERMINAL, {
    dat: MQTT,
    src: local,
  });
  bit = await AAADS.hunt(AAADS_ACTION.INIT_AAADS, {
    val: 1,
    dat: MQTT,
    src: [localBit],
  });
};
const func_command_line = () => {
  var idx;
  program.option('--first').option('-t, --separator <char>');
  program.parse(process.argv);
  const options = program.opts();
  if (options['separator'] != null) idx = options['separator'];
  return idx;
};

const init = async () => {
  const aedes = require('aedes')();
  const server = require('net').createServer(aedes.handle);

  server.listen(PORT, () => {
    console.log('server started and listening on port ', PORT);
    func_open(PORT);
  });
};
process.nextTick(init);
