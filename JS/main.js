function createCard(imgURL, nameSur, nickName, ocupation, actor, app) {
    let newCardDiv = document.createElement("div");
    newCardDiv.className = "col-lg-3 col-md-4 kortele";

    let profImg = document.createElement("img");
    profImg.className = "img";
    profImg.src = imgURL;

    let newNameP = document.createElement("p");
    newNameP.textContent = nameSur;
    newNameP.className = "info";
    let nicknameP = document.createElement("p");
    nicknameP.textContent = nickName;
    nicknameP.className = "info";
    let occupation = document.createElement("p");
    occupation.textContent = ocupation;
    occupation.className = "info";
    let actorName = document.createElement("p");
    actorName.textContent = actor;
    actorName.className = "info";
    let appear = stars(app);
    appear.className = "info";


    newCardDiv.append(profImg, newNameP, nicknameP, occupation, actorName, appear);
    return newCardDiv;
}

// let arr = [98, 64, 64, 55]

function stars(arr) {
    let parentDiv = document.createElement("div");
    arr.forEach(star => {
        let i = document.createElement("i");
        i.className = "fa fa-star";
        i.textContent = star;
        parentDiv.append(i);
    })
    return parentDiv;
}


function appendCard(card) {

    let tevRow = document.querySelector(".row");
    tevRow.append(card);

}

//getRandomCharacter()

async function getRandomCharacter() {

    const requestURL = 'https://www.breakingbadapi.com/api/character/random';
    const request = new Request(requestURL);

    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();

    console.log(data);

    return data;
}

let btnRand = document.querySelector(".btnRand");

btnRand.addEventListener("click", function () {
    getRandomCharacter().then(data => {

        let { picture, name, nickName, occup, actors, appearance } = data[0];
        picture = data[0].img;
        name = data[0].name;
        nickName = "Nickname: " + data[0].nickname;
        occup = "Occupation: " + data[0].occupation;
        actors = "Actor: " + data[0].portrayed;

        let card = createCard(picture, name, nickName, occup, actors, appearance);
        appendCard(card);

    }).catch(error => {
        console.log(error);
    });
})

//removeAll()

let btnRemove = document.querySelector(".btnRemove");
let parent = document.querySelector(".row");

btnRemove.addEventListener("click", function (e) {
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
})

//getCharacterById(id)

async function getCharacterById(id) {

    const requestURL = 'https://www.breakingbadapi.com/api/characters/' + id;
    const request = new Request(requestURL);

    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();

    console.log(data);

    return data;
}

let btnCharId = document.querySelector(".btnCharId");

btnCharId.addEventListener("click", function () {
    let id = prompt("Enter character id");
    getCharacterById(id).then(data => {

        let { picture, name, nickName, occup, actors, appearance } = data[0];
        picture = data[0].img;
        name = data[0].name;
        nickName = "Nickname: " + data[0].nickname;
        occup = "Occupation: " + data[0].occupation;
        actors = "Actor: " + data[0].portrayed;

        let card = createCard(picture, name, nickName, occup, actors, appearance);
        appendCard(card);

    }).catch(error => {
        console.log(error);
    });
})

//getAllCharacters()

async function getAllCharacters() {

    const requestURL = 'https://www.breakingbadapi.com/api/characters/';
    const request = new Request(requestURL);

    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();

    console.log(data);

    return data;
}

let btnAllChar = document.querySelector(".btnAllChar");

btnAllChar.addEventListener("click", function () {
    getAllCharacters().then(data => {

        data.forEach(item => {

            let { img, name, nickname, occupation, portrayed, appearance } = item;
            // picture = data[0].img;
            // nameSur = data[0].name;
            nickname = "Nickname: " + nickname;
            occupation = "Occupation: " + occupation[0];
            portrayed = "Actor: " + portrayed;


            let card = createCard(img, name, nickname, occupation, portrayed, appearance);
            appendCard(card);

        })


    }).catch(error => {
        console.log(error);
    });
})

// getCharactersByName(name)

async function getCharactersByName(name) {

    const requestURL = 'https://www.breakingbadapi.com/api/characters?name=' + name;
    const request = new Request(requestURL);

    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();

    console.log(data);

    return data;
}

let btnCharName = document.querySelector(".btnByName");

btnCharName.addEventListener("click", function () {
    let name = prompt("Enter character name");
    getCharactersByName(name).then(data => {

        data.forEach(item => {

            let { img, name, nickname, occupation, portrayed, appearance } = item;
            nickname = "Nickname: " + nickname;
            occupation = "Occupation: " + occupation[0];
            portrayed = "Actor: " + portrayed;


            let card = createCard(img, name, nickname, occupation, portrayed, appearance);
            appendCard(card);

        })

    }).catch(error => {
        console.log(error);
    });
})

//getCertainCount(limit)

async function getCertainCount(limit) {

    const requestURL = 'https://www.breakingbadapi.com/api/characters?limit=' + limit;
    const request = new Request(requestURL);

    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();

    console.log(data);

    return data;
}

let btnLimit = document.querySelector(".btnLimit");

btnLimit.addEventListener("click", function () {
    let limit = prompt("Enter character limit");
    getCertainCount(limit).then(data => {

        data.forEach(item => {

            let { img, name, nickname, occupation, portrayed, appearance } = item;
            nickname = "Nickname: " + nickname;
            occupation = "Occupation: " + occupation[0];
            portrayed = "Actor: " + portrayed;


            let card = createCard(img, name, nickname, occupation, portrayed, appearance);
            appendCard(card);

        })

    }).catch(error => {
        console.log(error);
    });
})

//getAllCharFromBB()

async function getAllCharFromBB() {

    const requestURL = 'https://www.breakingbadapi.com/api/characters?category=Breaking+Bad';
    const request = new Request(requestURL);

    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();

    console.log(data);

    return data;
}

let btnBB = document.querySelector(".btnBB");

btnBB.addEventListener("click", function () {
    getAllCharFromBB().then(data => {

        data.forEach(item => {

            let { img, name, nickname, occupation, portrayed, appearance } = item;
            nickname = "Nickname: " + nickname;
            occupation = "Occupation: " + occupation[0];
            portrayed = "Actor: " + portrayed;


            let card = createCard(img, name, nickname, occupation, portrayed, appearance);
            appendCard(card);

        })

    }).catch(error => {
        console.log(error);
    });
})

//getAllCharFromBCS()

async function getAllCharFromBCS() {

    const requestURL = 'https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul';
    const request = new Request(requestURL);

    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();

    console.log(data);

    return data;
}

let btnBCS = document.querySelector(".btnBCS");

btnBCS.addEventListener("click", function () {
    getAllCharFromBCS().then(data => {

        data.forEach(item => {

            let { img, name, nickname, occupation, portrayed, better_call_saul_appearance } = item;
            nickname = "Nickname: " + nickname;
            occupation = "Occupation: " + occupation[0];
            portrayed = "Actor: " + portrayed;


            let card = createCard(img, name, nickname, occupation, portrayed, better_call_saul_appearance);
            appendCard(card);

        })

    }).catch(error => {
        console.log(error);
    });
})

//getBBCharBySeason()

async function getBBCharBySeason() {

    const requestURL = 'https://www.breakingbadapi.com/api/characters?category=Breaking+Bad';
    const request = new Request(requestURL);

    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();

    console.log(data);

    return data;
}

let btnBBbyS = document.querySelector(".btnBBbyS");

btnBBbyS.addEventListener("click", function () {
    let seasonNumb = +prompt("Season number");
    getBBCharBySeason().then(data => {

        let filtered = data.filter(item => item.appearance.includes(seasonNumb));

        filtered.forEach(item => {

            let { img, name, nickname, occupation, portrayed, appearance } = item;
            nickname = "Nickname: " + nickname;
            occupation = "Occupation: " + occupation[0];
            portrayed = "Actor: " + portrayed;

            let card = createCard(img, name, nickname, occupation, portrayed, appearance);
            appendCard(card);

        })

    }).catch(error => {
        console.log(error);
    });
})


//getBCSCharBySeason()

async function getBCSCharBySeason() {

    const requestURL = 'https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul';
    const request = new Request(requestURL);

    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();

    console.log(data);

    return data;
}

let btnBCSbyS = document.querySelector(".btnBCSbyS");

btnBCSbyS.addEventListener("click", function () {
    let seasonNum = +prompt("Season number");
    getBCSCharBySeason().then(data => {

        let filtered = data.filter(item => item.better_call_saul_appearance.includes(seasonNum));

        filtered.forEach(item => {

            let { img, name, nickname, occupation, portrayed, better_call_saul_appearance } = item;
            nickname = "Nickname: " + nickname;
            occupation = "Occupation: " + occupation[0];
            portrayed = "Actor: " + portrayed;



            let card = createCard(img, name, nickname, occupation, portrayed, better_call_saul_appearance);
            appendCard(card);

        })

    }).catch(error => {
        console.log(error);
    });
})


//dateObj()

function dateObj(date) {
    return new Date(date);
}

//getOldest()

async function getOldest() {

    const requestURL = 'https://www.breakingbadapi.com/api/characters/';
    const request = new Request(requestURL);

    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();

    console.log(data);

    return data;
}

function getOldest(array) {
    let minIndex = 0;
    array.forEach((el, index) => {
        if (dateObj(el.birthday) < dateObj(array[minIndex].birthday)) {
            minIndex = index;
        }
    });
    return array[minIndex];
}

let btnOld = document.querySelector(".btnOld");

btnOld.addEventListener("click", function () {
    getAllCharacters().then(data => {
        let filt = data.filter(item => !item.birthday.includes("Unknown"));
        let { img, name, nickname, occupation, birthday, appearance } = getOldest(filt);
        nickname = "Nickname: " + nickname;
        occupation = "Occupation: " + occupation[0];
        birthday = "Birthday: " + birthday;


        let card = createCard(img, name, nickname, occupation, birthday, appearance);
        appendCard(card);




    }).catch(error => {
        console.log(error);
    });
})

//getYoungest()

async function getYoungest() {

    const requestURL = 'https://www.breakingbadapi.com/api/characters/';
    const request = new Request(requestURL);

    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();

    console.log(data);

    return data;
}

function getYoungest(array) {
    let minIndex = 0;
    array.forEach((el, index) => {
        if (dateObj(el.birthday) > dateObj(array[minIndex].birthday)) {
            minIndex = index;
        }
    });
    return array[minIndex];
}

let btnYoung = document.querySelector(".btnYoung");

btnYoung.addEventListener("click", function () {
    getAllCharacters().then(data => {
        let filt = data.filter(item => !item.birthday.includes("Unknown"));
        let { img, name, nickname, occupation, birthday, appearance } = getYoungest(filt);
        nickname = "Nickname: " + nickname;
        occupation = "Occupation: " + occupation[0];
        birthday = "Birthday: " + birthday;


        let card = createCard(img, name, nickname, occupation, birthday, appearance);
        appendCard(card);




    }).catch(error => {
        console.log(error);
    });
})

//