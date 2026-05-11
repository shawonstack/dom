// const items = document.getElementsByClassName('menu-item');
// for (const item of items) {
//   const newItem = item;
//   console.log(newItem);
//   newItem.style.color = 'red';
// }

let buttonName = document
  .getElementById('btn-container')
  .addEventListener('click', function () {
    let heading = document.getElementById('h1-container');
    document.body.style.backgroundColor = 'red';
    heading.style.color = 'white';
    heading.innerText = 'heading color goes to white';
  });
