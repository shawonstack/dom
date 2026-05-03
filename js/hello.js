// const student = {
//   name: 'abul mia',
//   id: 3344,
//   study: function (subject) {
//     console.log('studying subject is :', subject);
//   },
// };
// const listCollection = document.getElementsByTagName('li');

// console.log(listCollection);
// for (const li of listCollection) {
//   console.log(li.innerText);
// }
// const allHeadings = document.getElementsByTagName('h1');
// console.log(allHeadings);
// for (const heading of allHeadings) {
//   console.log(heading.innerText);
// }

// const orderList = document.getElementsByTagName('li');
// console.log(orderList);
// for (const list of orderList) {
//   console.log(list.innerText);
// }

// const div = document.querySelector('.SE');
// console.log(div.innerText);
// // --------------------//
// const foodHeading = document.getElementById('food-head');
// console.log((foodHeading.innerText = 'Food makes me more happy than ever'));
// const bidesi = document.getElementsByClassName('forgien');
// console.log(bidesi);
// for (const bidesh of bidesi) {
//   console.log((bidesh.innerText = 'am'));
// }
// //---------------------//

// const deshiPlaces = document.getElementsByClassName('visit');
// for (deshi of deshiPlaces) {
//   console.log(deshi.innerText);
// }

// const searching = document.querySelectorAll('.first-class span');
// for (search of searching) {
//   console.log(search.innerText);
// }

// const allplayers = document.querySelectorAll('.players');
// for (const player of allplayers) {
//   console.log(player.innerText);
// }

// const creat = document.createElement('h1');
// creat.innerText = 'im finally make a new list iteam using  javascript';
// creat.style.color = 'red';
// creat.style.backgroundColor = 'gray';
// creat.style.marginLeft = '23px';
// document.body.appendChild(creat);
// //

//main parents dhrbo

const mainContainer = document.getElementById('main-container');
// creat child

const placesSection = document.createElement('section');

// creat h1
const h1 = document.createElement('h1');
h1.innerText = 'hi im shawon';
placesSection.appendChild(h1);

// append the child
mainContainer.appendChild(placesSection);

//  -------
const ulMake = document.createElement('ul');
// -----
const liMake = document.createElement('li');
liMake.innerText = 'yes i con do it better right now';
ulMake.appendChild(liMake);
placesSection.appendChild(ulMake);

//----------------------//making same thing using bactick string ans easy way
const planSection = document.createElement('section');
planSection.innerHTML = `
<ol>
<li>flat 2 room</li>
<li>main bedroom and workstation room</li>
<li>beautiful intrior desgn</li>
<li>lots off taddy</li>
</ol>
`;
document.body.appendChild(planSection);
