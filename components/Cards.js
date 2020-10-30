// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((res) => {
    //   const divs foreach ehre
    console.log(res.data.articles);
    // console.log(divs)
  })
  .catch((drama) => {
    console.log(drama);
  });

function divMaker(obj) {
  //   elements
  const divCard = document.createElement("div");
  const divHeadline = document.createElement("div");
  const divAuthor = document.createElement("div");
  const divImage = document.createElement("div");
  const image = document.createElement("div");
  const spanAuthor = document.createElement("span");
  // append
  divCard.appendChild(divHeadline);
  divCard.appendChild(divAuthor);
  divAuthor.appendChild(divImage);
  divAuthor.appendChild(spanAuthor);
  divImage.appendChild(image);
  //classes
  divCard.classList.add("card");
  divHeadline.classList.add("headline");
  divAuthor.classList.add("author");
  divImage.classList.add("img-container");
  // content
  divHeadline.textContent = obj.headline;
  divImage.src = obj.authorPhoto;
  spanAuthor.textContent = `By {obj.authorName}`;

  return divCard;
}