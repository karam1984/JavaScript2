const quotes = [{
    quote: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche"
  },
  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain"
  },
  {
    quote: "Always forgive your enemies; nothing annoys them so much.",
    author: "Oscar Wilde"
  },
  {
    quote: "It is always the simple that produces the marvelous.",
    author: "Amelia Barr"
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  }
];

const button = document.getElementById("button");
let quoteText = document.getElementById("quote");
let author = document.getElementById("author");

let q = Math.floor(Math.random() * quotes.length);
quoteText.innerHTML =  quotes[q].quote;
author.innerHTML =   quotes[q].author;

button.onclick = function getNewQuote() {
  let i = Math.floor(Math.random() * quotes.length);
  quoteText.innerHTML = quotes[i].quote;
  author.innerHTML =  quotes[i].author;
};