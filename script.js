const quoteContainer = document.querySelector(".quote-container");
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");

const newQuote = document.querySelector("#new-quote");
const tweetQuote = document.querySelector("#twitter");

const loader = document.querySelector(".loader");

const showLoader = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
};

const removeLoader = () => {
  loader.hidden = true;
  quoteContainer.hidden = false;
};

const fetchQuote = async () => {
  showLoader();
  const url = "https://api.api-ninjas.com/v1/quotes?category=";
  const response = await fetch(url + "happiness", {
    headers: {
      "X-Api-Key": "V46LA13/1WNs1Neaeo/QJQ==d0vsYruKKs10ZFam",
    },
  });
  const quote = await response.json();
  if (quote[0].quote.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote[0].quote;
  authorText.textContent = quote[0].author;
  removeLoader();
};

newQuote.addEventListener("click", () => {
  fetchQuote();
});

tweetQuote.addEventListener("click", () => {
  const url = `https://twitter.com/intent/tweet?text=${quoteText.textContent} -${authorText.textContent}`;
  window.open(url, "_blank");
});

fetchQuote();
