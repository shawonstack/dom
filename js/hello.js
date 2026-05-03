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
// console.log(
//   (day.innerHTML = 'Early wake up person has more powerfull than others'),
// );

// const multipleChange = document.getElementsByClassName('mgs');
// for (change of multipleChange) {
//   console.log((change.innerText = 'pragraph'));
// }

// const sectionAll = document.querySelector('.section-container p');
// console.log(
//   (sectionAll.innerText =
//     'morning shows the days, because  if any person ge early in the morning, he will get too much time than othes, and he anage and utilize those time proprly'),
// );
const p = document.getElementById('text');
console.log(p.parentNode);
p.parentNode.style.background = 'blue';

const creatH1 = document.createElement('h1');
creatH1.innerText = 'Creat h1 using javascript';
const div = document.getElementById('shawon');
div.appendChild(creatH1);
