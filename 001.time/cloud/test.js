var url = "https://001-time.beeing.workers.dev/update?name=alligator";
var pak = {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 },
};

fetch(url, pak)
 .then((res) => {
 return res.json();
 })
 .then(async (dat) => {
 // var dang = { vrtBit: { idx: "fetch-vurt", dat } };
 console.log(JSON.stringify(dat));
 })
 .catch((error) => console.log(error));
