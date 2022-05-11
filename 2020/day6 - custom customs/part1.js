const input = require('./input');

function countYes(groups) {
  let groupAnsArr = [];
  for (let group of groups) {
    let groupAns = {};
    let people = group.split('\n');
    for (let person of people) {
      for (let ans of person) {
        groupAns[ans] = true;
      }
    }
    groupAnsArr.push(Object.keys(groupAns).length);
  }

  return groupAnsArr.reduce((total, cur) => total + cur, 0);
}

console.log(countYes(input));
