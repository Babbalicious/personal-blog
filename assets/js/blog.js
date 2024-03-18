const blogTitle = document.getElementById("blogTitle");
const blogContent = document.getElementById("blogContent");
const postedBy = document.getElementById("postedBy");

blogs = [];

function renderBlogs() {
  blogTitle.textContent = blogs[0].title;
  blogContent.textContent = blogs[0].content;
  postedBy.textContent = blogs[0].username;
}

function init() {
  const storedBlogs = JSON.parse(localStorage.getItem("blogs"));
  if (storedBlogs !== null) {
    blogs = storedBlogs;
  }
  renderBlogs();
}

init();
