alert('ALT + lefShift change lang');

let wrap = document.createElement('div');
wrap.classList.add('wrapper');
document.body.appendChild(wrap);

let textarea = document.createElement('textarea');

textarea.classList.add('textarea');
textarea.id = 'textarea';
document.body.prepend(textarea);


// не сделал Tab и Alt спец кнопки 
// стрелки вверх и вниз работают, но не совсем правильно 
// eslint не использовал 
// использование в коде фишек стандарта ES6 и выше (classes, деструктуризация и т.д.) не делал 



let currentLanguage = localStorage.getItem('lang') ?? 'RU';
let capsLockCheck = false;
let shiftCheck = false;
 
const allKeys = [

    {
        keyCode: 192,
        russianSymbol: 'ё',
        englishSymbol: '`',
        russionBigSymbol: 'Ё',
        enhlishBigSymbol: '~'
    },
    {
        keyCode: 49,
        russianSymbol: '1',
        englishSymbol: '1',
        russionBigSymbol: '!',
        enhlishBigSymbol: '!'
    },
    {
        keyCode: 50,
        russianSymbol: '2',
        englishSymbol: '2',
        russionBigSymbol: '"',
        enhlishBigSymbol: '@'
    },
    {
        keyCode: 51,
        russianSymbol: '3',
        englishSymbol: '3',
        russionBigSymbol: '№',
        enhlishBigSymbol: '#'
    },
    {
        keyCode: 52,
        russianSymbol: '4',
        englishSymbol: '4',
        russionBigSymbol: ';',
        enhlishBigSymbol: '$'
    },
    {
        keyCode: 53,
        russianSymbol: '5',
        englishSymbol: '5',
        russionBigSymbol: '%',
        enhlishBigSymbol: '%'
    },
    {
        keyCode: 54,
        russianSymbol: '6',
        englishSymbol: '6',
        russionBigSymbol: ':',
        enhlishBigSymbol: '^'
    },
    {
        keyCode: 55,
        russianSymbol: '7',
        englishSymbol: '7',
        russionBigSymbol: '?',
        enhlishBigSymbol: '&'
    },
    {
        keyCode: 56,
        russianSymbol: '8',
        englishSymbol: '8',
        russionBigSymbol: '*',
        enhlishBigSymbol: '*'
    },
    {
        keyCode: 57,
        russianSymbol: '9',
        englishSymbol: '9',
        russionBigSymbol: '(',
        enhlishBigSymbol: '('
    },
    {
        keyCode: 48,
        russianSymbol: '0',
        englishSymbol: '0',
        russionBigSymbol: ')',
        enhlishBigSymbol: ')'
    },
    {
        keyCode: 189,
        russianSymbol: '-',
        englishSymbol: '-',
        russionBigSymbol: '_',
        enhlishBigSymbol: '_'
    },
    {
        keyCode: 187,
        russianSymbol: '=',
        englishSymbol: '=',
        russionBigSymbol: '+',
        enhlishBigSymbol: '+'
    },
    {
        keyCode: 8,
        russianSymbol: '<-',
        englishSymbol: '<-',
        russionBigSymbol: '<-',
        enhlishBigSymbol: '<-'
    },
    {
        keyCode: 9,
        russianSymbol: 'Tb',
        englishSymbol: 'Tb',
        russionBigSymbol: 'Tb',
        enhlishBigSymbol: 'Tb'
    },
    {
        keyCode: 81,
        russianSymbol: 'й',
        englishSymbol: 'q',
        russionBigSymbol: 'Й',
        enhlishBigSymbol: 'Q'
    },
    {
        keyCode: 87,
        russianSymbol: 'ц',
        englishSymbol: 'w',
        russionBigSymbol: 'Ц',
        enhlishBigSymbol: 'W'
    },
    {
        keyCode: 69,
        russianSymbol: 'у',
        englishSymbol: 'e',
        russionBigSymbol: 'У',
        enhlishBigSymbol: 'E'
    },
    {
        keyCode: 82,
        russianSymbol: 'к',
        englishSymbol: 'r',
        russionBigSymbol: 'К',
        enhlishBigSymbol: 'R'
    },
    {
        keyCode: 84,
        russianSymbol: 'е',
        englishSymbol: 't',
        russionBigSymbol: 'Е',
        enhlishBigSymbol: 'T'
    },
    {
        keyCode: 89,
        russianSymbol: 'н',
        englishSymbol: 'y',
        russionBigSymbol: 'Н',
        enhlishBigSymbol: 'Y'
    },
    {
        keyCode: 85,
        russianSymbol: 'г',
        englishSymbol: 'u',
        russionBigSymbol: 'Г',
        enhlishBigSymbol: 'U'
    },
    {
        keyCode: 73,
        russianSymbol: 'ш',
        englishSymbol: 'i',
        russionBigSymbol: 'Ш',
        enhlishBigSymbol: 'I'
    },
    {
        keyCode: 79,
        russianSymbol: 'щ',
        englishSymbol: 'o',
        russionBigSymbol: 'Щ',
        enhlishBigSymbol: 'O'
    },
    {
        keyCode: 80,
        russianSymbol: 'з',
        englishSymbol: 'p',
        russionBigSymbol: 'З',
        enhlishBigSymbol: 'P'
    },
    {
        keyCode: 219,
        russianSymbol: 'х',
        englishSymbol: '[',
        russionBigSymbol: 'Х',
        enhlishBigSymbol: '{'
    },
    {
        keyCode: 221,
        russianSymbol: 'ъ',
        englishSymbol: ']',
        russionBigSymbol: 'Ъ',
        enhlishBigSymbol: '}'
    },
    {
        keyCode: 20,
        russianSymbol: 'cs',
        englishSymbol: 'cs',
        russionBigSymbol: 'cs',
        enhlishBigSymbol: 'cs'
    },
    {
        keyCode: 65,
        russianSymbol: 'ф',
        englishSymbol: 'a',
        russionBigSymbol: 'Ф',
        enhlishBigSymbol: 'A'
    },
    {
        keyCode: 83,
        russianSymbol: 'ы',
        englishSymbol: 's',
        russionBigSymbol: 'Ы',
        enhlishBigSymbol: 'S'
    },
    {
        keyCode: 68,
        russianSymbol: 'в',
        englishSymbol: 'd',
        russionBigSymbol: 'В',
        enhlishBigSymbol: 'D'
    },
    {
        keyCode: 70,
        russianSymbol: 'а',
        englishSymbol: 'f',
        russionBigSymbol: 'А',
        enhlishBigSymbol: 'F'
    },
    {
        keyCode: 71,
        russianSymbol: 'п',
        englishSymbol: 'g',
        russionBigSymbol: 'П',
        enhlishBigSymbol: 'G'
    },
    {
        keyCode: 72,
        russianSymbol: 'р',
        englishSymbol: 'h',
        russionBigSymbol: 'Р',
        enhlishBigSymbol: 'H'
    },
    {
        keyCode: 74,
        russianSymbol: 'о',
        englishSymbol: 'j',
        russionBigSymbol: 'О',
        enhlishBigSymbol: 'J'
    },
    {
        keyCode: 75,
        russianSymbol: 'л',
        englishSymbol: 'k',
        russionBigSymbol: 'Л',
        enhlishBigSymbol: 'K'
    },
    {
        keyCode: 76,
        russianSymbol: 'д',
        englishSymbol: 'l',
        russionBigSymbol: 'Д',
        enhlishBigSymbol: 'L'
    },
    {
        keyCode: 186,
        russianSymbol: 'ж',
        englishSymbol: ';',
        russionBigSymbol: 'Ж',
        enhlishBigSymbol: ':'
    },
    {
        keyCode: 222,
        russianSymbol: 'э',
        englishSymbol: '\'',
        russionBigSymbol: 'Э',
        enhlishBigSymbol: '"'
    },
    {
        keyCode: 220,
        russianSymbol: '\\',
        englishSymbol: '\\',
        russionBigSymbol: 'Э',
        enhlishBigSymbol: '|'
    },
    {
        keyCode: 13,
        russianSymbol: 'ent',
        englishSymbol: 'ent',
        russionBigSymbol: 'ent',
        enhlishBigSymbol: 'ent'
    },
    {
        keyCode: 46,
        russianSymbol: 'del',
        englishSymbol: 'del',
        russionBigSymbol: 'del',
        enhlishBigSymbol: 'del'
    },
    {
        keyCode: 16,
        russianSymbol: 'lS',
        englishSymbol: 'ls',
        russionBigSymbol: 'ls',
        enhlishBigSymbol: 'ls'
    },
    {
        keyCode: 90,
        russianSymbol: 'я',
        englishSymbol: 'z',
        russionBigSymbol: 'Я',
        enhlishBigSymbol: 'Z'
    },
    {
        keyCode: 88,
        russianSymbol: 'ч',
        englishSymbol: 'x',
        russionBigSymbol: 'Ч',
        enhlishBigSymbol: 'X'
    },
    {
        keyCode: 67,
        russianSymbol: 'с',
        englishSymbol: 'c',
        russionBigSymbol: 'С',
        enhlishBigSymbol: 'C'
    },
    {
        keyCode: 86,
        russianSymbol: 'м',
        englishSymbol: 'v',
        russionBigSymbol: 'М',
        enhlishBigSymbol: 'V'
    },
    {
        keyCode: 66,
        russianSymbol: 'и',
        englishSymbol: 'b',
        russionBigSymbol: 'И',
        enhlishBigSymbol: 'B'
    },
    {
        keyCode: 78,
        russianSymbol: 'т',
        englishSymbol: 'n',
        russionBigSymbol: 'Т',
        enhlishBigSymbol: 'N'
    },
    {
        keyCode: 77,
        russianSymbol: 'ь',
        englishSymbol: 'm',
        russionBigSymbol: 'Ь',
        enhlishBigSymbol: 'M'
    },
    {
        keyCode: 188,
        russianSymbol: 'б',
        englishSymbol: ',',
        russionBigSymbol: 'Б',
        enhlishBigSymbol: '<'
    },
    {
        keyCode: 190,
        russianSymbol: 'ю',
        englishSymbol: '.',
        russionBigSymbol: 'Ю',
        enhlishBigSymbol: '>'
    },
    {
        keyCode: 191,
        russianSymbol: '.',
        englishSymbol: '/',
        russionBigSymbol: ',',
        enhlishBigSymbol: '?'
    },
    {
        keyCode: 16,
        russianSymbol: 'Rs',
        englishSymbol: 'Rs',
        russionBigSymbol: 'Rs',
        enhlishBigSymbol: 'Rs'
    },
    {
        keyCode: 38,
        russianSymbol: 'Up',
        englishSymbol: 'Up',
        russionBigSymbol: 'Up',
        enhlishBigSymbol: 'Up'
    },
    {
        keyCode: 17,
        russianSymbol: 'lCtr',
        englishSymbol: 'lCtr',
        russionBigSymbol: 'lCtr',
        enhlishBigSymbol: 'lCtr'
    },
    {
        keyCode: 91,
        russianSymbol: 'win',
        englishSymbol: 'win',
        russionBigSymbol: 'win',
        enhlishBigSymbol: 'win'
    },
    {
        keyCode: 18,
        russianSymbol: 'lA',
        englishSymbol: 'lA',
        russionBigSymbol: 'lA',
        enhlishBigSymbol: 'lA'
    },
    {
        keyCode: 32,
        russianSymbol: 'spac',
        englishSymbol: 'spac',
        russionBigSymbol: 'spac',
        enhlishBigSymbol: 'spac'
    },
    // {
    //     keyCode: leftCtrl32,
    //     russianSymbol: 'spac',
    //     englishSymbol: 'spac',
    //     russionBigSymbol: 'spac',
    //     enhlishBigSymbol: 'spac'
    // },/
    {
        keyCode: 18,
        russianSymbol: 'rA',
        englishSymbol: 'rA',
        russionBigSymbol: 'rA',
        enhlishBigSymbol: 'rA'
    },
    {
        keyCode: 92,
        russianSymbol: 'winR',
        englishSymbol: 'winR',
        russionBigSymbol: 'winR',
        enhlishBigSymbol: 'winR'
    },
    // {
    //     keyCode: 93,
    //     russianSymbol: 'menu',
    //     englishSymbol: 'menu',
    //     russionBigSymbol: 'menu',
    //     enhlishBigSymbol: 'menu'
    // },
    {
        keyCode: 17,
        russianSymbol: 'cR',
        englishSymbol: 'cR',
        russionBigSymbol: 'cR',
        enhlishBigSymbol: 'cR'
    },
    {
        keyCode: 37,
        russianSymbol: '<-',
        englishSymbol: '<-',
        russionBigSymbol: '<-',
        enhlishBigSymbol: '<-'
    },
    {
        keyCode: 40,
        russianSymbol: 'down',
        englishSymbol: 'down',
        russionBigSymbol: 'down',
        enhlishBigSymbol: 'down'
    },
    {
        keyCode: 39,
        russianSymbol: '->',
        englishSymbol: '->',
        russionBigSymbol: '->',
        enhlishBigSymbol: '->'
    },
];


// отрисовка букв 
function init(keysArray) {
    let out = '';
    let keyCode = '';
    let symbol = '';

    for (let i = 0; i < keysArray.length; i++) {
        keyCode = keysArray[i].keyCode;
        if (currentLanguage === 'RU') {
            if (capsLockCheck) {
                symbol = keysArray[i].russionBigSymbol;
            }
            else {
                symbol = keysArray[i].russianSymbol;
            }
        }
        else if (currentLanguage === 'Eng') {
            if (capsLockCheck) {
                symbol = keysArray[i].enhlishBigSymbol;
            }
            else {
                symbol = keysArray[i].englishSymbol;
            }
        }
        out += `<div class ="space" id="` + keyCode + `">` + symbol + `</div>`;
        document.querySelector('.wrapper').innerHTML = out;
    }
    
};

init(allKeys);




allKeys.forEach(function (button) {
    let obj = document.getElementById(button.keyCode);
    obj.addEventListener('click', function () {
        document.querySelector('.textarea').focus();
    })
})



document.onmousedown = function (event) {
    if (event.target.classList.contains('space')) {
        event.target.classList.add('active');
    }

    if (event.target.classList.value === 'space active') {
        switch (event.target.id) {
            case '8':
                let selStart = textarea.selectionStart
                document.querySelector('.textarea').value = document.querySelector('.textarea').value.substring(0, selStart - 1) + document.querySelector('.textarea').value.substring(selStart, document.querySelector('.textarea').value.length);
                textarea.setSelectionRange(selStart - 1, selStart - 1);
                break;
            case '9':
                alert('tab not work')
                break;
            case '20':
                if (capsLockCheck) {
                    capsLockCheck = false;
                }
                else capsLockCheck = true;
                init(allKeys);
                break;
            case '13':
                document.querySelector('.textarea').value += '\n';
                break;
            case '16':
                shiftCheck = true;
                break;
            // case '16':
            //     shiftCheck = true; 
            //     break;
            case '17':
                textarea.setSelectionRange(0, 0);
                break;
            case '92':
                document.querySelector('.textarea').value += '';
                break;
            case '91':
                document.querySelector('.textarea').value += '';
                break;
            case '32':
                document.querySelector('.textarea').value += ' ';
                break;
            case '37':
                if (textarea.selectionStart != 0) {
                    textarea.setSelectionRange(textarea.selectionStart - 1, textarea.selectionStart - 1);
                }
                break;
            case '39':
                if (textarea.selectionStart != textarea.length) {
                    textarea.setSelectionRange(textarea.selectionStart + 1, textarea.selectionStart + 1);
                }
                break;
            case '38':
                let valueSplit = textarea.value.split('\n');
                let selectionStart = textarea.selectionStart;
                let currentCursor = valueSplit[0].length + 1;
                if (valueSplit.length === 1) {
                    textarea.setSelectionRange(0, 0);
                } else {
                    for (let i = 1; i < valueSplit.length; i++) {
                        if (i === 1) {
                            textarea.setSelectionRange(0, 0);
                        }
                        if (selectionStart >= currentCursor && selectionStart <= (currentCursor + valueSplit[i].length)) {
                            textarea.setSelectionRange(currentCursor - 1, currentCursor - 1);
                        }
                        else {
                            currentCursor += valueSplit[i].length + 1;
                        }
                    }
                }
                break;
          
            case '40':
                let valueSplitDown = textarea.value.split('\n');
                let selectionStartDown = textarea.selectionStart;
                let currentCursorDown = 0;
                if (valueSplitDown.length === 1) {
                    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
                }
                else {
                    for (let i = 0; i < valueSplitDown.length; i++) {
                        if (selectionStartDown >= currentCursorDown && selectionStartDown <= (currentCursorDown + valueSplitDown[i].length)) {
                            if (i != valueSplitDown.length - 1) {
                                let test = currentCursorDown + valueSplitDown[i].length + valueSplitDown[i + 1].length + 1;
                                textarea.setSelectionRange(test, test);
                                return;
                            }
                        }
                        else {
                            currentCursorDown += valueSplitDown[i].length + 1;
                        }
                    }
                }
                break;
            case '46':

                let selDelStart = textarea.selectionStart
                document.querySelector('.textarea').value = document.querySelector('.textarea').value.substring(0, selDelStart - 1) + document.querySelector('.textarea').value.substring(selDelStart, document.querySelector('.textarea').value.length);
                textarea.setSelectionRange(selDelStart + 1, selDelStart + 1);
                break;

            default:
                if (shiftCheck) {
                    document.querySelector('.textarea').value += event.target.innerText.toUpperCase();
                    shiftCheck = false;
                    document.getElementById('16').classList.remove('active');

                }
                else
                    document.querySelector('.textarea').value += event.target.innerText;
                break;
        }
    }
}
document.onmouseup = function (event) {
    if (event.target.classList.contains('space')) {
        if (!shiftCheck)
            event.target.classList.remove('active');
    }
}

document.onkeyup = function (event) {
    document.querySelector('.wrapper .space[id ="' + event.keyCode + '" ]').classList.remove('active');
};

//комбинация левый альт + левый шифт
let toogle = false;
document.onkeydown = function (event) {
    document.querySelector('.textarea').focus();
    document.querySelector('.wrapper .space[id ="' + event.keyCode + '" ]').classList.add('active');
    if (event.code === 'AltLeft') {
        toogle = true;
    }
    if (event.code === 'ShiftLeft' && toogle) {
        toogle = false;
       if(currentLanguage === 'RU') {
           currentLanguage = 'Eng';
           localStorage.setItem('lang', 'Eng');
       }
       else {
           currentLanguage = 'RU';
           localStorage.setItem('lang', 'RU');
       }
       init(allKeys);
    }
}

