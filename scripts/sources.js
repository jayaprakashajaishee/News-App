const sources = [
  {
    id: "abc-news",
    name: "ABC News",
    description:
      "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
    url: "https://abcnews.go.com",
    category: "general",
    language: "en",
    country: "us",
  },
  {
    id: "abc-news-au",
    name: "ABC News (AU)",
    description:
      "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
    url: "http://www.abc.net.au/news",
    category: "general",
    language: "en",
    country: "au",
  },
  {
    id: "aftenposten",
    name: "Aftenposten",
    description:
      "Norges ledende nettavis med alltid oppdaterte nyheter innenfor innenriks, utenriks, sport og kultur.",
    url: "https://www.aftenposten.no",
    category: "general",
    language: "no",
    country: "no",
  },
  {
    id: "al-jazeera-english",
    name: "Al Jazeera English",
    description:
      "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
    url: "http://www.aljazeera.com",
    category: "general",
    language: "en",
    country: "us",
  },
  {
    id: "ansa",
    name: "ANSA.it",
    description:
      "Agenzia ANSA: ultime notizie, foto, video e approfondimenti su: cronaca, politica, economia, regioni, mondo, sport, calcio, cultura e tecnologia.",
    url: "http://www.ansa.it",
    category: "general",
    language: "it",
    country: "it",
  },
  {
    id: "axios",
    name: "Axios",
    description:
      "Axios are a new media company delivering vital, trustworthy news and analysis in the most efficient, illuminating and shareable ways possible.",
    url: "https://www.axios.com",
    category: "general",
    language: "en",
    country: "us",
  },
  {
    id: "ars-technica",
    name: "Ars Technica",
    description:
      "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
    url: "http://arstechnica.com",
    category: "technology",
    language: "en",
    country: "us",
  },
  {
    id: "ary-news",
    name: "Ary News",
    description:
      "ARY News is a Pakistani news channel committed to bring you up-to-the minute Pakistan news and featured stories from around Pakistan and all over the world.",
    url: "https://arynews.tv/ud/",
    category: "general",
    language: "ud",
    country: "pk",
  },
  {
    id: "associated-press",
    name: "Associated Press",
    description:
      "The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.",
    url: "https://apnews.com/",
    category: "general",
    language: "en",
    country: "us",
  },
  {
    id: "australian-financial-review",
    name: "Australian Financial Review",
    description:
      "The Australian Financial Review reports the latest news from business, finance, investment and politics, updated in real time. It has a reputation for independent, award-winning journalism and is essential reading for the business and investor community.",
    url: "http://www.afr.com",
    category: "business",
    language: "en",
    country: "au",
  },
  {
    id: "abc-news",
    name: "ABC News",
    description:
      "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
    url: "https://abcnews.go.com",
    category: "general",
    language: "en",
    country: "us",
  },
  {
    id: "abc-news-au",
    name: "ABC News (AU)",
    description:
      "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
    url: "http://www.abc.net.au/news",
    category: "general",
    language: "en",
    country: "au",
  },
  {
    id: "aftenposten",
    name: "Aftenposten",
    description:
      "Norges ledende nettavis med alltid oppdaterte nyheter innenfor innenriks, utenriks, sport og kultur.",
    url: "https://www.aftenposten.no",
    category: "general",
    language: "no",
    country: "no",
  },
  {
    id: "al-jazeera-english",
    name: "Al Jazeera English",
    description:
      "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
    url: "http://www.aljazeera.com",
    category: "general",
    language: "en",
    country: "us",
  },
  {
    id: "ansa",
    name: "ANSA.it",
    description:
      "Agenzia ANSA: ultime notizie, foto, video e approfondimenti su: cronaca, politica, economia, regioni, mondo, sport, calcio, cultura e tecnologia.",
    url: "http://www.ansa.it",
    category: "general",
    language: "it",
    country: "it",
  },
  {
    id: "axios",
    name: "Axios",
    description:
      "Axios are a new media company delivering vital, trustworthy news and analysis in the most efficient, illuminating and shareable ways possible.",
    url: "https://www.axios.com",
    category: "general",
    language: "en",
    country: "us",
  },
  {
    id: "ars-technica",
    name: "Ars Technica",
    description:
      "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
    url: "http://arstechnica.com",
    category: "technology",
    language: "en",
    country: "us",
  },
  {
    id: "ary-news",
    name: "Ary News",
    description:
      "ARY News is a Pakistani news channel committed to bring you up-to-the minute Pakistan news and featured stories from around Pakistan and all over the world.",
    url: "https://arynews.tv/ud/",
    category: "general",
    language: "ud",
    country: "pk",
  },
  {
    id: "associated-press",
    name: "Associated Press",
    description:
      "The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.",
    url: "https://apnews.com/",
    category: "general",
    language: "en",
    country: "us",
  },
  {
    id: "australian-financial-review",
    name: "Australian Financial Review",
    description:
      "The Australian Financial Review reports the latest news from business, finance, investment and politics, updated in real time. It has a reputation for independent, award-winning journalism and is essential reading for the business and investor community.",
    url: "http://www.afr.com",
    category: "business",
    language: "en",
    country: "au",
  },
  {
    id: "abc-news",
    name: "ABC News",
    description:
      "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
    url: "https://abcnews.go.com",
    category: "general",
    language: "en",
    country: "us",
  },
  {
    id: "abc-news-au",
    name: "ABC News (AU)",
    description:
      "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
    url: "http://www.abc.net.au/news",
    category: "general",
    language: "en",
    country: "au",
  },
  {
    id: "aftenposten",
    name: "Aftenposten",
    description:
      "Norges ledende nettavis med alltid oppdaterte nyheter innenfor innenriks, utenriks, sport og kultur.",
    url: "https://www.aftenposten.no",
    category: "general",
    language: "no",
    country: "no",
  },
  {
    id: "al-jazeera-english",
    name: "Al Jazeera English",
    description:
      "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
    url: "http://www.aljazeera.com",
    category: "general",
    language: "en",
    country: "us",
  },
  {
    id: "ansa",
    name: "ANSA.it",
    description:
      "Agenzia ANSA: ultime notizie, foto, video e approfondimenti su: cronaca, politica, economia, regioni, mondo, sport, calcio, cultura e tecnologia.",
    url: "http://www.ansa.it",
    category: "general",
    language: "it",
    country: "it",
  },
  {
    id: "axios",
    name: "Axios",
    description:
      "Axios are a new media company delivering vital, trustworthy news and analysis in the most efficient, illuminating and shareable ways possible.",
    url: "https://www.axios.com",
    category: "general",
    language: "en",
    country: "us",
  },
  {
    id: "ars-technica",
    name: "Ars Technica",
    description:
      "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
    url: "http://arstechnica.com",
    category: "technology",
    language: "en",
    country: "us",
  },
  {
    id: "ary-news",
    name: "Ary News",
    description:
      "ARY News is a Pakistani news channel committed to bring you up-to-the minute Pakistan news and featured stories from around Pakistan and all over the world.",
    url: "https://arynews.tv/ud/",
    category: "general",
    language: "ud",
    country: "pk",
  },
  {
    id: "associated-press",
    name: "Associated Press",
    description:
      "The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.",
    url: "https://apnews.com/",
    category: "general",
    language: "en",
    country: "us",
  },
  {
    id: "australian-financial-review",
    name: "Australian Financial Review",
    description:
      "The Australian Financial Review reports the latest news from business, finance, investment and politics, updated in real time. It has a reputation for independent, award-winning journalism and is essential reading for the business and investor community.",
    url: "http://www.afr.com",
    category: "business",
    language: "en",
    country: "au",
  },
  {
    id: "abc-news",
    name: "ABC News",
    description:
      "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
    url: "https://abcnews.go.com",
    category: "general",
    language: "en",
    country: "us",
  },
  {
    id: "abc-news-au",
    name: "ABC News (AU)",
    description:
      "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
    url: "http://www.abc.net.au/news",
    category: "general",
    language: "en",
    country: "au",
  },
  {
    id: "aftenposten",
    name: "Aftenposten",
    description:
      "Norges ledende nettavis med alltid oppdaterte nyheter innenfor innenriks, utenriks, sport og kultur.",
    url: "https://www.aftenposten.no",
    category: "general",
    language: "no",
    country: "no",
  },
  {
    id: "al-jazeera-english",
    name: "Al Jazeera English",
    description:
      "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
    url: "http://www.aljazeera.com",
    category: "general",
    language: "en",
    country: "us",
  },
  {
    id: "ansa",
    name: "ANSA.it",
    description:
      "Agenzia ANSA: ultime notizie, foto, video e approfondimenti su: cronaca, politica, economia, regioni, mondo, sport, calcio, cultura e tecnologia.",
    url: "http://www.ansa.it",
    category: "general",
    language: "it",
    country: "it",
  },
  {
    id: "axios",
    name: "Axios",
    description:
      "Axios are a new media company delivering vital, trustworthy news and analysis in the most efficient, illuminating and shareable ways possible.",
    url: "https://www.axios.com",
    category: "general",
    language: "en",
    country: "us",
  },
  {
    id: "ars-technica",
    name: "Ars Technica",
    description:
      "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
    url: "http://arstechnica.com",
    category: "technology",
    language: "en",
    country: "us",
  },
  {
    id: "ary-news",
    name: "Ary News",
    description:
      "ARY News is a Pakistani news channel committed to bring you up-to-the minute Pakistan news and featured stories from around Pakistan and all over the world.",
    url: "https://arynews.tv/ud/",
    category: "general",
    language: "ud",
    country: "pk",
  },
  {
    id: "associated-press",
    name: "Associated Press",
    description:
      "The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.",
    url: "https://apnews.com/",
    category: "general",
    language: "en",
    country: "us",
  },
  {
    id: "australian-financial-review",
    name: "Australian Financial Review",
    description:
      "The Australian Financial Review reports the latest news from business, finance, investment and politics, updated in real time. It has a reputation for independent, award-winning journalism and is essential reading for the business and investor community.",
    url: "http://www.afr.com",
    category: "business",
    language: "en",
    country: "au",
  },
];
function renderSources() {
  const sourceList = document.getElementById("sourceList");
  sourceList.innerHTML = "<div style='color:#EDEDED'>Loading...</div>";

  fetch("https://news-api-jade-psi.vercel.app/api/sources")
    .then((response) => response.json())
    .then((json) => {
      sourceList.innerHTML = "";
      json.sources.forEach((source) => {
        const sourceCard = document.createElement("div");
        sourceCard.className = "source card";
        sourceCard.append(source.name);
        sourceList.append(sourceCard);
      });
    })
    .catch((error) => {
      sourceList.innerHTML = "";
      sourceList.innerHTML = "<div style='color:#EDEDED'>Error 404</div>";
    });
}

export default renderSources;
