const { app, BrowserWindow } = require("electron");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 481,
    frame: false,
    backgroundColor: "#8B5A2B",
    resizable: false,
    fullscreenable: false,
    webPreferences: {
      nodeIntegration: true,
      preload: __dirname + "/preload.js",
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });

  mainWindow.setMenu(null);

  mainWindow.loadFile("index.html");
});
