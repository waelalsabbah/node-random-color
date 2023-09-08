import chalk from 'chalk';
import randomColor from 'randomcolor'; // import the script

const myColor = randomColor({
  luminosity: 'random',
  hue: 'random',
});
console.log(myColor);
console.log(chalk.hex(myColor).bold('#999'));

console.log(chalk.hex(myColor).bold('###############################'));
console.log(chalk.hex(myColor).bold('###############################'));
console.log(chalk.hex(myColor).bold('###############################'));
console.log(chalk.hex(myColor).bold('###############################'));
console.log(chalk.hex(myColor).bold('#######               #########'));
console.log(chalk.hex(myColor).bold('#######               #########'));
console.log(chalk.hex(myColor).bold('#######               #########'));
console.log(chalk.hex(myColor).bold('#######               #########'));
console.log(chalk.hex(myColor).bold('#######               #########'));
console.log(chalk.hex(myColor).bold('###############################'));
console.log(chalk.hex(myColor).bold('###############################'));
