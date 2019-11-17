const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id)

fetch("http://dredesigns.dk/MyWordpress/wp-json/wp/v2/concerts_theatre_eve/" + id)

    .then(res => res.json())
    .then(showBook)

function showBook(post) {
    console.log(post)

    //not working .. cant get images
    const imgPath = post.image.guid;

    //Shows the title of the post
    document.querySelector("article h1").innerHTML = post.title.rendered

    //Shows the content
    document.querySelector("article p").innerHTML = post.content.rendered

    //shows the image NOT WORKING!
    const img = document.querySelector("div .heroimg")
    img.setAttribute("src", imgPath)
    img.setAttribute("alt","event image" + post.title.rendered)



}



