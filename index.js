//Task 1
// Create a function that takes a country's name and its area as arguments 
// and returns the area of the country's proportion of the total world's landmass.

function areaOfCountry(name, area){
    total_landmass = 148_940_000; 
    area = ((area / total_landmass) * 100).toFixed(2);
    return console.log(`${name} is ${area}% of the total world's landmass`);
}

areaOfCountry("Russia", 17098242) //➞ "Russia is 11.48% of the total world's landmass"

areaOfCountry("USA", 9372610) //"USA is 6.29% of the total world's landmass"

areaOfCountry("Iran", 1648195) //➞ "Iran is 1.11% of the total world's landmass"

// Notes
// The total world's landmass is 148,940,000 [Km^2]
// Round the result to two decimal places.

//Task 2
// Create a function that takes in an array (slot machine outcome) and returns true if all elements
// in the array are identical, and false otherwise. The array will contain 4 elements.

function testJackpot(outcome){
    return outcome.every(symbol => symbol === outcome[0]);

}

console.log(testJackpot(["@", "@", "@", "@"]))// ➞ true

console.log(testJackpot(["abc", "abc", "abc", "abc"]))// ➞ true

console.log(testJackpot(["SS", "SS", "SS", "SS"]))// ➞ true

console.log(testJackpot(["&&", "&", "&&&", "&&&&"]))// ➞ false

console.log(testJackpot(["SS", "SS", "SS", "Ss"]))// ➞ false
// Notes
// The elements must be exactly identical for there to be a jackpot.

//Task 3
// Create a function that takes an array of items, removes all duplicate items and returns a 
// new array in the same sequential order as the old array (minus duplicates).

function removeDups (noDupl){
    return [...new Set(noDupl)]
   
}

console.log(removeDups([1, 0, 1, 0]))// ➞ [1, 0]

console.log(removeDups(["The", "big", "cat"]))// ➞ ["The", "big", "cat"]

console.log(removeDups(["John", "Taylor", "John"]))// ➞ ["John", "Taylor"]

// Notes
// Tests contain arrays with both strings and numbers.
// Tests are case sensitive.
// Each array item is unique.

//Task 4
// Create a function which concatenates the number 7 to the end of every chord in an array. 
// Ignore all chords which already end with 7.

function jazzify (chords){
    return chords.map(chord =>{

    if (chord.endsWith("7")){
        return chord;
    }else{
        return `${chord}7`;
    }
})
}

console.log(jazzify(["G", "F", "C"])) //➞ ["G7", "F7", "C7"]

console.log(jazzify(["Dm", "G", "E", "A"])) //➞ ["Dm7", "G7", "E7", "A7"]

console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])) //➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

console.log(jazzify([])) //➞ []
// Notes
// Return an empty array if the given array is empty.
// You can expect all the tests to have valid chords.

//Task 5
// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), 
// and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".

function generation(num, char) {
    const generations = {
        "-3": { "m": "great grandfather", "f": "great grandmother" },
        "-2": { "m": "grandfather", "f": "grandmother" },
        "-1": { "m": "father", "f": "mother" },
         "0": { "m": "me!", "f": "me!" },
         "1": { "m": "son", "f": "daughter" },
         "2": { "m": "grandson", "f": "granddaughter" },
         "3": { "m": "great grandson", "f": "great granddaughter" }
    };
    
    return generations[num][char];
}

console.log(generation(2, "f")) //➞ "granddaughter"

console.log(generation(-3, "m")) //➞ "great grandfather"

console.log(generation(1, "f")) //➞ "daughter"

// Notes
// Check the Resources tab for helpful hints.

// Generation	Male	Female
// -3	great grandfather	great grandmother
// -2	grandfather	grandmother
// -1	father	mother
// 0	me!	me!
// 1	son	daughter
// 2	grandson	granddaughter
// 3	great grandson	great granddaughter
