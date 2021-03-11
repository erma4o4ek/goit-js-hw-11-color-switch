const refs = {
  startBtn: document.querySelector('button[data-action="start"'),
  stopBtn: document.querySelector('button[data-action="stop"'),
},
colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
],
randomIntegerFromInterval = (max) => {
  return Math.floor(Math.random() * (max + 1));
  
},
setRandomColor = () => {
  const color = colors[randomIntegerFromInterval(colors.length - 1)]
  console.log(color)
  document.body.style.backgroundColor = color
}

let interval = null

refs.startBtn.addEventListener('click', e => interval = interval ?
interval :
setInterval(() => setRandomColor(), 1000))

refs.stopBtn.addEventListener('click', e => clearInterval(interval))