function clearPass() {
    document.getElementById('mytextbox').placeholder = 'Your Secure Password';
    document.getElementById('mytextbox').value = '';

    var promptsArray = ['special', 'numeric', 'lower', 'upper'];
    for (i = 0; i < promptsArray.length; i++) {
        document.getElementById(promptsArray[i]).checked = false;
    }
    document.getElementById('char_count').value = '';
}

function copyText() {
    document.getElementById("mytextbox").select();
    document.execCommand('copy');
    if (window.getSelection) { window.getSelection().removeAllRanges(); }
    else if (document.selection) { document.selection.empty(); }
}

function genPass() {
    //VARIABLES
    var choicesArray = [];
    var currentChoice;
    var specialCharList = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    var myRandomPass = '';
    var promptsArray = ['special', 'numeric', 'lower', 'upper'];

    document.getElementById('mytextbox').placeholder = 'Your Secure Password';
    document.getElementById('mytextbox').value = '';

    //GET MY NUMBER OF CHARACTERS
    currentChoice = document.getElementById('char_count').value;
    if (!currentChoice) {
        document.getElementById('mytextbox').placeholder = 'Please enter a valid number of characters between 8 and 128';
        return 0;
    }
    currentChoice = parseInt(currentChoice);

    //DETERMINE IF THE CHOICE WAS A NUMBER AND IN RANGE
    if (currentChoice < 8 || currentChoice > 128 || isNaN(currentChoice)) {
        document.getElementById('mytextbox').placeholder = 'Please enter a valid number of characters between 8 and 128';
        return 0;
    }

    document.getElementById('mytextbox').placeholder = 'Your Secure Password';

    choicesArray.push(currentChoice);

    //GET THE REST OF MY CHOICES
    for (i = 0; i < promptsArray.length; i++) {
        currentChoice = document.getElementById(promptsArray[i]).checked;
        //console.log(currentChoice + ' - ' + promptsArray[i]);
        if (currentChoice) {
            choicesArray.push(promptsArray[i]);
        }
    }
    //console.log(choicesArray.length)

    //IF NO OPTION SELECTED THEN STOP
    if (choicesArray.length < 2) {
        document.getElementById('mytextbox').placeholder = 'Please choose at least one character type to use';
        return 0;
    }

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

    //BUILDING THE myRandomPass
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