// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato.

// Milestone 0
let teamArray = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg"
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg"
  }
]

// Milestone 1
for(let i = 0; i < teamArray.length; i++){
  let currentMember = teamArray[i];
  console.log(currentMember.name, currentMember.role, currentMember.image);
}

// ///MILESTONE 2
// let teamList = document.querySelector("ul");
// for(let i = 0; i < teamArray.length; i++){
//     let currentMember = teamArray[i];
//     teamList.innerHTML += `<li>${currentMember.name}, ${currentMember.role}, ${currentMember.image}</li>`;
// }

// Bonus 1 e 2
let rowItems = document.getElementById('container');
 for(let i = 0; i < teamArray.length; i++){
    let currentMember = teamArray[i];
     rowItems.innerHTML += `
        <div class="card">
            <img src="img/${currentMember.image}" alt="">
            <div class="card-body text-center">
              <h2>${currentMember.name}</h2>
              <p>${currentMember.role}</p>
            </div>
          </div>`;
 }