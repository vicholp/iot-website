const url_arduino = "http://192.168.1.6"
const url_host = "http://192.168.1.5"

const url_beet = "http://192.168.1.5:9000"

const url_qbittorrent = "http://192.168.1.5:8080"
const url_mkv = "http://192.168.1.5:9001"

const beet_port = "9000"

const tmdb_url = "https://api.themoviedb.org/3"

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}


function setBackground(url){
  document.querySelector(".container-fluid").style.backgroundImage = 'url(' + url + ')'
}
