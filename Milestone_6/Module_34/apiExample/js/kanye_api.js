const loadeQuotes = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => displayQuote(data.quote));
}

loadeQuotes();

const displayQuote = quote => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote;
}