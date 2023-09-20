const path = require('path');
const fs = require('fs');
const MQTT = require('async-mqtt');
const { program } = require('commander');

const PORT = 1001;

let GAME, GAME_ACTION;
let TERMINAL;
let SPACE;

var idx;
program.option('--first').option('-t, --separator <char>');
program.parse(process.argv);
const options = program.opts();
if (options['separator'] != null) idx = options['separator'];

const title = idx;

let dev = false

if (title == 'development') dev = true

const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);

server.listen(PORT, async () => {
  console.log('server started and listening on port ', PORT);
  init(PORT);
});


const init = async (prt) => {

  console.log("inits")

  const local = 'mqtt://localhost:' + prt;
  const localBit = { idx: 'local', src: local };

  GAME = require(path.resolve('./dist/000.game/hunt'));
  GAME_ACTION = require(path.resolve('./dist/000.game/00.game.unit/game.action'));

  TERMINAL = require(path.resolve('../998.terminal/dist/998.terminal/hunt'));
  TERMINAL_ACTION = require(path.resolve('../998.terminal/dist/998.terminal/00.terminal.unit/terminal.action'));

  SPACE = require(path.resolve('../002.space/dist/002.space/hunt'));
  SPACE_ACTION = require(path.resolve('../002.space/dist/002.space/00.space.unit/space.action'));

  //TERMINAL_ACTION = importFresh(path.resolve('../998.terminal/dist/998.terminal/00.terminal.unit/terminal.action'));

  await SPACE.hunt(SPACE_ACTION.INIT_SPACE, { dat: MQTT, src: local });
  await TERMINAL.hunt(TERMINAL_ACTION.INIT_TERMINAL, { dat: MQTT, src: local });
  await GAME.hunt(GAME_ACTION.INIT_GAME, { dat: MQTT, src: localBit });
  
};



const close = async () => {


  var run = fs.readFileSync("./run.cjs").toString()
  fs.writeFileSync("./run.cjs", run)

}


if (dev == false) return

console.log("deving...")
const { exec } = require('child_process');
const { resolve } = require('path');

process.chdir("../");

var pivot = exec("pnpm watch")

process.chdir("./000.game");

pivot.stderr.on('data', function (data) {
  //console.log('aaads stderr: ' + data.toString());
});

let errored = false
let working = false

pivot.stdout.on('data', async (data) => {
  if (data.length < 3) return

  if (data.includes('Watching for file changes.') == false) return
  if (data.includes('Found 0 errors.') == true) {

    if (errored == false) {

      if (working == false) {

        setTimeout( ()=> working = true, 3333)

        return
      }

      bit = await close()
      bit = await init(PORT)

      return
    }

    errored = false

    //now reset the game
    bit = await close()
    bit = await init(PORT)

    return

  }


  if (data.includes('Debugger') == true) return
  data
  errored = true;


});

