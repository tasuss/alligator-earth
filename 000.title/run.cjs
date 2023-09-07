var path = require("path");
var absolutePath = path.resolve("./vrt.wrk.bat");

const spawn = require("child_process").spawn;
const bat = spawn("cmd.exe", ["/c", absolutePath]);

bat.stdout.on("data", (data) => console.info(String.fromCharCode.apply(null, data)));
bat.stderr.on("data", (data) => console.error(String.fromCharCode.apply(null, data)));
bat.on("exit", (code) => process.nextTick(init));

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

 //require("../998.terminal/");
 require("../998.terminal/998.terminal/000.quest.terminal");
 require("../000.title/000.title/000.quest.title");

 const MQTT = require("async-mqtt");

 var title = command_line();

 var local = 'mqtt://localhost:' + prt;

 var localBit = { idx: 'local', src: local }

 bit = await TERMINAL.hunt(TERMINAL.ActTrm.INIT_TERMINAL , {dat: MQTT, src:local} );
 bit = await TITLE.hunt( TITLE.ActTtl.INIT_TITLE , { val: 1, dat: MQTT, src:  [localBit]  });
 
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


