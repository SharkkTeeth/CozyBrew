const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

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
      preload: path.join(__dirname, "js/preload.js"),
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });

  mainWindow.setMenu(null);

  mainWindow.loadFile("index.html");
});

ipcMain.on("minimize", (event) => {
  mainWindow.minimize();
});

ipcMain.on("close", (event) => {
  mainWindow.close();
});
