const airtableApiKey = "keyq095ICbo9uqXIh";

const tableUrl = "https://api.airtable.com/v0/appKDbhuQSdqvvjiL/Table";

const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;
console.log(authenticatedUrl)

const foregroundColors = ["#604F4F", "#895141", "#353A4C"] 
const backgroundColors = ["#EADFC9", "#80825B"]

const bodyElement = document.querySelector('body')
const applicationElement = document.querySelector('#application')
const adjectiveElement = document.querySelector('#adjective')
const typeElement = document.querySelector('#type')
const nameElement = document.querySelector('#name')
const regionElement = document.querySelector('#region')
const verbElement = document.querySelector('#verb')
const adverbElement = document.querySelector('#adverb')

const foregroundColor = foregroundColors[Math.floor(Math.random()*foregroundColors.length)]
const backgroundColor = backgroundColors[Math.floor(Math.random()*backgroundColors.length)]

bodyElement.style.color = foregroundColor
bodyElement.style.backgroundColor = backgroundColor


fetch(authenticatedUrl)
.then((response) => response.json())

.then((data) => {
    const words = data.records
    const adjectives = words.filter((word) => {
        return word.fields.Type === 'adjective'
    })
    // Filter for Word Types 
    const names = words.filter((word) => {
        return word.fields.Type === 'name'
    })
    const types = words.filter((word) => {
        return word.fields.Type === 'type'
    })    
    const regions = words.filter((word) => {
        return word.fields.Type === 'region'
    })
    const verbs = words.filter((word) => {
        return word.fields.Type === 'verb'
    })
    const adverbs = words.filter((word) => {
        return word.fields.Type === 'adverb'
    })

adjectiveElement.innerHTML = adjectives[Math.floor(Math.random()*adjectives.length)].fields.Copy
typeElement.innerHTML = types[Math.floor(Math.random()*types.length)].fields.Copy
nameElement.innerHTML = names[Math.floor(Math.random()*names.length)].fields.Copy
regionElement.innerHTML = regions[Math.floor(Math.random()*regions.length)].fields.Copy
verbElement.innerHTML = verbs[Math.floor(Math.random()*verbs.length)].fields.Copy
adverbElement.innerHTML = adverbs[Math.floor(Math.random()*adverbs.length)].fields.Copy
applicationElement.classList.add('loaded')
})
.catch((error) => {
console.log(error);
});
