const users = [{
    name: "Ruins Greatsword", 
    description: "Originally rubble from a ruin which fell from the sky, this surviving fragment was honed into a weapon.",
    attack: 124
},
{
    name: "Eclipse Shotel", 
    description: "Storied sword and treasure of Castle Sol that depicts an eclipsed sun drained of color.",
    attack: 77, 
},
{
    name: "Grafted Blade Greatsword", 
    description: "Storied sword and treasure of Castle Sol that depicts an eclipsed sun drained of color.",
    attack: 157, 
},]

const usersContainerElement = document.querySelector('#users')
const showAttackAsDollarsButtonElement = document.querySelector('#attack-as-dollars')
const topTierButtonElement = document.querySelector('#toptier')
const sortAscendingButtonElement = document.querySelector('#sort-ascending')
const sortDescendingButtonElement = document.querySelector('#sort-descending')

const removeUsers = () => {
    usersContainerElement.innerHTML = ""
}
const addUsers = (usersArray) => {
for (let index = 0; index < usersArray.length; index++) {

    const userContainerElement = document.createElement('div')
    userContainerElement.classList.add('user')

    const nameElement = document.createElement('p')
    nameElement.innerHTML = 'Name:' + usersArray[index].name

    const descriptionElement = document.createElement('p')
    descriptionElement.innerHTML = 'Description:' + usersArray[index].description

    const attackElement = document.createElement('p')
    attackElement.innerHTML = 'Attack: ' + usersArray[index].attack

    userContainerElement.appendChild(nameElement)
    userContainerElement.appendChild(descriptionElement)
    userContainerElement.appendChild(attackElement)
    usersContainerElement.appendChild(userContainerElement)
    }
}

//MAP
const usersWithAttackAsDollars = users.map((user) =>{
    const newUser = {
        name: user.name,
        description: user.description,
        attack: "$" + user.attack / 10
    }
    return newUser
})

//FILTER
const userTopTier  = users.filter((user) => {
    return user.attack > 100
})

//SORT
const usersSortedByNameAscending = users.sort((userA, userB) => {
    if(userA.name > userB.name) {
        return 1
    }

    if(userA.name < userB.name) {
        return -1 
    }

    if(userA.name === userB.name) {
        return 0 
    }
})
const copyOfUsersSortedByNameAscending = usersSortedByNameAscending.slice()
const usersSortedByNameDescending = copyOfUsersSortedByNameAscending.reverse()

addUsers(users)

showAttackAsDollarsButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersWithAttackAsDollars)
})

topTierButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(userTopTier)
})

sortAscendingButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersSortedByNameAscending)
})

sortDescendingButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersSortedByNameDescending)
})



