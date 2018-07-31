'use strict';

let starOne = document.getElementById('star-one');
let starTwo = document.getElementById('star-two');
let starThree = document.getElementById('star-three');
let starFour = document.getElementById('star-four');
let starFive = document.getElementById('star-five');

const oneIsHighlighted = () => {
  starOne.className = 'highlighted';
}

const OneIsNotHighlighted = () => {
  starOne.className = '';
}

const twoIsHighlighted = () => {
  starOne.className = 'highlighted';
  starTwo.className = 'highlighted';
}

const twoIsNotHighlighted = () => {
  starOne.className = '';
  starTwo.className = '';
}

starOne.addEventListener('mouseenter', oneIsHighlighted);
starOne.addEventListener('mouseleave', OneIsNotHighlighted);

starTwo.addEventListener('mouseenter', twoIsHighlighted);
starTwo.addEventListener('mouseleave', twoIsNotHighlighted);