const container = document.querySelector(".container");
const display = (followers) => {
    const newFollowers = followers.map((person) => {
        const {avatar_url, login, html_url} = person
        return `
         <article class="profile-block">
                    <img src="${avatar_url}" alt="${html_url}">
                    <h4>${login}</h4>
                    <a href="${html_url}" class="btn">view profile</a>
                </article>
        `
        
    }).join('');
    // console.log(followers);
    container.innerHTML = newFollowers    
}

export default display