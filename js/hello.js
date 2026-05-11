// const items = document.getElementsByClassName('menu-item');
// for (const item of items) {
//   const newItem = item;
//   console.log(newItem);
//   newItem.style.color = 'red';
// }

// let creatSection = document.createElement('section');

// // ul create
// let creatUl = document.createElement('ul');

// // ul ke section er moddhe add
// creatSection.appendChild(creatUl);

// // first li
// let li1 = document.createElement('li');
// li1.innerText = 'football';

// // second li
// let li2 = document.createElement('li');
// li2.innerText = 'cricket';

// // third li
// let li3 = document.createElement('li');
// li3.innerText = 'badminton';

// // সব li ul এর ভিতরে add
// creatUl.appendChild(li1);
// creatUl.appendChild(li2);
// creatUl.appendChild(li3);

// // শেষে section কে body তে add
// document.body.appendChild(creatSection);

document.getElementById('btn-container').addEventListener('click', function () {
  let creatSection = document.createElement('section');
  // append the ul
  creatSection.innerHTML = `
<ul>
  <li>fifa world cup 2026</li>
  <li>franc</li>
  <li>spain</li>
  <li>argntina</li>
  <li>brazil</li>
</ul>
`;
  document.body.appendChild(creatSection);
});
