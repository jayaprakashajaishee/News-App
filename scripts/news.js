function renderNews(article) {
  console.log(article);
  const news = document.getElementById("news");
  news.innerHTML = "";

  const newsTitle = document.createElement("div");
  newsTitle.className = "newsTitle";
  newsTitle.innerHTML = `<h2>${article.title}</h2>`;

  const newsFlex = document.createElement("div");
  newsFlex.className = "newsFlex";
  const newsImage = document.createElement("img");
  newsImage.className = "newsImage";
  newsImage.src = article.urlToImage;
  newsFlex.append(newsImage);

  const publishedAt = document.createElement("h3");
  publishedAt.className = "newsContent";
  publishedAt.append(article.publishedAt.split("T")[0]);

  const description = document.createElement("p");
  description.className = "newsContent";
  description.innerHTML = `Description: ${article.description}`;

  const content = document.createElement("p");
  content.className = "newsContent";
  content.innerHTML = article.content;

  const newsLink = document.createElement("a");
  newsLink.className = "newsLink";
  newsLink.href = article.url;
  newsLink.innerHTML = "Read full article";

  news.append(newsTitle, publishedAt, newsFlex, description, content, newsLink);
}

export default renderNews;
