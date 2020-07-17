let newDiv = document.createElement('div')
newDiv.className = 'Go West'
newDiv.id = 1
newDiv.append('Go West')

let goWestimg = document.createElement('img')
goWestimg.src = './assets/images/download.jpeg'
goWestimg.style.textAlign = 'center'
goWestimg.style.display = 'block'
goWestimg.style.margin = 'auto'
goWestimg.style.height = '300px'
goWestimg.style.width = '300px'


let addPassengerButton = document.createElement('button')
addPassengerButton.className = 'addPassenger'
addPassengerButton.append('Board Wagon')
addPassengerButton.addEventListener('click', function () {
    console.log('Board Wagon Clicked')
//const aboard = document.querySelector('boardwagon')
let aboard = document.querySelector('traveler').value
})

let huntButton = document.createElement('button')
huntButton.className = 'hunt'
huntButton.append('Hunt')
huntButton.addEventListener('click', function () {
    console.log('Hunt Clicked')
})
let consumeButton = document.createElement('button')
consumeButton.className = 'consume'
consumeButton.append('Supplies')
consumeButton.addEventListener('click', function () {
    console.log('Supplies Clicked')
})

let loadButton = document.createElement('button')
loadButton.className = 'onboard'
loadButton.append('Manifest')
loadButton.addEventListener('click', function () {
    console.log('Manifest clicked')
    let manifestData = this.innerHTML.value
})


let sectionElement = document.querySelector('section')
sectionElement.append(newDiv, goWestimg, addPassengerButton, huntButton, consumeButton, loadButton)

//figure out how to make input values tied to capacity for wagon or wagons?
//addpassengerButton.addEventListener('click', function(){
//let boardWagon = document.querySelector('userInput')
//})