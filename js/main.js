/** const apiUrl = "https://api.noroff.dev/api/v1/square-eyes";
const movieDesc =document.getElementById("movie-description");
fetch(apiUrl)
  .then(response => response.json())
  .then(responseJson => {

    for (let {description} of responseJson) {
      console.log(description)
      const decFact = document.createElement("p");
      decFact.innerText = description;
      movieDesc.append(decFact);
    }
  }) **/


  const container = document.querySelector(".container");
  const apiUrl = "https://api.noroff.dev/api/v1/square-eyes/352ba432-5b5d-4ccc-9aba-f2704c500cf3";

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
      <ul>
        <li><span>Director:</span> Sam Raimi</li>
        <li><span>Subtitles:</span> English (CC)</li>
        <li><span>Language:</span> English</li>
      </ul>
      <a href="cart.html" class="cta cta-buy">Buy ${json.price}$</a>
    </div>`;

    
  }

  fetchMovie()