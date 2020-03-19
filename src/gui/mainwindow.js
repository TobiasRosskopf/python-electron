var python = require('python-shell');
var path = require("path");


$(() => {
    // alert("Seite geladen!");
});


// https://www.npmjs.com/package/python-shell
function pyTest() {
    // Get input
    var n = $("#text-input").val();
    
    // Options and arguments for interpreter and script
    var options = {
        mode: 'text',
        pythonPath: '/usr/local/bin/python3',
        pythonOptions: ['-u'],
        scriptPath: path.join(__dirname, '/../py/'),
        // args: [n],
    };

    // Start Python script
    var pyHello = new python('hello.py', options);

    // Send inputs over stdin
    pyHello.send(n);

    // Get outputs from print statements
    pyHello.on('message', function (message) {
        $("#text-output").val(message);
    });

    // Quit Python script
    pyHello.end(function (err, code, signal) {
        if (err) throw err;
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
    });
}
