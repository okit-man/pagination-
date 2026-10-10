const paginate = (followers) => {
    const itemsPerPage = 9
    const numbersOfPages = Math.ceil(followers.length / itemsPerPage);
    // console.log(numbersOfPages);
    const newFollowers = Array.from({length: numbersOfPages}, (_, index) => {
        const start = index * itemsPerPage 
        return followers.slice( start, start + itemsPerPage)
    })
    return newFollowers
}

export default paginate
