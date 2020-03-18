const {app, BrowserWindow} = require('electron');


app.once('ready', () => {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
    });
    window.loadFile('mainwindow.html');

    window.openDevTools();

    window.once('ready-to-show', () => {
        window.show()
    });
});


app.once('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
