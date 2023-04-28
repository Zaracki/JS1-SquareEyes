
  const queryString = document.location.search;

  const params = new URLSearchParams(queryString);

  const id = params.get("id");

  console.log(id);

  const container = document.querySelector(".container");
  const apiUrl = "https://api.noroff.dev/api/v1/square-eyes/" + id;

  async function fetchMovie() {
    const response = await fetch(apiUrl);
    const json = await response.json();

    console.log(json);

    container.innerHTML = `<section class="product-area">
    <div class="product-img">
      <img src="${json.image}" alt="Product picture of Doctor Strange in the Multiverse of Madness">
    </div>
    <div class="product-info">
      <h1>${json.title}</h1>
      <p>${json.description}</p>
      <a href="cart.html" class="cta cta-buy">Buy ${json.price}$</a>
    </div>`;

    document.title = `${json.title}`;
    
  }

  fetchMovie()