const { app, BrowserWindow } = require("electron");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 350,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.setMenu(null);

  mainWindow.loadFile("index.html");
});
