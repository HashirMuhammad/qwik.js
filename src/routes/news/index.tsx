import { Resource, component$, useResource$, $ } from '@builder.io/qwik';
import 'bootstrap/dist/css/bootstrap.min.css';

interface NewsArticle {
  source: {
    name: string;
  };
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

interface NewsResponse {
  articles: NewsArticle[];
}

export default component$(() => {
      
  const newsData = useResource$(async () => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=42b2ee0d5aca4ffb9c64f4bfbd4cf99f`);
    const data: NewsResponse = await response.json();
    return data.articles;
  });

  return (<div>
    <Resource
      value={newsData}
      onPending={() => <h1>Loading</h1>}
      onResolved={data => (
        <div class="row">
          {data.map((article, index) => (
            <div key={index} class="col-md-4 p-5">
              <div class="card mb-3" style="background-color: #94a0f7;">
                <img src={article.urlToImage} class="card-img-top" alt={article.title} />
                <div class="card-body">
                  <h5 class="card-title"><strong>Title: </strong>{article.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{article.source.name}</h6>
                  <p class="card-text">{article.description}</p>
                  <a href={article.url} class="btn btn-primary " target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
                <div class="card-footer text-muted">
                  Published on {new Date(article.publishedAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    />
    </div>
  );
});

