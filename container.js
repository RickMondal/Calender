const {
  app,
  BrowserWindow
} = require('electron')
const path = require('path')
const url = require('url')
var win;

function createWindow() {
  win = new BrowserWindow({
    width: 450,
    height: 600,
    resizable:false,
    center:true,
    icon: path.join(__dirname, 'icon/icon.png'),
    show: false,
  });
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'main.html'),
    protocol: 'file:',
    slashes: true
  }))
  win.setMenu(null);
  //win.webContents.openDevTools();
  win.setTitle('CALENDER');
  win.show();
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow);
