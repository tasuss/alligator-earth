const path = require('path');
const fs = require('fs');
const MQTT = require('async-mqtt');
const { program } = require('commander');

const PORT = 1014;

var idx;
program.option('--first').option('-t, --separator <char>');
program.parse(process.argv);
const options = program.opts();
if (options['separator'] != null) idx = options['separator'];

const title = idx;

let dev = false

if (title == 'development') dev = true

const init = async () => {
  const aedes = require('aedes')();
  const server = require('net').createServer(aedes.handle);

  server.listen(PORT, () => {
    console.log('server started and listening on port ', PORT);
    open(PORT);
  });
};


let AAADS = require(path.resolve('./dist/hunt'));
let AAADS_ACTION = require(path.resolve('./dist/00.aaads.unit/aaads.action'));


const open = async (prt) => {
  var bit;

  require(path.resolve('./../998.terminal/998.terminal/000.quest.terminal'));
  
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

const close = async ()=>{

  bit = await AAADS.hunt(AAADS_ACTION.CLOSE_AAADS, {});


  


}

process.nextTick(init);

if (dev == false) return

console.log("deving...")
const { exec } = require('child_process')

process.chdir("../");

var pivot = exec("pnpm watch")

process.chdir("./000.aaads");

pivot.stderr.on('data', function (data) {
  //console.log('aaads stderr: ' + data.toString());
});

let errored = false
let working = true 

pivot.stdout.on('data', async (data)=> {
  if ( data.length < 3 ) return 

  if (data.includes('Watching for file changes.') == false) return
  if (data.includes('Found 0 errors.') == true ) {

    if ( errored == false ){
      return
    }

    errored = false

    //now reset the game
    bit = await close() 

    return

  }
  
  
  if (data.includes('Debugger') == true ) return
  data
  errored = true;
  

});

