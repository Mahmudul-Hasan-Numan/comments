const quotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = quotes => {
    const div = document.getElementById('display-quotes');
    const p = document.createElement('p');
    p.innerText = quotes.quote;
    div.appendChild(p);
}