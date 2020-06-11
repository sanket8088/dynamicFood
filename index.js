var apiRequest = new XMLHttpRequest();


apiRequest.onreadystatechange = function () {
    if (apiRequest.readyState === 4) {
        var response = JSON.parse(apiRequest.responseText)
        console.log(response)
        for (i in response) {
            createDiv(response[i]["thumbnail"], response[i]["title"], response[i]["id"])
        }

    }
}

apiRequest.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/playlist", true)

apiRequest.send()



// Function for writing a card div

function createDiv(imgSrc, text, cardId) {
    var mainDiv = document.getElementById("main-content")
    var cardDiv = document.createElement("div")
    cardDiv.id = "card_" + cardId
    cardDiv.className = "card"
    var thumbnailWrapper = document.createElement("div")
    thumbnailWrapper.className = "thumbnail-wrapper"
    var imgDiv = document.createElement("img")
    imgDiv.src = imgSrc
    var heading = document.createElement("h3")
    heading.innerText = text
    thumbnailWrapper.appendChild(imgDiv)
    cardDiv.appendChild(thumbnailWrapper)
    cardDiv.appendChild(heading)
    mainDiv.appendChild(cardDiv)

    cardDiv.addEventListener("click", function () {
        var vId = parseInt(cardDiv.id.split("_")[1])
        window.location.href = "video.html?=" + vId
    })



}


