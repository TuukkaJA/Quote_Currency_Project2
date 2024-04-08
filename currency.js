document.getElementById('currencyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user inputs
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;
    var amount = document.getElementById('amount').value;

    // API call to perform currency conversion
    fetch('https://api.exchangerate-api.com/v4/latest/' + fromCurrency)
        .then(response => response.json())
        .then(data => {
            var conversionRate = data.rates[toCurrency];
            var convertedAmount = amount * conversionRate;

            // Display result
            document.getElementById('result').innerHTML = amount + ' ' + fromCurrency + ' = ' + convertedAmount.toFixed(2) + ' ' + toCurrency;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});