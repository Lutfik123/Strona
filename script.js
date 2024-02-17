document.getElementById('calculateBtn').addEventListener('click', function() {
    var kilometers = parseFloat(document.getElementById('kilometersInput').value);
    var deliveryCostPerKm = 1.5;
    var deliveryCost = kilometers * deliveryCostPerKm;
    document.getElementById('deliveryCostResult').innerText = "Koszt dostawy: " + deliveryCost.toFixed(2) + " zł";
});
