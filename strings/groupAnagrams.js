function groupAnagrams(words) {
  const map = {};
  for (let word of words) {
    const sorted = word.split("").sort().join("");
    // if key not in map then create it
    if (!map[sorted]) {
      map[sorted] = [];
    }
    //push words into map
    map[sorted].push(word);
  }
  return Object.values(map);
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
