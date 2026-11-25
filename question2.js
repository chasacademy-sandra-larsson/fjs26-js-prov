// 2.1  Spread med arrayer (2p)
// Skriv klart funktionen 'addUnique' som tar emot en array och ett nytt värde.
// Om värdet inte redan finns i arrayen ska funktionen returnera en ny array
// med värdet tillagt sist. Om värdet redan finns ska den returnera en kopia
// av arrayen utan ändringar.
// Använd spread operatorn. Originalarrayen får inte ändras.

const tags = ["javascript", "css", "html"];

function addUnique(array, value) {
    // Din kod här:

}
  


// 2.2 Spread med objekt (2p)
// Skriv klart funktionen 'updateBookRating' som tar emot ett bokobjekt och en ny rating.
// Använd spread operatorn och returnera ett nytt objekt med den nya ratingen.
// Originalobjektet får inte ändras.
const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937,
  rating: 4.5
};

function updateBookRating(book, newRating) {
  // Din kod här:


}


  //Test
  //console.log(addUnique(tags, "react")); // Ska logga ["javascript", "css", "html", "react"]
  //console.log(addUnique(tags, "css")); // Ska logga ["javascript", "css", "html"]
  //console.log(addUnique(tags, "css") === tags); // Ska logga false (en kopia, inte samma array)
  //console.log(tags); // Ska fortfarande logga ["javascript", "css", "html"]
  //console.log(updateBookRating(book, 5)); // Ska logga { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, rating: 5 }
  //console.log(book); // Ska fortfarande logga { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, rating: 4.5 }