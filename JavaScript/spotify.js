// const redirect_uri = "http://127.0.0.1:5500/index.html";

// const client_id = 'd1cadb7f9d424486846a315dd0912b26';
// const client_secret = '79ff839a6b8c4a5fbcb68f06b4d91b5b';

// const AUTHORIZE = "https://accounts.spotify.com/authorize";

// function requestAuthorization(){
//     sessionStorage.setItem("client_id", client_id);
//     sessionStorage.setItem("client_secret", client_secret);
//     let url = AUTHORIZE;
//     url += "?client_id="+client_id;
//     url += "&response_type=code";
//     url += "&redirect_url="+encodeURI(redirect_uri);
//     url += "&show_dialog=true";
//     url +=  "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
//     window.location.href = url;
// }
// requestAuthorization();



// function callApi(method, url, body, callback){
//     let xhr = new XMLHttpRequest();
//     xhr.open(method, url, true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
//     xhr.send(body);
//     xhr.onload = callback;
// }


// setTimeout(() => {document.getElementById('spotify').click();}, 10000);

// will try again later - TO DO
