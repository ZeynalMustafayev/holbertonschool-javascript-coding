const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.write('Welcome to Holberton School, what is your name?\n');
rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
