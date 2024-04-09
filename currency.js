document.getElementById('currencyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user inputs
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;
    let amount = document.getElementById('amount').value;

    // API call to perform currency conversion
    fetch('https://api.exchangerate-api.com/v4/latest/' + fromCurrency)
        .then(response => response.json())
        .then(data => {
            let conversionRate = data.rates[toCurrency];
            let convertedAmount = amount * conversionRate;

            // Display result
            document.getElementById('result').innerHTML = amount + ' ' + fromCurrency + ' = ' + convertedAmount.toFixed(2) + ' ' + toCurrency;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});