// menu
const menu = document.querySelector('.bars');
const navItems = document.querySelector('.nav-items');
const closeB = document.querySelector('.closeBtn');
const navLinks = document.querySelectorAll('.nav-links');
const box = document.getElementById('box');

const popUpBtn = document.getElementById('modal');

menu.addEventListener('click', () => {
  navItems.classList.toggle('nav-bar');
  closeB.style.display = 'flex';
  menu.style.display = 'none';
});

function closeBtn() {
  navItems.classList.remove('nav-bar');
  menu.style.display = 'block';
}

navLinks.forEach((element) => {
  element.addEventListener('click', closeBtn);
});

// popup

const cards = [
  {
    id: 1,
    heading: 'National Innovation Fair Ad',
    description: `National Innovation Initiative Fair website is a website I built just for fun and practice, 
                  its a website showcasing a program that takes place in Zambia every year, 
                  where innovators come from all corners of the country to solve the challenges faced by the society.`,
    description2: `National Innovation Initiative Fair website is a website I built just for fun and practice, 
    its a website showcasing a program that takes place in Zambia every year, 
    where innovators come from all corners of the country to solve the challenges faced by the society `,
    languages: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    languages2: ['CSS', 'HTML', 'Ruby on Rails', 'Github'],

    image: './NIIScreenShot.png',
    link: 'https://ice949.github.io/National-Innovation-Fair/',
    seelive: 'See live',
    seesource: 'See source',
    button: 'See project',
  },
  {
    id: 2,
    heading: 'Nicetyfarm Technologies',
    description: `Nicetyfarm Technologies website is a website for my Company. 
                  A landing page for an Agritech company that is redefining Sustainable Agriculture 
                  through Precesion farming(Data-Driven Farming).`,
    description2: `Nicetyfarm Technologies website is a website for my Company. 
                  A landing page for an Agritech company that is redefining Sustainable Agriculture 
                  through Precesion farming(Data-Driven Farming). `,
    languages: ['CSS', 'JavaScript', 'Bootstrap', 'Ruby'],
    languages2: ['CSS', 'JavaScript', 'Ruby on Rails', 'Github'],

    button: 'See project',
    image: './NicetyfarmScreenShot.png',
    link: 'https://www.nicetyfarm.com/',
    seelive: 'See live',
    seesource: 'See source',
  },
  {
    id: 3,
    heading: 'SouthSide Music',
    description: `Southside Music is a music blog for Southern province 
                  Zambia music built just for fun using JavaScript, 
                  HTML and CSS. You can Upload a song to it, 
                  Listen to a song as we as download a song from it`,
    description2: `Southside Music is a music blog for Southern province 
                  Zambia music built just for fun using JavaScript, 
                  HTML and CSS. You can Upload a song to it, 
                  Listen to a song as we as download a song from it,
        `,
    languages: ['css', 'JavaScript', 'Bootstrap', 'Ruby'],
    languages2: ['css', 'JavaScript', 'Ruby on Rails', 'Github'],

    image: './SouthsideScreenShot.png',
    link: 'https://www.southlifemusic.site/',
    button: 'See project',
    seelive: 'See live',
    seesource: 'See source',
  },
  {
    id: 4,
    heading: 'Kat & Ice Movies',
    description: `web application based on an external API that displays Movies from 
                  a movie API and gets likes and comments for a movie then retrives it and displays them.`,
    description2: `web application based on an external API that displays Movies from 
                  a movie API and gets likes and comments for a movie then retrives it and displays them.`,
    languages: ['css', 'JavaScript', 'Bootstrap', 'Ruby'],
    languages2: ['css', 'JavaScript', 'Ruby on Rails', 'Github'],
    image: './KatandiceScreenShot.png',
    link: 'https://timely-pie-1973e1.netlify.app/',
    button: 'See project',
    seelive: 'See live',
    seesource: 'See source',
  },
];

const projecCards = cards
  .map(
    (card) => `
    <div class="work${card.id}">
    <div class="cd11"><img src="${card.image}" alt="popup-img"></div>
    <div class="cont">
        <h3 class="cd12">${card.heading}</h3>
        <p class="cd13">
           ${card.description} 
        </p>
        <div class="cd14">
            <ul class="cdlinks">
    ${card.languages.map((lang) => `<li>${lang}</li>`).join('')}
             
            </ul>
        </div>
        <button data-modal-target="#modal" class="openmd" onclick="modal(${card.id})">See Project</button>
    </div>
</div>
`,
  ).join('');

box.innerHTML += projecCards;

function closeModal() {
  popUpBtn.classList.remove('active');
}
const popUp = (card) => {
  const temp = document.createElement('template');
  popUpBtn.innerHTML = '';
  temp.innerHTML = `
    <div class="modal-header">
        <h3 class="cd12">${card.heading}</h3>
      <button data-close-button class="close-button">&times;</button>
    </div>
    <img src="${card.image}" alt="popup-img">
    <p class="modal-body">
        ${card.description2}
    </p>
    <ul>
    ${card.languages2.map((lang) => `<li>${lang}</li>`).join('')}
    </ul>
    <div class="p-btn">
    <a href=${card.link}><button>${card.seelive} <i class="fa-solid fa-arrow-up-right-from-square"></i></button></a>
    <button>${card.seesource} <i class="fa-brands fa-github"></i></button>
    </div>
      `;

  popUpBtn.classList.add('active');
  popUpBtn.append(temp.content);
  const closebt = document.querySelector('.close-button');
  closebt.addEventListener('click', closeModal);
};

/* eslint-disable no-unused-vars */
const modal = (id) => {
  cards.find((item) => {
    if (Number(id) === Number(item.id)) {
      return popUp(item);
    }
    return undefined;
  });
};

// email validation
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');

function validateName() {
  const name = document.getElementById('contact-name').value;

  if (name.length === 0) {
    nameError.innerHTML = 'Name is required';
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Write Full Name';
    return false;
  }
  nameError.innerHTML = '';
  
  return true;
}

const isLowerCase = (str) => /[a-z]/.test(str) && !/[A-Z]/.test(str);
const email = document.getElementById('contact-email');
const form = document.forms['contact-form'];

function validateEmail(e) {
  e.preventDefault();

  if (!isLowerCase(email.value)) {
    emailError.innerHTML = 'Your Email should be lowercase';
  } else {
    nameError.innerHTML = '';
    form.submit();
  }
}
const validateForm = document.getElementById('formdata');
validateForm.addEventListener('submit', (e) => { validateEmail(e); });
