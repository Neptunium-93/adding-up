'use strict';

var rl = require('readline');

var i = rl.createInterface(process.stdin, process.stdout, null);

i.question("What is your favorite food ?", (answer) =>{
	console.log(`Oh, so your favorite food is ${answer}`);

	i.close();
	process.stdin.destroy();
});

