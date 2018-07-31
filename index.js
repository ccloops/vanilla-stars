'use strict';

let starOne = document.getElementById('star-one');
let starTwo = document.getElementById('star-two');
let starThree = document.getElementById('star-three');
let starFour = document.getElementById('star-four');
let starFive = document.getElementById('star-five');

const oneIsHighlighted = () => {
  starOne.className = 'highlighted';
}

const oneIsNotHighlighted = () => {
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

const threeIsHighlighted = () => {
  starOne.className = 'highlighted';
  starTwo.className = 'highlighted';
  starThree.className = 'highlighted';
}

const threeIsNotHighlighted = () => {
  starOne.className = '';
  starTwo.className = '';
  starThree.className = '';
}

starOne.addEventListener('mouseenter', oneIsHighlighted);
starOne.addEventListener('mouseleave', oneIsNotHighlighted);

starTwo.addEventListener('mouseenter', twoIsHighlighted);
starTwo.addEventListener('mouseleave', twoIsNotHighlighted);

starThree.addEventListener('mouseenter', threeIsHighlighted);
starThree.addEventListener('mouseleave', threeIsNotHighlighted);