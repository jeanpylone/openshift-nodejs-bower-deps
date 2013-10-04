var bower = require('bower');

bower.commands.install([]).on('end', function (installed) {
    console.log("bower installed packages");
});