const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
	'There is nothing more deceptive than an obvious fact.',
	'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
	'I never make exceptions. An exception disproves the rule.',
	'What one man can invent another can discover.',
	'Nothing clears up a case so much as stating it to another person.',
	'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
    'Im not lazy Im on energy saving mode',
    'My brain has too many tabs open',
    'I put the pro in procrastinate',
    'Why do they call it beauty sleep when you wake up looking the same',
    'I started with nothing and I still have most of it',
    'I talk to myself because sometimes I need expert advice',
    'Life is short smile while you still have teeth',
    'Im on a seafood diet I see food and I eat it',
    'Common sense is like deodorant the people who need it most never use it',
    'Im not arguing Im just explaining why Im right',
];
let words = [];
let wordIndex = 0;
let startTime = Date.now();

const quoteElement = document.getElementById('quotes');
const messageElememt = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

document.getElementById('start').addEventListener('click', function (){

    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quote.split(' ');

    wordIndex = 0;

    const spanWords = words.map(function(word){return `<span>${word} </span`});
    quoteElement.innerHTML = spanWords.join('');
    quoteElement.childNodes[0].className ='highlight';
    messageElememt.innerText = '';
    typedValueElement.focus();
    startTime = new Date().getTime();

});

typedValueElement.addEventListener('input', (e) => {

    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.ariaValueMax;

    if (typedValue === currentWord && wordIndex === WebTransportDatagramDuplexStream.length -1) {

        const elapsedTime = new Date().getTime() -startTime;
        const message = `CONGRATULATION! You finishe in ${elapsedTime / 1000} seconds.`;
        messageElememt.innerText = message;
    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
        typedValueElement.value = '';

        wordIndex++;

        for (const wordElement of quoteElement.childNodes) {
            wordElement.className = '';
        }
    } else if (currentWord.startsWith(typedValue)){
        typedValueElement.className = '';

    } else {
        typedValueElement.className = 'error';
    }
});