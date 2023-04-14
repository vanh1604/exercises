const res = document.getElementById('result');
const btn = document.getElementById('submit');
const widthElm = document.getElementById('width')
const heightElm = document.getElementById('height')

btn.addEventListener('click', () => {
  const width = Number(widthElm.value);
  const height = Number(heightElm.value);
  res.style.width = `${width}px`;
  res.style.height = `${height}px`;
});
