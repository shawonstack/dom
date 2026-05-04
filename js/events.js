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

document.getElementById('btn-hex').addEventListener('click', function hex() {
  document.body.style.backgroundColor = '#BBF2E9';
});

document
  .getElementById('green-color')
  .addEventListener('click', function clickgreen() {
    const updateh1 = document.getElementById('btn-work');
    updateh1.innerText = 'Its finally worked when i click te  button';
    updateh1.style.color = 'blue';
  });

document
  .getElementById('btn-open-ai')
  .addEventListener('click', function ExploreAI() {
    const h2Container = document.getElementById('open-ai');
    h2Container.innerText = 'Chat GPT, Claude, DeepSeek, Grok, Meta Ai ';
    h2Container.style.color = '#4926a8';
  });

document
  .getElementById('btn-login')
  .addEventListener('click', function login() {
    const userLoginEl = document.getElementById('user-login-p');
    userLoginEl.innerText = 'user login successfully.';
    userLoginEl.style.color = 'green';
  });
