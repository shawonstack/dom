const btnRed = document.getElementById('btn-red');
// console.log(btnRed);
btnRed.onclick = function makeRed() {
  document.body.style.backgroundColor = 'red';
};

const btnGreen = document.getElementById('btn-green');
btnGreen.onclick = function green() {
  document.body.style.backgroundColor = '#2B8C2B';
};

const btnYellow = document.getElementById('btn-yellow');
btnYellow.onclick = function yellow() {
  document.body.style.backgroundColor = '#C4BB2D';
};

const btnSubscribe = document.getElementById('subscribe');
btnSubscribe.onclick = function subs() {
  document.body.style.backgroundColor = '#168277';
};
document
  .getElementById('btn-purple')
  .addEventListener('click', function purple() {
    document.body.style.backgroundColor = '#B04EDE';
  });
