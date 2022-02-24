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
    let mas = [];
    let str = "";
    let ch = "";
    for(let i=0;i<expr.length;i+=10){
        mas.push(expr.slice(i, i+10));
    }
    for(let elem of mas){
        if (elem === "**********")
            str += " ";
        else{
            let i = 0;
            ch="";
            while(elem[i]==='0')
                i++;
            for(;i<elem.length;i+=2){
                if(elem.slice(i, i+2) === "10")
                    ch+=".";
                else
                    ch+="-";
            }
            str+=MORSE_TABLE[ch];
        }
    }
    return str;

}

module.exports = {
    decode
}