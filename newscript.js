const url = "https://swapi.dev/api/";

const LoaderElement = document.getElementById("loader");

// init
(async () => {
    const data = await fetch(url).then((res) => res.json());
    // console.log(data);
    for (const key in data) {
        navItem(key);
    }
})();

// elements HTML constant pour le display
const nav = document.querySelector("nav");
const mainContainer = document.querySelector('#main-container');
const myCardContainer = document.querySelector('#card-container');
const myFooter = document.getElementById('footer-container');

// creation des boutons pour l'init
function navItem(label) {
    const el = document.createElement("button");
    const smallDiv = document.createElement('div');
    smallDiv.setAttribute("class", "animation-nav");
    el.setAttribute("class", "navbutton");
    el.addEventListener("click", () => loadNavLabels(label));
    el.innerText = label.toUpperCase();
    nav.appendChild(smallDiv);
    smallDiv.appendChild(el);
    LoaderElement.classList.add('hide');
}


// creation des petites "cards" avec Le nom ou Titre pour le choix de l'utilisateur
async function loadNavLabels(label) {
    LoaderElement.classList.remove('hide');
    
    mainContainer.innerHTML = '';
    myFooter.innerHTML ='';
    myCardContainer.innerHTML ='';
    const data = await fetch(`${url}${label}`).then((res) => res.json());
    LoaderElement.classList.add('hide');
    // console.log(`${url}${label}/`)
    // console.log(data.results);
    for(i=0; i < data.results.length; i++){
        const item = data.results[i];
        // console.log(item);
        cardItem(item.title || item.name , item.url); 
        }
    // console.log(data);
    // console.log(data.next);

    // creation des boutons next & previous ----------------------------------------------------------------------//
    if(data.next){
        const nextBtn = document.createElement('button');
        datalink = data.next.substring(22);
        pageNumber = data.next.substring(35);
        console.log(datalink);
        nextBtn.setAttribute("class", "nextbtn");
        nextBtn.setAttribute("datalink", datalink);
        // nextBtn.dataset.datalink;
        nextBtn.innerText = " Page Suivante "
        // `${pageNumber}`;
        // nextBtn.getAttribute("datalink");
        nextBtn.addEventListener("click", () => loadNavLabels(nextBtn.getAttribute("datalink")));
        myFooter.appendChild(nextBtn);
        }
    if(data.previous){
        const prevBtn = document.createElement('button');
        datalink = data.previous.substring(22);
        pageNumber = data.previous.substring(35);
        console.log(datalink);
        prevBtn.setAttribute("class", "prevbtn");
        prevBtn.setAttribute("datalink", datalink);
        // prevBtn.dataset.datalink;
        prevBtn.innerText = " Page Precedente "
        // `${pageNumber}`;
        // prevBtn.getAttribute("datalink");
        prevBtn.addEventListener("click", () => loadNavLabels(prevBtn.getAttribute("datalink")));
        // myFooter.appendChild(prevBtn);
        myFooter.prepend(prevBtn);
        }
    
    
}
// creation de l'item visuel apres le choix;

async function cardItem(cardItems, cardUrl){
    const el = document.createElement('div');
    el.setAttribute("class","cardbouton");
    el.innerText = cardItems;
    el.addEventListener("click", () => loadFullCard(cardUrl))
    mainContainer.appendChild(el);   
  
}


const myMovieContainer = document.getElementById('specialmovies');
const myResidentContainer = document.getElementById('specialresidents');

async function loadFullCard(label) {
    LoaderElement.classList.remove('hide');
    myCardContainer.innerHTML = '';
    const data = await fetch(label).then((res) => res.json());
     console.log(data);
     LoaderElement.classList.add('hide');
     
     
     //--------- categories pour chaque type; pour que la function marche avec tous les type de "minicard" à créer ---------//
     if(data.planets){
         for(i=0; i < data.planets.length; i++){
        const element = data.planets[i];
            createInfoBtn(element);
        }
    }
    if(data.homeworld){
            createHomeWorld(data.homeworld);
    }
    if(data.residents){
        for(i=0; i < data.residents.length; i++){
            const element = data.residents[i];
            createInfoBtn(element);
            }
    }
    if(data.characters){
        for(i=0; i < data.characters.length; i++){
            const element = data.characters[i];
            createInfoBtn(element);
            }
    }
    if(data.films){       
        for(i=0; i < data.films.length; i++){
            const element = data.films[i];
            createInfoBtn(element);
            }
    }
    if(data.species){
        for(i=0; i < data.species.length; i++){
           const element = data.species[i];
        createSpeciesBtn(element);
        }
    }

    // -------------------------------------------- TO DO (check if there are any "case" not treated) -------------------------------------------------------------
    if(data.vehicles){
        for(i=0; i < data.vehicles.length; i++){
            const element = data.vehicles[i];
        createVehicleBtn(element);
        }
    }
    if(data.starships){
        for(i=0; i < data.starships.length; i++){
        element = data.starships[i];
        createStarshipBtn(data.starships);
        }
    }
    
    for (const [key, value] of Object.entries(data)) {
        console.log([key]);
         const whatIwant = [`${key} : ${value}`];      
         
        console.log(whatIwant);
             if(key != "url" && key != "planets" && key != "starships" && key != "vehicles" && key != "species" && key != "characters" &&
                key != "created" && key!= "edited" && key !="films" && key!= "residents" && key != "homeworld"){        

                createFullCard(whatIwant);
            }             
        }
        
    
}


async function createInfoBtn(parameter){
    const data = await fetch(`${parameter}`).then((res) => res.json());
    // console.log("ici le fetch des planets");
    // console.log(data);
    const newBtn = document.createElement("button");
    if(data.name){
        newBtn.innerText = data.name;
        newBtn.setAttribute("class", "fullcardbtn");
        newBtn.addEventListener("click", () => loadFullCard(parameter));
        myCardContainer.appendChild(newBtn);
    }
    if(data.title){
        newBtn.innerText = data.title;
        newBtn.setAttribute("class", "moviecardbtn");
        newBtn.addEventListener("click", () => loadFullCard(parameter));
        myCardContainer.appendChild(newBtn);
    }
    // planetBtn.innerText = data.name || data.title;
    // planetBtn.setAttribute("class", "fullcardbtn");
    // planetBtn.addEventListener("click", () => loadFullCard(parameter));
    // myCardContainer.appendChild(planetBtn);

}

async function createHomeWorld(parameter){
    const data = await fetch(`${parameter}`).then((res) => res.json());
    console.log("ici le fetch de l'Homeworld");
    console.log(data);
    const homeWorldBtn = document.createElement("button");
    homeWorldBtn.innerText = "HomeWorld : "+data.name;
    homeWorldBtn.setAttribute("class", "fullcardbtn");
    homeWorldBtn.addEventListener("click", () => loadFullCard(parameter));
    myCardContainer.appendChild(homeWorldBtn);

}

async function createSpeciesBtn(parameter){
    const data = await fetch(`${parameter}`).then((res) => res.json());
    const newBtn = document.createElement("button");    
        newBtn.innerText = data.name;
        newBtn.setAttribute("class", "speciesbtn");
        newBtn.addEventListener("click", () => loadFullCard(parameter));
        myCardContainer.appendChild(newBtn);
}

async function createVehicleBtn(parameter){
    const data = await fetch(`${parameter}`).then((res) => res.json());
    const newBtn = document.createElement("button");    
        newBtn.innerText = data.name;
        newBtn.setAttribute("class", "vehiclebtn");
        newBtn.addEventListener("click", () => loadFullCard(parameter));
        myCardContainer.appendChild(newBtn);

}

async function createStarshipBtn(parameter){
    const data = await fetch(`${parameter}`).then((res) => res.json());
    const newBtn = document.createElement("button");    
        newBtn.innerText = data.name;
        newBtn.setAttribute("class", "starshipbtn");
        newBtn.addEventListener("click", () => loadFullCard(parameter));
        myCardContainer.appendChild(newBtn);
    
}



async function createFullCard(param){
      
    const el = document.createElement('h3')
    el.setAttribute("class", "fullcard");
    el.innerText = param;
    myCardContainer.appendChild(el);
}

async function loadCardButtons(param){
    const el = document.createElement('button')
    el.setAttribute("class", "buttoncard");
    el.innerText = param;

    myCardContainer.appendChild(el);

}

// async function createFullCardLinks














// class App {
//     constructor() {
//         this.data = {};
//     }

//     async load(label, url) {
//         if (this.data[label]) return this.data[label];

//         this.data = {
//             ...this.data,
//             [label]: await fetch(url).then((res) => res.json())
//         };
//         return this.data[label];
//     }
// }

// const app = new App();

// (async () => {
//     const data = await fetch(url).then((res) => res.json());
//     console.log("menu", data);
//     for (const key in data) {
//         navItem(key, data[key]);
//     }
// })();

// const nav = document.querySelector("nav");
// function navItem(label, src) {
//     const el = document.createElement("button");
//     el.addEventListener("click", () => app.load(label, src));
//     el.innerText = label;
//     nav.appendChild(el);
// }

