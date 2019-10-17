function clearPass(){
    document.getElementById('mytextbox').placeholder = 'Your Secure Password';
    document.getElementById('mytextbox').value = '';
}

function genPass() {
    //VARIABLES
    var choicesArray = [];
    var currentChoice;
    var promptsArray = [
        ['special', 'Do you wish to use Special Characters (yes or no)?', 'Please type yes or no\nDo you wish to use Special Characters?'],
        ['numeric', 'Do you wish to use Numeric Characters (yes or no)?', 'Please type yes or no\nDo you wish to use Numeric Characters?'],
        ['lower', 'Do you wish to use Lowercase Characters (yes or no)?', 'Please type yes or no\nDo you wish to use Lowercase Characters?'],
        ['upper', 'Do you wish to use Uppercase Characters (yes or no)?', 'Please type yes or no\nDo you wish to use Uppercase Characters?']
    ];
    var specialCharList = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    var myRandomPass = '';
    
    currentChoice = prompt('How many characters should the password be (8 - 128)');
    //GET MY NUMBER OF CHARACTERS
    if(!currentChoice){
        document.getElementById('mytextbox').placeholder = 'No number can be generated';
        return 0;
    }
    currentChoice = parseInt(currentChoice);

    //DETERMINE IF THE CHOICE WAS A NUMBER AND IN RANGE
    while (currentChoice < 8 || currentChoice > 128 || isNaN(currentChoice)) {
        currentChoice = prompt('Please enter a valid number between 8 and 128');
        //IF THEY CANCEL QUIT THE FUNCTION
        if(!currentChoice){
            document.getElementById('mytextbox').placeholder = 'No number can be generated';
            return 0;
        }
        currentChoice = parseInt(currentChoice);
    }
    choicesArray[choicesArray.length] = currentChoice;

    //PROMPT FOR EACH OF THE OTHER CHOICES
    //PLANNING TO CHANGE TO FORM ELEMENTS
    for (i = 0; i < promptsArray.length; i++) {
        currentChoice = prompt(promptsArray[i][1]);
        //IF THEY CANCEL QUIT THE FUNCTION
        if(!currentChoice){
            document.getElementById('mytextbox').placeholder = 'No number can be generated';
            return 0;
        }
        currentChoiceLower = currentChoice.toLowerCase();

        while (currentChoiceLower != 'yes' && currentChoiceLower != 'y' && currentChoiceLower != 'no' && currentChoiceLower != 'n') {
            currentChoice = prompt(promptsArray[i][2]);
            //IF THEY CANCEL QUIT THE FUNCTION
            if(!currentChoice){
                document.getElementById('mytextbox').placeholder = 'No number can be generated';
                return 0;
            }
            currentChoiceLower = currentChoice.toLowerCase();
        }
        if (currentChoiceLower === 'yes' || currentChoiceLower === 'y') {
            choicesArray[choicesArray.length] = promptsArray[i][0];
        }
    }

    //IF THEY CANCEL QUIT THE FUNCTION
    if (choicesArray.length < 2) {
        document.getElementById('mytextbox').value = 'No number can be generated';
        return 0;
    }

    for (i = 0; i < choicesArray[0]; i++) {
        var currentCharType = Math.floor(Math.random() * (choicesArray.length - 1)) + 1;
        if (choicesArray[currentCharType] == 'special') {
            //Get random special char
            myRandomPass = myRandomPass + specialCharList.charAt(Math.floor(Math.random() * specialCharList.length));
        }
        if (choicesArray[currentCharType] == 'numeric') {
            //Get random number
            myRandomPass = myRandomPass + Math.floor(Math.random() * 10);
        }
        if (choicesArray[currentCharType] == 'lower') {
            //Get random lower
            myRandomPass = myRandomPass + String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
        if (choicesArray[currentCharType] == 'upper') {
            //Get random upper
            myRandomPass = myRandomPass + String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase();
        }
        // console.log(currentCharType + ' - ' + choicesArray[currentCharType])
    }
    document.getElementById('mytextbox').value = myRandomPass;
}