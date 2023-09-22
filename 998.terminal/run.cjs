const path = require('path');
const fs = require('fs');
const MQTT = require('async-mqtt');
const { program } = require('commander');

const PORT = 1998;

let TERMINAL, TERMINAL_ACTION;

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

    TERMINAL = require(path.resolve('../998.terminal/dist/998.terminal/hunt'));
    TERMINAL_ACTION = require(path.resolve('../998.terminal/dist/998.terminal/00.terminal.unit/terminal.action'));

    //debugger

    let trmBit =  await TERMINAL.hunt(TERMINAL_ACTION.INIT_TERMINAL, { val: 1, dat: MQTT, src: [localBit] });

   // debugger

};


const close = async () => {

    var run = fs.readFileSync("./run.cjs").toString()
    fs.writeFileSync("./run.cjs", run)

}


if (dev == false) return

console.log("deving...")
const { exec } = require('child_process');

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

                setTimeout(() => working = true, 3333)

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