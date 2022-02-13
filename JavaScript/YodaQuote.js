


const yodaURL = 'https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote';



async function getQuote(){ 
    // async function getImgForChar(){
    const data = await fetch(yodaURL).then((res) => res.json()).catch(function(error) {
        console.log(error);
      });;
    console.log('dataYoda');
    createQuote(data);
};
getQuote();

const yodaQuoteContainer = document.getElementById('yoda');

async function createQuote(param){
    yodaQuoteContainer.innerHTML = '';
    const quote = document.createElement('h3');
    quote.setAttribute('class', 'yodaquote');
    quote.innerText += param.content;  
    yodaQuoteContainer.appendChild(quote); 

    // const imgQuote = document.createElement('img');
    // imgQuote.setAttribute('src', 'https://static.hitek.fr/img/actualite/ill_m/491826397/yodavspalpatine.jpg');
    // imgQuote.setAttribute('class', 'yodaimg');
    // quote.appendChild(imgQuote);
}

const myNavigator = document.querySelector('nav');
myNavigator.addEventListener('click', ()=> {
    getQuote(); });
