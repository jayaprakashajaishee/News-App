import renderHeadlines from "./headlines.js";

function renderSources() {
  const sourceList = document.getElementById("sourceList");
  sourceList.innerHTML = "<div style='color:black'>Loading...</div>";

  fetch("https://news-api-jade-psi.vercel.app/api/sources")
    .then((response) => response.json())
    .then((json) => {
      sourceList.innerHTML = "";
      json.sources.forEach((source) => {
        const sourceCard = document.createElement("div");
        sourceCard.className = "source card";
        sourceCard.onclick = () => renderHeadlines(source.name, source.id);
        sourceCard.append(source.name);
        sourceList.append(sourceCard);
      });
    })
    .catch((error) => {
      sourceList.innerHTML = "";
      sourceList.innerHTML = "<div style='color:#EDEDED'>Error 404</div>";
      console.log(error);
    });
}

export default renderSources;
