module.exports = function check(str, bracketsConfig) {
  const charArr = [...str];

  const checkEnd = (i) => {
    let result = true;
    bracketsConfig.forEach((b) => {
      if (b[1] === i) result = b[0];
    });
    return result;
  };

  for (let i = 0; i < charArr.length; i++) {
    if (checkEnd(charArr[i]) !== false) {
      if (charArr[i - 1] === checkEnd(charArr[i])) {
        charArr.splice(i - 1, 2);
        i = 0;
      }
    }
  }

  return charArr.length > 0 ? false : true;
};
