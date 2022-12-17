const foxImg = document.querySelector('#fox')
const foxSays = new Audio('../audio/fox.mp3')
const notFoxImg = document.querySelector('#not-fox')
const name = document.querySelector('#name')

foxImg.addEventListener('click', (evt) => {
  name.textContent = "fox"
  foxSays.volume = .10
  foxSays.play()
})

notFoxImg.addEventListener('click', (evt) => {
  if(evt.target.id !== 'not-fox') {
  const audioElement = new Audio(`../audio/${evt.target.id}.mp3`)
  audioElement.volume = .01
  audioElement.play()
  name.textContent = `${evt.target.id}`
  }
})