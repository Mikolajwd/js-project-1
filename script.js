const arrowBtn = document.querySelector('.arrow')
const arrowIcon = document.querySelector('.fas')
const img = document.querySelector('.item1')
const img2 = document.querySelector('.item2')
const btn = document.querySelector('.btn')

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

arrowBtn.addEventListener('click', combinatedFunction)
btn.addEventListener('click', addDiv)
