//command
// node ./hand/001.create-unit -t unit-name

var FS = require("fs-extra");
var doT = require("dot");
var S = require("string");

var title = "alligator";
var loc = "./data/redux/00.sim.unit/";

//COMMAND LINE ACCESS
const { program } = require("commander");
program.option("--first").option("-t, --separator <char>");
program.parse(process.argv);
const options = program.opts();
for (var key in options) {
  console.log(key + " : " + options[key]);
}
if (options["separator"] != null) title = options["separator"];

if (title.split(".").length != 2) title = "00." + title;

if (process.argv[2] != null) title = "00." + process.argv[2];

//cpy effect redux data in project data
FS.copySync("./data/00.sim.unit", "./data/redux/00.sim.unit");

var num = title.split(".")[0];
var nom = title.split(".")[1];

console.log("nom " + nom);

var file = loc;
var list = FS.readdirSync(file);

var out = [];
list.forEach((a, b) => {
  list[b] = file + "/" + a;

  if (FS.lstatSync(list[b]).isDirectory()) {
    var directory = list[b];
    var listB = FS.readdirSync(directory);
    listB.forEach((c) => out.push(directory + "/" + c));
  } else {
    out.push(list[b]);
  }
});

if (nom == null) nom = "beeing";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var gel = {
  idx: "together000",
  title: capitalizeFirstLetter(nom),
  nom: nom,

  wakeActionKey: nom.toUpperCase() + "_OPEN",
  initActionKey: "INIT_" + nom.toUpperCase(),
  updateActionKey: "UPDATE_" + nom.toUpperCase(),

  wakeActionFunction: capitalizeFirstLetter(nom),
  initActionFunction: "Init" + capitalizeFirstLetter(nom),
  updateActionFunction: "Update" + capitalizeFirstLetter(nom),

  bitNom: nom + "Bit",
  bitTitle: capitalizeFirstLetter(nom) + "Bit",
  actionLabel: capitalizeFirstLetter(nom),

  actionTitle: "Waking " + capitalizeFirstLetter(nom),
  initTitle: "Init " + capitalizeFirstLetter(nom),
  updateTitle: "Update " + capitalizeFirstLetter(nom),
};

out.forEach((a) => {
  var neo = a.replace("sim", gel.nom);
  neo = neo.replace(".sim", "." + gel.nom);

  //console.log("neo " + neo);

  var lineList = FS.readFileSync(a).toString().split("\n");

  lineList.forEach((a, b) => {
    //console.log("line " + a);
    var doTCompiled = doT.template(a);
    var outLine = doTCompiled(gel);
    lineList[b] = outLine;
  });

  lineList.forEach((a) => {
    //console.log("line : " + a);
  });

  var finFin = neo.replace("sim", gel.nom);
  //console.log("what you got for a fin fin " + finFin);

  finFin = finFin.replace("../data/redux/", "../data/redux/unit/");

  finFin = finFin.replace("00", num);

  finFin = finFin.replace(".txt", ".ts");

  var finFile = lineList.join("\n");

  FS.ensureFileSync(finFin);
  FS.writeFileSync(finFin, finFile);
  console.log("writing " + finFin);
});

//console.log("how many files " + list.length);
//console.log("you are in ..  " + list.length);
