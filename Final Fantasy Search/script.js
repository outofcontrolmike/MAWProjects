document.getElementById('onSubmit').addEventListener('click', submitRequest);

function submitRequest() {
let searchValue = document.getElementById('searchInput').value;


fetch('https://www.moogleapi.com/api/v1/characters/search?name=' + searchValue + '')
  .then(response => response.json())
  .then(data => 
  createCard(data) + console.log(data));
}

function createCard(data) 
{
  data.map(getFFData);  
}

/*Character Props
Name
Japanese Name
Origin (The game they originated in)
Race
Gender
Age
Job
Height
Weight
Pictures (an array)
Stats (an array)
Description
*/
function getFFData(character) {
  console.log(character.name + character.race);
  let card = document.createElement('div');
  card.className = "ui segment";

  
  let name = document.createElement('p');
  name.innerHTML= "<b>Name </b>: " + character.name;

  let jName = document.createElement('p');
  jName.innerHTML= "Japanese Name: " + character.japaneseName;

  let origin = document.createElement('p');
  origin.innerHTML= "Origin: " + character.origin;

  let race = document.createElement('p');
  race.innerHTML= "Race: " + character.race;

  let gender = document.createElement('p');
  gender.innerHTML= "Gender: " + character.gender;

  let age = document.createElement('p');
  age.innerHTML= "Age: " + character.age;

  let job = document.createElement('p');
  job.innerHTML= "Job: " + character.job;
  
  let height = document.createElement('p');
  height.innerHTML= "<b>Height<b>: " + character.height;

  let weight = document.createElement('p');
  weight.innerHTML= "Weight: " +  character.weight;

  let description = document.createElement('p');
  description.innerHTML = character.description;

  let picture = character.pictures[0].url;
  let imageHolder = document.createElement('img');
  imageHolder.className = "ui large image";
  imageHolder.src = picture;

  let container = document.createElement('div');
  container.className = "ui two column doubling stackable grid container segment";

  let column = document.createElement('div');
  column.className="ui column";
  let column2 = document.createElement('div');
  column2.className="ui column";

  let divider = document.createElement('hr');

  container.append(column,column2);

  column.append(name,race,jName,origin,gender,age,job,height,weight,divider,description);
  column2.append(imageHolder);
  document.getElementById('list').prepend(container);
}