/*   popup elements  */
const popupMenu = document.querySelector('.popup-menu');
const body = document.querySelector('body');
const headSection = document.querySelector('.headline-section');
const logo = document.querySelector('.logo');

const openPopup = document.querySelector('.humburger');
const closePopup = document.querySelector('.fa-remove');

const popupLinks = document.querySelectorAll('.popup-link');
const projectPopup = document.querySelector('.popup-overlay');
const headerSection = document.querySelector('header');

/*   popup events  */
const showPopup = () => {
  popupMenu.classList.remove('hide');
  popupMenu.classList.add('show');
  body.classList.add('overflow');
  headSection.classList.add('blur');
  openPopup.classList.add('hide');
  logo.classList.add('hide');
};

const hidePopup = () => {
  popupMenu.classList.add('hide');
  popupMenu.classList.remove('show');
  body.classList.remove('overflow');
  headSection.classList.remove('blur');
  openPopup.classList.remove('hide');
  logo.classList.remove('hide');
};

openPopup.addEventListener('click', () => {
  showPopup();
});

closePopup.addEventListener('click', () => {
  hidePopup();
});

popupLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hidePopup();
  });
});

// works section
const projects = [
  {
    imageMobile: './IMG/projects/countriesmobile.png',
    imageDesktop2: './IMG/projects/countries.png',
    imageDesktop: './IMG/projects/countries1.png',
    projectTitle: 'Countries',
    stack: 'Front End Dev',
    year: '2022',
    demo: 'https://countries-jonmun.netlify.app/',
    source: 'https://github.com/jonathanmunamire/Countries',
    description: 'An application that provides information of all countries in a simple and friendly manner',
    description2: 'An application that provides information of all countries in a friendly manner, with information such as the time-zone, the languages spoken and a simple country-search implementation',
    technologies: ['JavaScript', 'Html', 'Css'],
  },
  {
    imageMobile: './IMG/projects/budgetmobile.png',
    imageDesktop2: './IMG/projects/budget.png',
    imageDesktop: './IMG/projects/budget1.png',
    projectTitle: 'Budget App',
    stack: 'Full Stack Dev',
    year: '2023',
    demo: 'https://budget-app-ti47.onrender.com/',
    source: 'https://github.com/jonathanmunamire/Budget-App',
    description2: 'A mobile web application where you can manage your budget, with a list of transactions associated with each category and with authorisation and authentication implemented',
    description: 'A mobile web application where you can manage your budget, with a list of transactions associated with each category and with authorisation and authentication implemented',
    technologies: ['Ruby', 'Rails', 'PostgresSQL'],
  }, {
    imageMobile: './IMG/projects/moviesmobile.png',
    imageDesktop2: './IMG/projects/movies.png',
    imageDesktop: './IMG/projects/movies1.png',
    projectTitle: 'Movie-website',
    stack: 'Front End Dev',
    year: '2022',
    demo: 'https://jonathanmunamire.github.io/Movies-Api/dist/',
    source: 'https://github.com/jonathanmunamire/Movies-Api',
    description2: 'A website which displays a list of movies and allows the user to leave a comment and like.',
    description: 'A website that displays a list of movies and allows the user to leave a comment and like.',
    technologies: ['JavaScript', 'Html', 'Css'],
  },
   {
    imageMobile: './IMG/projects/cryptomobile.png',
    imageDesktop2: './IMG/projects/crypto.png',
    imageDesktop: './IMG/projects/crypto1.png',
    projectTitle: 'Crypto',
    stack: 'Front End Dev',
    year: '2022',
    demo: 'https://crypto-jonmun.netlify.app/',
    source: 'https://github.com/jonathanmunamire/Crypto',
    description: 'A single page mobile application(SPA) that provides live data from different crypto-currencies,',
    description2: 'A single page mobile application(SPA) that provides live data from European capitals, using the the Crypto-currency API that provides the price, the market cap, the ATH and most importantly the Price Change 24hr',
    technologies: ['JavaScript', 'React', 'Css'],
  },
];

const workSection = document.querySelector('.works');
projects.forEach((project) => {
  workSection.innerHTML += `<article>
<img src="${project.imageMobile}" class="card-image-mobile">
<img src="${project.imageDesktop}" class="card-image-desktop desktop-image">
<section class="side-section">
<h2 class="project-title">${project.projectTitle}</h2>
<ul class="project-highlights">
<li class="organisation">Microverse</li>
<li><img class="counter" src="./ICONS/Counter.png"></li>
<li>${project.stack}</li>
<li><img class="counter" src="./ICONS/Counter.png"></li>
<li>${project.year}</li>
</ul>
<p class="project-descritpion">${project.description}</p>
<ul class="stacks">
<li class="stack">${project.technologies[0]}</li>
<li class="stack">${project.technologies[1]}</li>
<li class="stack">${project.technologies[2]}</li>
</ul>
<button class="project-btn trigger">See project</button>
</section>
</article>`;

  // project popup section
  projectPopup.innerHTML += `<div class='popup-content hide'><div class="popup-header">
    <h2 class="project-title">${project.projectTitle}</h2>
   <div class="canel-icon-wrapper"><img class="cancel-icon" src="./ICONS/cancel-icon.png" alt="cancel-icon"></div>
    </div>
<ul class="project-highlights">
<li>Microverse</li>
<li><img class="counter" src="./ICONS/Counter.png"></li>
<li>${project.stack}</li>
<li><img class="counter" src="./ICONS/Counter.png"></li>
<li>${project.year}</li>
</ul>
<img src="${project.imageMobile}" class="card-image-mobile">
<img src="${project.imageDesktop2}" class="card-image-desktop desktop-popup-image">
<div class="project-content">
<div class="project-popup-descritpion">
<p class="project-descritpion">${project.description2}</p>
</div>
<div class="right-section">
<ul class="stacks">
<li class="stack">${project.technologies[0]}</li>
<li class="stack">${project.technologies[1]}</li>
<li class="stack">${project.technologies[2]}</li>
</ul>
<div class="project-popup-btns">
<a href="${project.demo}" class="project-btn popup-btn popup-btn1" target="_blank">See live <img src="./ICONS/live.png"></a>
<a href="${project.source}" class="project-btn popup-btn" target="_blank">See source<img src="./ICONS/github.png"></a>
</div>
</div>
</div>
</div>
`;
});

const seeProjectBtns = document.querySelectorAll('.trigger');
const popupContent = document.querySelectorAll('.popup-content');
const cancelIcon = document.querySelectorAll('.popup-header');
const sideSection = document.querySelectorAll('.side-section');
const desktopImageSection = document.querySelectorAll('.desktop-image');

seeProjectBtns.forEach((seeProjectBtn, i) => {
  const revealPopup = () => {
    projectPopup.classList.remove('hide');
    popupContent[i].classList.remove('hide');
    body.style = 'overflow-y: hidden';
    workSection.classList.add('blur');
    headerSection.classList.add('header-handle');
  };

  const coverPopup = () => {
    projectPopup.classList.add('hide');
    popupContent[i].classList.add('hide');
    body.style = 'overflow-y: scroll';
    workSection.classList.remove('blur');
    headerSection.classList.remove('header-handle');
  };
  seeProjectBtn.addEventListener('click', revealPopup);
  cancelIcon[i].addEventListener('click', coverPopup);
});

sideSection.forEach((section, i) => {
  if ((i + 1) % 2 === 0) {
    section.classList.add('order1');
    desktopImageSection[i].classList.add('order2');
  }
});

const formName = document.querySelector('.form-name');
const formNameValue = localStorage.getItem('formName');

if (formNameValue) {
  formName.value = formNameValue;
}

formName.addEventListener('input', (e) => {
  localStorage.setItem('formName', e.target.value);
});

const formEmail = document.querySelector('.form-email');
const formEmailValue = localStorage.getItem('formEmail');

if (formEmailValue) {
  formEmail.value = formEmailValue;
}

formEmail.addEventListener('input', (e) => {
  localStorage.setItem('formEmail', e.target.value);
});

formName.addEventListener('input', (e) => {
  localStorage.setItem('formName', e.target.value);
});

const formText = document.querySelector('.form-text');
const formTextValue = localStorage.getItem('formText');

if (formTextValue) {
  formText.value = formTextValue;
}

formText.addEventListener('input', (e) => {
  formText.style.color = '#000';
  localStorage.setItem('formText', e.target.value);
});

const AboutSection = document.querySelector('.about-second');
AboutSection.innerHTML = ` <div class="languages-topic list-item">
<h5>Languages</h5>
<img
  class="arrow-icons arrow-down hide"
  src="https://img.icons8.com/ios-filled/50/undefined/expand-arrow--v1.png"
  alt="arrow-icons"
/>
<img
  class="arrow-icons arrow-right"
  src="https://img.icons8.com/ios-glyphs/30/undefined/chevron-right.png"
  alt="image"
/>
</div>
<ul class="languages contents hide">
<li>
  <img
    src="./IMG/Languages/js.png"
    alt="image"
    class="languages-item"
  />JavasScript
</li>
<li>
  <img
    src="./IMG/ruby.png"
    alt="image"
    class="languages-item"
  />Ruby
</li>
<li>
  <img src="./IMG/Languages/html.png" class="languages-item" 
  alt="image"/>HTML
</li>
<li>
  <img src="./IMG/Languages/css3.png" class="languages-item" alt="image"/>CSS
</li>
</ul>
<div class="languages-topic list-item">
<h5>Frameworks</h5>
<img
  class="arrow-icons arrow-down hide"
  src="https://img.icons8.com/ios-filled/50/undefined/expand-arrow--v1.png"
  alt="arrow-icons"
/>
<img
  class="arrow-icons arrow-right"
  src="https://img.icons8.com/ios-glyphs/30/undefined/chevron-right.png"
  alt="image"
/>
</div><ul class="languages contents hide">

<li>
  <img src="./IMG/rubyonrails.png" class="languages-item" alt="image"/>Ruby on Rails
</li>
<li>
  <img src="./IMG/react.png" class="languages-item" alt="image"/>React
</li>
</ul>
<div class="languages-topic list-item">
<h5>Skills</h5>
<img
  class="arrow-icons arrow-down hide"
  src="https://img.icons8.com/ios-filled/50/undefined/expand-arrow--v1.png"
  alt="arrow-icons"
/>
<img
  class="arrow-icons arrow-right"
  src="https://img.icons8.com/ios-glyphs/30/undefined/chevron-right.png"
  alt="image"
/>
</div>
<div class=" languages contents hide">
<div class="technical-skill">
 Collaboration
</div>
<div class="technical-skill">
 Effective Communication
</div>
<div class="technical-skill">
 Team-Work
</div>
<div class="technical-skill">
  Problem-Solving
</div>
<div class="technical-skill">
  Adaptability
</div>
<div class="technical-skill">
  Leadership
</div>
<div class="technical-skill">
  Creativity
</div>
<div class="technical-skill">
  Time management
</div>
</div>`;

const downArrows = document.querySelectorAll('.arrow-down');
const rightArrows = document.querySelectorAll('.arrow-right');
const contents = document.querySelectorAll('.contents');
const languagesTopic = document.querySelectorAll('.languages-topic');

languagesTopic.forEach((topic, i) => {
  topic.addEventListener('click', () => {
    if (downArrows[i].classList.contains('hide')) {
      downArrows.forEach((downArrow, i) => {
        if (!downArrow.classList.contains('hide')) {
          downArrow.classList.add('hide');
          languagesTopic[i].classList.add('list-item');
          contents[i].classList.add('hide');
          rightArrows[i].classList.remove('hide');
        }
      });
      downArrows[i].classList.remove('hide');
      rightArrows[i].classList.add('hide');
      topic.classList.remove('list-item');
      contents[i].classList.remove('hide');
    } else {
      downArrows[i].classList.add('hide');
      rightArrows[i].classList.remove('hide');
      topic.classList.add('list-item');
      contents[i].classList.add('hide');
    }
  });
});
