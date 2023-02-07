const student = [
  {
    id: 1,
    imageUrl: 'https://i.imgflip.com/64pd61.jpg',
    name: 'Not VolderMort',
    house: 'Slytherin',
    favoriteSpell: 'Expecto Patronum'
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    name: 'Fred Frederson',
    house: 'Hufflepuff',
    favoriteSpell: 'Wingardium Leviosa'
  }, 
  {
    id: 3,
    imageUrl: 'https://i.pinimg.com/originals/8e/e8/ba/8ee8ba8d6cb90b0ab2207012b876ff78.jpg',
    name: 'Baron Otto Von Chubbs',
    house: 'Gryffindor',
    favoriteSpell: 'Petrificus Totalus'
  }, 
  {
    id: 4,
    imageUrl: '',
    name: 'Baroness Lily',
    imageUrl: 'https://i.etsystatic.com/26195419/r/il/d2e236/3030679086/il_fullxfull.3030679086_bdth.jpg',
    house: 'Ravenclaw',
    favoriteSpell: 'Obliviate'
  }, 
  {
    id: 5,
    imageUrl: 'https://i.pinimg.com/originals/7a/a5/8d/7aa58d5e323b8833a4dd472c701a88ea.jpg',
    name: 'Thomas Middle',
    house: 'Ravenclaw',
    favoriteSpell: 'Accio'
  }, 
  {
    id: 6,
    imageUrl: 'https://i.kym-cdn.com/entries/icons/facebook/000/016/546/hidethepainharold.jpg',
    name: 'Some Guyson',
    house: 'Slytherin',
    favoriteSpell: 'Avada Kedavra'
  },
];
const voldArmy = [
  {
    id: 1,
    imageUrl: 'https://i.imgflip.com/64pd61.jpg',
    name: 'Not VolderMort',
    house: 'Slytherin',
    favoriteSpell: 'Lumos'
  }
];

const rendertoDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);

  selectedDiv.innerHTML = htmlToRender; 
};

const formOnDom = () => {
  const headerOnDom = `<form>
  <label for="studentName" class="sr-only">Student: </label>
  <input type="text" class="form-control" id="inputName" placeholder="Your Name here">
  <label form="favoritespell" class="sr-only">Favorite Spell: </label>
  <input type="text" class="form-control" id="inputSpell" placeholder="Favorite Spell">
  <label for="studentImage" class="sr-only">Your image link: </label>
  <input type="text" class="form-control" id="inputLink" placeholder="Your Link here">
</form>
</div>
<button id="btnShowCards" class="btn btn-primary">Submit</button>`;

rendertoDom('#formContent', headerOnDom);
}

const toggleForm = document.querySelector('#showFormBtn');
toggleForm.addEventListener('click', () => {
    formOnDom();
    document
    .querySelector("#btnShowCards")
    .addEventListener("click", loadCards);
const movingStudentCard = document.querySelector('#studentCards').addEventListener('click', expelledStudent);
});

const cardsOnDom = (array) => {
  let domString = "";
  for (const students of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${students.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h1 class="card-header">${students.name}</h1>
      <p class="card-text">House: ${students.house}</p>
      <p class="card-text">Favorite Spell: ${students.favoriteSpell}</p>
      <button class="btn btn-danger" id="expel--${students.id}">Expel</button>
    </div>
  </div>`;
  }
  rendertoDom('#studentCards', domString)
};

const voldOnDom = (array) => {
    let voldString = "";
    for (const expelled of array) {
      voldString += `<div class="card" style="width: 18rem;">
      <img src="${expelled.imageUrl}" class="card-img-top" alt="...">
      <div class="card-body">
        <h1 class="card-header"> Former House: ${expelled.house}</h1>
        <p class="card-text">${expelled.name}</p>
      </div>
    </div>`
    }
    rendertoDom('#voldCards', voldString)
  };
  
//const studentName = document.getElementById('#inputName');
//const favoriteSpell = document.getElementById('inputSpell');

const newStudent = (e) => {
  event.preventDefault();

  const newStudentObj = {
    id: student.length + 1,
    name: document.querySelector('#inputName').value,
    favoriteSpell: document.querySelector('#inputSpell').value,
    imageUrl: document.querySelector('#inputLink').value,
    house: houseFunction
  }
  student.push(newStudentObj);
  cardsOnDom(student);
  form.reset();
};

const loadCards = () =>{
  var studentName = document.querySelector('#inputName').value;
  var studentSpell = document.querySelector('#inputSpell').value;
  var studentLink = document.querySelector('#inputLink').value;
    if(studentName === null || studentSpell === null || studentLink === null){
      alert('Please fill out the form.');
      return false;
    }
    else {
      newStudent();
      voldOnDom();
    }
   
  };

const houseFilter = (studentArray, houseType) =>{
  const filterArray = []; 
  for (const typeOfHouse of studentArray) {
    if (typeOfHouse.house === houseType) {
      filterArray.push(typeOfHouse);
    };
  };
  return filterArray;
};
const showAllBtn = document.querySelector('#allHouse-btn');
const showHufflepuffBtn = document.querySelector('#hufflepuff-btn');
const showGryffindorBtn = document.querySelector('#gryffindor-btn');
const showRavenclawBtn = document.querySelector('#ravenclaw-btn');
const showSlytherinBtn = document.querySelector('#slytherin-btn');

showAllBtn.addEventListener('click', () => {
  cardsOnDom(student);
});
showHufflepuffBtn.addEventListener('click', () =>{
  const huffleButton = houseFilter( student, 'Hufflepuff');
  cardsOnDom(huffleButton);
});
showGryffindorBtn.addEventListener('click', () => {
  const gryffindorButton = houseFilter(student, 'Gryffindor');
  cardsOnDom(gryffindorButton);
});
showRavenclawBtn.addEventListener('click', () => {
  const ravenclawButton = houseFilter(student, 'Ravenclaw');
  cardsOnDom(ravenclawButton);
});
showSlytherinBtn.addEventListener('click', () => {
  const slytherinButton = houseFilter(student, 'Slytherin');
  cardsOnDom(slytherinButton);
});

const houseAssign = () => {
  const randomHouse = Math.floor(Math.random() * 4);
  switch (randomHouse) {
  case 0:
    return 'HufflePuff';
    break;
   case 1:
    return 'Gryffindor';
    break;
  case 2:
    return 'RavenClaw';
    break;
  case 3:
      return 'Slytherin';
  }

};

let houseFunction = houseAssign();


//const clickMeButton = document.querySelector('#btnShowCards');
//clickMeButton.addEventListener('click', (newStudent));

//const movingStudentCard = document.querySelector('#studentCards').addEventListener('click', expelledStudent);


const expelledStudent = (event) =>{
  if(event.target.id.includes('expel')){
     const[, studentsId] = event.target.id.split("--");
     const studentIndex = student.findIndex(
      (stu) => Number(stuId) === stu.id);
     const expelledStudent = student.splice (studentIndex, 1);
     voldArmy.push(expelledStudent);


    }
    voldOnDom(expelledStudent);
    cardsOnDom(student);
  }
