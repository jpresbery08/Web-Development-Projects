const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// Getting main container id
const mainContainer = document.getElementById("main-container");

// create a "for of" loop in order to render out next post when user scrolls down
let oldagramPosts = '';
for (let post of posts){
   oldagramPosts += `
   <div class="container">
   <main>
       <section>
       <!-- UserInfo -->
           <div class="user-info">
               <img id="avatar" src="${post.avatar}"">
               <div class="user">
                   <div id="name">${post.name}</div>
                   <div id="location">${post.location}</div>
               </div>
           </div>
       </section>

       <!-- Post Image -->
       <section>
           <img id="post" src="${post.post}">
       </section>

       <!-- Icons/Like-count/Caption -->
       <section class="section-three">
           <div class="icons">
               <img src="images/icon-heart.png" alt="heart icon where you can leave a like" class="item">
               <img src="images/icon-comment.png" alt="comment icon where comments are made" class="item">
               <img src="images/icon-dm.png" alt="share icon where you can share post" class="item">
           </div>
           <div id="likes-el" class="bold">${post.likes} likes</div>
           <div id="caption-el"><span class="bold">${post.username}</span> ${post.comment}</div>
       </section>
   </main>
</div>
   `
   mainContainer.innerHTML = oldagramPosts;
}



