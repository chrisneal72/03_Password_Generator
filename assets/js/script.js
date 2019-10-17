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
    var passLength;
    var specialCharList = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    var myRandomPass = '';
    var currentCharProcess = {
        special: function () {
            return specialCharList.charAt(Math.floor(Math.random() * specialCharList.length));
        },
        numeric: function () {
            return Math.floor(Math.random() * 10);
        },
        lower: function () {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        },
        upper: function () {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase();
        }
    };

    //GET MY NUMBER OF CHARACTERS FROM THE PAGE
    passLength = document.getElementById('char_count').value;
    passLength = parseInt(passLength);

    //CHECK TO MAKE SURE SOMETHING WAS ENTERED AND IT IS A NUMBER AND WITHIN RANGE
    if (!passLength || passLength < 8 || passLength > 128 || isNaN(passLength)) {
        document.getElementById('mytextbox').placeholder = 'Please enter a valid number of characters between 8 and 128';
        return 0;
    }

    //GET THE REST OF MY CHOICES BY LOOPING OVER OBJECT KEYS TO GET SELECTIONS FROM PAGE
    for (var key in currentCharProcess) {
        currentChoice = document.getElementById(key).checked;
        if (currentChoice) {
            choicesArray.push(key);
        }
    }

    //IF NO OPTION SELECTED THEN STOP AND TELL WHY
    if (choicesArray.length == 0) {
        document.getElementById('mytextbox').placeholder = 'Please choose at least one character type to use';
        return 0;
    }

    //BUILDING THE myRandomPass VALUE
    for (i = 0; i < passLength; i++) {
        //GET RANDOM CHARACTER TYPE
        var currentCharType = choicesArray[Math.floor(Math.random() * (choicesArray.length))];
        //PROCESS THE CHARACTER TYPE USING THE OBJECT
        myRandomPass = myRandomPass + currentCharProcess[currentCharType]();
    }
    //SETTING THE TEXTAREA VALUE TO THE RANDOM PASSWORD
    document.getElementById('mytextbox').value = myRandomPass;
}

//BUTTON ACTIONS
document.getElementById('genPass').addEventListener('click', function () { genPass(); })
document.getElementById('copyText').addEventListener('click', function () { copyText(); })
document.getElementById('clearPass').addEventListener('click', function () { clearPass(); })