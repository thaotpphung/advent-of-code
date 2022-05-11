const RULES = {
  byr: {
    validate: (value) => {
      value = parseInt(value, 10);
      if (value >= 1920 && value <= 2002) return true;
      return false;
    },
  },
  iyr: {
    validate: (value) => {
      value = parseInt(value, 10);
      if (value >= 2010 && value <= 2020) return true;
      return false;
    },
  },
  eyr: {
    validate: (value) => {
      value = parseInt(value, 10);
      if (value >= 2020 && value <= 2030) return true;
      return false;
    },
  },
  hgt: {
    validate: (value) => {
      const regex = /^(\d+)(cm|in)$/;
      let [, height, unit] = regex.exec(value) || [];
      height = height ? parseInt(height, 10) : 0;
      if (unit == 'cm' && height >= 150 && height <= 193) {
        return true;
      }
      if (unit == 'in' && height >= 59 && height <= 76) {
        return true;
      }
      return false;
    },
  },
  hcl: {
    validate: (value) => {
      const regex = /^#([0-9a-f]{6})$/;
      if (regex.test(value)) return true;
      return false;
    },
  },
  ecl: {
    validate: (value) => {
      const regex = /^(amb|blu|brn|gry|grn|hzl|oth)$/;
      if (regex.test(value)) return true;
      return false;
    },
  },
  pid: {
    validate: (value) => {
      const regex = /^(\d){9}$/;
      if (regex.test(value)) return true;
      return false;
    },
  },
  cid: {
    validate: (value) => {
      return true;
    },
  },
};

const validate = (fields) => {
  for (let [key, value] of Object.entries(fields)) {
    let isValid = RULES[key].validate(value);
    if (!isValid) {
      return false;
    }
  }
  return true;
};

module.exports = validate;
