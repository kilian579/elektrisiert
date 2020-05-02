// Module laden
const electron = require('electron');
const path = require('path');
const url = require('url');

// Entwicklermodus einschalten
process.env.NODE_ENV = 'development';

// Teile des Moduls laden
const {app, BrowserWindow, Menu, ipcMain} = electron;

// Objekte festlegen
let mainWindow;
let addWindow;


// Warte bis App bereit ist
app.on('ready', function(){
  // Neues Browserfenster erstellen
  mainWindow = new BrowserWindow({
    webPreferences: {
        nodeIntegration: true
    }
  });

  // Html Seite in das Fenster laden
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes:true
  }));

  // App schließen, wenn 'closed'
  mainWindow.on('closed', function(){
    app.quit();
  });

  // Menu anhand des Templates erstellen
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert menu
  Menu.setApplicationMenu(mainMenu);
});

// Template Menu
const mainMenuTemplate =  [
  // Jedes Objekt ist ein Dropdown-Item
  {
    label: 'Datei',
    submenu:[
      {
        label: 'Schließen',
        accelerator:process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click(){
          app.quit();
        }
      }
    ]
  }
];

// Entwicklertools zum Menü hinzufügen, wenn im Entwicklermodus
if(process.env.NODE_ENV !== 'production'){
  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu:[
      {
        role: 'Reload',
        accelerator:'F5',
        click(item, focusedWindow){
        focusedWindow.reload();
        }
      },
      {
        label: 'Toggle DevTools',
        accelerator: 'F12',
        click(item, focusedWindow){
          focusedWindow.toggleDevTools();
        }
      }
    ]
  });
}