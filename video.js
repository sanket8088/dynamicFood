var urlId = window.location.search.split("=")[1]
fullUrl = "https://5d76bf96515d1a0014085cf9.mockapi.io/video/" + urlId
var videoTitle = document.getElementById("video-title")
var videoDesc = document.getElementById("para-description")


var apiVideo = new XMLHttpRequest();

apiVideo.onreadystatechange = function () {
    if (apiVideo.readyState == 4) {
        var response = JSON.parse(apiVideo.responseText)
        var vId = response["vimeoId"]
        var title = response["title"]
        var description = response["description"]
        addPlayer(vId, title, description)
    }
}


apiVideo.open("GET", fullUrl, true)

apiVideo.send()


//function for creating video instance

function addPlayer(vId, title, description) {
    var frame = document.getElementById("video-frame")
    frame.src = "https://player.vimeo.com/video/" + vId
    videoTitle.innerText = title
    videoDesc.innerText = description


}