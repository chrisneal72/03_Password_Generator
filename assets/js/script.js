var choicesArray = [];
var currentChoice;
var promptsArray = [
    ['special', 'Do you wish to use Special Characters (yes or no)?', 'Please type yes or no\nDo you wish to use Special Characters?'],
    ['numeric', 'Do you wish to use Numeric Characters (yes or no)?', 'Please type yes or no\nDo you wish to use Numeric Characters?'],
    ['lower', 'Do you wish to use Lowercase Characters (yes or no)?', 'Please type yes or no\nDo you wish to use Lowercase Characters?'],
    ['upper', 'Do you wish to use Uppercase Characters (yes or no)?', 'Please type yes or no\nDo you wish to use Uppercase Characters?']
];
var specialCharList = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

currentChoice = parseInt(prompt('How many characters should the password be (8 - 128)'));

while (currentChoice < 8 || currentChoice > 128) {
    currentChoice = parseInt(prompt('Please enter a valid number between 8 and 128'));
}
choicesArray[choicesArray.length] = currentChoice;

for (i = 0; i < promptsArray.length; i++) {
    currentChoice = prompt(promptsArray[i][1]);
    currentChoiceLower = currentChoice.toLowerCase();

    while (currentChoiceLower != 'yes' && currentChoiceLower != 'y' && currentChoiceLower != 'no' && currentChoiceLower != 'n') {
        currentChoice = prompt(promptsArray[i][2]);
        currentChoiceLower = currentChoice.toLowerCase();
    }
    if (currentChoiceLower === 'yes' || currentChoiceLower === 'y') {
        choicesArray[choicesArray.length] = promptsArray[i][0];
    }
}

if (choicesArray.length < 2) {
    document.getElementById('mytextbox').value = 'No number can be generated';
}

console.log(choicesArray[0]);

// var specialCharPosArray = [];

// if(choicesArray.length > 2 && choicesArraybandArray.indexOf('special')){
//     var numOfSpecChars = 0;
//     if(choicesArray[0] > 7 && choicesArray[0] < 39){numOfSpecChars = 1};
//     if(choicesArray[0] > 38 && choicesArray[0] < 68){numOfSpecChars = 2};
//     if(choicesArray[0] > 68 && choicesArray[0] < 99){numOfSpecChars = 3};
//     if(choicesArray[0] > 98 && choicesArray[0] < 129){numOfSpecChars = 4};

//     for (i = 0; i < numOfSpecChars; i++) {
//         specialCharPosArray[i] = Math.floor(Math.random() * (129 - 8)) + 1;
//     }
// }

var myRandomPass = '';

for (i = 0; i < choicesArray[0]; i++){
    var currentCharType = Math.floor(Math.random() * (choicesArray.length - 1)) + 1;
    if(choicesArray[currentCharType] == 'special'){
        //Get random special char
        myRandomPass = myRandomPass + specialCharList.charAt(Math.floor(Math.random() * specialCharList.length));
    }
    if(choicesArray[currentCharType] == 'numeric'){
        //Get random number
        myRandomPass = myRandomPass + Math.floor(Math.random() * 10);
    }
    if(choicesArray[currentCharType] == 'lower'){
        //Get random lower
        myRandomPass = myRandomPass + String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    if(choicesArray[currentCharType] == 'upper'){
        //Get random upper
        myRandomPass = myRandomPass + String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase();
    }
    console.log(currentCharType + ' - ' + choicesArray[currentCharType])
}
document.getElementById('mytextbox').value = myRandomPass;