function readMore(id) {
    fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=f480dc7`)
        .then(res => res.json())
        .then(film => {
            document.getElementById(`${film.imdbID}-plot`).innerHTML = `
                ${film.Plot} 
                <span class="read-more" onclick="readLess('${film.imdbID}')">
                    Read less
                </span>
                `
        })
}

function readLess(id) {
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=f480dc7`)
        .then(res => res.json())
        .then(film => {
            document.getElementById(`${film.imdbID}-plot`).innerHTML = `
                ${film.Plot} 
                <span class="read-more" onclick="readMore('${film.imdbID}')">
                    Read more
                </span>
                `
        })
}

export {readMore, readLess}