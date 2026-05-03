const bio = {
  name: 'abul mia',
  id: 3344,
  study: 'cse',
  hobby: function (play) {
    console.log('his hobby is playing ', play);
  },
};
// const liItem = document.getElementsByTagName('li');
// for (const li of liItem) {
//   console.log(li.innerText);
// }

// const newList = document.getElementsByTagName('li');
// for (list of newList) {
//   console.log(list.innerText);
// }

const day = document.getElementById('morning');
console.log(
  (day.innerHTML = 'Early wake up person has more powerfull than others'),
);

const multipleChange = document.getElementsByClassName('mgs');
for (change of multipleChange) {
  console.log((change.innerText = 'pragraph'));
}
