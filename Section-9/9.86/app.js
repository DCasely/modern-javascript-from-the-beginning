let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Starts with
re = /world$/i; // Ends with
re = /^hello$/i; // Begins and ends with
re = /^h.llo$/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/; // Must be a G or F
re = /[^GF]ray/i; // Match anything except a G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any any letter
re = /[0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {n} amount of times
re = /Hel{2,4}o/i; // Must occur between {x, y} amount of times
re = /Hel{2,}o/i; // Must occur at least {x,} amount of times

// Parenthesis () - Grouping
re = /([0-9]x){3}/; // Example Match - const str = '3x3x3x3x3x3x';
re = /^([0-9]x){3}$/; // Example Match - const str = '3x3x3x';

// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // '+' = one or more
re = /\W/; // Non-Word character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any Non-digit
re = /\s/; // Match whitespace char
re = /\S/; // Match non-whitespace char
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOT followed by y

// String to match
const str = 'xyXxx';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
