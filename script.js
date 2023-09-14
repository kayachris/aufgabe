//String umkehren
function stringUmkehren(anfangsString) {
  var buchstaben = anfangsString.split("");
  var umgekehrteBuchstaben = buchstaben.reverse();
  var umgekehrterString = umgekehrteBuchstaben.join("");
  return umgekehrterString;
}
var originalerString = "Hallo Kaya Etterlin";
var reversed = stringUmkehren(originalerString);
console.log(reversed);

//Schaltjahr
function istSchaltJahr(jahr) {
  if (jahr % 4 === 0) {
    if (jahr % 100 === 0) {
      if (jahr % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

var jahr = 1900;
var istSchalt = istSchaltJahr(jahr);

if (istSchalt) {
  console.log(jahr + " ist ein Schaltjahr");
} else {
  console.log(jahr + " ist kein Schaltjahr");
}

//Pangramm
function panagram(satz) {
  satz = satz.toLowerCase().replace(/[^a-z]/g, "");
  const einzigartigeBuchstaben = new Set();

  for (let i = 0; i < satz.length; i++) {
    einzigartigeBuchstaben.add(satz[i]);
  }
  return einzigartigeBuchstaben.size === 26;
}

const satz = "The quick brown fox jumps over the lazy dog.";
if (panagram(satz)) {
  console.log("Der Satz ist ein Panagram");
} else {
  console.log("Der Satz ist kein Panagram");
}
