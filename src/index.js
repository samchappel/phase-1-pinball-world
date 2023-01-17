gamesUrl = 'http://localhost:3000/games'
const gameList = document.querySelector('.game-list')
const detailImage = document.querySelector('#detail-image')
const detailTitle = document.querySelector('#detail-title')
const detailHighScore = document.querySelector('#detail-high-score')
const gameDetails = document.querySelector('.game-details')
const highScoreForm = document.querySelector('#high-score-form')
let gameArray;

function getAllGames(url) {
    fetch(url)
    .then(response => response.json())
    .then(gamesArray => {
        gameArray = gamesArray
        console.log(gamesArray)
        gamesArray.forEach(renderGames)
        renderFirstGame(gamesArray[0])
    })
}

function renderGames(gameObj) {
    const h5 = document.createElement('h5')
    h5.textContent = gameObj.name + ` (${gameObj.manufacturer_name})`
    gameList.append(h5)
    h5.addEventListener('click', (e) => renderGameDetail(gameObj))
}

function renderFirstGame(gameObj) {
    detailImage.src = gameObj.image 
    detailTitle.textContent = gameObj.name
    detailHighScore.textContent = gameObj.high_score
}

function renderGameDetail(gameObj) {
    detailImage.src = gameObj.image 
    detailTitle.textContent = gameObj.name
    detailHighScore.textContent = gameObj.high_score
}

highScoreForm.addEventListener('submit', (e) => {
    e.preventDefault();
    detailHighScore.textContent = e.target[0].value
    const findArray = gameArray.find(gameObj => gameObj.name === detailTitle.textContent)
    // console.log(findArray)
    findArray.high_score = e.target[0].value;
    // console.log(findArray)
    highScoreForm.reset();
})

getAllGames(gamesUrl)


