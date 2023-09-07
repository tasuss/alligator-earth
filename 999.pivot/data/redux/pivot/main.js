const { app, BrowserWindow } = require("electron");
const path = require("path");

var FS = require("fs-extra");

var full = true;
var debug = true;
var width = 1080;
var height = 1080;
var x = 0;
var y = 0;

var settings = FS.readJSONSync("./settings.json");
if (settings.width != null) width = settings.width;
if (settings.height != null) height = settings.height;
if (settings.x != null) x = settings.x;
if (settings.y != null) y = settings.y;
if (settings.debug != null) debug = settings.debug;

if (width == 0 && height == 0) full == true;

process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

var win;

const createWindow = () => {
 

  if (full == false) {
    win = new BrowserWindow({
      //kiosk: true ,
      width,
      height,
      x,
      y,

      webPreferences: {
        //preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true,
        contextIsolation: false,
      },
    });

    win.setResizable(true);
  } else {
    win = new BrowserWindow({
      show: false,
      x,
      y,
      webPreferences: {
        //preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true,
        contextIsolation: false,
      },
    });
    //win.maximize();
    win.show();
    win.setResizable(true);
  }

  win.loadURL("http:/**localhost:3333/" )


  if (debug == true) win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

const {ipcMain} = require('electron')
ipcMain.on('resize-me-please', (event, w, h) => {
  console.log("resizing " + w + ' :::: ' + h)
  win.setSize(w,h)
  win.webContents.send('update-resize', w, h)
})
