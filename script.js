const arrowBtn = document.querySelector('.arrow')
const arrowIcon = document.querySelector('.fas')
const img = document.querySelector('.item1')
const img2 = document.querySelector('.item2')

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

arrowBtn.addEventListener('click', combinatedFunction)