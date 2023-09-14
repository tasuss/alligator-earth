const {execSync} = require('child_process')

process.chdir("../../../000.aaads");
execSync("pnpm run build")
console.log("building A<A<A<D<S complete!!!")

process.chdir("../002.space");
execSync("pnpm run build")
console.log("building 002.space complete!!!")

process.chdir("../998.terminal");
execSync("pnpm run build")
console.log("building 998.terminal complete!!!")

process.chdir("../999.pivot");
execSync("pnpm run build")
console.log("building 999.pivot complete!!!")

console.log("BUILD OVER")

