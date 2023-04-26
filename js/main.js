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

    container.innerHTML = `<h1>${json.title}</h1>
                             <img src="${json.image}"> 
                             <div class="details-description">${json.description}</div>`;
  }

  fetchMovie()