import { Router } from "itty-router";

var pivot = require("./001.time");

const router = Router();

router.post("/updateClock", async (request) => {
 var dat = await request.json();
 var itm = await TIME.updateClock(dat);
 const data = JSON.stringify(itm);
 return new Response(data, {
 headers: {
 "Content-Type": "application/json",
 },
 });
});

//sim.openClock = (obj, idx, yrs, mth, day, hrs, min, sec)
router.post("/openClock", async (request) => {
 var dat = await request.json();
 var itm = await TIME.openClock(dat);
 const data = JSON.stringify(itm);
 return new Response(data, {
 headers: {
 "Content-Type": "application/json",
 },
 });
});

router.post("/writeClock", async (request) => {
 var dat = await request.json();
 var itm = await TIME.writeClock(dat);
 const data = JSON.stringify(itm);
 return new Response(data, {
 headers: {
 "Content-Type": "application/json",
 },
 });
});

router.post("/readClock", async (request) => {
 var dat = await request.json();
 var itm = await TIME.readClock(dat.idx);
 const data = JSON.stringify(itm);
 return new Response(data, {
 headers: {
 "Content-Type": "application/json",
 },
 });
});

router.get("/initClock", async (req) => {
 var dat = await req.json();
 var itm = await TIME.initClock(dat);
 const returnData = JSON.stringify(itm);
 return new Response(returnData, {
 headers: {
 "Content-Type": "application/json",
 },
 });
});

router.get("/", () => {
 return new Response("001.Time");
});

router.all("*", () => new Response("404, not found!", { status: 404 }));

addEventListener("fetch", (e) => {
 e.respondWith(router.handle(e.request));
});
