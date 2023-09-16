console.log("deving...")
const { exec } = require('child_process')

process.chdir("../../../");

var pivot = exec("pnpm watch")

pivot.stderr.on('data', function (data) {
  console.log('aaads stderr: ' + data.toString());
});


pivot.stdout.on('data', function (data) {
  if (data.includes('Watching for file changes.') == false) return
  console.log(data.toString());
});

var host = 1012;
var local = 'mqtt://localhost:' + host;

const MQTT = require("async-mqtt");

console.log("connect:: " + local)
var client = MQTT.connect(local);


client.on('message', (tpc, msg) => { 
  console.log( 'new messaga : ' + msg )
})

client.on('connect', () => {
  console.log(" connected " + host)
  debugger
})