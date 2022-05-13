/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */

const projects = [
  {
    title: 'Tonic',
    devs: ['K42', ' • backend', ' • 2022'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    tags: ['html', 'css', 'javascript'],
    image: 'assets/projects/project-2.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
    btnImg1: 'assets/icons/twitter.svg',
    btnImg2: 'assets/icons/github.svg',
    // eslint-disable-next-line linebreak-style
  },
  {
    title: 'Multi-Post Stories',
    devs: ['K42', ' • backend', ' • 2022'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    tags: ['html', 'css', 'javascript'],
    image: 'assets/projects/project-3.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
    btnImg1: 'assets/icons/github.svg',
    btnImg2: 'assets/icons/twitter.svg',
  },

  {
    title: 'Facebook 360',
    devs: ['K42', ' • backend', ' • 2022'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    tags: ['html', 'css', 'javascript'],
    image: 'assets/projects/project-1.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
    btnImg1: 'assets/icons/github.svg',
    btnImg2: 'assets/icons/twitter.svg',
  },
    {
  title: 'Uber Navigation',
    devs: ['K42', ' • backend', ' • 2022'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    tags: ['html', 'css', 'javascript'],
    image: 'assets/projects/project-3.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
    btnImg1: 'assets/icons/github.svg',
    btnImg2: 'assets/icons/twitter.svg',
  },
];

const buttonOne = document.querySelectorAll('.see-project');

const headersection = document.querySelector('header');

function open(index) {
  const {
    title,
    devs,
    description,
    tags,
    image,
    liveVersion,
    sourceLink,
  } = projects[index];
  const dev1 = devs[0];
  const dev2 = devs[1];
  const dev3 = devs[2];
  const tags1 = tags[0];
  const tags2 = tags[1];
  const tags3 = tags[2];
  const container = document.querySelector('.popup-section');
  container.innerHTML = `
  <div class="popup-main-container">
  <div class="popup-content ">
  <div class="popup-heading">
  <h1 class="popup-project1-title">${title}</h1>
  <button type="button" class="button-popup-close">X</button>
  </div>
  <ul class="popup-example-dev">
  <li class="dev1">${dev1}</li>
  <li class="dev2">${dev2}</li>
  <li class="dev2">${dev3}</li>
  </ul>
  <div class="popup-container-img">
  <img src=${image} alt="popup-project-img1" class="popup-project-img1">
  </div>
  <div class="popup-desktop">
  <p class="project-popup-info1">${description}</p>
  <div class="project-popup-info2">
  <ul class="popup-tags">
  <li class="popup-tag">${tags1}</li>
  <li class="popup-tag">${tags2}</li>
  <li class="popup-tag">${tags3}</li>
  </ul>
  <div class="popup-button">
  <button type="button" class="popup-button1">${liveVersion}<img class="" src='assets/icons/github.svg'></button>
  <button type="button" class="popup-button1">${sourceLink}<img class=""  src='assets/icons/twitter.svg'></button>
  </div>
  </div>
  </div>
  </div>
  </div>
`;

  console.log(headersection);
  headersection.appendChild(container.firstChild);

  container.style.display = 'block';

  const buttonClose = document.querySelector('.button-popup-close');
buttonClose.addEventListener('click', () => {
  const popup = document.querySelector('.popup-section');
  popup.style.display = 'none';
});
}

 for (let i = 0; i < buttonOne.length; i += 1) {
   buttonOne[i].addEventListener('click', () => open(i));
 }
