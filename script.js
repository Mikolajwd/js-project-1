const arrowBtn = document.querySelector('.arrow')
const arrowIcon = document.querySelector('.fas')
const img = document.querySelector('.item1')
const img2 = document.querySelector('.item2')
const btn = document.querySelector('.btn')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')

const showImg = () => {
    img.classList.toggle('hide')  
}
const hideImg2 = () => {
    img2.classList.toggle('hide2')
}

const addRotate = () => {
    arrowIcon.classList.toggle('rotate')

}



const combinatedFunction = () => {
    showImg()
    hideImg2()
    addRotate()
}


const addDiv = ( )=> {
console.log('hello world');
const newDiv = document.createElement('div')
const newSpan = document.createElement('span')
const newPar = document.createElement('par')
newPar.textContent = 'Hi to jestem ja'
document.body.append(newDiv)
newDiv.append(newSpan)
newSpan.append(newPar)

}

let zmienna = null

console.log(zmienna);
const action = (e) => {
        console.log(e.target.textContent);
        zmienna = e.target.textContent
        console.log(`zmienna została zmieniona na wartość ${zmienna}`);
}

arrowBtn.addEventListener('click', combinatedFunction)
btn.addEventListener('click', addDiv)
btn2.addEventListener('click', action)
btn3.addEventListener('click', action)
btn4.addEventListener('click', action)

