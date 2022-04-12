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
// const img = document.createElement("img")
// img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 20 - 10) + "deg)"

const sub1 = document.querySelector('#sub1')
const sub2 = document.querySelector('#sub2')
const sub3 = document.querySelector('#sub3')

sub1.addEventListener('click', changeBackground);
function changeBackground()
{
    var image = document.querySelector(body);
    if (image.src == "background/container.jpeg")
    {
        image.src = "background/brick.jpeg";
    }
    else
    {
        image.src = "background/container.jpeg";
    }
}