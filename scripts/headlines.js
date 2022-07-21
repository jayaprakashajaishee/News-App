import renderNews from "./news.js";

function renderHeadlines(sourceName, sourceId) {
  const headlineSource = document.getElementById("headlineSource");
  const headlineList = document.getElementById("headlineList");
  headlineList.innerHTML = "<div style='color:black'>loading...</div>";
  headlineSource.innerHTML = "";
  headlineSource.innerHTML = `<h2>${sourceName}</h2>`;

  fetch(
    `https://news-api-jade-psi.vercel.app/api/everything?sources=${sourceId}`
  )
    .then((response) => response.json())
    .then((json) => {
      headlineList.innerHTML = "";
      json.articles.forEach((article) => {
        const headlineCard = document.createElement("div");
        headlineCard.className = "headline card";
        headlineCard.onclick = () => renderNews(article);
        const headlineImage = document.createElement("img");
        headlineImage.className = "headlineImage";
        headlineImage.src = article.urlToImage;
        const headlineTitle = document.createElement("div");
        headlineTitle.className = "headlineTitle";
        headlineTitle.innerHTML = `<p>${article.title}</P>`;
        headlineCard.append(headlineImage, headlineTitle);
        headlineList.append(headlineCard);
      });
    })
    .catch((error) => {
      headlineList.innerHTML = "";
      headlineList.innerHTML = "<div style='color:#EDEDED'>Error 404</div>";
      console.log(error);
    });
}

export default renderHeadlines;
