const {exec} = require('child_process')

process.chdir("../../../002.space");
var space = exec("pnpm run watch")
console.log("building 002.space complete!!!")

space.stdout.on('data', function (data) {
    console.log('space stdout: ' + data.toString());
  });
  
space.stderr.on('data', function (data) {
    console.log('space stderr: ' + data.toString());
  });

process.chdir("../998.terminal");
var terminal = exec("pnpm run watch")

terminal.stdout.on('data', function (data) {
    console.log('terminal stdout: ' + data.toString());
  });
  
terminal.stderr.on('data', function (data) {
    console.log('terminal stderr: ' + data.toString());
  });

console.log("building 998.terminal complete!!!")

console.log("WATCHING>>")

