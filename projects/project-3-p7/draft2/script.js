// Variables
const airtableApiKey = "keyq095ICbo9uqXIh"

const airtableDatabaseUrl = "https://api.airtable.com/v0/appVWw7VUdnFtziOF/photos"

const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey

const illustrationContainerElement = document.querySelector('#photos')

const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then((response) => {
    return response.json()
})
jsonPromise.then((data) => {
    const records =data.records
    for (let index = 0; index < records.length; index++) {
      
        const imageUrl = records[index].fields.Attachments[0].url
        
        const containerElement = document.createElement('div')
        containerElement.classList.add('container')

        const imageElement = document.createElement('img')
        imageElement.classList.add('image')
        imageElement.setAttribute('src', imageUrl)

        illustrationContainerElement.appendChild(containerElement)

        containerElement.appendChild(imageElement)

        
    }
})

