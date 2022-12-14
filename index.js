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

//price generator

$(document).ready(function(){
    $(".checkout").on("keyup", ".quantity", function(){
        var price = +$(".price").data("price");
        var quantity = +$(this).val();
        $("#total").text("Ksh" + price * quantity);
    })
})
