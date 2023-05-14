const electron = require('electron');
const path = require('path');

const { app, BrowserWindow } = electron;

function init() {
    const mainWindow = new BrowserWindow();
    const url = path.join(__dirname, 'dist', 'ui', 'index.html');
    mainWindow.loadURL(url);

    mainWindow.on('closed', () => {
        app.quit();
    })
}

app.on('ready', init)