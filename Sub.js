const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id)

fetch("http://dredesigns.dk/MyWordpress/wp-json/wp/v2/concerts_theatre_eve/" + id)

    .then(res => res.json())
    .then(showBook)

function showBook(post) {
    console.log(post)

    //not working .. cant get images
    //const imgPath = post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;

    //Shows the title of the post
    document.querySelector("article h1").innerHTML = post.title.rendered

    //Shows the content
    document.querySelector("section").innerHTML = post.content.rendered

    //shows the image NOT WORKING!
    //const img = document.querySelector("img.cover")
    //img.setAttribute("src", imgPath)
    //img.setAttribute("alt","event image" + post.title.rendered)



}



