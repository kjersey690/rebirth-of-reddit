/* jshint esversion: 6 */

/*const mainContainer = document.getElementById('main');

let redditReq = new XMLHttpRequest();
function getReddit () {
  let teslaObj = JSON.parse(this.responseText);
  console.log(teslaObj);
}
redditReq.addEventListener('load', getReddit);
redditReq.open('GET', 'https://www.reddit.com/r/Tesla.json', true);
redditReq.send();*/

const imageContainer = document.getElementById('image');

let surfReq = new XMLHttpRequest();

function getSurfingObject (){
  let surfObject = JSON.parse(this.responseText);
  let postArray = surfObject.data.children[1].data.thumbnail;
  let surfImg = document.createElement('img');
  surfImg.id = 'image';
  surfImg.src = postArray;
  imageContainer.appendChild(surfImg);
  console.log(postArray);
}

surfReq.addEventListener('load', getSurfingObject);
surfReq.open('GET', 'https://www.reddit.com/r/surfing.json', true);
surfReq.send();



