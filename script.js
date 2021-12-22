//Mobile Menu

const hamburger = document.querySelector('.nav-mobile');
const navigation = document.querySelector('.nav-desktop');
const navUl = document.querySelector('.nav-desktop > ul');
const closeItem = document.querySelector('.close');

const home = document.createElement('li');
const listItem = document.createElement('a');

const toggleMenu = () => {
  navigation.classList.toggle('menu');
  listItem.innerText = ('Home');
  listItem.href = ('index.html');
  listItem.classList.add('homeA');
  listItem.classList.toggle('homeLink');
  home.appendChild(listItem);
  navUl.insertBefore(listItem, navUl.childNodes[0]);
  navUl.appendChild(home);
};

hamburger.addEventListener('click', toggleMenu);
closeItem.addEventListener('click', toggleMenu);

// Speakers section

const data = [
  {
    description: 'Malaysian entrepreneur, author, and motivational speaker, of Indian descent. He is the founder and CEO of Mindvalley and the author of two books.',
    imageAlt: 'Vishen Lakhiani image',
    imageSrc: 'http://127.0.0.1:5500/images/home/vishen-lakhiani.jpg',
    name: 'Vishen Lakhiani',
    title: 'Founder of Mindvalley'
  },
  {
    description: 'Shefali Tsabary, PhD., was exposed to Eastern philosophy at an early age and integrates its teachings with Western psychology.',
    imageAlt: 'Dr Shefali Tsabary image',
    imageSrc: 'http://127.0.0.1:5500/images/home/dr-shefali-tsabary.jpeg',
    name: 'Dr. Shefali Tsabary',
    title: 'Clinical Psychologist'
  },
  {
    description: 'Kwik Brain is a fun, fast-paced show designed to help busy people learn and achieve anything in a fraction of the time!',
    imageAlt: 'Jim Kwik image',
    imageSrc: 'http://127.0.0.1:5500/images/home/jim-kwik.jpeg',
    name: 'Jim Kwik',
    title: 'CEO, Kwik Learning'
  },
  {
    description: 'Eric is an insightful mentor and a powerful presenter.Best-selling author of LET THE MAGIC BEGIN, movie and television star.',
    imageAlt: 'Eric Edmeades image',
    imageSrc: 'http://127.0.0.1:5500/images/home/eric-edmeades.jpeg',
    name: 'Eric Edmeades',
    title: 'Entrepreneur and Speaker'
  },
  {
    description: 'A celebrated motivational speaker who has inspired millions through her seminars and her role as a featured teacher in The Secret.',
    imageAlt: 'Lisa Nichols image',
    imageSrc: 'http://127.0.0.1:5500/images/home/lisa-nichols.jpg',
    name: 'Lisa Nichols',
    title: 'International Speaker'
  },
  {
    description: 'Behavioral investigator with Science of People and author of Captivate: The Science of Succeeding with People.',
    imageAlt: 'Vanessa Van Edwards image',
    imageSrc: 'http://127.0.0.1:5500/images/home/vanessa-van-edwards.jpg',
    name: 'Vanessa Van Edwards',
    title: 'Founder of Science of People'
  }
];

for(let i=0; i<data.length; i++){
  const speakerSection = document.querySelector('#speaker');
  const flexItem = document.createElement('div');
  flexItem.className = ('flex-item');
  const image = document.createElement('img');
  image.src = data[i].imageSrc;
  image.alt = data[i].imageAlt;
  flexItem.appendChild(image);


  const flexdiv = document.createElement('div');
  flexdiv.className = ('speaker');
  const h4 = document.createElement('h4');
  h4.textContent = data[i].name;
  flexdiv.appendChild(h4);

  const position = document.createElement('p');
  position.className = ('author-descrip');
  position.textContent = data[i].title;
  flexdiv.appendChild(position);

  const line = document.createElement('div');
  line.className = ('grey-line');
  flexdiv.appendChild(line);

  const flexdesc = document.createElement('p');
  flexdesc.id = ('description');
  flexdesc.textContent = data[i].description;
  flexdiv.appendChild(flexdesc);


  flexItem.appendChild(flexdiv);
  speakerSection.appendChild(flexItem);
}
