/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

//send GET request with axios
axios.get('https://api.github.com/users/KirstenS13')
  //console.log successful GET request
  .then((response) => {
    console.log(response)
  })
  //console.log failed GET request
  .catch((error) => {
    console.log(error)
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

//create function to create component from userInfoObj (received from github)
function userCardConstructor(userInfoObj) {
  //give card div class 'card'

  //give img src attribute

  //give card-info div class 'card-info'

  //give h3 class of 'name'

  //give first p element class of 'username'
  //give 6 p elements their textContent

  //give 'a' element an href attribute

  //append 'a' element to third p element
  //append h3 and 6 p elements to card-info div
  //append img and card-info div to card div

  //create card div
  const card = document.createElement('div');

  //create img
  const cardImg = document.createElement('img');

  //create card-info div
  const cardInfo = document.createElement('div');

  //create h3
  const name = document.createElement('h3');

  //create username p element
  const username = document.createElement('p');

  //create location p element
  const location = document.createElement('p');

  //create profile p element
  const profile = document.createElement('p');

  //create followers p element
  const followers = document.createElement('p');

  //create following p element
  const following = document.createElement('p');

  //create bio p element
  const bio = document.createElement('p');

  //create an 'a' element
  const profileLink = document.createElement('a');
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
