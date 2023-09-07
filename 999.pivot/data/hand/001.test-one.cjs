var doT = require("dot");
const browserify = require("browserify");
const stringify = require("stringify");
var FS = require("fs-extra");
const S = require("string");

var template = "npm run test {{=it.test}}";

var title = "908.vurt";

//COMMAND LINE ACCESS
const { program } = require("commander");
program.option("--first").option("-t, --separator <char>");
program.parse(process.argv);
const options = program.opts();
for (var key in options) {
  console.log(key + " : " + options[key]);
}
if (options["separator"] != null) title = options["separator"];

var pivot = title.split(".")[1];
console.log("show me the pivot " + pivot);

var flag;

var testing = () => {
  if (pivot == null) return console.log("no pivot");
  if (pivot.includes == null) return console.log("no pivot includes");

  if (pivot.includes(":")) {
    flag = pivot.split(":")[1];
    title = title.split(":")[0];
    pivot = pivot.split(":")[0];
  }

  title = "../../908.vurt/" + title;

  var processLine = "tsc -b " + title + " --watch";
  console.log("process line " + processLine);
  const bat = require("child_process").exec(processLine);

  bat.stdout.on("data", (data) => {
    console.log("data " + data);
  });
};

testing();
