//creates template of functionality
//          node ./hand/001.fun-pop -t surface.surface.create

var act = [];

var template = `
export const {{=it.idx}}_{{=it.name}} = "[{{=it.nom}} action] {{=it.src}} {{=it.nom}}";
export class {{=it.src}}{{=it.nom}} implements Action {
  readonly type = {{=it.idx}}_{{=it.name}};
  constructor(public bale: {{=it.dat}}Bit) {}
}`;

var tmp0 = `export const {{=it.pew}}{{=it.nom}} = (cpy: {{=it.dat}}Model, bal:{{=it.dat}}Bit, ste: State) => {
  debugger
  return cpy;
 };
 `;

var tmp1 = `export { {{=it.pew}}{{=it.nom}}  } from "./buz/{{=it.title}}.buzz";`;

var tmp2 = `
 case Act.{{=it.idx}}_{{=it.name}}:
  return Buzz.{{=it.pew}}{{=it.nom}}(clone(model), act.bale, state);
  `;

var doT = require("dot");
var FS = require("fs-extra");
var S = require("string");
//var clipboardy = require("clipboardy");
//remember to figure out how to disable apple keypad entry
var title = "995.template-page";
const open = require("open");
//COMMAND LINE ACCESS
const { program } = require("commander");
program.option("--first").option("-t, --separator <char>");
program.parse(process.argv);
const options = program.opts();
for (var key in options) {
  console.log(key + " : " + options[key]);
}
if (options["separator"] != null) title = options["separator"];

console.log("title: " + title);

var parm = title.split(".");
if (parm.length != 3) return console.log("no length on param");

var idx = parm[0].toUpperCase();
var src = S(parm[0]).titleCase().s;
var root = parm[0].toLowerCase();
var Root = S(parm[0]).titleCase().s;

var soul = parm[2].toLowerCase();
act.push(soul);

var dat = src;
var da = dat.toLowerCase();
var data = S(src).titleCase().s;
var title = parm[1].toLowerCase();

var name = parm[1].toUpperCase();
var nom = S(parm[1]).titleCase().s;

var output = [];
var mthLst = [];
var buzLst = [];
var ducLst = [];

var fin = [""];

act.forEach((a) => {
  idx = a.toUpperCase();
  src = S(a).titleCase().s;
  pew = a.toLowerCase();

  var gel = { idx, src, name, nom, dat, data, title, pew };

  fin.push(src + nom);

  var some = template.split("\n");
  some.forEach((a) => {
    var doTCompiled = doT.template(a);
    var outLine = doTCompiled(gel);
    output.push(outLine);
  });

  var some = tmp0.split("\n");
  some.forEach((a) => {
    var doTCompiled = doT.template(a);
    var outLine = doTCompiled(gel);
    mthLst.push(outLine);
  });

  var some = tmp1.split("\n");
  some.forEach((a) => {
    var doTCompiled = doT.template(a);
    var outLine = doTCompiled(gel);
    buzLst.push(outLine);
  });

  var some = tmp2.split("\n");
  some.forEach((a) => {
    var doTCompiled = doT.template(a);
    var outLine = doTCompiled(gel);
    ducLst.push(outLine);
  });
});

var ringy = output.join("\n");
var mappleDacks = fin.join("\n | ");
var newtbox = mthLst.join("\n");
var crapmostank = buzLst.join("\n");

var tingTow = ducLst.join("\n");
//a pocket full of poke balls

var way = ["//" + title, ringy, "\n", "//" + title, mappleDacks, "\n", "//" + title, "\n", crapmostank, "//" + title, "\n", tingTow];

var master = FS.readFileSync("./data/01.code-depot/display-buz-init.txt").toString().split("\n");

var gel = {
  functions: newtbox,
  dat,
  code: way.join("\n"),
  root,
  title,
  Root,
  name,
};

var finLine = [];
master.forEach((a) => {
  var doTCompiled = doT.template(a);
  var outLine = doTCompiled(gel);
  finLine.push(outLine);
});

FS.ensureFileSync("./data/redux/" + title + ".buzz.ts");

FS.writeFileSync("./data/redux/" + title + ".buzz.ts", finLine.join("\n"));

//clipboardy.writeSync(way.join("\n"));
open("./data/redux/" + title + ".buzz.ts");
