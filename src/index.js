const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let messageConverted = [];
    expr.split("**********").map(function (word) {
        word.match(/.{1,10}/g).map(function (letter) {
            let escapedLetter = parseInt(letter, 10);
            let decodedLetter = '';
            escapedLetter.toString().match(/.{1,2}/g).map(function (finalLetter) {
                if (finalLetter === '10') {
                    decodedLetter += '.';
                } else if (finalLetter === '11') {
                    decodedLetter += '-';
                }
            });
            messageConverted.push(MORSE_TABLE[decodedLetter]);
        })
        messageConverted.push(" ");
    });
    // console.log(messageConverted.join(""));
return messageConverted.join("").trim();
}

module.exports = {
    decode
}

// const expr = "000000001100101010100000000010**********00111110110000101011000000101000111011100000111011**********00111010100000101110000011111100001011110000001110**********001010111000001111110011101011**********00101111110000101011000000111100101111100000101010**********0000111111001010101100000000100000101110**********000000001100101010100000000010**********0010111010000000101100111110100011101111**********000011101000001111110000111110";
// console.log(decode(expr));