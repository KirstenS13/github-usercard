/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

//send GET request with axios
/* axios.get('https://api.github.com/users/KirstenS13')
  //console.log successful GET request
  .then((response) => {
    console.log(response)
  })
  //console.log failed GET request
  .catch((error) => {
    console.log(error)
  }) */

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
  //create card div
  const card = document.createElement('div');
  //give card div class 'card'
  card.classList.add('card');

  //create img
  const cardImg = document.createElement('img');
  //give img src attribute
  cardImg.src = userInfoObj.imageUrl;

  //create card-info div
  const cardInfo = document.createElement('div');
  //give card-info div class 'card-info'
  cardInfo.classList.add('card-info');

  //create h3
  const name = document.createElement('h3');
  //give h3 class of 'name'
  name.classList.add('name');

  //create username p element
  const username = document.createElement('p');
  //give first p element class of 'username'
  username.classList.add('username');
  username.textContent = userInfoObj.username;

  //create location p element
  const location = document.createElement('p');
  location.textContent = `Location: ${userInfoObj.location}`;

  //create profile p element
  const profile = document.createElement('p');
  profile.textContent = 'Profile: ';

  //create followers p element
  const followers = document.createElement('p');
  followers.textContent = `Followers: ${userInfoObj.followers}`;

  //create following p element
  const following = document.createElement('p');
  following.textContent = `Following: ${userInfoObj.following}`;

  //create bio p element
  const bio = document.createElement('p');
  bio.textContent = `Bio: ${userInfoObj.bio}`;

  //create an 'a' element
  const profileLink = document.createElement('a');
  //give 'a' element an href attribute
  profileLink.href = userInfoObj.address;
  profileLink.textContent = userInfoObj.address;

  //append 'a' element to third p element
  profile.appendChild(profileLink);
  
  //append h3 and 6 p elements to card-info div
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  //append img and card-info div to card div
  card.appendChild(cardImg);
  card.appendChild(cardInfo);
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
