
import fetchFollower from "./fetchfollowers.js";
import displayFollower from "./displayfollowers.js"
import paginate from "./paginate.js"
const title = document.querySelector(".section-title h1");
const btnContainer = document.querySelector(".btn-container");

let index = 0
let page = []

const init = async () => {
    const followers = await fetchFollower()
    displayFollower(paginate(followers)[0])
    title.textContent = 'Pagination';
    const page = paginate(followers)
    console.log(page);
    
    // console.log(followers);
}

window.addEventListener('load', init())