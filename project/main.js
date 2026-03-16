const loadingOverlay = document.getElementById("loading-overlay");
let loadId = 0;
let shinyMode = false;

let genKanto = 3;
let genJohto = 3;
let genHoenn = 3;
let genSinnoh = 4;
let genUnova = 5;
let genKalos = 6;
let genAlola = 7;
let genGalar = 8;
let genPaldea = 9;

function showLoading() {
  if (loadingOverlay) {
    loadingOverlay.classList.add("show");
  }
}

function hideLoading() {
  if (loadingOverlay) {
    loadingOverlay.classList.remove("show");
  }
}

function takeSprite(data, geracao, shiny = false) {


  if (geracao === 1) {
    shiny = false;
  }

  const tipo = shiny ? "front_shiny" : "front_default";
  let sprite = null;

  if (geracao === 1) {
    sprite = data.sprites.versions["generation-i"]["red-blue"]?.front_default;

  } else if (geracao === 2) {
    sprite = data.sprites.versions["generation-ii"]["crystal"]?.[tipo];

  } else if (geracao === 3) {
    sprite = data.sprites.versions["generation-iii"]["firered-leafgreen"]?.[tipo];

  } else if (geracao === 4) {
    sprite = data.sprites.versions["generation-iv"]["diamond-pearl"]?.[tipo];

  } else if (geracao === 5) {
    sprite =
      data.sprites.versions["generation-v"]["black-white"]?.animated?.[tipo] ||
      data.sprites.versions["generation-v"]["black-white"]?.[tipo];

  } else if (geracao === 6) {
    sprite = data.sprites.versions["generation-vi"]["x-y"]?.[tipo];

  } else if (geracao === 7) {
    sprite = data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]?.[tipo];

  } else if (geracao === 8) {
    sprite = data.sprites.versions["generation-viii"]["icons"]?.front_default;

  } else if (geracao === 9) {
    sprite = shiny
      ? data.sprites.other["official-artwork"]?.front_shiny
      : data.sprites.other["official-artwork"]?.front_default;
  }

  if (!sprite) {
    sprite = shiny ? data.sprites.front_shiny : data.sprites.front_default;
  }

  if (!sprite) {
    sprite = data.sprites.other["official-artwork"]?.front_default;
  }

  return sprite;
}

const controllers = {};

async function loadPokemons(geracao, listaId, inicio, fim) {

  if (controllers[listaId]) {
    controllers[listaId].abort();
  }

  const controller = new AbortController();
  controllers[listaId] = controller;

  showLoading();

  try {

    const lista = document.getElementById(listaId);
    if (!lista) return;

    lista.innerHTML = "";

    for (let i = inicio; i <= fim; i++) {

      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${i}`,
        { signal: controller.signal }
      );

      const data = await res.json();

      const sprite = takeSprite(data, geracao, shinyMode);

      const img = document.createElement("img");
      img.className = "pokemon";
      img.src = sprite;
      img.alt = data.name;
      img.title = data.name;

      lista.appendChild(img);
    }

  } catch (erro) {

    if (erro.name !== "AbortError") {
      console.error("Erro ao carregar pokémons:", erro);
    }

  } finally {
    hideLoading();
  }
}
loadPokemons(genKanto,"lista1",1,151);
loadPokemons(genJohto,"lista2",152,251);
loadPokemons(genHoenn,"lista3",252,386);
loadPokemons(genSinnoh,"lista4",387,493);
loadPokemons(genUnova,"lista5",494,649);
loadPokemons(genKalos,"lista6",650,721);
loadPokemons(genAlola,"lista7",722,809);
loadPokemons(genGalar,"lista8",810,905);
loadPokemons(genPaldea,"lista9",906,1025);


function shinyverChange(){
  if(genKanto === 1){
    showError("R/B/G/Y has no shiny Pokémon.");
    return;
  }
  shinyMode = !shinyMode;

  loadPokemons(genKanto,"lista1",1,151);
  loadPokemons(genJohto,"lista2",152,251);
  loadPokemons(genHoenn,"lista3",252,386);
  loadPokemons(genSinnoh,"lista4",387,493);
  loadPokemons(genUnova,"lista5",494,649);
  loadPokemons(genKalos,"lista6",650,721);
  loadPokemons(genAlola,"lista7",722,809);
  loadPokemons(genGalar,"lista8",810,905);
  loadPokemons(genPaldea,"lista9",906,1025);

}



/* Kanto */
function changetoGen1(){ genKanto=1; loadPokemons(genKanto,"lista1",1,151); }
function changetoGen2(){ genKanto=2; loadPokemons(genKanto,"lista1",1,151); }
function changetoGen3(){ genKanto=3; loadPokemons(genKanto,"lista1",1,151); }
function changetoGen4(){ genKanto=4; loadPokemons(genKanto,"lista1",1,151); }
function changetoGen5(){ genKanto=5; loadPokemons(genKanto,"lista1",1,151); }
function changetoGen6(){ genKanto=6; loadPokemons(genKanto,"lista1",1,151); }
function changetoGen7(){ genKanto=7; loadPokemons(genKanto,"lista1",1,151); }
function changetoGen8(){ genKanto=8; loadPokemons(genKanto,"lista1",1,151); }

/* Johto */
function changetoGen2Johto(){ genJohto=2; loadPokemons(genJohto,"lista2",152,251); }
function changetoGen3Johto(){ genJohto=3; loadPokemons(genJohto,"lista2",152,251); }
function changetoGen4Johto(){ genJohto=4; loadPokemons(genJohto,"lista2",152,251); }
function changetoGen5Johto(){ genJohto=5; loadPokemons(genJohto,"lista2",152,251); }
function changetoGen6Johto(){ genJohto=6; loadPokemons(genJohto,"lista2",152,251); }
function changetoGen7Johto(){ genJohto=7; loadPokemons(genJohto,"lista2",152,251); }
function changetoGen8Johto(){ genJohto=8; loadPokemons(genJohto,"lista2",152,251); }

/* Hoenn */
function changetoGen3Hoenn(){ genHoenn=3; loadPokemons(genHoenn,"lista3",252,386); }
function changetoGen4Hoenn(){ genHoenn=4; loadPokemons(genHoenn,"lista3",252,386); }
function changetoGen5Hoenn(){ genHoenn=5; loadPokemons(genHoenn,"lista3",252,386); }
function changetoGen6Hoenn(){ genHoenn=6; loadPokemons(genHoenn,"lista3",252,386); }
function changetoGen7Hoenn(){ genHoenn=7; loadPokemons(genHoenn,"lista3",252,386); }
function changetoGen8Hoenn(){ genHoenn=8; loadPokemons(genHoenn,"lista3",252,386); }

/* Sinnoh */
function changetoGen4Sinnoh(){ genSinnoh=4; loadPokemons(genSinnoh,"lista4",387,493); }
function changetoGen5Sinnoh(){ genSinnoh=5; loadPokemons(genSinnoh,"lista4",387,493); }
function changetoGen6Sinnoh(){ genSinnoh=6; loadPokemons(genSinnoh,"lista4",387,493); }
function changetoGen7Sinnoh(){ genSinnoh=7; loadPokemons(genSinnoh,"lista4",387,493); }
function changetoGen8Sinnoh(){ genSinnoh=8; loadPokemons(genSinnoh,"lista4",387,493); }

/* Unova */
function changetoGen5Unova(){ genUnova=5; loadPokemons(genUnova,"lista5",494,649); }
function changetoGen6Unova(){ genUnova=6; loadPokemons(genUnova,"lista5",494,649); }
function changetoGen7Unova(){ genUnova=7; loadPokemons(genUnova,"lista5",494,649); }
function changetoGen8Unova(){ genUnova=8; loadPokemons(genUnova,"lista5",494,649); }

/* Kalos */
function changetoGen6Kalos(){ genKalos=6; loadPokemons(genKalos,"lista6",650,721); }
function changetoGen7Kalos(){ genKalos=7; loadPokemons(genKalos,"lista6",650,721); }
function changetoGen8Kalos(){ genKalos=8; loadPokemons(genKalos,"lista6",650,721); }

/* Alola */
function changetoGen7Alola(){ genAlola=7; loadPokemons(genAlola,"lista7",722,809); }
function changetoGen8Alola(){ genAlola=8; loadPokemons(genAlola,"lista7",722,809); }

/* scroll */

function gotoNext(numero){

  const destino = document.getElementById("headerblock"+numero);

  if(destino){
    destino.scrollIntoView({
      behavior:"smooth"
    });
  }

}


function showError(text){

  const popup = document.getElementById("errorPopup");
  const textPopup = document.getElementById("errorText");

  textPopup.innerText = text;

  popup.classList.add("show");
  document.body.classList.add("shake");

  setTimeout(()=>{
    popup.classList.remove("show");
    document.body.classList.remove("shake");
  },2500);

}