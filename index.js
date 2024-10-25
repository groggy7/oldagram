const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zudert, Netherlands",
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
];

const mainSection = document.querySelector(".main");

function renderPosts(posts) {
    posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.className = "post";

        const postHeader = document.createElement("div");
        const postImage = document.createElement("div");
        const iconSection = document.createElement("div");
        const likeSection = document.createElement("div");
        const commentsSection = document.createElement("div");

        postHeader.className = "post-header";
        postImage.className = "post-img";
        iconSection.className = "icon-section";
        likeSection.className = "like-section";
        commentsSection.className = "comments-section";

        postHeader.innerHTML = `
        <div>
            <img src="${post.avatar}" alt="${post.name} avatar" class="post-owner-avatar">
        </div>
        <div class="post-owner-info">
            <p class="post-owner-name">${post.name}</p>
            <p class="post-location">${post.location}</p>
        </div>
        `

        postImage.innerHTML = `<img src="${post.post}" alt="post image" class="post-image">`;

        iconSection.innerHTML = `
        <img src="images/icon-heart.png" alt="like button" class="icon">
        <img src="images/icon-comment.png" alt="comment button" class="icon">
        <img src="images/icon-dm.png" alt="dm button" class="icon">`;

        likeSection.innerText = `${post.likes} likes`

        commentsSection.innerHTML = `
        <span class="post-owner-username">${post.username}</span>
        <span class="comment">${post.comment}</span>
        ` 

        postElement.append(postHeader, postImage, iconSection, likeSection, commentsSection);
        mainSection.append(postElement);
    });
}

renderPosts(posts);

const postImages = document.querySelectorAll(".post-img");

postImages.forEach((postImage) => {
    postImage.addEventListener("dblclick", (event) => {
        reRenderLike(event.target);
    })
});

function reRenderLike() {

}