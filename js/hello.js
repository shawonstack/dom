// const bio = {
//   name: 'abul mia',
//   id: 3344,
//   study: 'cse',
//   hobby: function (play) {
//     console.log('his hobby is playing ', play);
//   },
// };
// const liItem = document.getElementsByTagName('li');
// for (const li of liItem) {
//   console.log(li.innerText);
// }

// const newList = document.getElementsByTagName('li');
// for (list of newList) {
//   console.log(list.innerText);
// }

// const day = document.getElementById('morning');
// console
//   .log
//   // (day.innerHTML = 'Early wake up person has more powerfull than others'),
//   ();

// const multipleChange = document.getElementsByClassName('mgs');
// for (change of multipleChange) {
//   console.log((change.innerText = 'pragraph'));
// }

// const sectionAll = document.querySelector('.section-container p');
// console.log(
//   (sectionAll.innerText =
//     'morning shows the days, because  if any person ge early in the morning, he will get too much time than othes, and he anage and utilize those time proprly'),
// );
// const p = document.getElementById('text');
// console.log(p.parentNode);
// p.parentNode.style.background = 'blue';

// const creatH1 = document.createElement('h1');
// creatH1.innerText = 'Creat h1 using javascript';
// const div = document.getElementById('shawon');
// div.appendChild(creatH1);

// const mainSection = document.getElementById('main-section');
// const visitPlaces = document.createElement('section');
// visitPlaces.innerHTML = `
// <h1>What is my actual dream? </h1>
// <p>My actual dram is, i will visit so many beautiful places, plces can be sea, the mountain view, the snow covered landscaps. I think they just have a different kind of magic. me my mom and dad an my wife that want to visit these places. i also see ashes in australia with my dad. my dad loves ashes so much. </p>
// <ul>
// <li>Mekka</li>
// <li>Madina</li>
// <li>Australia</li>
// <li>japan</li>
// <li>nepal</li>
// <li>maldip</li>
// </ul>
// `;
// mainSection.appendChild(visitPlaces);

// const listItem = document.getElementsByClassName('list-item');
// listItem.style.color = 'red';

// document.getElementById('btn-count').addEventListener('click', function () {
//   const countP = document.getElementById('count');
//   let current = parseInt(countP.innerText);
//   current++;
//   countP.innerText = current;
// });

// // -------------------------------
// document.getElementById('btn-double').addEventListener('click', function () {
//   const doubleP = document.getElementById('count-double');
//   let currentP = parseInt(doubleP.innerText);
//   currentP += 2;
//   doubleP.innerText = currentP;
// });
// document.getElementById('red').addEventListener('click', function () {
//   document.body.style.backgroundColor = '#e55d5d';
// });

// document.getElementById('blue').addEventListener('click', function () {
//   document.body.style.backgroundColor = '#5d9ee5';
// });

// document.getElementById('green').addEventListener('click', function () {
//   document.body.style.backgroundColor = '#5de57b';
// });

// document.getElementById('yellow').addEventListener('click', function () {
//   document.body.style.backgroundColor = '#e5e55d';
// });
let buttons = document.querySelectorAll('.color-btn');

buttons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.body.style.backgroundColor = btn.id;
  });
});

const newH1 = document.createElement('h1');
newH1.innerText = 'Hello, World!';
document.body.appendChild(newH1);
newH1.style.color = 'red';
