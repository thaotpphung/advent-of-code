const Bag = require('./bag');

class Luggage {
  constructor(rawRules) {
    // return array of children given a luggage name
    this.childrenLookup = this.parseChildrenLookup(rawRules);
  }

  parseChildrenLookup(rawRules) {
    let childrenLookup = {};
    for (let rule of rawRules) {
      let [parent, children] = rule.split(' bags contain ');
      // initialize array of bag children
      if (!childrenLookup[parent]) {
        childrenLookup[parent] = [];
      }
      // skip if no content
      if (children.includes('no other')) continue;
      // process children
      children = children.split(', ');
      for (let child of children) {
        const regex = /(\d+) (\w+) (\w+) bag/;
        // parse count & name of each child
        let [, count, name] = regex.exec(child);
        count = parseInt(count, 10);
        let bag = children[name];
        // if child doesn't exists, initalize (it could exists before because )
        if (!bag) {
          bag = new Bag({ name });
          childrenLookup[name] = bag;
        }
        //
        bag.addParent(childrenLookup[parent]);
      }
    }
    return childrenLookup;
  }
}

module.exports = Luggage;
