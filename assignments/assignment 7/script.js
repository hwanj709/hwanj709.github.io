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

const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then((response) => {
    return response.json()
})
jsonPromise.then((data) => {
    const records =data.records
    for (let index = 0; index < records.length; index++) {
      
     }
})