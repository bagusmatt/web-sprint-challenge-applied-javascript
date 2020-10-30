// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

// function divCardMaker({topics}) {
//     const divCard = document.createElement("div");
//     divCard.classList.add("tab");
//     document.body.appendChild(divCard);
//     return divCard;
//   }
//   console.log(divCard)

const entryPoint = document.querySelector('.title')

function topicMaker({topics}) {
    const topicCard = document.createElement('div')
    topicCard.textContent = topics
    topicCard.classList.add('tab')

    return topicCard
}

// console.log(topicMaker())

axios
  .get("https://lambda-times-api.herokuapp.com/topics")
  .then(res => {
    // console.log('working', res.data.topics);
    const topic = res.data.topics
    topic.forEach(topics => {
        const topicCard = topicMaker({topics})
        entryPoint.append(topicCard)
    })
    console.log(topic)
  })
  .catch((drama) => {
    console.log(drama);
  });

