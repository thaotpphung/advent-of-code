const Luggage = require('./luggage');
const input = require('./input');

function main() {
  let luggage = new Luggage(input);
  console.log(luggage.childrenLookup['shiny gold']);
  let shinyGold = luggage.childrenLookup['shiny gold'];
  console.log(shinyGold.countUniqueParents());
}

main();
