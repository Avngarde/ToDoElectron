const electron = require('electron');
const { BrowserWindow, app } = require('electron');

function createWindow(){
    let win = new BrowserWindow({
        width: 500,
        height: 600,
        minHeight: 500,
        minWidth: 400,

        webPreferences: {
            nodeIntegration: true
        },
        autoHideMenuBar: true
    })

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);
