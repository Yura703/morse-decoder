const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let dd = expr.match(/.{10}/g);
    let answer = "";
    for (const iter of dd) {
        if(iter === "**********") {
            answer += " ";
            continue;
        }

        let answ = "";
        let ff = String(parseInt(iter, 10));
    for (let i = 0; i < ff.length; i++) {
        if(ff[i] + ff[++i] === "10") answ += ".";
        else answ += "-";
    }

        answer += MORSE_TABLE[answ];
    }


    return answer;
}

module.exports = {
    decode
}