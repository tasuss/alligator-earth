const { exec } = require('child_process')
const player = require('play-sound')(opts = {})

const sfx0 = '../sfx/00.mp3';
const sfx1 = '../sfx/01.mp3';
const sfx2 = '../sfx/02.mp3';
const sfx3 = '../sfx/03.mp3';
const sfx4 = '../sfx/04.mp3';

var power = true;


var sound = ( src ) =>{
  if ( power == false ) return
  player.play( src, (err) => {if (err) throw err })
  power = false;
  setTimeout( ()=> power = true , 3333)
}
/// AAADS Pivot
//  BUG:::: NO DIRECTORY?. THIS process.chdir("../../../000.aaads");
const aaads = exec("pnpm --filter=aaads watch:ts")
console.log("building 000.aaads complete!!!")

aaads.stdout.on('data', function (data) {

  if ( data.includes('File change detected')) return
  if ( data.length < 3) return
  if (data.includes('Debugger') == true ) return


  if (data.includes('Found 0 errors')) {
    sound(sfx4)
  }
  sound(sfx0)

  console.log('aaads stdout: ' + data.toString());
});

aaads.stderr.on('data', function (data) {
  console.log('aaads stderr: ' + data.toString());
});

/// Terminal Pivot

process.chdir("../998.terminal");
var terminal = exec("pnpm run watch:ts")

terminal.stdout.on('data', function (data) {

  if ( data.includes('File change detected')) return
  if ( data.length < 3) return
  if (data.includes('Debugger') == true ) return

  if (data.includes('Found 0 errors')) {
    sound(sfx4)
  }  else sound(sfx1)

  console.log('terminal stdout: ' + data.toString());
});

terminal.stderr.on('data', function (data) {
  console.log('terminal stderr: ' + data.toString());
});

console.log("building 998.terminal complete!!!")


///SPACE PIVOT

process.chdir("../002.space");
var space = exec("pnpm run watch:ts")

space.stdout.on('data', function (data) {

  if ( data.includes('File change detected')) return
  if ( data.length < 3) return
  if (data.includes('Debugger') == true ) return


  if (data.includes('Found 0 errors')) {
    sound(sfx4)
  }  else sound(sfx3)

  console.log('space stdout: ' + data.toString());
});

terminal.stderr.on('data', function (data) {
  console.log('space stderr: ' + data.toString());
});

console.log("building 002.space complete!!!")

//PIVOT PIVOT
process.chdir("../999.pivot");

const pivot = exec("pnpm run watch:ts")

pivot.stdout.on('data', function (data) {

  if ( data.includes('File change detected')) return
  if ( data.length < 3) return
  if (data.includes('Debugger') == true ) return

  if (data.includes('Found 0 errors')) {
    sound(sfx4)
  }  else sound(sfx2)

  console.log('pivot stdout: ' + data.toString());
});

pivot.stderr.on('data', function (data) {
  console.log('pivot stderr: ' + data.toString());
});

console.log("building 999.pivot complete!!!")


process.chdir("./data/hand/");

console.log("WATCHING>>")




