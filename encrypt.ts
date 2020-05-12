const encrypt = (str: string, split: number): string => {
  let result = '';
  str.split('').forEach((char) => {
    if (char === char.toUpperCase()) {
      result += String.fromCharCode(
        ((char.charCodeAt(0) + split - 65) % 26) + 65
      );
    } else {
      result += String.fromCharCode(
        ((char.charCodeAt(0) + split - 97) % 26) + 97
      );
    }
  });
  return result;
};

export default encrypt;
