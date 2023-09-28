const ACCESS_TOKEN = "4995282617154105";
const BASE_URL = "https://superheroapi.com/api.php/" + ACCESS_TOKEN + "/";

async function getJSON(url) {
  try {
    const result = await fetch(url);

    if (result.status == 200) {
      const json = await result.json();
      return json;
    }

    console.log('Problma com comunicação com a API')
  } catch (err) {
    console.error('Problema ao conectar com a API');
    console.error(err);
  }
}

async function getHeroes(code) {
  var url = BASE_URL + code;

  const json = await getJSON(url);

  const name = json.name;
  const intelligence = json.powerstats.intelligence;
  const image = json.image.url;
  const strength = json.powerstats.strength;

  document.getElementById("heroes").innerHTML += `
    <article class="heroe">
        <img
          src="${image}"
        />
        <div class="heroe_data">
          <h1>${name}</h1>
          <div class="heroe_component">
            <div class="heroe_component_label">intelligence:</div>
            <div class="heroe_component_value">
              <span style="width: ${intelligence}%; background-color: #f9b32f"></span>
            </div>
          </div>
          <div class="heroe_component">
            <div class="heroe_component_label">strength:</div>
            <div class="heroe_component_value">
              <span style="width: ${strength}%; background-color: #ff7c6c"></span>
            </div>
          </div>
        </div>
      </article>
    `;
}

getHeroes(1);
getHeroes(100);
getHeroes(200);
getHeroes(300);