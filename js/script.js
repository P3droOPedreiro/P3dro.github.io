const mario = document.querySelector('.mario');
const pipe = document.querySelector ('.pipe')

const jump = () => {
    mario.classList.add ('jump')

setTimeout (() => {
    mario.classList.remove ('jump')
    
    
 }, 700);

}
 
const loop = setInterval (() =>{
const pipePosition = pipe.offsetLeft
const marioPostion = +window.getComputedStyle (mario).bottom.replace('px', "")
console.log (marioPostion)

if (pipePosition <= 243 && marioPostion < 260)  {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
    pipe.style.animation = 'none';
    mario.style.bottom = `${marioPostion}px`;
    mario.src = 'images/game-over.png'
    mario.style.width = '80px'

clearInterval(loop)
}
}, 10)



 
 document.addEventListener ('keydown', jump)