let newDiv = document.createElement('div')
newDiv.className = 'Go West'
newDiv.id = 1
newDiv.append('Go West')

let goWestimg = document.createElement('img')
goWestimg.src = './assets/images/headed west.jpeg'
goWestimg.style.textAlign = 'center'
goWestimg.style.display = 'block'
goWestimg.style.margin = 'auto'


let addPassengerButton = document.createElement('button')
addPassengerButton.className = 'addPassenger'
addPassengerButton.append('Board Wagon')


let huntButton = document.createElement('button')
huntButton.className = 'hunt'
huntButton.append('Hunt')

let consumeButton = document.createElement('button')
consumeButton.className = 'consume'
consumeButton.append('Eat')

let loadButton = document.createElement('button')
loadButton.className = 'onboard'
loadButton.append('Wagon Load')



let sectionElement = document.querySelector('section')
sectionElement.append(newDiv, goWestimg, addPassengerButton, huntButton, consumeButton, loadButton)

//figure out how to make input values tied to capacity for wagon or wagons?
//addpassengerButton.addEventListener('click', function(){
//let boardWagon = document.querySelector('userInput')
//})