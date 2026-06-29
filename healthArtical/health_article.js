var xhr = new XMLHttpRequest();
var url = './health_article.json';

xhr.open("GET", url, true);
xhr.responseType = 'json';

xhr.onload = function () {
    var articles = xhr.response.articles;
    var divArticles = document.getElementById("articles");
}