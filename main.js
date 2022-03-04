var urlmain = document.URL;
var param = document.URL.split("/")[3].replace("?m=1","").replace("?m=0","");
var dataUrl = [
"https://us.moviespot.xyz/en/movie/",
"https://io.moviespot.xyz/en/movie/",
];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem + param;
