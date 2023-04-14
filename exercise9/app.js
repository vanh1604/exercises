const firstNum = document.getElementById('firstNum');
const secondNum = document.getElementById('secondNum');
const res = document.getElementById('result');
const btn = document.getElementById('submit');


btn.addEventListener('click', () => {
  res.innerText = firstNum.value + secondNum.value;
});
