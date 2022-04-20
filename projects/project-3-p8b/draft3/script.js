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
        const Background = records[index].fields.Background[0]
        
        const containerElement = document.createElement('div')
        containerElement.classList.add('container')

        const imageElement = document.createElement('img')
        imageElement.classList.add('image')
        imageElement.setAttribute('src', imageUrl)
        
        illustrationContainerElement.appendChild(containerElement)

        containerElement.appendChild(imageElement)

        const streetBackgrounds = records.filter((record) => {
          return record.fields.Background === "street" 
        })
        
        
    }
})

const sub1 = document.querySelector('#sub1')
const sub2 = document.querySelector('#sub2')
const sub3 = document.querySelector('#sub3')

sub1.innerHTML = streetBackgrounds

console.log(streetBackgrounds);


// function hideBook(book, div) {
//     // find the book detail element
//     const bookDetail = document.querySelectorAll(".container");
  
//     // hide the book info
//     bookDetail.classList.add("hidden");
  
//     // remove the .active class from any book spines that have it
//     const shelf = document.getElementById("shelf");
//     const bookSpines = shelf.getElementsByClassName("active");
//     for (const bookSpine of bookSpines) {
//       bookSpine.classList.remove("active");
//     }
//   }

// document.querySelector("#categories").addEventListener("click", () => {
//     // loop through the books loaded from the Airtable API
//     const bookSpines = document.querySelectorAll(".container");
//     // hide the book detail data in case it clashes
//     hideBook();
//     // removes each book currently on the shelf
//     bookSpines.forEach(book => {
//       book.remove();
//     });
//     // clear the array to make way for new info
//     books = [];
//     base("books").select({
//       view: "main"
//     }).eachPage(gotPageOfBooks, gotAllBooks);
//   });
  
//   document.querySelector("#sub1").addEventListener("click", () => {
//     // loop through the books loaded from the Airtable API
//     const bookSpines = document.querySelectorAll(".book-spine");
//     hideBook();
//     bookSpines.forEach(book => {
//       book.remove();
//     });
//     books = [];
//     base("books").select({
//       view: "street"
//     }).eachPage(gotPageOfBooks, gotAllBooks);
//   });
  
//   document.querySelector("#sub2").addEventListener("click", () => {
//     // loop through the books loaded from the Airtable API
//     const bookSpines = document.querySelectorAll(".book-spine");
//     hideBook();
//     bookSpines.forEach(book => {
//       book.remove();
//     });
//     books = [];
//     base("books").select({
//       view: "shop"
//     }).eachPage(gotPageOfBooks, gotAllBooks);
//   });
  
//   document.querySelector("#sub3").addEventListener("click", () => {
//     // loop through the books loaded from the Airtable API
//     const bookSpines = document.querySelectorAll(".book-spine");
//     hideBook();
//     bookSpines.forEach(book => {
//       book.remove();
//     });
//     books = [];
//     base("books").select({
//       view: "solid"
//     }).eachPage(gotPageOfBooks, gotAllBooks);
//   });
  