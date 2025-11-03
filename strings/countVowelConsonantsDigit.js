function coutVowelConsonantsDigit(str) {
  let vowel = 0;
  let consonant = 0;
  let digits = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char >= '0' && char <= '9') {
      digits++;
    } 
    else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      // convert to lowercase to check vowels easily
      let lowerChar = char.toLowerCase();

      if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
        vowel++;
      } else {
        consonant++;
      }
    }
  }

  console.log("Vowels:", vowel);
  console.log("Consonants:", consonant);
  console.log("Digits:", digits);
}

coutVowelConsonantsDigit("HEllo123");
