function loadstations(){
    fetch('db.json')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let html = ''
        data.forEach(function(station){
            html +=`
                <li>${station.name} ${station.image}
                </li>
            `
        })
        document.getElementById('result').innerHTML =
        html
    })
}
