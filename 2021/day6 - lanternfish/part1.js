const input = require('./input');
const DAYS = 80;

function main() {
  let res = [...input];
  let day = DAYS;
  while (day--) {
    res.forEach((_, fish) => {
      if (res[fish]) {
        res[fish]--;
      } else {
        res.push(8);
        res[fish] = 6;
      }
    });
  }
  console.log(res.length);
}

main();
