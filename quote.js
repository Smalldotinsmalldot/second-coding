const quotes = [
  {
    quote: "집착이 사랑이 아니라면 난 한번도 사랑해본 적이 없다.",
    author: "박상영",
  },
  {
    quote: "나를 견디지 않고, 나와 잘 살아보고 싶다.",
    author: "최진영",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
