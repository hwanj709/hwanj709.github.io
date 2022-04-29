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

        photoContainer.appendChild(containerElement)

        // const streetBackgrounds = records.filter((record) => {
        //   return record.fields.Background === "street" 
        // })
        containerElement.appendChild(imageElement)
            const streetBackgrounds = records[index].fields.Street
    }
document.getElementById("street-button").addEventListener("click", showStreetImages)
document.getElementById("shop-button").addEventListener("click", showShopImages)
document.getElementById("solid-button").addEventListener("click", showSolidImages)
document.getElementById("allphotos-button").addEventListener("click", showAllImages)
      function showStreetImages() {
        for (let index = 0; index < records.length; index++) {
          const imageID = document.getElementById(records[index].id);
          imageID.parentElement.style.display = "block" // ian
          imageID.style.display = "block";
        }
        for (let index = 0; index < records.length; index++) {
          const streetField = records[index].fields.Street
          if (streetField!=true){
            const imageID = document.getElementById(records[index].id)
                    console.log(imageID)
                    imageID.parentElement.style.display = "none" // ian
                    imageID.style.display = "none";
          }
        }
      }
      function showShopImages() {
        for (let index = 0; index < records.length; index++) {
        const imageID = document.getElementById(records[index].id);
        imageID.parentElement.style.display = "block"
        imageID.style.display = "block";
      }
        for (let index = 0; index < records.length; index++) {
        const shopField = records[index].fields.Shop
        if (shopField!=true){
          const imageID = document.getElementById(records[index].id)
                  console.log(imageID)
                  imageID.parentElement.style.display = "none"
                  imageID.style.display = "none";
        }
      }
    }
    function showSolidImages() {
      for (let index = 0; index < records.length; index++) {
      const imageID = document.getElementById(records[index].id);
      imageID.parentElement.style.display = "block"
      imageID.style.display = "block";
    }
      for (let index = 0; index < records.length; index++) {
      const solidField = records[index].fields.Solid
      if (solidField!=true){
        const imageID = document.getElementById(records[index].id)
        // const containerElement = document.querySelector('.container')
                console.log(imageID)
                imageID.parentElement.style.display = "none"
                imageID.style.display = "none";
                // containerElement.style.display = "none";

      }
    }
  }
  function showAllImages() {
    for (let index = 0; index < records.length; index++) {
    const imageID = document.getElementById(records[index].id);
    imageID.parentElement.style.display = "block"
    imageID.style.display = "block";
  }
    for (let index = 0; index < records.length; index++) {
    const allImagesField = records[index].fields.Allphotos
    if (allImagesField!=true){
      const imageID = document.getElementById(records[index].id)
              console.log(imageID)
              imageID.style.display = "none";
    }
  }
}
        
    
})

// #sub1.addEventListener(“click”, showStreetBgOnly);
// function showStreetBgOnly() {
  
// }


//get imageID, checkbox for different filters, For loop twice: one with display none and one with display block