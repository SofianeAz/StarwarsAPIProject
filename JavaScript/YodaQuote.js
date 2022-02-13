


// const yodaURL = 'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote';

const yodaURL = 'JavaScript/quote.json';



async function getQuote(){ 
    // async function getImgForChar(){
    const data = await fetch(yodaURL).then((res) => res.json()).catch(function(error) {
        console.log(error);
      });
    console.log('dataYoda');
    // console.log(data);
    createQuote(data);
};
getQuote();



// console.log(getRandomInt(57));
const yodaQuoteContainer = document.getElementById('yoda');

async function createQuote(param){
    let randomNum = getRandomInt(56);
    for(i = 0; i < param.length; i++){
        if(i === randomNum) {
            yodaQuoteContainer.innerHTML = '';
            const quote = document.createElement('h3');
            quote.setAttribute('class', 'yodaquote');
            quote.innerText += param[i].content;  
            yodaQuoteContainer.appendChild(quote);
        }
    }

    // const imgQuote = document.createElement('img');
    // imgQuote.setAttribute('src', 'https://static.hitek.fr/img/actualite/ill_m/491826397/yodavspalpatine.jpg');
    // imgQuote.setAttribute('class', 'yodaimg');
    // quote.appendChild(imgQuote);
}

const myNavigator = document.querySelector('nav');
myNavigator.addEventListener('click', ()=> {
    getQuote(); });

    

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}
