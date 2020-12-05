module.exports = {
  createToken: (options) => {
    const charOptions = [];
    let arrCount = 0;

    if (options.upper) {
      const charArr = [];
      for (let i = 65; i <= 89; i++) {
        charArr.push(i);
      };
      charOptions.push(charArr);
      arrCount++;
    };

    if (options.lower) {
      charOptions.lower = [];
      const charArr = [];
      for (let i = 97; i <= 122; i++) {
        charArr.push(i);
      };
      charOptions.push(charArr);
      arrCount++;
    };

    if (options.numbers) {
      charOptions.numbers = [];
      const charArr = [];
      for (let i = 48; i <= 57; i++) {
        charArr.push(i);
      };
      charOptions.push(charArr);
      arrCount++;
    };

    if (options.special) {
      charOptions.special = [];
      const charArr = [];
      for (let i = 32; i <= 47; i++) {
          charArr.push(i);
      }
      for (let i = 58; i <= 64; i++) {
          charArr.push(i);
      }
      for (let i = 91; i <= 96; i++) {
          charArr.push(i);
      }
      for (let i = 123; i <= 126; i++) {
          charArr.push(i);
      }
      charOptions.push(charArr);
      arrCount++;
    }

    if (arrCount === 0) {
      return null;
    };

    let compString = '';
    let arrChoice = [];
    let arrSelect = 0;
    let charSelect = 0;
    for (let i = 0; i < options.passLength; i++) {
      arrSelect = Math.floor(Math.random() * arrCount);
      arrChoice = charOptions[arrSelect];
      charSelect = Math.floor(Math.random() * arrChoice.length);
      compString = compString.concat(String.fromCharCode(arrChoice[charSelect]));
    }

    return compString;
  }
};
