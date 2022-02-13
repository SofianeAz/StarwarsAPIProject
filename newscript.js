//           https://github.com/SofianeAz/             Coded by Sofiane Az 
//
// If you want to use this, use it but give credits. This took a lot of work.
//
// Si tu veux l'utiliser, utilise le, mais n'oublie pas de citer la source, cela a nécéssité pas mal de travail et de temps.
//
// Not done yet, will finish when I got time.


const url = "https://swapi.dev/api/";

const LoaderElement = document.getElementById("loader");

///////////////////////////////////////////////////////////////////////////////////////////////////////
//----------------------------------------- TO DO - Search BAR --------------------------------------//
//----------------------------------------- TO DO - Spotify API music -------------------------------//
//--------------------------------- Clean some more console.log and code left in there---------------//
//---------------------------------- TO DO - create special containers for buttons-------------------//
///////////////////////////////////////////////////////////////////////////////////////////////////////

// init
(async () => {
    const data = await fetch(url).then((res) => res.json()).catch(function(error) {
        console.log(error);
      });;
    // console.log(data);
    for (const key in data) {
        navItem(key);
    }
})();



// image for characters API
const imgUrl = 'https://akabab.github.io/starwars-api/api/all.json';

const dataImgArray = new Array();
// init img api
(async () => { 
    // async function getImgForChar(){
    const data = await fetch(imgUrl).then((res) => res.json()).catch(function(error) {
        console.log(error);
      });;
    console.log('image data');
    dataImgArray.push(data);
})();


// elements HTML constant pour le display
const nav = document.querySelector("nav");
const mainContainer = document.querySelector('#main-container');
const myCardContainer = document.querySelector('#card-container');
const myFooter = document.getElementById('footer-container');

// creation des boutons pour l'init
function navItem(label) {
    const el = document.createElement("button");
    // const smallDiv = document.createElement('div');
    // smallDiv.setAttribute("class", "animation-nav");
    el.setAttribute("class", "navbutton");
    el.addEventListener("click", () => loadNavLabels(label));
    el.innerText = label.toUpperCase();
    // nav.appendChild(smallDiv);
    nav.appendChild(el);
    // smallDiv.appendChild(el);
    LoaderElement.classList.add('hide');
}


// creation des petites "cards" avec Le nom ou Titre pour le choix de l'utilisateur
async function loadNavLabels(label) {
    LoaderElement.classList.remove('hide');
    
    mainContainer.innerHTML = '';
    myFooter.innerHTML ='';
    myCardContainer.innerHTML ='';
    const data = await fetch(`${url}${label}`).then((res) => res.json()).catch(function(error) {
        console.log(error);
      });;
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
        // console.log(datalink);
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
        // console.log(datalink);
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

// CARD CONTAINER FOR BUTTONS //
//
//






/// target l'url pour setup le background 
// var splitedUrl = label.split('/');

// dataImgArray 


async function loadFullCard(label) {
    LoaderElement.classList.remove('hide');
    myCardContainer.innerHTML = '';


    // creation d'un container pour les infos
    const infoContainer = document.createElement('div');
    infoContainer.setAttribute('id', 'specialinfo');
    infoContainer.setAttribute('class', 'carddata');

    myCardContainer.appendChild(infoContainer);
    
    const data = await fetch(label).then((res) => res.json()).catch(function(error) {
        console.log(error);
      });
     console.log(data);
     LoaderElement.classList.add('hide');
     

     // background change code

     let splitedUrl = label.split('/');
    //  console.log(splitedUrl);

     if(splitedUrl[4] == "films"){
         document.body.style = "background-image: url(https://lumiere-a.akamaihd.net/v1/images/image_1760b382.jpeg?region=0,0,2048,878);";
         if(screen.width < 600){
                document.body.style.paddingTop =   "90%";
         }
     }

     if(splitedUrl[4] == "species"){
        document.body.style = " background-image: url(https://www.10wallpaper.com/wallpaper/1920x1080/1512/Star_Wars_The_Force_Awakens_2015_HD_Wallpaper_07_1920x1080.jpg)";
        if(screen.width < 600){
            document.body.style.paddingTop =   "90%";
         }
     }
     if(splitedUrl[4] == "starships"){
        // document.body.style = " background-image: url(../img/1183696.jpg)"
        document.body.style = "background-image: url(https://wallpaperaccess.com/full/2506528.jpg)";
        if(screen.width < 600){
            document.body.style.paddingTop =   "90%";
        }
     }
     if(splitedUrl[4] == "planets"){
        document.body.style = " background-image: url(https://img.wallpapersafari.com/desktop/1920/1080/78/46/OFdp36.jpg";
        if(screen.width < 600){
            document.body.style.paddingTop =   "90%";
        }
     }
     if(splitedUrl[4] == "vehicles"){
        // document.body.style = " background-image: url(https://static.wikia.nocookie.net/8f94fce0-ef20-46ab-a30d-8377f17b88d6";
        document.body.style = " background-image: url(https://img5.goodfon.com/original/1728x972/d/2a/andrew-march-by-andrew-march-mantis-in-trouble-chris-kuhn-ar.jpg)";
        if(screen.width < 600){
            document.body.style.paddingTop =   "90%";
        }
     }
     if(splitedUrl[4] == "people"){
        document.body.style = " background-image: url(https://images4.alphacoders.com/653/thumb-1920-653613.jpg";
        if(screen.width < 600){
            document.body.style.paddingTop =   "90%";
         }
     }

    // function pour ressortir une image d'un film
    loadMoviePicture(data);


     // data Image si elle existe pour le character
     for(i = 0; i < dataImgArray[0].length; i++){
        let val = dataImgArray[0][i];
        // console.log(val);
        if(data.name && data.name.includes(val.name)){
            const infoCard = document.getElementById('specialinfo');
            const img = document.createElement('img');
            img.setAttribute('src', val.image);
            img.setAttribute('class', 'cardimg');
            infoCard.appendChild(img);

            // console.log(val);
        
        }
    }   

     //
     //--------- categories pour chaque type; pour que la function marche avec tous les type de "minicard" à créer ---------//
     if(data.planets){
        const planetsContainer = document.createElement('div');
        planetsContainer.setAttribute('id', 'specialplanets');
        planetsContainer.setAttribute('class', 'carddata');
        planetsContainer.innerHTML += "<h4 class='fullcard'> Planets : </h4>";
        myCardContainer.appendChild(planetsContainer);
        for(i=0; i < data.planets.length; i++){
            const element = data.planets[i];
            createPlanetsBtn(element);
        }
    }
    if(data.homeworld){
            // creation d'un container pour l'homeworld
            const homeContainer = document.createElement('div');
            homeContainer.setAttribute('id', 'specialhome')
            homeContainer.setAttribute('class', 'carddata');
            homeContainer.innerHTML += "<h4 class='fullcard'> Homeworld : </h4>";
            myCardContainer.appendChild(homeContainer)
            createHomeWorld(data.homeworld);
    }
    if(data.residents){
        // creation d'un container pour les residents
        const residentContainer = document.createElement('div');
        residentContainer.setAttribute('id', 'specialresidents');
        residentContainer.setAttribute('class', 'carddata');
        residentContainer.innerHTML += "<h4 class='fullcard'> Characters : </h4>";
        myCardContainer.appendChild(residentContainer);
        for(i=0; i < data.residents.length; i++){
            const element = data.residents[i];
            createInfoBtn(element);
            }
    }
    if(data.characters){
        // creation d'un container pour les residents
        const container = document.createElement('div');
        container.setAttribute('id', 'specialresidents');
        container.setAttribute('class', 'carddata');
        container.innerHTML += "<h4 class='fullcard'> Characters : </h4>";
        myCardContainer.appendChild(container);
        for(i=0; i < data.characters.length; i++){
            const element = data.characters[i];
            createInfoBtn(element);
        }
    }
    if(data.films){   
        // creation d'un container pour les films
        const container = document.createElement('div');
        container.setAttribute('id', 'specialmovies');
        container.setAttribute('class', 'carddata');
        container.innerHTML += "<h4 class='fullcard'> Films : </h4>";
        myCardContainer.appendChild(container); 
        // creations des boutons   
        for(i=0; i < data.films.length; i++){
                const element = data.films[i];
                createInfoBtn(element);
        }
    }
    if(data.species){
        //creation d'un container des species
        const speciesContainer = document.createElement('div');
        speciesContainer.setAttribute('id', 'specialspecies')
        speciesContainer.setAttribute('class', 'carddata');
        speciesContainer.innerHTML += "<h4 class='fullcard'> Species : </h4>";
        myCardContainer.appendChild(speciesContainer);
        if(data.species.length < 1 || data.species.length == undefined){
                const el = document.createElement('h3')
                el.setAttribute("class", "fullcard");
                el.innerText  += " Unknown.";
                speciesContainer.appendChild(el);
        }
        for(i=0; i < data.species.length; i++){
            const element = data.species[i];
                createSpeciesBtn(element);
        }
    }

    // -------------------------------------------- TO DO (check if there are any "case" not treated) -- to do Pilots --------------------------------------------------------//
    if(data.vehicles){
        // creation d'un container vehicules
        const vehicleContainer = document.createElement('div');
        vehicleContainer.setAttribute('id', 'specialvehicles')
        vehicleContainer.setAttribute('class', 'carddata');
        vehicleContainer.innerHTML += "<h4 class='fullcard'> Vehicles : </h4>";
        myCardContainer.appendChild(vehicleContainer);
        for(i=0; i < data.vehicles.length; i++){
            const element = data.vehicles[i];
            createVehicleBtn(element);
        }
    }
    if(data.starships){
        // creation d'un container des vaisseaux
        const shipContainer = document.createElement('div');
        shipContainer.setAttribute('id', 'specialships');
        shipContainer.setAttribute('class', 'carddata');
        shipContainer.innerHTML += "<h4 class='fullcard'> StarShips : </h4>";
        myCardContainer.appendChild(shipContainer);
        // creation des boutons starships
        for(i=0; i < data.starships.length; i++){
            const element = data.starships[i];
            createStarshipBtn(element);
        }
    }
      if(data.pilots){
        const container = document.createElement('div');
        container.setAttribute('id', 'specialpilots');
        container.setAttribute('class', 'carddata');
        container.innerHTML += "<h4 class='fullcard'> Pilots : </h4>";
        myCardContainer.appendChild(container);
        for(i=0; i < data.pilots.length; i++){
            const element = data.pilots[i];
            createPilotsBtn(element);
        }
    }
   
    if(data.people){
        const container = document.createElement('div');
        container.setAttribute('id', 'specialresidents');
        container.setAttribute('class', 'carddata');
        container.innerHTML += "<h4 class='fullcard'> Characters : </h4>";
        myCardContainer.appendChild(container);
        for(i=0; i < data.people.length; i++){
            const element = data.people[i];
            createInfoBtn(element);
        }

    }
    
    for (const [key, value] of Object.entries(data)) {
            // console.log([key]);
            



            const whatIwant = [`${key} :  ${value}`];  
             
         
            // console.log(whatIwant);
            if(key != "url" && key != "planets" && key != "starships" && key != "vehicles" && key != "species" && key != "characters" &&
               key != "created" && key!= "edited" && key !="films" && key!= "residents" && key != "homeworld" && key != "pilots" & key!= "people"){        

                createFullCard(whatIwant);
            }             
        }
        
    
}

async function loadMoviePicture(datapic){
    // console.log(datapic.title);
    const aNewHope = 'https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg';
    const empireStrike = 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/36130eca001baf033aaff6778b21abf5bcfa0d16f944074c07e5e28da7f792bc._RI_V_TTW_.jpg';
    const returnOfjedi = 'https://images-na.ssl-images-amazon.com/images/I/81g8vEs4ixL.jpg';
    const phantomMenace = 'https://www.cinemaffiche.fr/4015-tm_thickbox_default/star-wars-la-menace-fantome-episode-1-star-wars-1-the-phantom-menace.jpg';
    const attackOfClones = 'https://images-na.ssl-images-amazon.com/images/I/91bvd0Yxd4L.jpg';
    const sithRevenge = 'https://fr.web.img3.acsta.net/medias/nmedia/18/35/53/23/18423997.jpg';
    if(datapic.title && datapic.title.includes('Hope')){
        createMovieImg(aNewHope);
    }
    if(datapic.title && datapic.title.includes('Empire')){
        createMovieImg(empireStrike);
    }
    if(datapic.title && datapic.title.includes('Return of')){
        createMovieImg(returnOfjedi);
    }
    if(datapic.title && datapic.title.includes('Phantom Menace')){
        createMovieImg(phantomMenace);
    }
    if(datapic.title && datapic.title.includes('Attack')){
        createMovieImg(attackOfClones);
    }
    if(datapic.title && datapic.title.includes('Revenge')){
        createMovieImg(sithRevenge);
    }
}

async function createMovieImg($param){
    const infoCard = document.getElementById('specialinfo');
    const img = document.createElement('img');
    img.setAttribute('src', $param);
    img.setAttribute('class', 'cardimg');
    infoCard.appendChild(img);
}





async function createInfoBtn(parameter){
    const data = await fetch(`${parameter}`).then((res) => res.json()).catch(function(error) {
        console.log(error);
      });
    console.log(data);
    console.log('ici pour debug')
    
    if(data.name){
        const newBtn = document.createElement("button");
        const myContainer = document.getElementById('specialresidents'); 

        newBtn.innerText = data.name+" ";
        newBtn.setAttribute("class", "fullcardbtn");
        newBtn.addEventListener("click", () => loadFullCard(parameter));

        myContainer.appendChild(newBtn);
        const vimg = document.createElement('img');
        vimg.setAttribute('src', 'https://cdn0.iconfinder.com/data/icons/star-wars-3/154/droid-helmet-soldier-star-wars-256.png');
        vimg.setAttribute('class', 'vehicleimg');
        newBtn.appendChild(vimg);
        
    }
    if(data.title){
        const newBtn = document.createElement("button");
        // container des boutons de films
        const myMovieContainer = document.getElementById('specialmovies');

        newBtn.innerText = data.title+" ";
        newBtn.setAttribute("class", "moviecardbtn");
        newBtn.addEventListener("click", () => loadFullCard(parameter));
        myMovieContainer.appendChild(newBtn);
        const vimg = document.createElement('img');
        vimg.setAttribute('src', 'https://as1.ftcdn.net/v2/jpg/02/05/18/44/1000_F_205184418_t91TINxilW8CT2aWEqVW9J8b6CKf8iss.jpg');
        vimg.setAttribute('class', 'vehicleimg');
        newBtn.appendChild(vimg);


       
    }
    // planetBtn.innerText = data.name || data.title;
    // planetBtn.setAttribute("class", "fullcardbtn");
    // planetBtn.addEventListener("click", () => loadFullCard(parameter));
    // myCardContainer.appendChild(planetBtn);

}
async function createPlanetsBtn(parameter){
    const data = await fetch(`${parameter}`).then((res) => res.json()).catch(function(error) {
        console.log(error);
      });
    // console.log(data);
    
    if(data.name){
        const newBtn = document.createElement("button");
        const myContainer = document.getElementById('specialplanets'); 

        newBtn.innerText = data.name+" ";
        newBtn.setAttribute("class", "fullcardbtn");
        newBtn.addEventListener("click", () => loadFullCard(parameter));

        myContainer.appendChild(newBtn);
        const vimg = document.createElement('img');  
        vimg.setAttribute('src', 'https://cdn4.iconfinder.com/data/icons/star-wars-13/50/30-512.png');
        vimg.setAttribute('class', 'vehicleimg');
        newBtn.appendChild(vimg);      
    }
}
// 'specialplanets' id

async function createHomeWorld(parameter){
    const data = await fetch(`${parameter}`).then((res) => res.json()).catch(function(error) {
        console.log(error);
      });

    const homeBox = document.getElementById('specialhome');
    const homeWorldBtn = document.createElement("button");
    homeWorldBtn.innerText = "HomeWorld : "+data.name+" ";
    homeWorldBtn.setAttribute("class", "fullcardbtn");
    homeWorldBtn.addEventListener("click", () => loadFullCard(parameter));

    const vimg = document.createElement('img');
    vimg.setAttribute('src', 'https://cdn4.iconfinder.com/data/icons/star-wars-13/50/30-512.png');
    vimg.setAttribute('class', 'vehicleimg');
    homeWorldBtn.appendChild(vimg);

    homeBox.appendChild(homeWorldBtn);

}

async function createSpeciesBtn(parameter){
    const data = await fetch(`${parameter}`).then((res) => res.json()).catch(function(error) {
        console.log(error);
      });
    const speciesBox = document.getElementById('specialspecies');

    const newBtn = document.createElement("button");    
        newBtn.innerText = data.name+" ";
        newBtn.setAttribute("class", "speciesbtn");
        newBtn.addEventListener("click", () => loadFullCard(parameter));
        speciesBox.appendChild(newBtn);
        const vimg = document.createElement('img');
        vimg.setAttribute('src', 'https://cdn4.iconfinder.com/data/icons/star-wars-13/50/63-256.png');
        vimg.setAttribute('class', 'vehicleimg');
        newBtn.appendChild(vimg);
        // https://cdn4.iconfinder.com/data/icons/star-wars-13/50/63-256.png
        
}

async function createVehicleBtn(parameter){

    const garage = document.getElementById('specialvehicles');

    const data = await fetch(`${parameter}`).then((res) => res.json()).catch(function(error) {
        console.log(error);
      });



        const newBtn = document.createElement("button"); 
        newBtn.innerText = data.name+" ";
        newBtn.setAttribute("class", "vehiclebtn");
        newBtn.addEventListener("click", () => loadFullCard(parameter));
        garage.appendChild(newBtn);

          // img test 
    const vimg = document.createElement('img');
    vimg.setAttribute('src', 'https://cdn2.iconfinder.com/data/icons/star-wars-6/24/AT-AT-Walker-512.png');
    vimg.setAttribute('class', 'vehicleimg');
    newBtn.appendChild(vimg);
  

}

async function createStarshipBtn(parameter){

    const shipyard = document.getElementById('specialships');
    const data = await fetch(`${parameter}`).then((res) => res.json()).catch(function(error) {
        console.log(error);
      });
    const newBtn = document.createElement("button");    
        newBtn.innerText = data.name+" ";
        newBtn.setAttribute("class", "starshipbtn");
        newBtn.addEventListener("click", () => loadFullCard(parameter));
        const vimg = document.createElement('img');
        vimg.setAttribute('src', 'https://cdn4.iconfinder.com/data/icons/star-wars-9/100/X-wing-256.png');
        vimg.setAttribute('class', 'vehicleimg');
        newBtn.appendChild(vimg);

        // https://cdn4.iconfinder.com/data/icons/star-wars-9/100/X-wing-256.png
        shipyard.appendChild(newBtn);
    
}

async function createPilotsBtn(parameter){
    const data = await fetch(`${parameter}`).then((res) => res.json()).catch(function(error) {
        console.log(error);
      });
      const pilotContainer = document.getElementById('specialpilots')
    const newBtn = document.createElement("button");    
        newBtn.innerText = data.name+" ";
        newBtn.setAttribute("class", "pilotsbtn");
        pilotContainer.appendChild(newBtn);
        const vimg = document.createElement('img');
        vimg.setAttribute('src', 'https://cdn0.iconfinder.com/data/icons/star-wars-3/154/droid-helmet-soldier-star-wars-256.png');
        vimg.setAttribute('class', 'vehicleimg');
        newBtn.appendChild(vimg);

       newBtn.addEventListener("click", () => loadFullCard(parameter));
        
    
}



async function createFullCard(param){
      
    const infoCard = document.getElementById('specialinfo');
    const el = document.createElement('h3')
    el.setAttribute("class", "fullcard");
    el.innerText = param;
    // console.log(param);
    // console.log('hello');
    infoCard.appendChild(el);
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
const urlsearch = 'https://swapi.dev/api/people/?search=';
const searchInput = document.getElementById('search');
const sendItBtn = document.getElementById('searchbutton');


async function searchIt(param) {
    const datasearch = await fetch(`${urlsearch}${param}`).then((res) => res.json()).catch(function(error) {
        console.log(error);
      });
    if(datasearch.results.length > 0){
    // console.log(datasearch.results.length);
        loadFullCard(datasearch.results[0].url);
    } else { 
        myCardContainer.innerHTML = "<h3 class='fullcard'> No result found</h3>";
    }
}

sendItBtn.addEventListener('click', () => { searchIt(searchInput.value); });

// searchInput.addEventListener('focus', () => { loadTxt(); });

function loadTxt(){
    sendItBtn.classList.remove('hide');

    function doThis(){
        setTimeout(myFunc, 500, "S");
        setTimeout(myFunc, 650, "e");
        setTimeout(myFunc, 800, "a");
        setTimeout(myFunc, 950, "r");
        setTimeout(myFunc, 1100, "c");
        setTimeout(myFunc, 1250, "h");
    }
    
    function myFunc(p1) {
        sendItBtn.innerHTML += p1;
    }
    doThis();
    // setInterval(animate1, 20) sendItBtn.innerText = "Search";
}

loadTxt();

// if(searchInput.value == ''){
//     sendItBtn.innerHTMl = '';
// }

if(screen.width > 600){
    const menu = document.getElementById('menuctn');
    menu.classList.add('hide');
    const nav = document.querySelector('nav')
    nav.classList.remove('hide');
    console.log(screen.width);
} else {
    const menu = document.getElementById('menuctn');
    menu.classList.remove('hide');
}
console.log(screen.width);
if(document.getElementById('menubtn')){
    const menu = document.getElementById('menubtn');
    menu.addEventListener('click', () => { specialfunction();    })
}

function specialfunction() { 
                            const nav = document.querySelector('nav')  
                            nav.classList.toggle('hide');
                            if(document.querySelector('nav').getAttribute('class') === 'hide'){
                                console.log(document.querySelector('nav').getAttribute('class'));
                                document.body.style.paddingTop = "1%;" 
                            } else {
                                  document.body.style.paddingTop =   "90%" ;
                            }  
                        }