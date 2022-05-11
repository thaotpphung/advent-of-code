class Bag {
  constructor({ name, count }) {
    this.name = name;
    this.count = count;
    this.parentLookup = [];
  }

  addParent(parent) {
    this.parentLookup.push(parent);
  }

  countUniqueParents() {
    let ancestorsLookup = this.getUniqueAncestors({});
    return Object.keys(ancestorsLookup).length;
  }

  getUniqueAncestors(ancestorsLookup) {
    for (let parent of this.parentLookup) {
      ancestorsLookup[parent.name] = parent;
      if (parent.parentLookup.length) {
        parent.getUniqueAncestors(ancestorsLookup);
      }
    }
    return ancestorsLookup;
  }
}

module.exports = Bag;
