//   node ./hand/001.update-bee -t 003.focus

//now imagine a command line interface
///which shows all the pivots
//move the up and down keys to select
//now choose the one to update

var FS = require("fs-extra");
var doT = require("dot");
var S = require("string");

var title = "993.lab";
var file = "./data/redux/BEE.txt";
var fileFin = "./data/redux/BEE.ts";

//COMMAND LINE ACCESS
const { program } = require("commander");
program.option("--first").option("-t, --separator <char>");
program.parse(process.argv);
const options = program.opts();
for (var key in options) {
  console.log(key + " : " + options[key]);
}
if (options["separator"] != null) title = options["separator"];

console.log("please fire the update " + title);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var list = FS.readdirSync("./" + title);
var lineList = FS.readFileSync(file).toString().split("\n");

var out = [];
var dirList = [];

var itemList = [];

list.forEach((a, b) => {
  list[b] = "./" + title + "/" + a;

  if (FS.lstatSync(list[b]).isDirectory()) {
    if (S(list[b]).contains("unit") == false) return;

    var directory = list[b] + "/";
    var element = a.split(".")[1];

    console.log("updating " + element);

    var unitName = capitalizeFirstLetter(element);

    var unitImportSrc = "./" + a + "/" + element + ".unit";
    var unitImportSte = "import " + unitName + 'Unit from "' + unitImportSrc + '";';

    var faceImportSrc = "./" + a + "/fce/" + element + ".interface";
    var faceImportSte = "import " + unitName + ' from "' + faceImportSrc + '";';

    var modlImportSrc = "./" + a + "/" + element + ".model";
    var modlImportSte = "import { " + unitName + 'Model } from "' + modlImportSrc + '";';

    var redcImportSrc = "./" + a + "/" + element + ".reduce";
    var redcImportSte = "import * as reduceFrom" + unitName + ' from "' + redcImportSrc + '";';

    var reduced = element + " : reduceFrom" + unitName + ".reducer";
    var model = element + " : " + unitName + " = new " + unitName + "Model();";

    var item = {
      model,
      reduced,
      redcI: redcImportSte,
      modlI: modlImportSte,
      facI: faceImportSte,
      untI: unitImportSte,
      unitName,
      element,
    };

    itemList.push(item);
  }
});

var unitImports = "";
itemList.forEach((a) => {
  unitImports += a.untI + "\n";
});

var faceImports = "";
itemList.forEach((a) => {
  faceImports += a.facI + "\n";
  faceImports += a.modlI + "\n";
});

var unitListNom = [];
itemList.forEach((a) => {
  unitListNom.push(a.unitName + "Unit");
});

var unitList = JSON.stringify(unitListNom) + ";";
unitList = S(unitList).replaceAll('"', "");

var reduceImports = "";
itemList.forEach((a) => {
  reduceImports += a.redcI + "\n";
});

var reduceList = "";
itemList.forEach((a, b) => {
  //if (b == reduceList.length - 1) return;
  reduceList += a.reduced + ", \n";
});

//reduceList += itemList[itemList.length - 1].reduced + "\n";

var modelList = "";
itemList.forEach((a, b) => {
  modelList += a.model + "\n";
});

var gel = {
  unitImports,
  faceImports,
  unitList,
  reduceImports,
  reduceList,
  modelList,
};

var writeLine = [];

lineList.forEach((a, b) => {
  console.log("line " + a);

  if (S(a).contains("//")) return;

  var doTCompiled = doT.template(a);
  var outLine = doTCompiled(gel);
  writeLine.push(outLine);
});

writeLine.forEach((a) => {
  console.log("line : " + a);
});

var finFile = writeLine.join("\n");

FS.ensureFileSync(fileFin);

var endLoc = "./" + title + "/BEE.ts";

//FS.writeFileSync(fileFin, finFile);
FS.writeFileSync(endLoc, finFile);

console.log("writing " + endLoc);
