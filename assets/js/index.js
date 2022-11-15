document.addEventListener("DOMContentLoaded", () => {
  console.log("imported!")
  console.log(loadQuotes())
})

function loadQuotes(tag = "random") {
  var url = "/assets/sample.json"
  switch (tag) {
    case "random":
      // url = "https://animechan.vercel.app/api/quotes"
  }
  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        renderCard(item)
      })
    })
}

function renderCard(quote) {
  const container = document.querySelector("#page-container");
  const card = `
    <div class="quote-card">
      <div class="quote-img"></div>
      <p class="quote-content">${quote.quote}</p>
      <p class="quote-by">By: <span class="quote-anime-char">${quote.character}</span></p>
    </div>
  `
  container.innerHTML += card
}
