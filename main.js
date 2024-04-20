//Function to share the quote on Twitter
function shareOnX () {
    const quote = document.querySelector(".quote-box blockquote").textContent;
    const author = document.querySelector(".quote-box span").textContent;
    const tweetText = quote + ' -' + author;
  
    const urlToShare = window.href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;;
    window.open(urlToShare, "x-post");
  }
  
  
  //this is getQuote2 because the first one stopped working THIS IS FROM api-ninjas.com
  
  const url = "https://api.api-ninjas.com/v1/quotes?category=";
  
  async function getQuote2(url) {
    //fetching the data from the API
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': 'RylRlqXFMgGInIYXdt2IcA==gNiKEFiWcAxq9LW4'}
    });
    //converting the data to JSON
    let data = await response.json();
  //the data comes in an array, so we need to get the object inside the array
    const quoteObject = data[0];
    const quote = quoteObject.quote;
    const author = quoteObject.author;
    document.querySelector(".quote-box blockquote").textContent = `"${quote}"`;
    document.querySelector(".quote-box span").textContent = `${author}`;
    console.log(data);
  };
  
  getQuote2(url);