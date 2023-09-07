var doT = require("dot");
const browserify = require("browserify");
const stringify = require("stringify");
var FS = require("fs-extra");
const S = require("string");

var template = "npm run test {{=it.test}}";
var title = "tech-noir";

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

var eveiefy = () => {
  if (pivot == null) return console.log("no pivot");
  if (pivot.includes == null) return console.log("no pivot includes");

  if (pivot.includes(":")) {
    flag = pivot.split(":")[1];
    title = title.split(":")[0];
    pivot = pivot.split(":")[0];
  }

  var idx = title.split(".")[0];
  var pvt = title.split(".")[1];
  var init = "init" + S(pvt).titleCase().s;
  var updt = "update" + S(pvt).titleCase().s;
  var PVT = pvt.toUpperCase();

  var lineList = routeTmp.split("\n");
  var gel = { idx, pvt, init, updt, PVT };

  lineList.forEach((a, b) => {
    // console.log("line " + a);
    var doTCompiled = doT.template(a);
    var outLine = doTCompiled(gel);
    lineList[b] = outLine;
  });

  var endLoc = "../" + title + "/work/" + title + ".js";
  FS.ensureFileSync(endLoc);
  console.log("bundle me ... " + endLoc)

  var stream = FS.createWriteStream(endLoc);
  stream.on("error", () => {
    console.log("error browserify stream");
  });

  stream.on("data", function (chunk) {
    console.log("working..." + chunk.length);
  });

  console.log("working...");

  stream.on("finish", () => {
    console.log("updated " + title);
    console.log("replace " + title);

    // var idx = title.split(".")[0];

    // var replace3 = "./" + title + "/wrk/" + title + ".js";

    //FS.ensureFileSync(replace3);
    //FS.copyFileSync(endLoc, replace3);

    process.exit();
  });

  var b = browserify()
    .transform([stringify], {
      appliesTo: {
        includeExtensions: [".txt", ".html"],
      },
    })

    .exclude("fs")
    .exclude("gm")
    .exclude("fs-extra")
    .exclude("screenshot-desktop")
    .exclude("child_process")
    .exclude("clipboardy")
    .exclude("ytdl")
    .exclude("readline")
    .exclude("ipcMain")
    .exclude("BrowserWindow")
    .exclude("twitter")
    .exclude("electron")
    .exclude("fast-glob")
    .exclude("write-file-atomic")
    .exclude("express")
    .exclude("pg")
    .exclude("typeorm")
    .exclude("cors")
    .exclude("express")
    .exclude("socket.io")
    .exclude("http")
    .exclude("open")
    .exclude("process")
    .exclude("socket.io-client")
    .exclude("sharp")
    .exclude("natural")
    .exclude("babylonjs")
    .exclude("@nexrender/core")
    .exclude("axios")
    .exclude("fluent-ffmpeg")
    .exclude("pos")
    .exclude("fs/promises")
    .exclude("pos")
    .exclude("discord.js")
    .exclude("@discordjs/builders")
    .exclude("@discordjs/rest")
    .exclude("eris")
    .exclude("discord-api-types/v9")
    .exclude("data-uri-to-buffer")
    .exclude("fluent-ffmpeg")
    .exclude("@ffmpeg-installer/ffmpeg")
    .exclude("gify")
    .exclude("gifify")
    .exclude("chalk")
    .exclude("worker_threads")
    .exclude("pnpapi")
    .exclude("blessed")
    .exclude("blessed-contrib")
    .exclude("node-fetch")
    .exclude("esbuild")
    .exclude("terminal-kit")
    .exclude("undici");

  var loc = "../" + title + '/' + title + "/000.quest." + pvt + ".js";
  console.log("let see " + loc);

  b.add(loc);
  b.bundle().pipe(stream);
};

var routeTmp = `

var pivot = require('./{{=it.idx}}.{{=it.pvt}}')

var route = (app) => {

    app.get("/{{=it.init}}", (req, res) => {
        res.send({{=it.PVT}}.{{=it.init}}())
    });

    app.get("/{{=it.updt}}", (req, res) => {
        res.send({{=it.PVT}}.{{=it.updt}}())
    });

}

module.exports = route;
`;

eveiefy();
