//assigning a link of the api to a variable "api_url"
/*const api_url = "https://api.quotable.io/random"
//Function "getQuote" fetches data from the api url and assigns it to the html elements
async function getQuote (url) {
  const response = await fetch(url);
  let data = await response.json();
  //creating variables for quote and author data
  const quote = data.content;
  const author = data.author;
  //we assign quote and author data to appropriate html elements 
  document.querySelector(".quote-box blockquote").textContent = `"${quote}"`;
  document.querySelector(".quote-box span").textContent = `${author}`;
  console.log(data);
}
//calling the function "getQuote" with the api url as a parameter
getQuote(api_url);*/
//function "shareOnTwitter" opens a new window with quote and author data to share on twitter

function shareOnTwitter () {
    const quote = document.querySelector(".quote-box blockquote").textContent;
    const author = document.querySelector(".quote-box span").textContent;
    const tweetText = quote + ' -' + author;
  
    const urlToShare = window.href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;;
    window.open(urlToShare, "x-post");
  }
  
  
  //this is getQuote2 because the first one stopped working THIS IS FROM api-ninjas.com
  
  const url = "https://api.api-ninjas.com/v1/quotes?category=";
  
  async function getQuote2(url) {
    const headers = new Headers({
      'X-Api-Key': 'RylRlqXFMgGInIYXdt2IcA==gNiKEFiWcAxq9LW4'
    });
  
    const response = await fetch(url, {
      method: 'GET',
      headers: headers
    });
  
    let data = await response.json();
  
    const quoteObject = data[0];
    const quote = quoteObject.quote;
    const author = quoteObject.author;
    document.querySelector(".quote-box blockquote").textContent = `"${quote}"`;
    document.querySelector(".quote-box span").textContent = `${author}`;
    console.log(data);
  };
  
  getQuote2(url);