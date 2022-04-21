// Variables
const airtableApiKey = "keyq095ICbo9uqXIh"

const airtableDatabaseUrl = "https://api.airtable.com/v0/appVWw7VUdnFtziOF/photos"

const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey

// const illustrationContainerElement = document.querySelector('#photos')
const photoContainer = document.querySelector('#photos')

const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then((response) => {
    return response.json()
})
jsonPromise.then((data) => {
    const records = data.records
    console.log(records)

    for (let index = 0; index < records.length; index++) {
      const imageUrl = records[index].fields.Attachments[0].url
                const imageID = records[index].id

        // const Background = records[index].fields.Background[0]
        
        const containerElement = document.createElement('div')
        containerElement.classList.add('container')

        const imageElement = document.createElement('img')
        imageElement.classList.add('image')
        imageElement.setAttribute('src', imageUrl)
                imageElement.setAttribute('id',imageID)
                const allImages = document.querySelectorAll('img')
        
        // illustrationContainerElement.appendChild(containerElement)

        photoContainer.appendChild(imageElement)

        const streetBackgrounds = records.filter((record) => {
          return record.fields.Background === "street" 
        })
        
//         const sub1 = document.querySelector('#sub1')
// const sub2 = document.querySelector('#sub2')
// const sub3 = document.querySelector('#sub3')

// sub1.innerHTML = streetBackgrounds

        
    }
})

// #sub1.addEventListener(“click”, showStreetBgOnly);
// function showStreetBgOnly() {
  
// }


//get imageID, checkbox for different filters, For loop twice: one with display none and one with display block