// 'use strict';

// let starOne = document.getElementById('star-one');
// let starTwo = document.getElementById('star-two');
// let starThree = document.getElementById('star-three');
// let starFour = document.getElementById('star-four');
// let starFive = document.getElementById('star-five');

// const oneIsHighlighted = () => {
//   starOne.className = 'highlighted';
// }

// const oneIsNotHighlighted = () => {
//   starOne.className = '';
// }

// const twoIsHighlighted = () => {
//   starOne.className = 'highlighted';
//   starTwo.className = 'highlighted';
// }

// const twoIsNotHighlighted = () => {
//   starOne.className = '';
//   starTwo.className = '';
// }

// const threeIsHighlighted = () => {
//   starOne.className = 'highlighted';
//   starTwo.className = 'highlighted';
//   starThree.className = 'highlighted';
// }

// const threeIsNotHighlighted = () => {
//   starOne.className = '';
//   starTwo.className = '';
//   starThree.className = '';
// }

// const fourIsHighlighted = () => {
//   starOne.className = 'highlighted';
//   starTwo.className = 'highlighted';
//   starThree.className = 'highlighted';
//   starFour.className = 'highlighted';
// }

// const fourIsNotHighlighted = () => {
//   starOne.className = '';
//   starTwo.className = '';
//   starThree.className = '';
//   starFour.className = '';
// }

// const fiveIsHighlighted = () => {
//   starOne.className = 'highlighted';
//   starTwo.className = 'highlighted';
//   starThree.className = 'highlighted';
//   starFour.className = 'highlighted';
//   starFive.className = 'highlighted';
// }

// const fiveIsNotHighlighted = () => {
//   starOne.className = '';
//   starTwo.className = '';
//   starThree.className = '';
//   starFour.className = '';
//   starFive.className = '';
// }


// starOne.addEventListener('mouseenter', oneIsHighlighted);
// starOne.addEventListener('mouseleave', oneIsNotHighlighted);

// starTwo.addEventListener('mouseenter', twoIsHighlighted);
// starTwo.addEventListener('mouseleave', twoIsNotHighlighted);

// starThree.addEventListener('mouseenter', threeIsHighlighted);
// starThree.addEventListener('mouseleave', threeIsNotHighlighted);

// starFour.addEventListener('mouseenter', fourIsHighlighted);
// starFour.addEventListener('mouseleave', fourIsNotHighlighted);

// starFive.addEventListener('mouseenter', fiveIsHighlighted);
// starFive.addEventListener('mouseleave', fiveIsNotHighlighted);



const productRating = document.getElementById('product1');
const stars = productRating.querySelectorAll('.star');
let rating = 0;

window.addEventListener('click', e => {
  if (!e.target.matches('.star')) return;
  e.preventDefault();

  const starID = parseInt(e.target.getAttribute('data-star'));

  removeClassFromElements('is-active', stars);
  highlightStars(starID);

  rating = starID;
});

window.addEventListener('mouseover', e => {
  if (!e.target.matches('.star')) return;

  removeClassFromElements('is-active', stars);
  const starID = parseInt(e.target.getAttribute('data-star'));
  highlightStars(starID);
});

productRating.addEventListener('mouseleave', e => {
  removeClassFromElements('is-active', stars);
  if (rating === 0) return;
  highlightStars(rating);
});


function highlightStars(starID) {
  for (let i = 0; i < starID; i++) {
    stars[i].classList.add('is-active')
  }
}

function removeClassFromElements(className, elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove(className)
  }
}
