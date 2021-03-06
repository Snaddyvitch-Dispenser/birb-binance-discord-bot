var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
    name:'Binance Discord Bot',
    description: 'Making Trading Easier.',
    script: 'E:\\Users\\Conor Howland.DESKTOP-4GTBGEL\\WebstormProjects\\binance-discord\\index.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
    svc.start();
});

// Listen for the "start" event and let us know when the
// process has actually started working.
svc.on('start',function(){
    console.log(svc.name + ' started!');
});

// Install the script as a service.
svc.install();