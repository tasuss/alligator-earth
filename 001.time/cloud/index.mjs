export default {
 async fetch(request, env) {
 return await handleRequest(request, env);
 },
};

async function handleRequest(request, env) {
 let id = env.DAT_TIME.idFromName("A");
 let obj = env.DAT_TIME.get(id);
 let resp = await obj.fetch(request);
 let data = await resp.json();
 return new Response(JSON.stringify(data));
}

export class DatTime {
 constructor(state, env) {
 this.state = state;
 }

 async fetch(request) {
 require("./001.time.js");

 let url = new URL(request.url);
 var name = url.searchParams.get("name");

 let value = (await this.state.storage.get("value")) || { idx: "dat-time-init" };
 var bit;

 switch (url.pathname) {
 case "/open":
 bit = await globalThis.TIME.openClock();
 value = bit.clkBit;
 break;
 case "/update":
 bit = await globalThis.TIME.openClock();
 value = bit.clkBit;

 var bit = await TIME.updateClock({ sec: 3, dat: { idx: bit.idx } });
 value = bit.clkBit;
 break;
 case "/reset":
 value = { idx: "reset-time" };
 break;
 case "/":
 break;
 default:
 return new Response("Not found", { status: 404 });
 }

 value = JSON.stringify(value);

 await this.state.storage.put("value", value);

 return new Response(value);
 }
}
