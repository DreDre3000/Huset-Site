function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


window.addEventListener("DOMContentLoaded", getData);

function getData() {
    console.log("getData")
    //fetch("http://dredesigns.dk/MyWordpress/wp-json/wp/v2/posts?per_page=2&page=1")
    fetch("http://dredesigns.dk/MyWordpress/wp-json/wp/v2/films?_embed")
        .then(res => res.json())
        .then(handleData)
}

function handleData(myData) {
    // console.log(myData);
    // 1 loop
    myData.forEach(showPost)
}

function showPost(post) {
    console.log(post)
    //2 cloning a template
    const imgPath = post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
    const template = document.querySelector(".postTemplate").content;
    const postCopy = template.cloneNode(true);

    // Venue
    const venue = postCopy.querySelector(".venue")
    venue.innerHTML=post.venue;

    //4 append
    document.querySelector("#posts").appendChild(postCopy)
}

//Artistic Profile JS :)

