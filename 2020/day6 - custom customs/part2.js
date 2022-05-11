const input = require('./input');

function countYes(groups) {
  let groupAnsArr = new Array(groups.length).fill(0);
  groups.forEach((group, groupIndex) => {
    let groupAns = {};
    let people = group.split('\n');
    for (let person of people) {
      for (let ans of person) {
        groupAns[ans] = groupAns[ans] + 1 || 1;
        if (groupAns[ans] === people.length) {
          // found an answer that everyone says yes to
          groupAnsArr[groupIndex] += 1;
        }
      }
    }
  });

  return groupAnsArr.reduce((total, cur) => total + cur, 0);
}

console.log(countYes(input));
