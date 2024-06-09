const posts = [
  {
    image: "https://via.placeholder.com/400x200",
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Tracey Wilson",
    date: "August 20, 2022",
  },
  {
    image: "https://via.placeholder.com/400x200",
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Jason Francisco",
    date: "August 20, 2022",
  },
  {
    image: "https://via.placeholder.com/400x200",
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Elizabeth Slavin",
    date: "August 20, 2022",
  },
  {
    image: "https://via.placeholder.com/400x200",
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Ernie Smith",
    date: "August 20, 2022",
  },
  {
    image: "https://via.placeholder.com/400x200",
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Eric Smith",
    date: "August 20, 2022",
  },
  {
    image: "https://via.placeholder.com/400x200",
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Tracey Wilson",
    date: "August 20, 2022",
  },
  {
    image: "https://via.placeholder.com/400x200",
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Jason Francisco",
    date: "August 20, 2022",
  },
  {
    image: "https://via.placeholder.com/400x200",
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Elizabeth Slavin",
    date: "August 20, 2022",
  },
  {
    image: "https://via.placeholder.com/400x200",
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Ernie Smith",
    date: "August 20, 2022",
  },
];

function createPostCard(post) {
  return `
        <a href="article.html" class="col-md-4 mb-4 text-decoration-none effect">
          <div class="card post-card">
            <img src="${post.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <span class="badge bg-primary mb-2">${post.category}</span>
              <h5 class="card-title fs-5">${post.title}</h5>
              <p class="card-text">
                <small class="" style="color: #97989F">${post.author} - ${post.date}</small>
              </p>
            </div>
          </div>
        </a>
      `;
}

const postContainer = document.getElementById("post-container");
postContainer.innerHTML = posts.map(createPostCard).join("");
