document.addEventListener("DOMContentLoaded", () => {
  loadQuotes("sample")
})

function loadQuotes(tag = "random") {
  var url = ""

  if (tag === "sample") {
    url = "/assets/sample.json"
  } else if (tag === "random") {
    url = "https://animechan.vercel.app/api/quotes"
  }

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector("#page-container")
      container.innerHTML = ""
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
