console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  process.stdout.write(`Your name is: ${name}`);
  console.log('This important software is now closing');
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
