function switchCurrencies () {
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;

    document.getElementById("fromCurrency").value = toCurrency;
    document.getElementById("toCurrency").value = fromCurrency;
};