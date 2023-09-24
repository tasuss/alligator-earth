//compile source code
var path = require("path");
var absolutePath = path.resolve("./vrt.wrk.bat");

const spawn = require("child_process").spawn;
const bat = spawn("cmd.exe", ["/c", absolutePath]);

bat.stdout.on("data", (data) => console.info(String.fromCharCode.apply(null, data)));
bat.stderr.on("data", (data) => console.error(String.fromCharCode.apply(null, data)));
bat.on("exit", (code) => process.nextTick(init));
//end compile source code

var init = async () => {

  const aedes = require("aedes")();
  const server = require("net").createServer(aedes.handle);
  const port = 1011;

  server.listen(port, function () {
    console.log("server started and listening on port ", port);
    open(port)
  });
  
};

var bit;


var open = async ( prt ) =>{
  
  require("../998.work/work/999.vurt");
  require("../011.earth/011.earth/000.quest.earth");
  
  const MQTT = require("async-mqtt");

  var title = command_line();
  
  var local = 'mqtt://localhost:' + prt;
  var localBit = { idx: 'local', src: local }
  var remoteBit = { idx: 'remote', src: 'ws://gatorsocket.herokuapp.com/' }

  bit = await VURT.hunt(VURT.ActVrt.INIT_VURT , {dat: MQTT, src:local} );
  
  var FS = require('fs-extra')
  bit = await FS.readJson('./data/color/color-val.json')
  var lst = bit
  
  bit = await FS.readJson('./data/color/color-nom.json')
  var dat = {name:null, nom:null}
  dat.srt= bit
  bit = await FS.readJson('./data/color/color-hex.json')
  dat.hex = bit
  
  bit = await EARTH.hunt( EARTH.ActErt.INIT_EARTH , {val:1, lst, bit:dat, dat: MQTT, src:local});
  
  //bit = await EARTH.hunt( EARTH.ActErt.INIT_EARTH , { val:1, dat:MQTT , src:  [localBit, remoteBit] });
  
}

var command_line = () => {
  var idx;
  const { program } = require("commander");
  program.option("--first").option("-t, --separator <char>");
  program.parse(process.argv);
  const options = program.opts();
  if (options["separator"] != null) idx = options["separator"];
  return idx;
};


