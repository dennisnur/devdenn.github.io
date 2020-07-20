fetch("./public/data.json")
 .then((res) => res.json())
 .then((data) => {
  generateSkillCard(data.skills);
  generateProjectCard(data.projects);
 });

changeTheme();

function generateSkillCard(data) {
 let html = "";

 const skillContainer = document.querySelector(".skill__container");

 for (var i = 0; i < data.length; i++) {
  html += `<div class="skill__card">
      <img src="./public/assets/img/${data[i].img}" alt="bootstrap" class="skill__icon">
      <div class="skill__info">
        <p class="skill__title">${data[i].title}</p>
        <p class="skill__desc">${data[i].desc}</p>
      </div>
    </div>`;
 }

 skillContainer.innerHTML = html;
}

function generateProjectCard(data) {
 let html = "";

 const projectContainer = document.querySelector(".project__container");

 for (var i = 0; i < data.length; i++) {
  html += `<div class="project__card">
      <img src="./public/assets/icon/arrow-forward.svg" alt="arrow-icon" class="project__img">
      <div class="project__info">
        <p class="project__title">${data[i].title}</p>
        <p class="project__desc">
          ${data[i].desc}. Here for <a class="skill__url" href="${data[i].url}" target="_blank">live link.</a>
        </p>
      </div> 
    </div>`;
 }

 projectContainer.innerHTML = html;
}

function changeTheme() {
 const themeButton = document.querySelector(".theme");
 //  const nightButton = document.querySelector(".theme__button--night");

 themeButton.addEventListener("click", (e) => {
  e.preventDefault();
  let check = e.target.classList.contains("theme__day");
  if (check) {
   e.target.classList.remove("theme__day");
   e.target.classList.add("theme__night");
   document.body.classList.remove("light");
   document.body.classList.add("dark");
  } else {
   e.target.classList.remove("theme__night");
   e.target.classList.add("theme__day");
   document.body.classList.remove("dark");
   document.body.classList.add("light");
  }
 });
}
