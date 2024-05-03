export const hashtags = (text) => {
  // Define the regular expression pattern for hashtags
  const hashtagPattern = /#[a-zA-Z]+/g;

  const matches = text.match(hashtagPattern);

  return matches || [];
};
///#[a-zA-Z0-9_]+/g looks for a #
//The g flag indicates a global search to find all matches in the text.
//match Method: This method applies the regex pattern to text and returns an array of all matching substrings.
