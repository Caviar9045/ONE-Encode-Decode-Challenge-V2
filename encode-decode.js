/* JavaScript file for encryption/decryption methods & some extra functions
    such as -copyToClipboard- functionality */
/* © Created by Caviar9045 */

toggle_visibility("copybutton");
var visibility = 0;


/* Dictionaries for encryption.*/
/* We are using two dictionaries in order to decrease our chances to get our code easily decoded by anyone*/
const encodingMap = {
    "0": "0",
    "1": "z",
    "2": "y",
    "3": "x",
    "4": "w",
    "5": "v",
    "6": "u",
    "7": "t",
    "8": "s",
    "9": "r",
    "a": "1",
    "b": "2",
    "c": "3",
    "d": "4",
    "e": "5",
    "f": "6",
    "g": "7",
    "h": "8",
    "i": "9",
    "j": "!",
    "k": "@",
    "l": "#",
    "m": "$",
    "n": "%",
    "o": "&",
    "p": "*",
    "q": "(",
    "r": ")",
    "s": "-",
    "t": "+",
    "u": "=",
    "v": "[",
    "w": "]",
    "x": "{",
    "y": "}",
    "z": "|",
    "A": "a",
    "B": "b",
    "C": "c",
    "D": "d",
    "E": "e",
    "F": "f",
    "G": "g",
    "H": "h",
    "I": "i",
    "J": "ï",
    "K": "Ë",
    "L": "Ä",
    "M": "Ö",
    "N": "Ï",
    "O": "Ü",
    "P": "Ç",
    "Q": "Ø",
    "R": "Þ",
    "S": "!",
    "T": "@",
    "U": "#",
    "V": "$",
    "W": "%",
    "X": "&",
    "Y": "*",
    "Z": "(",
    "!": "q",
    "@": "p",
    "#": "o",
    "$": "n",
    "%": "m",
    "&": "l",
    "*": "k",
    "(": "j",
    ")": "i",
    "-": "h",
    "+": "g",
    "=": "f",
    "[": "e",
    "]": "d",
    "{": "c",
    "}": "b",
    "|": "a",
    " ": "Â",
    'á': '阿',
    'é': '依',
    'í': '伊',
    'ó': '欧',
    'ú': '宇',
    'ñ': '娜',
    'ü': '优',
    'ç': '策',
    'ã': '安',
    'õ': '欧',
    'â': '阿',
    'ê': '依',
    'ô': '欧',
    'î': '伊',
    'û': '宇',
    'ë': '依',
    'ï': '伊',
    'ö': '欧',
    'ä': '阿',
    'ÿ': '依',
    'Ø': '奥',
    'ø': '欧',
    'Å': '奥',
    'å': '欧',
};

const encodingMap2 = {
    '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e',
    '6': 'f', '7': 'g', '8': 'h', '9': 'i', '0': 'j',
    '!': 'k', '@': 'l', '#': 'm', '$': 'n', '%': 'o',
    '^': 'p', '&': 'q', '*': 'r', '(': 'ï', ')': 'ê',
    '-': 'u', '_': 'v', '+': 'w', '=': 'x',
    ']': 'z', ';': 'C', ':': '╣', 'S': 'ô',
    ',': 'E', '.': 'F', '<': '♥', '>': 'H', '/': 'I',
    '`': 'K', '|': 'L', '@': 'M', '#': 'N',
    '[': 'O', ']': 'P', '{': 'Q', '}': 'R', ';': 'ª',
    ':': 'T', '?': 'X', 'Y': '└',
    '`': 'Y', 'a': '0', 'b': '1', 'c': '2',
    'd': '3', 'e': '4', 'f': '5', 'g': '6', 'h': '7',
    'i': '8', 'j': '9', 'k': '!', 'l': '@', 'm': '#',
    'n': '$', 'o': '%', 'p': '^', 'q': '&', 'r': '*',
    's': 'ì', 't': 'Å', 'u': '-', 'v': '_', 'w': '+',
    'x': '=', 'y': 'É', 'z': 'â',
    'C': ';', 'D': 'Ã', 'E': ',', 'F': '.', 'G': '©',
    'H': '╗', 'I': '/', 'J': '┤', 'K': '`', 'L': '|',
    'M': '(', 'N': ')', 'O': '[', 'P': ']', 'Q': '{',
    'R': '}', 'T': ':', 'U': '<', 'V': '>',
    'W': '╝', 'X': '?', 'Z': '┬', ' ': 'ü',
    'á': '阿',
    'é': '依',
    'í': '伊',
    'ó': '欧',
    'ú': '宇',
    'ñ': '娜',
    'ü': '优',
    'ç': '策',
    'ã': '安',
    'õ': '欧',
    'â': '阿',
    'ê': '依',
    'ô': '欧',
    'î': '伊',
    'û': '宇',
    'ë': '依',
    'ï': '伊',
    'ö': '欧',
    'ä': '阿',
    'ÿ': '依',
    'Ø': '奥',
    'ø': '欧',
    'Å': '奥',
    'å': '欧',
};

/* Here starts the functions used to encode the input*/

/* Entry function called when user clicks on "Encode" button */
function encodeText() {
    const inputText = document.getElementById('inputText').value;
    const encodedText = encode(inputText);
    //document.getElementById('titleText').innerText = 'Encoding!';
    if (inputText == '') {
        //document.getElementById('inputText').style.border = "2px solid red";
    }
    else {
        document.getElementById('encodedDecodedText').innerText = 'Encoded Text: ';
        document.getElementById('encodedResult').innerText = encodedText;
        document.getElementById('inputText').value = '';
        changeBackgroundColor(0);
        if (visibility == 1) { }
        else {
            toggle_visibility("copybutton");
        }
        visibility = 1;
    }
}

/* We call the code() function based on the length of the input to select the dictionary 
    and it returns the values returned from the next functions.
    Here we convert the input length from decimal to hexadecimal and add it to the encoded 
    result. If this value is just one letter, we add an special character to have a standard
    of two.*/
function encode(input) {
    const lth = input.length;
    var coded = '';
    var separator1;

    /*Convert input lengh to Hexadecimal*/
    let first = convertHex(lth);
    if (first.length > 1) {
        separator1 = '';
    }
    else {
        separator1 = 'â';
    }
    /*Encode depending on input length*/
    if (lth < 30) {
        var coded = code(input, 0);
    }
    else {
        var coded = code(input, 1);
    }
    return (first + separator1 + coded);
}

/* This is our main code function that takes as arguments 1-input text & 2-dictionary.
    First it converts the input text to an array to separete each character and then assigns
    each value of argument #2 to it's encodingMap. */
function code(toCode, dic) {
    let codedArray = toCode.split('');
    var selDic;

    if (dic == 0) {
        var selDic = encodingMap;
    }
    else if (dic == 1) {
        var selDic = encodingMap2;
    }
    else {
        console.log("Invalid dictionary value.")
    }
    let result = toStringConvert(searchAndReplace(codedArray, selDic));
    return result;
}

/* We use this function as our iteration through argument #2 (dictionary) comparing each element
    of argument #1 (array from code() function) and replaces it with the value of each key 
    found on the dictionary (encodingMap). 
    
    The encoding process finishes here.*/
function searchAndReplace(arr, dictionary) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] in dictionary) {
            arr[i] = dictionary[arr[i]];
        }
    }
    return arr;
}



/* Here starts the functions used to decode the input*/


/* Entry function called when user clicks on "Decode" button */
function decodeText() {
    const inputText = document.getElementById('inputText').value;
    const decodedText = decode(inputText);
    if (inputText == '') {
        //document.getElementById('inputText').style.border = "2px solid red";
    }
    else {
        document.getElementById('encodedDecodedText').innerText = 'Decoded Text: ';
        document.getElementById('encodedResult').innerText = decodedText;
        document.getElementById('inputText').value = '';
        changeBackgroundColor(1);
        if (visibility == 1) { }
        else {
            toggle_visibility("copybutton");
        }
        visibility = 1;
        state = 2;
    }
};

/* We call the decode() function to: 
    1-Split the input into and array assigning each value to an
    array position. 
    2-Split the previous array in two: one contains the values assigned on the encoding process
    corresponding of the original text length and the other one contains the rest of the encoded
    text.
    3-Converts the first array (the one that contains the length of the original unencoded text)
    into a string.
    4-Decides between two codingMaps based on the length obtained by the previous step and
    calls dedecode() function.*/
function decode(input) {
    const deconstructedInput = input.split('');
    const firstTwoValues = deconstructedInput.slice(0, 2);
    const restOfInput = deconstructedInput.slice(2);
    const lth = toStringConvert(firstTwoValues);
    var decoded = '';
    /*Convert input lengh to Decimal*/
    let len = convertDecimal(lth);
    /*Decode depending on input length*/
    if (len < 30) {
        var decoded = dedecode(restOfInput, 0);
    }
    else {
        var decoded = dedecode(restOfInput, 1);
    }
    return (decoded);
}

/* This function calls searchAndReplaceInverse() function based on the encodingMap assigned by the
    value dessigned by the decode() function obtained by the coded input.*/
function dedecode(toDecode, dic) {
    let decodedArray = toDecode;
    var selDic;

    if (dic == 0) {
        var selDic = encodingMap;
    }
    else if (dic == 1) {
        var selDic = encodingMap2;
    }
    else {
        console.log("Invalid dictionary value.")
    }
    let result = toStringConvert(searchAndReplaceInverse(decodedArray, selDic));
    return result;
}

/* We use this function as our iteration through argument #2 (dictionary) comparing each element
    of argument #1 (array from code() function). It works exactly the same way around as 
    searchAndReplace() function to decode the input.
    
    The decoding process finishes here.*/
function searchAndReplaceInverse(arr, dictionary) {
    for (var i = 0; i < arr.length; i++) {
        for (var key in dictionary) {
            if (key in dictionary) {
                if (arr[i] === dictionary[key]) {
                    arr[i] = key;
                    break;
                }
            }
        }
    }
    return arr;
}



/* Extra functions */


/* Toggles the visibility of the button to Copy To Clipboard*/
function toggle_visibility(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "inline";
    } else {
        x.style.display = "none";
    }
}

/* Method to copyToClipboard the <p> tag with the id="#encodedResult"*/
function copyToClipboard() {
    var range = document.createRange();
    var popUpelement = document.getElementById("popUp");
    range.selectNode(document.getElementById("encodedResult"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    popUpelement.innerHTML = "Copied!";
    popUpelement.style.opacity = "1";
    popUpelement.style.pointerEvents = "auto";
}

/* Method to handle "Copied" popUp */
function popUpEvent() {
    var popUpelement = document.getElementById("popUp");
    popUpelement.style.opacity = "0";
    popUpelement.style.pointerEvents = "none";
  }
/*Converts from decimal to hexadecimal*/
function convertHex(toHex) {
    return (+toHex).toString(16).toUpperCase();
}
/*Converts from hexadecimal to decimal*/
function convertDecimal(toDecimal) {
    return parseInt(toDecimal, 16); // Convert hex to decimal
}
/*Converts from an array to a string*/
function toStringConvert(array) {
    let arrayToString = array;
    let resultString = ""; // Initialize an empty string to store the result

    for (let i = 0; i < arrayToString.length; i++) {
        resultString += arrayToString[i]; // Concatenate each array element to the result string
        if (i < arrayToString.length - 1) {
            resultString += ""; // Add a separator except for the last element
        }
    }
    return resultString;
}