const airtableApiKey = "keyq095ICbo9uqXIh";

const tableUrl = "https://api.airtable.com/v0/appKDbhuQSdqvvjiL/Table";

const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;
console.log(authenticatedUrl)


const bodyElement = document.querySelector('body')
const applicationElement = document.querySelector('#application')
const adjectiveElement = document.querySelector('#adjective')
const typeElement = document.querySelector('#type')
const nameElement = document.querySelector('#name')
const regionElement = document.querySelector('#region')
const verbElement = document.querySelector('#verb')
const adverbElement = document.querySelector('#adverb')

fetch(authenticatedUrl)
  .then((res) => res.json())
  .then((data) => {
    const words = data.records;
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
});
