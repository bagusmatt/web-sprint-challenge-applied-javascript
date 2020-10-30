// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

// const entryPoint = document.querySelector('.header-container')

function Header() {
      // create elements
  const headerCard = document.createElement("div");
  const spanText = document.createElement("span");
  const h1Text = document.createElement("h1");
  const span2Text = document.createElement("span");
  // structure elements
//   headerCard.prepend(header-container)
//   headerCard.appendChild('.header-container')
  headerCard.appendChild(spanText);
  headerCard.appendChild(h1Text);
  headerCard.appendChild(span2Text);
  // add class names
  headerCard.classList.add("header");
  spanText.classList.add("date");
  span2Text.classList.add("temp");
  // add content
  spanText.textContent = "MARCH 28, 2020";
  h1Text.textContent = "Lambda Times";
  span2Text.textContent = "98";

  return headerCard;
}
// entryPoint.appendChild(headerCard)
document.body.prepend(Header());
// console.log(Header());