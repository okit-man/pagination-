
const displayButton = (container, pages, activeIndex) => {
    console.log(container, pages, activeIndex);  
    let btns = pages.map((_, pageindex) => {
        return `<button class="page-btn ${activeIndex === pageindex? 'active-btn' : 'null'}" data-index="${pageindex}">
        ${pageindex + 1}
        </button>`;
    })
    btns.push(`<button  class="next-btn">next</button>`);
    btns.unshift(`<button class="prev-btn">prev</button>`) 
    container.innerHTML = btns.join("");

}
export default displayButton