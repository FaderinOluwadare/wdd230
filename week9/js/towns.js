const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    towns.forEach((town) => {
      let card = document.createElement("div");
      let name = document.createElement("h2");
      let motto = document.createElement("p");
      let founded = document.createElement("p");
      let population = document.createElement("p");
      let rainfall = document.createElement("p");
      let image = document.createElement("img");
      let div = document.createElement("div");

      name.textContent = town.name;
      motto.textContent = town.motto;
      founded.textContent = "Year Founded: " + town.yearFounded;
      population.textContent = "Current Population: " + town.currentPopulation;
      rainfall.textContent = "Average Rainfall: " + town.averageRainfall;
      image.setAttribute("src", "images/" + town.photo);
      image.setAttribute("alt", town.name);

      div.appendChild(name);
      div.appendChild(motto);
      div.appendChild(document.createElement("hr"));
      div.appendChild(founded);
      div.appendChild(population);
      div.appendChild(rainfall);

      card.appendChild(div);
      card.appendChild(image);

      document.querySelector("#cards").appendChild(card);
    });
  });
