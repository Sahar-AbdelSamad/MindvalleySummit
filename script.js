const hamburger = document.querySelector('.nav-mobile');
const navigation = document.querySelector('.nav-desktop');
const navUl = document.querySelector('.nav-desktop > ul');
const closeItem = document.querySelector('.close');

const home = document.createElement('li');
const listItem = document.createElement('a');
listItem.innerText = ('Home');
listItem.href = ('index.html');
home.appendChild(listItem);
navUl.insertBefore(listItem, navUl.childNodes[0]);
navUl.appendChild(home);

const toggleMenu = () => {
  navigation.classList.toggle('menu');
};

hamburger.addEventListener('click', toggleMenu);
closeItem.addEventListener('click', toggleMenu);
