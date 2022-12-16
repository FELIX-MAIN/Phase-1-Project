const character = document.getElementById('station-bar');
const stationName = document.getElementById('name');
const image = document.getElementById('image');
const form = document.getElementById('fuel-form');
const litre_count = document.getElementById('litre-count');
const input = document.getElementById('amount');
const reset = document.getElementById('reset-btn');

let currentStation;
reset.style.cursor = 'pointer';


function getStations () {
  fetch('http://localhost:3000/Stations/')
    .then(response => response.json())
    .then(renderStations);
}

function renderStations (stations) {
  stations.forEach(renderCharacters);
}


function renderCharacters (station) {
  const spanEle = document.createElement('span');
  spanEle.innerHTML = station.name;
  spanEle.style.cursor = 'pointer';
  character.appendChild(spanEle);
  spanEle.addEventListener('click', () => {
    currentStation = station;
    showStation(station);
  });
}


function showStation (station) {
  stationName.innerHTML = station.name;
  image.src = station.image;
  litre_count.innerHTML = station.purchase;
}
getStations();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  currentStation.purchase += parseInt(e.target.purchase.value);
  showAnimal(currentStation);
  form.reset();
});

reset.addEventListener('click', () => {
  currentStation.purchase = 0;
  showStation(currentStation);
});

//checkout
function calculate(){
    $(".checkout").on("keyup", ".quantity", 
function(){
        var price = +$(".price").data("price");
        var quantity = +$(this).val();
        $("#total").text("Ksh" + price * quantity);
    })
}
