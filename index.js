 function renderonestation(station){
    //build station
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
        <img src="${station.image}">
        <div class="content"
            <h3>${station.name}</h3>
            <p>
                $<span class="purchase-count">${station.purchase}</span> Purchased
            </p>
        </div>
        <div class="buttons">
            <button> Book </button>
            <button> Revert </button>
        </div>
    `

    //add station to DOM
    document.querySelector('#station-list').appendChild(card)
 }

 function getallstations(){
    fetch(' http://localhost:3000/Stations')
    .then(res => res.json())
    .then(Stations => Stations.forEach(station => renderonestation(station)))
 }

 function initialize(){
    getallstations()
 }
 initialize()
