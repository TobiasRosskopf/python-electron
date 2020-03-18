var python = require('python-shell');
var path = require("path");


$(() => {
    // alert("Seite geladen!");
});


function pyTest() {
    var n = $("#text-input").val();
    
    // https://www.npmjs.com/package/python-shell
    var options = {
        mode: 'text',
        pythonPath: '/usr/local/bin/python3',
        pythonOptions: ['-u'],
        scriptPath: path.join(__dirname, '/../py/'),
        // args: [n],
    };

    var pyHello = new python('hello.py', options);

    pyHello.send(n);

    pyHello.on('message', function (message) {
        $("#text-output").val(message);
    });

    pyHello.end(function (err, code, signal) {
        if (err) throw err;
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
    });
}
