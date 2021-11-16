
const movieArr = []
let idx = 1

const showList = () => {
    const target = document.querySelector("#moviesDiv")
    let str = ''

    for (let i = 0; i < movieArr.length; i++) {
        str += `<div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal${i+1}">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/${movieArr[i].poster}" alt="..." />
                        </div>
                    </div>`
    }


    target.innerHTML = str

}
const  addMovie = (movie) => {
    movieArr.idx = idx++
    movieArr.push(movie)
    showList()
}

addMovie({title: '듄', category: 'sf', poster: '01.jpg'})
addMovie({title: '이터널스', category: 'action', poster: '02.jpg'})

document.querySelector(".registerBtn").addEventListener("click", () => {
    const title = document.querySelector('#title').value
    const category = document.querySelector('#category').value
    const poster = document.querySelector('#poster').value

    const movieObj = {title, category, poster}
    addMovie(movieObj)
},false)

const showModal = () => {

}


