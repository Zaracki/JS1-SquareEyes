const container = document.querySelector(".container");
const apiUrl = "https://api.noroff.dev/api/v1/square-eyes/";

async function fetchMovie() {
  const response = await fetch(apiUrl);
  const json = await response.json();

  console.log(json);

  json.forEach(function(movieser) {
    container.innerHTML += `<div>
    <a><img src="${json.image}" class="product_item product_item-big"></a>
  </div>`
  })

}

fetchMovie()