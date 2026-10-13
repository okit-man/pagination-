
import fetchFollower from "./fetchfollowers.js";
import displayFollower from "./displayfollowers.js"
import paginate from "./paginate.js"
import displayButtons from "./displayButton.js";  
const title = document.querySelector(".section-title h1");
const btnContainer = document.querySelector(".btn-container");

let index = 4
let page = []
const setUpUl = () => {
    displayFollower(page[index])
    displayButtons(btnContainer, page, index)
}

const init = async () => {
    const followers = await fetchFollower()
    // displayFollower(paginate(followers)[3])
    title.textContent = 'Pagination';
    page = paginate(followers)
    // console.log(page); 
    setUpUl()
    
    // console.log(followers);
} 

window.addEventListener('load', init())