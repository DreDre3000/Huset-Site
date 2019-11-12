/*DO NOT NEED JS ON THIS PAGE!

/*window.addEventListener("DOMContentLoaded", getData);


function init(){
    preloader.setup();
    getData()
}

function getData(){
    console.log("getData")
   //fetch("http://dredesigns.dk/MyWordpress/wp-json/wp/v2/posts?per_page=2&page=1")
     fetch("http://dredesigns.dk/MyWordpress/wp-json/wp/v2/Films?_embed")
    .then(res=>res.json())
    .then(handleData)
}

function handleData(myData){
// console.log(myData);
// 1 loop
myData.forEach(showPost)
}
function showPost(post){
    console.log(post)
    //2 cloning a template
    const imgPath = post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url;
    const template = document.querySelector(".postTemplate").content;
    const postCopy = template.cloneNode(true);
    //3. textcontent & innerHTML
    const h1 = postCopy.querySelector("h1")
    h1.innerHTML=post.title.rendered;



    const img =postCopy.querySelector("img.cover");
    img.setAttribute("src", imgPath)
    img.setAttribute("alt", "Cover of the Book" +post.title.rendered)


    const a = postCopy.querySelector("a");
    a.href="Sub.html?id="+post.id



    const content = postCopy.querySelector("section")
    content.innerHTML=post.content.rendered;

    const publisher = postCopy.querySelector(".publisher")
    publisher.innerHTML=post.publisher;

    //const contentImage = postCopy.querySelector(".contentImage")
    //content.innerHTML=post._embedded.wp:featuredmedia.source_url;
    //4 append
    document.querySelector("#posts").appendChild(postCopy)
}

//Artistic Profile JS :)




/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "Nav-Bar") {
    x.className += "responsive";
  } else {
    x.className = "Nav-Bar";
  }
}
