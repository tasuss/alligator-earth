const { exec } = require('child_process')
var player = require('play-sound')(opts = {})

const sfx0 = '../sfx/00.mp3';
const sfx1 = '../sfx/01.mp3';
const sfx2 = '../sfx/02.mp3';
const sfx3 = '../sfx/03.mp3';
const sfx4 = '../sfx/04.mp3';

process.chdir("../../../000.aaads");
var aaads = exec("pnpm run watch")
console.log("building 000.aaads complete!!!")

aaads.stdout.on('data', function (data) {

  if (data.includes('error.')) {
    
    console.log("aaads error...!!!!")
    player.play( sfx0, (err) => {if (err) throw err })
  }

  console.log('aaads stdout: ' + data.toString());
});

aaads.stderr.on('data', function (data) {
  console.log('aaads stderr: ' + data.toString());
});

/// Terminal Pivot

process.chdir("../998.terminal");
var terminal = exec("pnpm run watch")

terminal.stdout.on('data', function (data) {

  if (data.includes('error.')) {
  
    console.log("terminal error...!!!!")
    player.play( sfx1, (err) => {if (err) throw err })
  }

  console.log('terminal stdout: ' + data.toString());
});

terminal.stderr.on('data', function (data) {
  console.log('terminal stderr: ' + data.toString());
});

console.log("building 998.terminal complete!!!")


///SPACE PIVOT

process.chdir("../002.space");
var space = exec("pnpm run watch")

space.stdout.on('data', function (data) {

  if (data.includes('error.')) {
    console.log("space error...!!!!")
    player.play( sfx4, (err) => {if (err) throw err })
    
  }

  console.log('space stdout: ' + data.toString());
});

terminal.stderr.on('data', function (data) {
  console.log('space stderr: ' + data.toString());
});

console.log("building 002.space complete!!!")

//PIVOT PIVOT
process.chdir("../999.pivot");

var pivot = exec("pnpm run watch")

pivot.stdout.on('data', function (data) {

  if (data.includes('error.')) {
    
    console.log("pivot error...!!!!")
    player.play( sfx3, (err) => {if (err) throw err })
    
  }

  console.log('pivot stdout: ' + data.toString());
});

pivot.stderr.on('data', function (data) {
  console.log('pivot stderr: ' + data.toString());
});

console.log("building 999.pivot complete!!!")


process.chdir("./data/hand/");



console.log("WATCHING>>")




