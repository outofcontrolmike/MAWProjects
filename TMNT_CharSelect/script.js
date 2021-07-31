//Ninja Turtles array
document.getElementById('project').style.backgroundColor = "";
const turtles = [
    turtle1 = {
        name: "Leo",
        weapon: "Katana",
        color: 'blue'
    },
    turtle2 = {
        name: "Mike",
        weapon: "Nunchuck",
        color: 'orange'
    },
    turtle3 = {
        name: "Don",
        weapon: "Bo Staff",
        color: 'neon purple'
    },
    turtle4 = {
        name: "Raph",
        weapon: "Si",
        color: 'Red'
    }
];

const staticProps =  {
    players : [
        "1up", "2up"
    ],

    heading : "today"
};

let variables = {
    name : "",
    score : 0,
    lives : 2
}
let tName = document.getElementById('name');
let details = document.getElementById("showDetails");

let leo = document.getElementById("leo");
let mike = document.getElementById("mike");
let don = document.getElementById("don");
let raph = document.getElementById("raph");


function clearStats() {
    variables.lives = 2;
    lifeReset = variables.lives;
    lifeReset = 2;
    lives.innerHTML = "0" +lifeReset;
    variables.score = 0;
    score.innerHTML = 0;
}

function addLives() {
if(lives.innerHTML <= 11)
lives.innerHTML = variables.lives += 1;

}

function addScore() {
    if(score.innerHTML <= 9999)
    score.innerHTML = variables.score += 200;
}

function minusScore() {
    if(score.innerHTML > 0)
    {
        score.innerHTML -= 200;
    }
}

function initiateVars() {
//grab elements by id
let lives = document.getElementById('lives');
let score = document.getElementById('score');
let health = document.getElementById("health");
let liveInc = document.getElementById('addLives');
let addPoints = document.getElementById('addPoints');
let minusPoints = document.getElementById('minusPoints');
let resetStats = document.getElementById('resetStats');


//add event listeners

leo.addEventListener('click', changeLeo);
mike.addEventListener('click', changeMike);
don.addEventListener('click', changeDon);
raph.addEventListener('click', changeRaph);
liveInc.addEventListener('click', addLives);
addPoints.addEventListener('click',addScore);
minusPoints.addEventListener('click',minusScore);
resetStats.addEventListener('click',clearStats);

//Mouse in
leo.addEventListener("mouseenter", function() {
    highlight(leo, "cadetblue");
}, false);
mike.addEventListener("mouseenter", function() {
    highlight(mike, "orange");
}, false);
don.addEventListener("mouseenter", function() {
    highlight(don, "violet");
}, false);
raph.addEventListener("mouseenter", function() {
    highlight(raph, "red");
}, false);

//Mouse out
leo.addEventListener("mouseleave", function() {
    highlight(leo, "black");
}, false);
mike.addEventListener("mouseleave", function() {
    highlight(mike, "black");
}, false);
don.addEventListener("mouseleave", function() {
    highlight(don, "black");
}, false);
raph.addEventListener("mouseleave", function() {
    highlight(raph, "black");
}, false);


playerInfo(lives,score,health);

}//end of initiate Vars

//On page Load
function highlight(turtle, color) {
turtle.style.backgroundColor = color;
}


//Change player font
function playerStyle(color) {
document.getElementById('pNum').style.color = color;
lives.style.color = color;
health.style.color = color;
}

//Toggle character select color
function clearColors() {
    leo.style.backgroundColor = "black";
    mike.style.backgroundColor = "black";
    don.style.backgroundColor = "black";
    raph.style.backgroundColor = "black";
}

//Toggle names
function changeName(name) {
    tName.innerHTML = name;
}

//
function changeLeo() {
    clearColors();
    playerStyle("cadetblue");
    changeName(turtle1.name);
    highlight(leo,"cadetblue");
}

function changeMike() {
    clearColors();
    playerStyle("orange");
    changeName(turtle2.name);
    highlight(mike,"orange");
}

function changeDon() {
    clearColors();
    playerStyle("violet");
    changeName(turtle3.name);
    highlight(don,"violet");

}

function changeRaph() {
    playerStyle("red")
    clearColors();
    changeName(turtle4.name);
    highlight(raph,"red");
}

//onPage load
initiateVars();

//set up player info
function playerInfo(lives, score, health) {
lives.innerHTML = "0" + variables.lives
score.innerHTML = variables.score
let builder= "|";

for(i = 0; i<=3; i++) {;
    builder += builder;
}

health.innerHTML = builder;
console.log(builder);
}
//end playerInfo

//Handle Hiding Turtles - Should be on page load
function hideTurtles() {
    let turtle = document.getElementsByClassName("turtle");
    console.log(turtle);
}
