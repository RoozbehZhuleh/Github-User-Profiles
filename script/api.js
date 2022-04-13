const API_URL = "https://api.github.com/users/";

let btnSearch = document.querySelector("#btn-search");
let inputSearch = document.querySelector("#username");
let imgAvatar = document.querySelector("#avatar");
let realName = document.querySelector("#real-name");
let isHireable = document.querySelector("#hire");
let twitterHandle = document.querySelector("#twitter");
let followerNumber = document.querySelector("#followers");
let followingNumber = document.querySelector("#following");
let gitBio = document.querySelector("#git-bio");
let hero = document.querySelector("#hero");
let header = document.querySelector("header");


btnSearch.addEventListener("click", getData);


function getData() {
   
    let searchTerm = inputSearch.value;
    fetch(API_URL + searchTerm, { method: "GET"})
    .then (function (response) {
        return response.json();
    })
    .then (function (data){
      if (data.message==="Not Found") {
        toasti("User not found!");
        return;
      }

      else {
        render(data);
        // hero.style.display = "block";
        changeHeaderStyle();
        
      }
    })



  function render(data) {
    const {avatar_url , hireable, following, followers, location, name, twitter_username, public_repos, bio} = data;
    console.log(data);
    realName.textContent = data.name;
    imgAvatar.src = data.avatar_url;
    isHireable = data.hireable;
    followerNumber.innerHTML =`${data.followers} followers`;
    followingNumber.innerHTML = `${data.following} following`;
    
    if(bio == null){
      gitBio.innerHTML = "No bio!";
      gitBio.className = "git-bio-none"
    }
    else {
      gitBio.innerHTML = data.bio;
      gitBio.className ="git-bio";
    }
    
    if (twitter_username == null){ 
      twitterHandle.innerHTML = `no twitter account`
    }
    else{
      twitterHandle.textContent = `@${twitter_username}`;
    }

} 
};


// toastify 
const toasti = (textValue) => {
  Toastify({
      text: textValue,
      duration: 2000,
      newWindow: true,
      className: "info",
      close: true,
      gravity: "top",
      position: "right",
      onClick: function() {

      }
  }).showToast();
}