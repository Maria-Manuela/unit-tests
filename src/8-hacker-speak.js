export const hackerSpeak = (words) => {
  // Define a regular expression with a function for replacement
  return words.replace(/[aeios]/gi, (match) => {
    const replacements = {
      a: "4",
      e: "3",
      i: "1",
      o: "0",
      s: "5",
    };
    return replacements[match.toLowerCase()]; // Replace based on the mapping
  });
};

//replace uppercase letter with numbers
