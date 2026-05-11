const items = document.getElementsByClassName('menu-item');
for (const item of items) {
  const newItem = item;
  console.log(newItem);
  newItem.style.color = 'red';
}
