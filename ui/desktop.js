const electron = require('electron');
const path = require('path');

const { app, BrowserWindow } = electron;

// const app = express();

function init() {
    let mainWindow = new BrowserWindow();

    mainWindow.loadURL(path.join(__dirname, 'dist', 'ui', 'index.html'));

    mainWindow.on('closed', () => {
        app.quit();
    })


}

app.on('ready', init);