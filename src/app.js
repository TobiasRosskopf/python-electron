// Import electron
const {app, BrowserWindow} = require('electron');


// Application starts
app.once('ready', () => {
    // Create window
    window = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
    });

    // Load GUI
    window.loadFile('gui/mainwindow.html');

    // For development and debugging
    // window.openDevTools();

    // Show window
    window.once('ready-to-show', () => {
        window.show()
    });
});


// Application quits
app.once('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
