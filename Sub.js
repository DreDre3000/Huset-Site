const urlParams =new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id)

fetch("http://dredesigns.dk/MyWordpress/wp-json/wp/v2/Films/"+id)

.then(res=>res.json())
.then(showBook)

function showBook (post){
    console.log(post)
    document.querySelector("article h1").textContent=post.title.rendered
}