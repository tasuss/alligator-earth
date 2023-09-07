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
  const port = 1012;

  server.listen(port, function () {
    console.log("server started and listening on port ", port);
    open(port)
  });
  
};

var open = async ( prt ) =>{

  var bit;

  //ActVrt = require("../999.vurt/dist/999.vurt/00.vurt.unit/vurt.action");  
  //ActTrm = require("../998.terminal/dist/998.terminal/00.terminal.unit/terminal.action");
  //ActTme = require("../001.time/dist/001.time/00.time.unit/time.action");
  //ActWrk = require("../998.work/dist/998.work/00.work.unit/work.action");
  
  require("../998.work/work/999.vurt");
  //require("../998.terminal/998.terminal/000.quest.terminal");
  //require("../001.time/001.time/000.quest.time");
  require("../{{=it.pivot}}/{{=it.pivot}}/000.quest.{{=it.name}}");

  const MQTT = require("async-mqtt");

  var title = command_line();

  var local = 'mqtt:**localhost:' + prt;
  //remember ** in main.js

  var localBit = { idx: 'local', src: local }
  //var remoteBit = { idx: 'remote', src: 'ws://gatorsocket.herokuapp.com/' }

  bit = await VURT.hunt(VURT.ActVrt.INIT_VURT , {dat: MQTT, src:local} );
  bit = await {{=it.nameCaps}}.hunt( {{=it.nameCaps}}.Act{{=it.nomTitle}}.INIT_{{=it.nameCaps}} , { val: 1, dat: MQTT, src:  [localBit]  });
  
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


