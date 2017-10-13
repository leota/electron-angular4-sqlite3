const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
let knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: path.join(__dirname, '../DB/', 'database.sqlite')
  }
});

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 1280, height: 720, show: false })

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.once("ready-to-show", () => { mainWindow.show() })

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  ipcMain.on("mainWindowLoaded", function () {
    let result = knex.select("name").from("communities")
    result.then(function (rows) {
      mainWindow.webContents.send("CommunitiesListSent", rows);
    })
  });

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})