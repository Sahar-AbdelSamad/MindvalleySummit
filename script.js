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
listItem.classList.add('homeA')
listItem.classList.toggle('homeLink')
home.appendChild(listItem);
navUl.insertBefore(listItem, navUl.childNodes[0]);
navUl.appendChild(home);
};

hamburger.addEventListener('click', toggleMenu);
closeItem.addEventListener('click', toggleMenu);
