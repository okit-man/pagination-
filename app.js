// import all fill to app.js
import fetchFollower from "./fetchfollowers.js";
import displayFollower from "./displayfollowers.js"
import paginate from "./paginate.js"
import displayButtons from "./displayButton.js"; 
//  get DOM document
const title = document.querySelector(".section-title h1");
const btnContainer = document.querySelector(".btn-container");

let index = 0
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

// button function 
btnContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-container')) return

    if (e.target.classList.contains('page-btn')) {
    //   console.log(e.target.dataset.index);
    index = parseInt(e.target.dataset.index);
    }

    if (e.target.classList.contains('next-btn')) {
        index++
        if (index > page.length - 1) {
            index = 0
        }
    }

    if (e.target.classList.contains('prev-btn')) {
        index--
        if (index < 0) {
            index = page.length - 1
        }
    }
    setUpUl()

})

window.addEventListener('load', init)